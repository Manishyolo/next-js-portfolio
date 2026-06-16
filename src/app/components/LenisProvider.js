"use client"
import React from 'react'
import useLenisScroll from '../hooks/useLenis'

const LenisProvider = ({children}) => {
    useLenisScroll()
  return <>{children}</>
}

export default LenisProvider