import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"

const COLORS = {
  lavender: "#CBA3CB",
  poppy: "#EA7953",
  sunshine: "#E9AB47",
  coconut: "#ECD8B3",
  olive: "#897B30",
  teddy: "#CA8D5C",
}

export const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! I'm your AI assistant. How can I help you today?", isUser: false },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }])
      setInput("")
      // Here you would typically send the message to your AI backend and get a response
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "I'm processing your message. I'll respond shortly.", isUser: false }])
      }, 1000)
    }
  }

  return (
    <div className="space-y-6 h-[calc(100vh-200px)] flex flex-col">
      <h2 className="text-2xl font-bold dark:text-white">AI Chat</h2>
      <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] p-3 rounded-lg ${message.isUser ? "bg-blue-500 text-white" : "bg-white dark:bg-gray-600 dark:text-white"}`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-lavender dark:bg-gray-700 dark:text-white"
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className="p-3 rounded-lg text-white" style={{ backgroundColor: COLORS.poppy }}>
          <Send className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

