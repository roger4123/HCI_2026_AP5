"use client"

import { useState, useEffect } from "react"

export default function ActiveQuestHUD() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showNotification, setShowNotification] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const notifTimer = setInterval(() => {
      setShowNotification(prev => !prev)
    }, 5000)
    return () => clearInterval(notifTimer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour12: false })
  }

  return (
    <div className="w-full h-full relative ar-flicker p-4">
      {/* Stats Panel - Top Left */}
      <div className="absolute top-8 left-8">
        <div className="bg-[#36213E]/70 backdrop-blur-sm border border-[#B49FCC]/50 p-3 min-w-[200px]">
          {/* Player info header */}
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#B49FCC]/30">
            <div className="w-10 h-10 border-2 border-[#F4C95D] bg-[#36213E] flex items-center justify-center text-xl">
              ⚔
            </div>
            <div>
              <div className="font-pixel text-[10px] text-[#F4C95D]">SIR_PIXEL</div>
              <div className="font-pixel text-[7px] text-[#B49FCC]">LEVEL 12 WARRIOR</div>
            </div>
          </div>

          {/* HP Bar */}
          <div className="mb-1.5">
            <div className="flex justify-between font-pixel text-[7px] text-white mb-0.5">
              <span>HP</span>
              <span>847/1000</span>
            </div>
            <div className="h-3 bg-[#0B1020] border border-[#B49FCC]/30">
              <div className="h-full bg-gradient-to-r from-red-600 to-red-400" style={{ width: '84.7%' }} />
            </div>
          </div>

          {/* MP Bar */}
          <div className="mb-1.5">
            <div className="flex justify-between font-pixel text-[7px] text-white mb-0.5">
              <span>MP</span>
              <span>320/500</span>
            </div>
            <div className="h-3 bg-[#0B1020] border border-[#B49FCC]/30">
              <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: '64%' }} />
            </div>
          </div>

          {/* XP Bar */}
          <div className="mb-2">
            <div className="flex justify-between font-pixel text-[7px] text-white mb-0.5">
              <span>XP</span>
              <span>2,450/5,000</span>
            </div>
            <div className="h-2 bg-[#0B1020] border border-[#B49FCC]/30">
              <div className="h-full bg-gradient-to-r from-[#F4C95D] to-yellow-300" style={{ width: '49%' }} />
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-1 font-pixel text-[7px]">
            <div className="text-[#B49FCC]">GOLD: <span className="text-[#F4C95D]">1,247</span></div>
            <div className="text-[#B49FCC]">QUESTS: <span className="text-white">3</span></div>
          </div>
        </div>
      </div>

      {/* Quest Marker - Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative animate-marker">
          {/* Marker diamond */}
          <div className="w-14 h-14 border-3 border-[#F4C95D] rotate-45 bg-[#F4C95D]/20 shadow-[0_0_30px_rgba(244,201,93,0.5)]" />
          
          {/* Inner icon */}
          <div className="absolute inset-0 flex items-center justify-center -rotate-0 text-2xl text-[#F4C95D]">
            !
          </div>
          
          {/* Distance indicator */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <div className="font-pixel text-sm text-[#F4C95D] glow-gold">127m</div>
          </div>

          {/* Quest name */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <div className="font-pixel text-[10px] text-white bg-[#36213E]/80 px-3 py-1.5 border border-[#B49FCC]/50">
              THE LOST ARTIFACT
            </div>
          </div>
        </div>
      </div>

      {/* NPC Notification - Bottom Center */}
      {showNotification && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-[#36213E]/90 backdrop-blur-sm border border-[#B49FCC] px-5 py-2 flex items-center gap-3">
            {/* NPC indicator */}
            <div className="w-9 h-9 border-2 border-[#F4C95D] bg-[#36213E] flex items-center justify-center text-lg animate-pulse">
              ☺
            </div>
            <div>
              <div className="font-pixel text-[9px] text-[#F4C95D]">NPC NEARBY</div>
              <div className="font-pixel text-[7px] text-white">MERCHANT GILDAS - 15m</div>
            </div>
            <div className="font-pixel text-[9px] text-[#B49FCC] animate-pulse">
              [INTERACT]
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions - Bottom Right */}
      <div className="absolute bottom-20 right-8">
        <div className="flex gap-2">
          {[
            { icon: "⚔", label: "ATTACK", key: "1" },
            { icon: "🛡", label: "DEFEND", key: "2" },
            { icon: "✧", label: "SKILL", key: "3" },
            { icon: "⬢", label: "ITEM", key: "4" },
          ].map((action) => (
            <button
              key={action.key}
              className="
                w-14 h-14
                bg-[#36213E]/70 backdrop-blur-sm 
                border border-[#B49FCC]/50 
                flex flex-col items-center justify-center gap-0.5
                hover:border-[#F4C95D] hover:bg-[#36213E]
                transition-all duration-200
                hover:shadow-[0_0_15px_rgba(244,201,93,0.3)]
              "
            >
              <span className="text-lg">{action.icon}</span>
              <span className="font-pixel text-[6px] text-[#B49FCC]">{action.label}</span>
              <span className="font-pixel text-[7px] text-[#F4C95D]">[{action.key}]</span>
            </button>
          ))}
        </div>
      </div>

      {/* Compass - Top Center */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <div className="bg-[#36213E]/70 backdrop-blur-sm border border-[#B49FCC]/50 px-5 py-1.5">
          <div className="flex items-center gap-4 font-pixel text-[9px]">
            <span className="text-[#B49FCC]/50">W</span>
            <span className="text-[#B49FCC]/70">NW</span>
            <span className="text-[#F4C95D] text-sm glow-gold">N</span>
            <span className="text-[#B49FCC]/70">NE</span>
            <span className="text-[#B49FCC]/50">E</span>
          </div>
        </div>
      </div>

      {/* Time & System Info - Top Right */}
      <div className="absolute top-8 right-8 text-right">
        <div className="font-pixel text-sm text-[#F4C95D] glow-gold">
          {formatTime(currentTime)}
        </div>
        <div className="font-pixel text-[7px] text-[#B49FCC] mt-1">
          DAY 47 // CLEAR SKIES
        </div>
        <div className="flex items-center gap-1 justify-end mt-1.5">
          <span className="w-1.5 h-1.5 bg-[#50C878] animate-pulse" />
          <span className="font-pixel text-[7px] text-[#B49FCC]">AR SYNC</span>
        </div>
      </div>
    </div>
  )
}
