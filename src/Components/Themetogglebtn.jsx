import React, { useEffect } from 'react'
import assets from '../assets/assets'

const Themetogglebtn = ({theme,setTheme}) => {
    useEffect(()=>{
        const preferDarkMode=window.matchMedia('(prefers-color-scheme:dark)').matches;
        setTheme(theme ||(preferDarkMode ? 'dark' : 'light'));

    },[])
    useEffect(()=>{
        if(theme==='dark'){
            document.documentElement.classList.add('dark')
        }else{
                   document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme',theme)
    },[theme])
  return (
    <>
    <button>
        {theme==='dark'?(
<img onClick={() => setTheme('light')} src={assets.sun_icon} className="w-8 h-8 p-1.5 border border-gray-500 rounded-full" alt="Sun icon" />

        ):(
<img onClick={() => setTheme('dark')} src={assets.moon_icon} className="w-8 h-8 p-1.5 border border-gray-500 rounded-full" alt="Moon icon" />
        )}
    </button>
    </>
  )
}

export default Themetogglebtn
