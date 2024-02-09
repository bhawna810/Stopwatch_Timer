import React, { useState, useEffect } from 'react';
import '../Styles/stopwatch.css';
import clock from "../assets/images/clock.png";

function Stopwatch() {

const [time, setTime] = useState(0);
 /*const [minutes, setMinutes] = useState(0);
 const [seconds , setSeconds] = useState(0); */

  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="stopwatch">
        <div>
       <h1>Stopwatch</h1>
       <div className='card'>
         <div className='heading' >
            <img src={clock}/>
            <h2 className='timerheading'>Timer</h2>
         </div>
         <div className="numbers">
           <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
           <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
         </div>
         <div className='allbuttons'>
            <button onClick={() => setRunning(true)} className='start'>Start</button>
            <button onClick={() => setRunning(false)} className='stop'>Stop</button>
            <button onClick={() => setTime(0)} className='reset'>Reset</button> 
         </div>
       </div>
     </div>
    </div>
  );
}

export default Stopwatch;
