"use client";

import React from 'react'
import{motion}  from "framer-motion"
 
export default function SectionDivider() {
  return (
    <motion.div  initial={{opacity: 0, y: 100}} 
    animate={{ opacity: 1, y : 0 }}  transition={ {delay  : 0.125}} className='bg-gray-200 h-1 mt-28  w-1 rounded-full hidden  sm:block  '>  </motion.div> 
  )
}