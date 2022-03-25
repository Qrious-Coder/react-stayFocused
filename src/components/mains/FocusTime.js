import { controlCtnStyles, inputStyles } from "../styles/Styles";
import { upIcon, downIcon } from "../styles/Icons";

const FocusTime = ({ playing, focus, setFocus, setTime })  => {
  
  return(
    <div className={ controlCtnStyles }>
      <h2 id="session-label">Focus</h2>
      <button
        id="session-increment"
        onClick = { () => {
          if(!playing){
            if(focus >=60){
              setFocus(60)
              setTime([60, 0])
            }else if( focus < 60 && focus >=0){
              setTime([focus + 1 , 0])
              setFocus( focus + 1) }
          }else{
            return null;
          }
        }}
      >{upIcon}</button>

      <div id="session-length" 
      className={ inputStyles } > { focus } </div>
      <button
        id="session-decrement"
        onClick = { () => {
          if(!playing){
            if(focus<=0){
              setTime([0, 0])
              setFocus(0)
              
            }else if( focus <= 60 && focus >=0){ 
              setTime([focus - 1 , 0])           
              setFocus(focus - 1) }
              
          }else{
            return null;
          }
        }}
      >{ downIcon }</button>
    </div>
  )
}

export default FocusTime;