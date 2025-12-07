import React, { createContext, useState, useEffect, useContext} from 'react';
export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isTheme, setTheme] = useState(false);

    useEffect(() =>{
        if (isTheme) {
            document.body.classList.add('dark-mode');
        } else{
            document.body.classList.remove('dark-mode');
        }
    }, [isTheme]);

    const toggleTheme = () =>{
        setTheme((prevMode)  => ! prevMode);
    }
    return(
      <ThemeContext.Provider value={{isTheme, toggleTheme}}>
        {children}
      </ThemeContext.Provider>
    );
}

export const useTheme = () => {
   return useContext(ThemeContext);
  };