import { controlCtnStyles, inputStyles } from "../styles/Styles";
import { upIcon, downIcon } from "../styles/Icons";

const BrTime = ({ playing, br,setBr })  => {
  return(
    <div className={ controlCtnStyles }>
      <h2 id="break-label">Break</h2>
      <button
        id="break-increment"
        onClick = { () => {
          if(!playing){
            if( br>=60){
              setBr(60);
            }
            else if( br < 60 && br >=0){
              setBr( br + 1) } 
          }else{
            return null;
          }
        }} 
      >{ upIcon }</button>
      <div id="break-length" 
      className={ inputStyles } > { br <=1 ? 1 : br } </div>
      <button
        id="break-decrement"
        onClick = { () => {
          if(!playing){
            if(br<= 0){
              setBr(1);
            }else if( br <= 60 && br > 0){
              setBr( br - 1) } 
          }else{
            return null;
          }
        } } 
      >{ downIcon }</button>
    </div>
  ) 
}

export default BrTime;