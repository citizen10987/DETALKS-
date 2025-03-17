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

export const JournalEntry: React.FC = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold dark:text-white">New Journal Entry</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Entry title"
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-lavender dark:bg-gray-700 dark:text-white"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your journal entry here..."
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-lavender dark:bg-gray-700 dark:text-white"
        rows={10}
      />
      <button className="w-full py-3 rounded-lg text-white font-medium" style={{ backgroundColor: COLORS.olive }}>
        Save Entry
      </button>
    </div>
  )
}

