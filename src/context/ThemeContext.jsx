import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({
     theme: false,
     toggleTheme: () => {}
})

export default ThemeContext

export function ThemeProvider ({children}) {
     
     const [theme, setTheme] = useState(false)

     useEffect(() => {
          theme ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
     }, [theme])

     const toggleTheme = () => {
          console.log("Bojkdfkls")
          setTheme(!theme)
     }

     return <ThemeContext.Provider value={{
          theme,
          toggleTheme
     }}>
          {children}
     </ThemeContext.Provider>

}