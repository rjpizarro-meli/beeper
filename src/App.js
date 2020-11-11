import { useState } from 'react'
import Beeper from './Beeper';
import 'react-tabs/style/react-tabs.css';
import './App.css';

const i18n = {
  gettext: (str) => str
}

const Button = (props) => {
  return (
    <button {...props} className="button">{props.children}</button>
  )
}

const Container = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
      {props.children}
    </div>
  )
}

const Reference = (props) => (
  <div className="reference">
    {props.button}
    <div className="reference-text">{props.children}</div>
  </div>
)

function App() {
  const [view, changeView] = useState('combined')

  const renderBasicBeeps = (beep, pause, vibrate) => {
    return (
      <Container>
        <Button
          onClick={beep}
          size="large"
        >
          {i18n.gettext('Beep 1: 300ms, volume: 0.5')}
        </Button>
        <br />
        <Button
          onClick={() => beep({ time: 1000 })}
          size="large"
        >
          {i18n.gettext('Beep 2: 1000ms, volume: 0.5')}
        </Button>
        <br />
        <Button
          onClick={() => beep({ time: 2000 })}
          size="large"
        >
          {i18n.gettext('Beep 3: 2000ms, volume: 0.5')}
        </Button>
        <br />
        <Button
          onClick={() => beep({ volume: 1 })}
          size="large"
        >
          {i18n.gettext('Beep 4: 300ms, volume 1')}
        </Button>
        <br />
        <Button
          onClick={() => beep({ volume: 1, sound: 2000 })}
          size="large"
        >
          {i18n.gettext('Beep 5: 300ms, volume 0.5 - sound frequency: 2000')}
        </Button>
        <br />
        <Button
          onClick={() => beep({ volume: 1, sound: 3000 })}
          size="large"
        >
          {i18n.gettext('Beep 6: 300ms, volume 0.5 - sound frequency: 3000')}
        </Button>
        <br />
        <Button
          onClick={vibrate}
          size="large"
        >
          {i18n.gettext('Vibración 1: 1000ms')}
        </Button>
        <br />
        <Button
          onClick={() => vibrate({ pattern: [200, 500, 200] })}
          size="large"
        >
          {i18n.gettext('Vibración 2: 200ms, 200ms')}
        </Button>
        <br />
        <Button
          onClick={() => vibrate({ pattern: [1000, 500, 1500] })}
          size="large"
        >
          {i18n.gettext('Vibración 3: 1000ms, 1500ms')}
        </Button>
        <br />
        <Button
          onClick={() => {
            beep({ time: 2000 })
            vibrate({ pattern: [800, 400, 800] })
          }}
          size="large"
        >
          {i18n.gettext('Combined 1: 2000ms - 2 vibraciones')}
        </Button>
        <br />
        <Button
          onClick={() => {
            beep({ time: 2000 })
            vibrate({ pattern: [2000] })
          }}
          size="large"
        >
          {i18n.gettext('Combined 2: 2000ms - 1 vibracion')}
        </Button>
        <br />
        <Button
          onClick={() => {
            beep({ time: 2000 })
            vibrate({ pattern: [500, 250, 500, 250, 500] })
          }}
          size="large"
        >
          {i18n.gettext('Combined 3: 2000ms - 3 vibraciones')}
        </Button>
      </Container>
    )
  }

  const renderCombinedBeeps = (beep, pause, vibrate) => {
    return (
      <Container>
        <Reference
          button={
            <Button
              onClick={async () => {
                vibrate({ pattern: [2000] })
                await beep({ time: 300, })
                await pause({ time: 75 })
                await beep({ time: 300, })
              }}
            >
              1 vbr + 2 beeps (2000ms)
            </Button>
          }
        >
          <p> Vibrate: 2000ms  </p>
          <p> Beep: 300ms  </p>
          <p> Pause: 75ms  </p>
          <p> Beep: 300ms  </p>
        </Reference>

        <Reference
          button={
            <Button
              onClick={async () => {
                vibrate({ pattern: [1000] })
                await beep({ time: 400, })
                await pause({ time: 200 })
                await beep({ time: 400,  })
              }}
            >
              1 vbr + 2 beeps (1000ms)
            </Button>
          }
        >
          <p> Vibrate: 1000ms  </p>
          <p> Beep: 400ms  </p>
          <p> Pause: 200ms  </p>
          <p> Beep: 400ms  </p>
        </Reference>

        <Reference
          button={
            <Button
              onClick={async () => {
                vibrate({ pattern: [1500] })
                await beep({ time: 650, })
                await pause({ time: 200 })
                await beep({ time: 650,  })
              }}
            >
              1 vbr + 2 beeps (1500ms)
            </Button>
          }
        >
          <p> Vibrate: 1500ms  </p>
          <p> Beep: 650ms  </p>
          <p> Pause: 200ms  </p>
          <p> Beep: 650ms  </p>
        </Reference>

        <Reference
          button={
            <Button
              onClick={async () => {
                beep({ time: 2000, })
                vibrate({ pattern: [800, 400, 800] })
              }}
            >
              2 vbr + 1 beep (2000ms)
            </Button>
          }
        >
          <p> Beep: 2000ms  </p>
          <p> Vibrate: 800ms  </p>
          <p> Pause: 400ms  </p>
          <p> Vibrate: 800ms  </p>
        </Reference>

        <Reference
          button={
            <Button
              onClick={async () => {
                beep({ time: 1500, })
                vibrate({ pattern: [650, 200, 650] })
              }}
            >
              2 vbr + 1 beep (1500ms)
            </Button>
          }
        >
          <p> Beep: 1500ms  </p>
          <p> Vibrate: 650ms  </p>
          <p> Pause: 200ms  </p>
          <p> Vibrate: 650ms  </p>
        </Reference>


        <Reference
          button={
            <Button
              onClick={async () => {
                beep({ time: 1000, })
                vibrate({ pattern: [450, 100, 450] })
              }}
            >
              2 vbr + 1 beep (1000ms)
            </Button>
          }
        >
          <p> Beep: 1500ms  </p>
          <p> Vibrate: 650ms  </p>
          <p> Pause: 200ms  </p>
          <p> Vibrate: 650ms  </p>
        </Reference>
      </Container>
    )
  }

  const renderSoundBeeps = (beep, pause, vibrate) => {
    const frequencies = [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2429, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000]

    return (
      <Container>
        {frequencies.map(sound => (
          <Reference
            button={
              <Button
                onClick={() => beep({ time: 500, sound: sound  })}
              >
                Beep {sound} Mhz
              </Button>
            }
          >
          </Reference>
        ))}
      </Container>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="options-container">
          <Button onClick={() => changeView('basic')}> Basic Examples </Button>
          <Button onClick={() => changeView('combined')}> Vibrate + Beep </Button>
          <Button onClick={() => changeView('sound')}> Beep Sound </Button>
        </div>
        <Beeper>
          { ({ beep, pause, vibrate }) => {
            if (view === 'basic') {
              return renderBasicBeeps(beep, pause, vibrate)
            }

            if (view === 'combined') {
              return renderCombinedBeeps(beep, pause, vibrate)
            }

            if (view === 'sound') {
              return renderSoundBeeps(beep, pause, vibrate)
            }

            return null
          }}
        </Beeper>
      </header>
    </div>
  );
}


export default App;
