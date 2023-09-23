import './App.scss';
import { useState, useEffect } from 'react';



function App() {

  const [time, setTime] = useState(new Date());
  const convertedTime = time.toLocaleTimeString();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

const secondAngle = (time.getSeconds() / 60) * 360 - 90;
const minuteAngle = (time.getMinutes() / 60)  * 360 - 90;
const hourAngle = (time.getHours() / 12 ) * 360 - 90;
const secondHandStyle = {
  transform: `rotate(${secondAngle}deg)`,
};
const minuteHandStyle = {
  transform: `rotate(${minuteAngle}deg)`,
};
const hourHandStyle = {
  transform: `rotate(${hourAngle}deg)`,
};

  return (
    <div className="App">
      <p className="digital">{convertedTime}</p>
      <div className="watch_face">
        <div className="hour a1"></div>
        <div className="hour a2"></div>
        <div className="hour a3"></div>
        <div className="hour a4"></div>
        <div className="hour a5"></div>
        <div className="hour a6"></div>
        <div className="hour a7"></div>
        <div className="hour a8"></div>
        <div className="hour a9"></div>
        <div className="hour a10"></div>
        <div className="hour a11"></div>
        <div className="hour a12"></div>
        <div style={hourHandStyle} className="hours"></div>
        <div style={minuteHandStyle} className="minutes"></div>
        <div style={secondHandStyle} className="seconds"></div>
      </div>
    </div>
  );
}
export default App;
