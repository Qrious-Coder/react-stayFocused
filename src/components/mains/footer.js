import  github  from "../media/github.png"
import tele from "../media/tele.png"
import whatsapp from "../media/whatsapp.png"
import gmail from "../media/gmail.png"

const Footer =() => { 
  
  return (
    <div className="text-center text-blue-200 m-3 ml-[0px]">
      <p> <small>This project is built with React and Tailwind CSS.</small></p>
      <p><small> View my code on <span style={{ textDecoration: 'underline purple', color:'pink' }}>
        <a href="https://github.com/Qrious-Coder/react-stayFocused.git" 
            rel="noreferrer"
            target="_blank">
            Github</a>
        </span> or drop me your comments at:</small></p>
      <p className="grid grid-cols-4 gap-0 mx-auto place-content-center w-48 my-5">    
        <span className="footerIcon">
          <a href="https://github.com/Qrious-Coder/react-stayFocused.git" 
            rel="noreferrer"
            target="_blank">
            <img src={github} alt="github" width={30} height={30}/>
          </a>
        </span>
        <span className="footerIcon">
          <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=[q81188118@gmail.com]" 
            rel="noreferrer"
            target="_blank">
            <img src={gmail} alt="github" width={30} height={30}/>
          </a>
        </span>
        <span className="footerIcon">
          <a href="https://wa.me/639086471423" 
            rel="noreferrer"
            target="_blank">
            <img src={whatsapp} alt="github" width={30} height={30}/>
          </a>
        </span>
        <span className="footerIcon">
          <a href="https://t.me/Hillary_Duan" 
            rel="noreferrer"
            target="_blank">
            <img src={tele} alt="email" width={30} height={30}/>
          </a>
        </span>
      </p>
      <p><small>Copyright © 2022 Q_coder. All Rights Reserved.</small></p>
    </div>  
  )
}

export default Footer