"use client"

import type React from "react"
import { useState } from "react"
import { Check, X } from "lucide-react"

const COLORS = {
  lavender: "#CBA3CB",
  poppy: "#EA7953",
  sunshine: "#E9AB47",
  coconut: "#ECD8B3",
  olive: "#897B30",
  teddy: "#CA8D5C",
}

interface Habit {
  id: number
  name: string
  streak: number
  completed: boolean
}

export const HabitTracker: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, name: "Meditate", streak: 5, completed: false },
    { id: 2, name: "Exercise", streak: 3, completed: false },
    { id: 3, name: "Journal", streak: 7, completed: false },
  ])

  const [newHabit, setNewHabit] = useState("")

  const toggleHabit = (id: number) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? { ...habit, completed: !habit.completed, streak: habit.completed ? habit.streak : habit.streak + 1 }
          : habit,
      ),
    )
  }

  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, { id: Date.now(), name: newHabit, streak: 0, completed: false }])
      setNewHabit("")
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold dark:text-white">Habit Tracker</h2>
      <div className="space-y-4">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg shadow"
          >
            <div>
              <h3 className="font-semibold dark:text-white">{habit.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Streak: {habit.streak} days</p>
            </div>
            <button
              onClick={() => toggleHabit(habit.id)}
              className={`p-2 rounded-full ${habit.completed ? "bg-green-500" : "bg-gray-200 dark:bg-gray-600"}`}
            >
              {habit.completed ? <Check className="text-white" /> : <X className="text-gray-500 dark:text-gray-300" />}
            </button>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Add new habit"
          className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={addHabit}
          className="px-4 py-2 rounded-lg text-white font-medium"
          style={{ backgroundColor: COLORS.sunshine }}
        >
          Add
        </button>
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold dark:text-white">
          Trees Planted: {habits.reduce((sum, habit) => sum + habit.streak, 0)}
        </p>
        <div className="flex justify-center mt-2 space-x-1">
          {[
            ...Array(
              Math.min(
                10,
                habits.reduce((sum, habit) => sum + habit.streak, 0),
              ),
            ),
          ].map((_, i) => (
            <span key={i} role="img" aria-label="tree" className="text-2xl">
              🌳
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

