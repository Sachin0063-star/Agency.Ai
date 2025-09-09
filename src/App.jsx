import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import TrustedBy from './Components/TrustedBy'
import Services from './Components/Services'
import Ourwork from './Components/Ourwork'
import Team from './Components/Team'
import ContactUs from './Components/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './Components/Footer'

const App = () => {
  
  const [theme,setTheme]=useState(()=>{
    return (localStorage.getItem('theme') ? localStorage.getItem('theme') :'light')
  })
  // const dotRef=useRef(null)
  // const outlineRef=useRef(null)

  // // ref for custom cursor  position tracking
  // const mouse=useRef({x:0,y:0})
  //  const position=useRef({x:0,y:0})

  //  useEffect(()=>{
  //   const handlemouse=(e)=>{
  //     mouse.current.x=e.clientX
  //         mouse.current.x=e.clientY
  //         document.addEventListener("mousemove",handlemouse)

  //         const animate=()=>{
  //           position.current.x +=(mouse.current.x - position.current.x) * 0.1
  //                   position.current.y +=(mouse.current.y - position.current.y) * 0.1

  //                   if(dotRef.current && outlineRef.current){
  //                     dotRef.current.style.transform=`translate3d(${mouse.current.x - 6}px ,${mouse.current.y - 6}px,0)`
  //                     outlineRef.current.style.transform=`translate3d(${position.current.x - 20}px ,${position.current.y - 20}px,0)`
  //                   }

  //         }
  //         requestAnimationFrame(animate)

  //   }
  //   animate()
  //   return()=>{
  //     document.removeEventListener('mousemove',handlemouse)
  //   }
  //  })



  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Services/>
      <Ourwork/>
      <Team/>
      <ContactUs/>
      <Footer theme={theme}/>


      {/* costom Cursor Ring */}
      {/* <div ref={outlineRef} className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999] ">


      </div> */}

      {/* custon cursor Dot */}
      {/* <div ref={dotRef} className='fixed top-0 left-0 h-3 rounded-full bg-primary pointer-events-none z-[9999]'></div> */}
    </div>
  )
}

export default App
