"use client"

import React from 'react'
import { motion } from "framer-motion"

const polygonbackground = () => {

  const polygons = [
    { src: "/img/background/polygon/Rectangle 2.png", initial: {x: -200, opacity: 0, scale: 1, rotation: 45, filter: "blur(14px)"} },
    { src: "/img/background/polygon/Rectangle 2.png", initial: {x: -200, opacity: 0, scale: 0.2, rotation: 29, filter: "blur(8px)"} },
    { src: "/img/background/polygon/Rectangle 2.png", initial: {x: -200, opacity: 0, scale: 1.3, rotation: 21, filter: "blur(0px)"} },
    { src: "/img/background/polygon/Rectangle 2.png", initial: {x: -200, opacity: 0, scale: 0.5, rotation: 9, filter: "blur(1px)"} },
    { src: "/img/background/polygon/Rectangle 3.png", initial: {x: -200, opacity: 0, scale: 2, rotation: 70, filter: "blur(7px)"} },
    { src: "/img/background/polygon/Rectangle 3.png", initial: {x: -200, opacity: 0, scale: 1.2, rotation: 65, filter: "blur(12px)"} },
    { src: "/img/background/polygon/Rectangle 3.png", initial: {x: -200, opacity: 0, scale: 0.3, rotation: 0, filter: "blur(4px)"} },
    { src: "/img/background/polygon/Rectangle 3.png", initial: {x: -200, opacity: 0, scale: 0.8, rotation: 10, filter: "blur(5px)"} },
    { src: "/img/background/polygon/Rectangle 4.png", initial: {x: -200, opacity: 0, scale: 1.8, rotation: 0, filter: "blur(2px)"} },
    { src: "/img/background/polygon/Rectangle 4.png", initial: {x: -200, opacity: 0, scale: 1.4, rotation: 80, filter: "blur(0px)"} },
    { src: "/img/background/polygon/Rectangle 4.png", initial: {x: -200, opacity: 0, scale: 0.2} , rotation: 98, filter: "blur(0px)"},
    { src: "/img/background/polygon/Rectangle 4.png", initial: {x: -200, opacity: 0, scale: 0.5} , rotation: 30, filter: "blur(4px)"}
  ]


  return (
    <div>polygonbackground</div>
  )
}

export default polygonbackground