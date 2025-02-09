"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const BackgroundShapes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-100/20 to-blue-100/20 blur-3xl"
        animate={{
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 100,
        }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-100/20 to-green-100/20 blur-3xl"
        animate={{
          x: mousePosition.x * -0.1 + 200,
          y: mousePosition.y * -0.1 + 200,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 100,
        }}
      />
    </div>
  )
}

