import { React } from 'react';
import { useState } from 'react';
import { pageStyles, imgCtn, clockStyles, 
  readImg, catImg, mediImg } from './components/styles/Styles';
import { audio } from './components/styles/Audios';
import Timer from './components/mains/Timer';
import Controller from './components/mains/Controller';
import FocusTime from './components/mains/FocusTime';
import BrTime from './components/mains/BrTime';
import Footer from './components/mains/footer';


// Parent Component:
const App = () => {
  const [ focus, setFocus ] = useState(25);
  const [ br, setBr] = useState(5);
  const [[min, sec] , setTime] = useState([ focus, 0 ]);
 
  const [ playing, setPlaying ] = useState(false);
  const [ focusing, setFocusing ] = useState(false);
  const [ breaking, setBreaking ] = useState(false);
  const [ audioPlaying, setAudioPlaying ] = useState(false);

  // console.log('test',min, sec,'br',br, 'focus', focus,'playing:' ,playing, 'focusing :', focusing, 'breaking :', breaking )

    return(
      <div className={ pageStyles }>
        <div className="w-[316px]"> 
          <div id="imgScreen" className={ imgCtn } >
            { focusing && !breaking? readImg : null}     
            { breaking && !focusing? catImg : null}
            { !playing ? mediImg : null}
          </div>
          <div id="keyPad" className={ clockStyles }> 
            <>
              <Timer min={ min} sec={ sec } setTime={ setTime }  
              br={ br } setBr={ setBr }
              focus={focus} setFocus={ setFocus }
              playing={ playing } 
              breaking={ breaking } setBreaking={setBreaking}
              focusing={ focusing } setFocusing={ setFocusing }/>

              <Controller focus={ focus } setFocus={ setFocus }
              setBr={ setBr } setTime={ setTime } 
              playing={ playing } setPlaying={ setPlaying } 
              breaking={ breaking } setBreaking={ setBreaking } 
              focusing={ focusing } setFocusing={ setFocusing }
              audio={audio} audioPlaying={audioPlaying} setAudioPlaying={setAudioPlaying}/>
            </>
            <>
              <FocusTime focus={ focus } setFocus ={ setFocus } min={ min} 
              setTime={ setTime } breaking={ breaking } 
              setBreaking={ setBreaking } playing={playing}/>
            </>
            <>
              <BrTime playing={ playing } br={ br } setBr={ setBr }/>
            </>
          </div>
        </div>
        <Footer />
      </div>
      
    );
}

export default App;
