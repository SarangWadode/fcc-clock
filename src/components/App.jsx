import './App.css';
import { useEffect, useState } from 'react';
import Demo from './Demo'
import { format_time } from '../utils/time_format';

function App() {
  const [breaktime, setBreaktime] = useState(5);
  const [sessiontime, setSessiontime] = useState(25);
  const [timer, setTimer] = useState(25*60);
  const [start, setStart] = useState(false);
  const [session, setSession] = useState('Session');
  const [isSession,setIsSession] = useState(true);


  function handleClick(e){
    if (e.target.id === "break-decrement" && breaktime > 1) {
      setBreaktime(breaktime - 1);
    } else if (e.target.id === "break-increment" && breaktime < 60) {
      setBreaktime(breaktime + 1);
    } else if (e.target.id === "session-decrement" && sessiontime > 1) {
      setSessiontime(sessiontime - 1);
    } else if (e.target.id === "session-increment" && sessiontime < 60) {
      setSessiontime(sessiontime + 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0 && start) {
        setTimer(timer - 1);
      }
    },200)
    return () => clearInterval(interval);
  },[timer,start])

  useEffect(() => {
    setTimer(sessiontime*60);
  },[sessiontime])


  function handleReset() {
    setBreaktime(5);
    setSessiontime(25);
    setStart(false);
    setIsSession(true);
  }

  useEffect(() => {
    setSession(isSession ? 'Session' : 'Break');
  }, [isSession])

  useEffect(() => {
    if( timer === 0 && isSession === true) {
      setTimer(breaktime*60);
      setStart(true);
      setSession('Break');
      setIsSession(false);
    } else if (timer === 0 && isSession === false) {
      setTimer(sessiontime*60);
      setStart(true);
      setSession('Session');
      setIsSession(true);
    }
  },[timer,breaktime,sessiontime,session,isSession])


  return (
    <div className="App">
      <h1>Clock 25 + 5</h1>

      <div className="length-wrapper">
        <Demo click={handleClick} wrapper={"break-len"} label={"break-label"} text={"Break length"} id={"break-length"} length={breaktime} decrement={"break-decrement"} increment={"break-increment"} />
        <Demo click={handleClick} wrapper={"session-len"} label={"session-label"} text={"Session Length"} id={"session-length"} length={sessiontime} decrement={"session-decrement"} increment={"session-increment"} />
      </div>

      <div className="session">
        <div id="timer-label">{session}</div>
        <div id="time-left">{format_time(timer)}</div>
      </div>

      <div className="controls">
        <button id="start_stop" onClick={() => setStart(!start)}>Start</button>
        <button id="reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
