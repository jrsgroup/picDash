"use client"

import { motion } from "framer-motion"
import type React from "react"

interface FloatingIconProps {
  children: React.ReactNode
  className?: string
}

export const FloatingIcon: React.FC<FloatingIconProps> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}

