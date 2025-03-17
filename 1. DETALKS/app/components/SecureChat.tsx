"use client"

import type React from "react"
import { useState } from "react"
import { Send, Lock } from "lucide-react"

const COLORS = {
  lavender: "#CBA3CB",
  poppy: "#EA7953",
  sunshine: "#E9AB47",
  coconut: "#ECD8B3",
  olive: "#897B30",
  teddy: "#CA8D5C",
}

interface Message {
  id: number
  text: string
  sender: "user" | "therapist"
}

export const SecureChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I help you today?", sender: "therapist" },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), text: newMessage, sender: "user" }])
      setNewMessage("")
      // Simulate therapist response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: Date.now(), text: "Thank you for sharing. Can you tell me more about that?", sender: "therapist" },
        ])
      }, 1000)
    }
  }

  return (
    <div className="space-y-6 h-[calc(100vh-200px)] flex flex-col">
      <div className="flex items-center space-x-2">
        <Lock className="text-green-500" size={20} />
        <h2 className="text-2xl font-bold dark:text-white">Secure Chat</h2>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.sender === "user" ? "bg-blue-500 text-white" : "bg-white dark:bg-gray-600 dark:text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className="p-2 rounded-lg text-white" style={{ backgroundColor: COLORS.olive }}>
          <Send className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

