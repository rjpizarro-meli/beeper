import React from 'react'

const BEEPS = {
  ERROR: 2429,
};

class Beeper extends React.Component {

  constructor() {
    super();

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContext();
  }

  /*React.useEffect(() => {

    audioContextRef.current =
  }, []);*/

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
    oscillatorNode.stop(this.audioContext.currentTime + (beepTime * 0.0012));
  };

  vibrate = ({ pattern } = {}) => {
    const vibrationPattern = pattern || 2000;

    window.navigator.vibrate(vibrationPattern);
  };

  render() {
    return this.props.children({ beep: this.beep, vibrate: this.vibrate })
  }
};

Beeper.BEEPS = BEEPS;

export default Beeper
