import { useEffect, useState } from 'react';
import Demo from './Demo'
import { format_time } from '../utils/time_format';
import { Paper, Box, Button, Typography, Stack } from '@mui/material';
import { PauseCircleFilled, PlayArrow } from '@mui/icons-material';

function App() {
  const [breaktime, setBreaktime] = useState(5);
  const [sessiontime, setSessiontime] = useState(25);
  const [timer, setTimer] = useState(25*60);
  const [start, setStart] = useState(false);
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
    const interval = setTimeout(() => {
      if (timer > 0 && start) {
        setTimer(t => t - 1);
      }
    },1000)
    return () => clearTimeout(interval);
  },[timer, start])

  useEffect(() => {
    setTimer(sessiontime*60);
  },[sessiontime])

  function handleReset() {
    const audio = document.querySelector('audio');
    audio.pause();
    audio.currentTime = 0;
    setBreaktime(5);
    setSessiontime(25);
    setStart(false);
    setIsSession(true);
  }


  useEffect(() => {
    const audio = document.querySelector('audio');
    if( timer === 0 && isSession === true) {
      audio.play();
      setTimeout(() => {
        setTimer(breaktime*60);
        setStart(true);
        setIsSession(false);
      }, 1000)
    } else if (timer === 0 && isSession === false) {
      setTimeout(() => {
        setTimer(sessiontime*60);
        setStart(true);
        setIsSession(true);
      }, 1000)
    }
  },[timer,breaktime,sessiontime,isSession])


  return (
    <Paper elevation={9} className="App" 
    sx={{padding: "25px 30px",
    display: "flex", 
    gap: "20px", 
    flexDirection: "column",
    textAlign:'center',
    background: '#90EE90'
    }} >
      <Typography variant='h3' children='Clock 25 + 5' />

      <Stack direction='row' spacing={1} textAlign='center' justifyContent='space-around' className="length-wrapper">
        <Demo click={handleClick} wrapper={"break-len"} label={"break-label"} text={"Break length"} id={"break-length"} length={breaktime} decrement={"break-decrement"} increment={"break-increment"} />
        <Demo click={handleClick} wrapper={"session-len"} label={"session-label"} text={"Session Length"} id={"session-length"} length={sessiontime} decrement={"session-decrement"} increment={"session-increment"} />
      </Stack>

      <Box className="session">
        <div id="timer-label">{isSession?'Session':'Break'}</div>
        <div id="time-left">{format_time(timer)}</div>
      </Box>

      <Stack direction='row' justifyContent='space-around' className="controls">
        <Button
          variant="contained"
          id="start_stop"
          onClick={() => setStart(!start)}
          children={start?'Stop':'Start'}
          startIcon={start? <PauseCircleFilled/> :<PlayArrow />}
        />
        <Button variant='contained' id="reset" onClick={handleReset}>Reset</Button>
        <audio src="./BeepSound.wav" id="beep"></audio>
      </Stack>
    </Paper>
  );
}

export default App;
