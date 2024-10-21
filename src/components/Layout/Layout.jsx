import { useContext } from "react"
import ThemeContext from "../../context/ThemeContext"
import claire from "../../assets/images/Claire-2-mainty.png"
import sombre from "../../assets/images/Sombre-1-mainty.png"

export function Layout ({children}) {
     
     const {theme,toggleTheme} = useContext(ThemeContext)

     return <>
          {children}
          <div className="mode-sombre" onClick={toggleTheme}>
               {!theme && <img src={claire} style={{width:'100%', height:'100%'}} />}
               {theme && <img src={sombre} style={{width:'100%', height:'100%'}} />}
          </div>
     </>
}