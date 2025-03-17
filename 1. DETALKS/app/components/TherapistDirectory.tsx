"use client"

import type React from "react"
import { useState } from "react"
import { Search } from "lucide-react"

const COLORS = {
  lavender: "#CBA3CB",
  poppy: "#EA7953",
  sunshine: "#E9AB47",
  coconut: "#ECD8B3",
  olive: "#897B30",
  teddy: "#CA8D5C",
}

interface Therapist {
  id: number
  name: string
  specialty: string
  rating: number
}

const therapists: Therapist[] = [
  { id: 1, name: "Dr. Emily Johnson", specialty: "Anxiety", rating: 4.8 },
  { id: 2, name: "Dr. Michael Lee", specialty: "Depression", rating: 4.7 },
  { id: 3, name: "Dr. Sarah Thompson", specialty: "PTSD", rating: 4.9 },
  { id: 4, name: "Dr. David Wilson", specialty: "Relationships", rating: 4.6 },
]

export const TherapistDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("")

  const filteredTherapists = therapists.filter(
    (therapist) =>
      therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedSpecialty === "" || therapist.specialty === selectedSpecialty),
  )

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold dark:text-white">Therapist Directory</h2>
      <div className="flex space-x-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search therapists"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-8 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          <Search className="absolute left-2 top-2.5 text-gray-400" size={20} />
        </div>
        <select
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
          className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        >
          <option value="">All Specialties</option>
          <option value="Anxiety">Anxiety</option>
          <option value="Depression">Depression</option>
          <option value="PTSD">PTSD</option>
          <option value="Relationships">Relationships</option>
        </select>
      </div>
      <div className="space-y-4">
        {filteredTherapists.map((therapist) => (
          <div key={therapist.id} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
            <h3 className="font-semibold dark:text-white">{therapist.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Specialty: {therapist.specialty}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Rating: {therapist.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  )
}

