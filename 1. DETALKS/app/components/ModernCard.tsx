import type React from "react"
import type { LucideIcon } from "lucide-react"

interface ModernCardProps {
  icon: LucideIcon
  label: string
  onClick: () => void
  color: string
  badge?: string
}

export const ModernCard: React.FC<ModernCardProps> = ({ icon: Icon, label, onClick, color, badge }) => (
  <button
    onClick={onClick}
    className="relative p-6 rounded-2xl w-full transition-all hover:scale-102 hover:-translate-y-1 group shadow-md hover:shadow-xl"
    style={{ backgroundColor: color }}
  >
    <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
      <Icon className="w-full h-full" />
    </div>
    <div className="flex items-center space-x-3">
      <div className="p-3 rounded-xl bg-white/20">
        <Icon className="w-6 h-6 text-gray-700" />
      </div>
      <span className="text-lg font-medium text-gray-700">{label}</span>
    </div>
    {badge && (
      <span className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs bg-white/30 text-gray-700 font-medium">
        {badge}
      </span>
    )}
  </button>
)

