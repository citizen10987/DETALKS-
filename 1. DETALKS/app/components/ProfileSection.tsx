"use client"

import { useState } from "react"
import { Bookmark, Bell, Lock, HelpCircle, LogOut, ChevronRight } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"

const COLORS = {
  lavender: "#CBA3CB",
  poppy: "#EA7953",
  sunshine: "#E9AB47",
  coconut: "#ECD8B3",
  olive: "#897B30",
  teddy: "#CA8D5C",
}

export const ProfileSection = () => {
  const [notifications, setNotifications] = useState(true)
  const { theme, toggleTheme } = useTheme()

  const menuItems = [
    { icon: Bookmark, label: "Saved Entries", badge: "12" },
    { icon: Bell, label: "Notifications", toggle: true, value: notifications, onChange: setNotifications },
    { icon: Lock, label: "Privacy Settings" },
    { icon: HelpCircle, label: "Help & Support" },
    { icon: LogOut, label: "Log Out", color: COLORS.poppy },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lavender to-sunshine flex items-center justify-center">
          <span className="text-2xl">👤</span>
        </div>
        <div>
          <h2 className="text-xl font-semibold dark:text-white">Sarah Wilson</h2>
          <p className="text-gray-600 dark:text-gray-400">Member since 2024</p>
          <button className="mt-2 px-4 py-1 rounded-full text-sm" style={{ backgroundColor: COLORS.lavender }}>
            Edit Profile
          </button>
          <button
            onClick={toggleTheme}
            className="mt-2 ml-2 px-4 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-700"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Streak", value: "7 days" },
          { label: "Entries", value: "24" },
          { label: "Sessions", value: "8" },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="p-3 rounded-xl text-center dark:bg-gray-700"
            style={{ backgroundColor: COLORS.coconut }}
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
            <p className="font-semibold">{value}</p>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl" style={{ backgroundColor: COLORS.sunshine }}>
        <h3 className="font-semibold text-white mb-3">Wellness Goals</h3>
        <div className="space-y-3">
          {[
            { goal: "Daily Meditation", progress: 80 },
            { goal: "Mood Tracking", progress: 60 },
            { goal: "Journal Entries", progress: 40 },
          ].map(({ goal, progress }) => (
            <div key={goal} className="bg-white/20 p-3 rounded-lg">
              <div className="flex justify-between text-white mb-2">
                <span>{goal}</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full" style={{ width: `${progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {menuItems.map(({ icon: Icon, label, badge, toggle, value, onChange, color }) => (
          <button
            key={label}
            className="w-full p-4 rounded-xl flex items-center justify-between bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500"
            style={color ? { color: color } : {}}
          >
            <div className="flex items-center space-x-3">
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </div>
            {badge && <span className="px-2 py-1 rounded-full text-xs bg-gray-100">{badge}</span>}
            {toggle ? (
              <div
                className="w-12 h-6 rounded-full relative cursor-pointer transition-colors"
                style={{ backgroundColor: value ? COLORS.lavender : "#e2e8f0" }}
                onClick={(e) => {
                  e.stopPropagation()
                  onChange(!value)
                }}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                    value ? "translate-x-6" : ""
                  }`}
                />
              </div>
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-200" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

