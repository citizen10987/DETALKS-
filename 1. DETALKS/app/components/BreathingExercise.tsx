"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const COLORS = {
  lavender: "#CBA3CB",
  poppy: "#EA7953",
  sunshine: "#E9AB47",
  coconut: "#ECD8B3",
  olive: "#897B30",
  teddy: "#CA8D5C",
}

export const BreathingExercise: React.FC = () => {
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale">("inhale")
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 3) {
          setPhase((prevPhase) => {
            if (prevPhase === "inhale") return "hold"
            if (prevPhase === "hold") return "exhale"
            return "inhale"
          })
          return 0
        }
        return prevCount + 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const circleVariants = {
    inhale: { scale: 1.5, transition: { duration: 4 } },
    hold: { scale: 1.5, transition: { duration: 4 } },
    exhale: { scale: 1, transition: { duration: 4 } },
  }

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8">
      <h2 className="text-2xl font-bold dark:text-white">Breathing Exercise</h2>
      <motion.div
        className="w-48 h-48 rounded-full flex items-center justify-center"
        style={{ backgroundColor: COLORS.lavender }}
        variants={circleVariants}
        animate={phase}
      >
        <span className="text-2xl text-white">{phase}</span>
      </motion.div>
      <p className="text-xl dark:text-white">{count + 1}</p>
    </div>
  )
}

