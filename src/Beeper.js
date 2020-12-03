import React from 'react'

const BEEPS = {
  ERROR: 1200,
};

class Beeper extends React.Component {

  constructor() {
    super();

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContext();
  }

  beep = ({ time, volume, sound } = {}) => {
    const beepTime = time || 300;
    const beepVolume = volume || 0.5;
    const beepSound = sound || BEEPS.ERROR;
    const oscillatorNode = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillatorNode.connect(gainNode);
    oscillatorNode.frequency.value = beepSound;
    gainNode.connect(this.audioContext.destination);
    gainNode.gain.value = beepVolume;
    oscillatorNode.start(this.audioContext.currentTime);
    oscillatorNode.stop(this.audioContext.currentTime + (beepTime * 0.001));

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, beepTime)
    })
  };

  pause = ({ time } = {}) => {
    const pauseTime = time || 500;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, pauseTime)
    })
  }

  vibrate = ({ pattern } = {}) => {
    const vibrationPattern = pattern || [ 2000 ];
    const vibrationTime = vibrationPattern.reduce((time, accTime ) => {
      return accTime + time
    }, 0 )

    window.navigator.vibrate(vibrationPattern);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, vibrationTime)
    })
  };

  render() {
    return this.props.children({
      beep: this.beep,
      pause: this.pause,
      vibrate: this.vibrate
    })
  }
};

Beeper.BEEPS = BEEPS;

export default Beeper
