import React, { useEffect, useState } from 'react'
import UseLocalStorage from '../../hooks/UseLocalStorage'
export default function DarkLightMode() {




    const [theme, setTheme] = UseLocalStorage('setupColorsTheme', 'light-theme')
    
    const toggleTheme = () => {
            if(theme === 'light-theme' ){
            setTheme('dark-theme')
            
            }
        else {
            setTheme('light-theme')
    }

    }
    

    useEffect(() => {
        document.body.className = theme
    })

    useEffect(() => {
        setTheme(theme)
    }, [theme]);


    useEffect(() => {
        document.body.className = theme

    },[theme]);

    return(
        <div onClick={toggleTheme} className="dark-light-theme">
            <img className='dark-mode-element' src="../my-portfolio/assets/img/moon-dark-mode-white.svg" alt="" />
            <img className='light-mode-element' src="../my-portfolio/assets/img/moon-dark-mode.svg" alt="" />
            <span>Dark Mode</span>
        </div>
    )
}