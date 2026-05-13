"use client"

import { useState } from "react"

interface Role {
  id: string
  name: string
  icon: string
  description: string
  stats: {
    str: number
    dex: number
    int: number
    cha: number
  }
  color: string
}

const roles: Role[] = [
  {
    id: "rogue",
    name: "ROGUE",
    icon: "🗡",
    description: "Silent stalker of shadows. Excels in stealth and precision strikes.",
    stats: { str: 6, dex: 10, int: 7, cha: 5 },
    color: "#B49FCC"
  },
  {
    id: "warrior",
    name: "WARRIOR",
    icon: "⚔",
    description: "Unstoppable force on the battlefield. Master of combat and defense.",
    stats: { str: 10, dex: 6, int: 4, cha: 6 },
    color: "#F4C95D"
  },
  {
    id: "mage",
    name: "MAGE",
    icon: "✧",
    description: "Wielder of arcane mysteries. Commands reality through knowledge.",
    stats: { str: 3, dex: 5, int: 10, cha: 7 },
    color: "#7B68EE"
  },
  {
    id: "bard",
    name: "BARD",
    icon: "♪",
    description: "Weaver of tales and songs. Inspires allies and confounds foes.",
    stats: { str: 4, dex: 7, int: 6, cha: 10 },
    color: "#50C878"
  }
]

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [hoveredRole, setHoveredRole] = useState<string | null>(null)

  const StatBar = ({ label, value, maxValue = 10 }: { label: string; value: number; maxValue?: number }) => (
    <div className="flex items-center gap-2">
      <span className="font-pixel text-[8px] text-[#B49FCC] w-8">{label}</span>
      <div className="flex gap-0.5">
        {Array.from({ length: maxValue }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-3 ${i < value ? "bg-[#F4C95D]" : "bg-[#36213E]"}`}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className="w-full h-full flex flex-col items-center justify-start pt-8 pb-20 px-8 ar-flicker overflow-hidden">
      {/* Header */}
      <div className="mb-6 text-center">
        <div className="font-pixel text-[10px] text-[#B49FCC] tracking-widest mb-2">
          [ AR_HUD_INTERFACE // INITIALIZATION ]
        </div>
        <h2 className="font-pixel text-xl md:text-2xl text-[#F4C95D] glow-gold">
          SELECT YOUR CHARACTER SHEET
        </h2>
        <div className="mt-2 font-pixel text-[8px] text-white/60">
          YOUR DESTINY AWAITS, ADVENTURER
        </div>
      </div>

      {/* Role cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => setSelectedRole(role.id)}
            onMouseEnter={() => setHoveredRole(role.id)}
            onMouseLeave={() => setHoveredRole(null)}
            className={`
              relative p-3 md:p-4
              border-2 bg-[#36213E]/60 backdrop-blur-sm
              transition-all duration-300 card-glow
              ${selectedRole === role.id 
                ? "border-[#F4C95D] shadow-[0_0_30px_rgba(244,201,93,0.5)]" 
                : "border-[#B49FCC]/50 hover:border-[#B49FCC]"
              }
            `}
          >
            {/* Selection indicator */}
            {selectedRole === role.id && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-pixel text-[8px] text-[#F4C95D] bg-[#0B1020] px-2">
                SELECTED
              </div>
            )}

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F4C95D]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F4C95D]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#F4C95D]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F4C95D]" />

            {/* Role icon */}
            <div 
              className="text-4xl md:text-5xl mb-3 transition-transform duration-300"
              style={{ 
                filter: selectedRole === role.id ? `drop-shadow(0 0 10px ${role.color})` : 'none',
                transform: hoveredRole === role.id ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              {role.icon}
            </div>

            {/* Role name */}
            <h3 
              className="font-pixel text-sm md:text-base mb-2"
              style={{ color: role.color }}
            >
              {role.name}
            </h3>

            {/* Role description */}
            <p className="font-pixel text-[7px] text-white/70 leading-relaxed mb-4 min-h-[40px]">
              {role.description}
            </p>

            {/* Stats */}
            <div className="space-y-1">
              <StatBar label="STR" value={role.stats.str} />
              <StatBar label="DEX" value={role.stats.dex} />
              <StatBar label="INT" value={role.stats.int} />
              <StatBar label="CHA" value={role.stats.cha} />
            </div>
          </button>
        ))}
      </div>

      {/* AR Overlay text */}
      <div className="mt-4 flex items-center gap-4">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#B49FCC]" />
        <span className="font-pixel text-[7px] text-[#B49FCC]">
          TAP TO SELECT // TAP AGAIN TO CONFIRM
        </span>
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#B49FCC]" />
      </div>

      {/* Confirm button */}
      {selectedRole && (
        <div className="mt-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button className="
            px-6 py-2 border-2 border-[#F4C95D] bg-[#F4C95D]/20
            font-pixel text-xs text-[#F4C95D]
            hover:bg-[#F4C95D] hover:text-[#0B1020]
            transition-all duration-200
            shadow-[0_0_20px_rgba(244,201,93,0.3)]
          ">
            BEGIN ADVENTURE ▶
          </button>
        </div>
      )}
    </div>
  )
}
