"use client"

import type React from "react"
import { useState } from "react"
import { Calendar } from "lucide-react"

const COLORS = {
  lavender: "#CBA3CB",
  poppy: "#EA7953",
  sunshine: "#E9AB47",
  coconut: "#ECD8B3",
  olive: "#897B30",
  teddy: "#CA8D5C",
}

export const AppointmentBooking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const availableTimes = ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"]

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      alert(`Appointment booked for ${selectedDate} at ${selectedTime}`)
      setSelectedDate("")
      setSelectedTime("")
    } else {
      alert("Please select both date and time")
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold dark:text-white">Book an Appointment</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Select Date
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <Calendar className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Select Time
          </label>
          <select
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="mt-1 block w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            <option value="">Choose a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleBooking}
        className="w-full py-3 rounded-lg text-white font-medium"
        style={{ backgroundColor: COLORS.sunshine }}
      >
        Book Appointment
      </button>
    </div>
  )
}

