"use client"

import { useState } from "react"
import { Home, Moon, Calendar, BookOpen, User, MessageCircle, Cloud, Wind, Heart } from "lucide-react"
import { ProfileSection } from "./components/ProfileSection"
import { ModernCard } from "./components/ModernCard"
import { MoodTracker } from "./components/MoodTracker"
import { JournalEntry } from "./components/JournalEntry"
import { CalmingRoom } from "./components/CalmingRoom"
import { AIChat } from "./components/AIChat"
import { BreathingExercise } from "./components/BreathingExercise"
import { HabitTracker } from "./components/HabitTracker"
import { TherapistDirectory } from "./components/TherapistDirectory"
import { AppointmentBooking } from "./components/AppointmentBooking"
import { SecureChat } from "./components/SecureChat"
import { ThemeProvider } from "./contexts/ThemeContext"
import Image from "next/image"

// Updated color palette to match the logo
const COLORS = {
  primary: "#2D2D2D", // Dark brown from logo
  accent: "#4CAF50", // Green from leaf
  lavender: "#E8E4F0",
  poppy: "#FFE0D6",
  sunshine: "#FFF4E4",
  coconut: "#F9F6F0",
  olive: "#E8ECD6",
  teddy: "#F0E6DC",
}

export default function App() {
  const [activePage, setActivePage] = useState("home")
  const [activeTab, setActiveTab] = useState("self-guided")

  const renderContent = () => {
    switch (activePage) {
      case "profile":
        return <ProfileSection />
      case "mood":
        return <MoodTracker />
      case "journal":
        return <JournalEntry />
      case "calming":
        return <CalmingRoom />
      case "chat":
        return <AIChat />
      case "breathing":
        return <BreathingExercise />
      case "habits":
        return <HabitTracker />
      case "therapists":
        return <TherapistDirectory />
      case "appointments":
        return <AppointmentBooking />
      case "secure-chat":
        return <SecureChat />
      default:
        return (
          <div className="space-y-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Welcome back, Sarah</h1>
              <p className="text-gray-600 dark:text-gray-300">How are you feeling today?</p>
            </div>

            <div className="flex justify-between mb-8">
              {["😊", "🙂", "😐", "☹️", "😢"].map((emoji, i) => (
                <button
                  key={i}
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform shadow-md hover:shadow-lg"
                  style={{ backgroundColor: COLORS.lavender }}
                >
                  {emoji}
                </button>
              ))}
            </div>

            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setActiveTab("self-guided")}
                className={`flex-1 py-3 rounded-xl text-center transition-all ${
                  activeTab === "self-guided"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Self-Guided
              </button>
              <button
                onClick={() => setActiveTab("professional")}
                className={`flex-1 py-3 rounded-xl text-center transition-all ${
                  activeTab === "professional"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Professional
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {activeTab === "self-guided" ? (
                <>
                  <ModernCard
                    icon={Moon}
                    label="Track Your Mood"
                    onClick={() => setActivePage("mood")}
                    color={COLORS.lavender}
                    badge="Daily"
                  />
                  <ModernCard
                    icon={Cloud}
                    label="Calming Room"
                    onClick={() => setActivePage("calming")}
                    color={COLORS.sunshine}
                  />
                  <ModernCard
                    icon={BookOpen}
                    label="Journal Entry"
                    onClick={() => setActivePage("journal")}
                    color={COLORS.olive}
                    badge="New"
                  />
                  <ModernCard
                    icon={MessageCircle}
                    label="Talk to AI"
                    onClick={() => setActivePage("chat")}
                    color={COLORS.poppy}
                  />
                  <ModernCard
                    icon={Wind}
                    label="Breathing Exercise"
                    onClick={() => setActivePage("breathing")}
                    color={COLORS.teddy}
                  />
                  <ModernCard
                    icon={Heart}
                    label="Habit Tracker"
                    onClick={() => setActivePage("habits")}
                    color={COLORS.coconut}
                    badge="Plant Trees"
                  />
                </>
              ) : (
                <>
                  <ModernCard
                    icon={User}
                    label="Therapist Directory"
                    onClick={() => setActivePage("therapists")}
                    color={COLORS.lavender}
                  />
                  <ModernCard
                    icon={Calendar}
                    label="Book Appointment"
                    onClick={() => setActivePage("appointments")}
                    color={COLORS.sunshine}
                  />
                  <ModernCard
                    icon={MessageCircle}
                    label="Secure Chat"
                    onClick={() => setActivePage("secure-chat")}
                    color={COLORS.olive}
                    badge="Private"
                  />
                </>
              )}
            </div>
          </div>
        )
    }
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 min-h-screen relative pb-16 shadow-xl">
          {activePage !== "profile" && (
            <header className="px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-gray-700">
              <div className="relative w-36 h-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pixelcut-export-vXpJlevSKSTGFHvBJ6M9DKZ4Zgdl1A.png"
                  alt="Detalks Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <button
                onClick={() => setActivePage("profile")}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </header>
          )}

          <main className="p-6">{renderContent()}</main>

          <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 p-4 max-w-md mx-auto shadow-lg">
            <div className="flex justify-around">
              {[
                { icon: Home, label: "Home" },
                { icon: BookOpen, label: "Journal" },
                { icon: Moon, label: "Mood" },
                { icon: User, label: "Profile" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  onClick={() => setActivePage(label.toLowerCase())}
                  className={`p-2 flex flex-col items-center space-y-1 transition-colors rounded-xl ${
                    activePage === label.toLowerCase()
                      ? "text-primary dark:text-white bg-gray-100 dark:bg-gray-700"
                      : "text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs">{label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </ThemeProvider>
  )
}

