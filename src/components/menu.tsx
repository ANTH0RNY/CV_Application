import darkSvg from "../assets/img/nightmode-svgrepo-com.svg"
import lightSvg from "../assets/img/light-mode-svgrepo-com.svg"
// import downloads from "../assets/img/download-file-round-icon.svg"
// import setting from "../assets/img/sliders-icon.svg"
import "../style/menu.scss"

type mainProps = {
    isDark: Boolean,
    setIsDark: Function,
  }

export default function Menu({isDark, setIsDark}: mainProps) {
 return(
 <div className="menu">
    <div className="container">
        {/* <button> */}
            {
                <img role="button" onClick={(_)=> setIsDark()} className="icon" src={isDark ? darkSvg : lightSvg} alt={isDark?"dark mode":"light"} />
            }
        {/* </button> */}
        {/* <img className="download" src={downloads} alt="downloads"/> */}
        {/* <img className="setting" src={setting} alt="settings"/> */}
    </div>
 </div>
 )
}
