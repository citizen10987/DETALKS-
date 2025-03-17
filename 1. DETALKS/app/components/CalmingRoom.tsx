import type React from "react"
import { useState } from "react"
import { Play, Pause, SkipForward, SkipBack } from "lucide-react"

const COLORS = {
  lavender: "#CBA3CB",
  poppy: "#EA7953",
  sunshine: "#E9AB47",
  coconut: "#ECD8B3",
  olive: "#897B30",
  teddy: "#CA8D5C",
}

export const CalmingRoom: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const tracks = [
    { title: "Ocean Waves", duration: "5:30" },
    { title: "Forest Sounds", duration: "4:45" },
    { title: "Gentle Rain", duration: "6:15" },
    { title: "Soft Piano", duration: "3:50" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold dark:text-white">Calming Room</h2>
      <div
        className="aspect-video rounded-lg flex items-center justify-center"
        style={{ backgroundColor: COLORS.sunshine }}
      >
        <span className="text-6xl">🏞️</span>
      </div>
      <div className="space-y-4">
        {tracks.map((track, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-100 dark:bg-gray-700">
            <div>
              <p className="font-medium dark:text-white">{track.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{track.duration}</p>
            </div>
            <button className="p-2 rounded-full" style={{ backgroundColor: COLORS.lavender }}>
              <Play className="w-5 h-5 text-white" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <button className="p-3 rounded-full bg-gray-200">
          <SkipBack className="w-6 h-6" />
        </button>
        <button
          className="p-4 rounded-full"
          style={{ backgroundColor: COLORS.sunshine }}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white" />}
        </button>
        <button className="p-3 rounded-full bg-gray-200">
          <SkipForward className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

