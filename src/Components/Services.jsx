import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react';
import { tr } from 'motion/react-client';

const Services = () => {
  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.ads_icon,
    },
    {
      title: 'Content Marketing',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.marketing_icon,
    },
    {
      title: 'Content Writing',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.content_icon,
    },
    {
      title: 'Social Media',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.social_icon,
    },
  ]

  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{once:true}}
    transition={{staggerChildren:0.2}}
      id='services'
      className='relative scroll-mt-20 flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white'
    >
      <img
        src={assets.bgImage2}
        alt=''
        className='absolute -top-28 -left-20 -z-10 dark:hidden'
      />

      <Title
        title='How Can We Help?'
        descrip='From strategy to execution, we craft digital solutions that move your business forward.'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default Services
