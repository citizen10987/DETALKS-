import type React from "react"
import { useState } from "react"

const COLORS = {
  lavender: "#CBA3CB",
  poppy: "#EA7953",
  sunshine: "#E9AB47",
  coconut: "#ECD8B3",
  olive: "#897B30",
  teddy: "#CA8D5C",
}

export const MoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [note, setNote] = useState("")

  const moods = [
    { emoji: "😊", label: "Happy" },
    { emoji: "🙂", label: "Good" },
    { emoji: "😐", label: "Okay" },
    { emoji: "☹️", label: "Sad" },
    { emoji: "😢", label: "Upset" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold dark:text-white">How are you feeling today?</h2>
      <div className="flex justify-between">
        {moods.map(({ emoji, label }) => (
          <button
            key={label}
            onClick={() => setSelectedMood(label)}
            className={`w-16 h-16 rounded-full flex flex-col items-center justify-center text-xl transition-transform ${
              selectedMood === label ? "scale-110 ring-2 ring-offset-2" : "hover:scale-105"
            }`}
            style={{ backgroundColor: COLORS.lavender, ringColor: COLORS.poppy }}
          >
            <span>{emoji}</span>
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note about your mood..."
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-lavender dark:bg-gray-700 dark:text-white"
        rows={4}
      />
      <button className="w-full py-3 rounded-lg text-white font-medium" style={{ backgroundColor: COLORS.poppy }}>
        Save Mood
      </button>
    </div>
  )
}

