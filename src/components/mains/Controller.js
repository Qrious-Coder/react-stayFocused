import { useEffect } from 'react';
import { controlCtnStyles } from '../styles/Styles'
import { stopIcon, pauseIcon, playIcon, 
  resetIcon, volOffIcon, volOnIcon } from '../styles/Icons'


const Controller = ( {setBr,
  focus, setFocus, 
  playing, setPlaying, setTime, 
  focusing, setFocusing, setBreaking, 
  audio, audioPlaying, setAudioPlaying})  => {

  useEffect(()=>{
    audioPlaying ? audio.play() : audio.pause()
  }, [audioPlaying])

  useEffect(()=>{
    audio.addEventListener('ended', () => setAudioPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setAudioPlaying(false))
    }
  },[])

  return(
    <div className={ controlCtnStyles }>
      <button 
        id="start_stop"
        onClick={ () => {
        setPlaying(!playing)
        setFocusing(!focusing)
        setAudioPlaying(false)
        } }>
        { playing ? pauseIcon : playIcon}
      </button>
      <button 
        id="restart"
        onClick={ () => {
        setTime([ focus, 0 ])
        setPlaying(false)
        setFocusing(false)
        setBreaking(false)
        setAudioPlaying(false)
      }}> 
        { stopIcon } 
      </button>
      <button 
        id="reset"
        onClick={ () => {
        setFocus(25)
        setBr(5)
        setTime([ 25, 0 ])
        setPlaying(false)
        setFocusing(false)
        setBreaking(false)
        setAudioPlaying(false)
      }}> 
        { resetIcon } 
      </button>
      <button onClick={ () => setAudioPlaying(!audioPlaying)}>
        {audioPlaying ? volOffIcon : volOnIcon}
      </button>
    </div>
  )
}

export default Controller;