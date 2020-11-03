import Beeper from './Beeper';
import './App.css';

const i18n = {
  gettext: (str) => str
}

const Button = (props) => {
  return (
    <button {...props} className="button">{props.children}</button>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Beeper>
          {({beep, vibrate}) => {

            return (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                  {i18n.gettext('Vibración 2: 200ms, 500ms, 200ms')}
                </Button>
                <br />
                <Button
                  onClick={() => vibrate({ pattern: [1000, 1500] })}
                  size="large"
                >
                  {i18n.gettext('Vibración 3: 1000ms, 1500ms')}
                </Button>
              </div>
            )
          }}
        </Beeper>
      </header>
    </div>
  );
}

export default App;
