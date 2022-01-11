import './App.css';
import { useState } from 'react';
import Demo from './Demo'
 
function App() {
  const [time , setTime] = useState({
    break: 5,
    session: 25,
    timer: 1500,
  })

  function handleClick(e){
    if (e.target.id === "break-decrement" && time.break > 0) {
      setTime({
        ...time,
        break: time.break-1
      })
    } else if (e.target.id === "break-increment" && time.break < 60) {
      setTime({
        ...time,
        break: time.break+1
      })
    } else if (e.target.id === "session-decrement" && time.session > 0) {
      setTime({
        ...time,
        session: time.session-1
      })
    } else if (e.target.id === "session-increment" && time.session < 60) {
      setTime({
        ...time,
        session: time.session+1
      })
    }
  }

  return (
    <div className="App">
      <h1>Clock 25 + 5</h1>

      <div className="length-wrapper">
        <Demo click={handleClick} wrapper={"break-len"} label={"break-label"} text={"Break length"} id={"break-length"} length={time.break} decrement={"break-decrement"} increment={"break-increment"} />
        <Demo click={handleClick} wrapper={"session-len"} label={"session-label"} text={"Session Length"} id={"session-length"} length={time.session} decrement={"session-decrement"} increment={"session-increment"} />
      </div>

      <div className="session">
        <div id="timer-label">Session</div>
        {/* <div id="time-left">25:00</div> */}
      </div>

      <div className="controls">
        <button id="start_stop">Start</button>
        <button id="reset">Reset</button>
      </div>
    </div>
  );
}

export default App;
