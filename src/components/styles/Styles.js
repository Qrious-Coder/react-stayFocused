import lotusPose from '../media/lotusPose.png';
import cat from '../media/cat.png'
import reading from '../media/reading.png'
import { arrowIcon } from './Icons'; 
//Style components
export const pageStyles = "w-full h-screen grid grid-row-2 bg-gradient-to-b from-blue-500 via-purple-300 to-blue-900 flex justify-center items-center";
export const imgCtn = "px-20 py-2 my-5 bg-violet-400 rounded-xl overflow-hidden shadow-lg justify-self-center"
export const clockStyles = "container grid grid-rows-2 gap-2 bg-indigo-700 rounded-xl overflow-hidden shadow-lg p-4 max-w-sm divide-y divide-slate-400/25";
export const screenStyles = "h-24 grid grid-row-2 justify-center items-center text-center bg-gray-300 rounded-sm py-2";
export const inputStyles = "content-center hover:bg-inherit text-center text-2xl bg-inherit"
export const controlCtnStyles = "grid grid-cols-4 items-center text-purple-200"

//Img
export const mediImg = <div className="w-auto text-center">
  <img className="h-48 w-48" src={lotusPose} alt="break" />
  <span className="gg-font  text-blue-900">Time your </span>
  <span className="glow gg-font">focus</span>
  <span className="text-purple-800 pt-10"><small>{ arrowIcon }</small></span>
</div>


export const readImg = <div className="w-auto text-center">
  <img className="h-48 w-48" src={ reading } alt="focus" /> 
  <span className="text-blue-500"><small>Calm and focused!</small></span>
</div>

export const catImg = <div className="w-auto text-center">
  <img className="h-48 w-48" src={ cat } alt="focus" />
  <span className="text-blue-500"><small>Stretch and chill!</small></span>
</div>

