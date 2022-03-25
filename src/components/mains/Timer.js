import { useEffect } from "react";
import { chime } from "../styles/Audios";
import { screenStyles } from "../styles/Styles";

const Timer = ({ min, sec, setTime, playing, 
  focus, breaking, setBreaking, 
  focusing, setFocusing}) => {

  const tick = () => {
    if(playing === false){
      if (min === 0 && sec === 0){
        setTime([ focus, sec ])
      } 
    }else{
      if(focusing ===true){
        if(min !== 0 && min > 0){
          if(sec === 0){
            setTime([min-1, 59 ])
          }else{
            setTime([min, sec - 1])
          }
        }

        if(min <= 0){
          if(sec === 0){
            setTime([ 0, 59 ]) 
            setFocusing(!focusing)
            setBreaking(!breaking)
            chime.play()
          }else{
            setTime([0, sec - 1])
          }
        }
      }

      if(breaking === true){
        if(min !== 0 && min > 0){
          if (sec === 0){
            setTime([ min-1, 59 ]) 
          }else {
            setTime([ min, sec -1 ])
          }
        }

        if(min <= 0){
          if(focus !== 0){
            if(sec === 0){ 
              setTime([ 0 , 59 ]) 
              setFocusing(!focusing)
              setBreaking(!breaking)
              chime.play()
            }else{
              setTime([0, sec - 1])
            }
          }else{
            if(sec === 0){ 
              setTime([ 0 , 59 ]) 
              chime.play()
            }else{
              setTime([0, sec - 1])
            }
          }
        }
      }

    }
  } 
  

  //[]: only run once
  useEffect(() => {
    if(!playing) return;
    const interval = setInterval(() => tick(), 1000);
    return () => clearInterval(interval);
  },);

  return (
    <div id="time-left" className={screenStyles} >
      <div className='text-purple-500 text-4xl'>
        <span id="min">
        {min.toString().padStart(2, '0')}:
        </span>
        <span id="sec">
        {sec.toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

export default Timer;