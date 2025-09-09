import React, { useState } from 'react';
import assets from '../assets/assets';
import Themetogglebtn from './Themetogglebtn';
import { motion } from 'motion/react';


const Navbar = ({ theme, setTheme }) => {
  const[sidebarOpen,setsidebaropen]=useState(false)
  return (
 <motion.div 
 
  initial={{opacity:0 ,y: -50}}
  animate={{opacity:1,y:0}}
  transition={{duration:0.6,ease:'easeOut'}}
  className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>

      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        className='w-32 sm:w-40'
        alt='Logo'
      />



      <div className={`text-gray-700 dark:text-white sm:text-sm
    ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'}
    max-sm:fixed top-0 bottom-0 right-0
    max-sm:min-h-screen max-sm:h-full max-sm:flex-col
    max-sm:bg-white dark:max-sm:bg-gray-900
    max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

      <img src={assets.close_icon} 
      alt=''
     className="w-5 absolute right-4 top-4 sm:hidden hover:text-blue-500 dark:hover:text-yellow-400" 
     onClick={()=>setsidebaropen(false)} />

        <a onClick={()=>setsidebaropen(false)} href="#" className='sm:hover:border-b hover:text-blue-500 dark:hover:text-yellow-400'>Home</a>
        <a onClick={()=>setsidebaropen(false)} href="#services" className='sm:hover:border-b hover:text-blue-500 dark:hover:text-yellow-400'>Services</a>
        <a onClick={()=>setsidebaropen(false)}  href="#our-work" className='sm:hover:border-b hover:text-blue-500 dark:hover:text-yellow-400'>Our Work</a>
        <a onClick={()=>setsidebaropen(false)}  href="#Contact-Us" className='sm:hover:border-b  hover:text-blue-500 dark:hover:text-yellow-400'>Contact Us</a>
      </div>




    <div  className='flex items-center gap-2 sm:gap-4'>
      <Themetogglebtn theme={theme} setTheme={setTheme} />
      <img src={theme==='dark'? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={()=>setsidebaropen(true)} className='w-8 sm:hidden'/>

<a href="#" className='text-sm max-sm:hidden flex cursor-pointer hover:scale-105 transition-all text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-yellow-400'>
    Connect <img src={assets.arrow_icon} width={14} alt="Arrow icon"  />
</a>
    </div>
    </ motion.div>
  );
};

export default Navbar;
