"use client"

import { useState, useEffect } from "react"

export default function BootScreen() {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("INITIALIZING AR SYSTEMS")
  const [dots, setDots] = useState("")

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 3
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [])

  useEffect(() => {
    const messages = [
      "INITIALIZING AR SYSTEMS",
      "CALIBRATING REALITY ANCHORS",
      "LOADING QUEST DATABASE",
      "SYNCING PLAYER DATA",
      "ESTABLISHING HUD CONNECTION",
      "SYSTEM READY"
    ]
    
    const messageInterval = setInterval(() => {
      setLoadingText(messages[Math.floor(Math.random() * messages.length)])
    }, 2000)

    return () => clearInterval(messageInterval)
  }, [])

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 4 ? "" : prev + ".")
    }, 400)
    return () => clearInterval(dotsInterval)
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center ar-flicker">
      {/* Logo */}
      <div className="relative mb-12">
        {/* Pixel art logo frame */}
        <div className="relative p-8 border-4 border-[#F4C95D] bg-[#36213E]/50">
          {/* Inner border */}
          <div className="absolute inset-2 border-2 border-[#B49FCC]/50" />
          
          {/* Logo text */}
          <div className="relative z-10 text-center">
            <h1 className="font-pixel text-5xl md:text-6xl text-[#F4C95D] glow-gold tracking-widest">
              AR-PI-GI
            </h1>
            <div className="mt-4 font-pixel text-xs text-[#B49FCC] tracking-[0.3em]">
              REAL LIFE RPG
            </div>
          </div>

          {/* Decorative corners */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#F4C95D]" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#F4C95D]" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#F4C95D]" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#F4C95D]" />
        </div>

        {/* Pixel sword decorations */}
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-[#B49FCC] text-3xl rotate-45">
          ⚔
        </div>
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-[#B49FCC] text-3xl -rotate-45">
          ⚔
        </div>
      </div>

      {/* Loading bar container */}
      <div className="w-80 md:w-96 mb-6">
        {/* Progress bar */}
        <div className="relative h-6 border-2 border-[#B49FCC] bg-[#0B1020]">
          {/* Fill */}
          <div 
            className="h-full bg-gradient-to-r from-[#F4C95D] to-[#B49FCC] transition-all duration-200"
            style={{ width: `${Math.min(loadingProgress, 100)}%` }}
          />
          
          {/* Pixel segments overlay */}
          <div className="absolute inset-0 flex">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="flex-1 border-r border-[#0B1020]/50" />
            ))}
          </div>

          {/* Percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-pixel text-[10px] text-[#0B1020] mix-blend-difference">
              {Math.floor(Math.min(loadingProgress, 100))}%
            </span>
          </div>
        </div>
      </div>

      {/* Loading text */}
      <div className="font-pixel text-[10px] text-[#B49FCC] tracking-wider animate-pulse-glow">
        {loadingText}{dots}
      </div>

      {/* Version info */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 font-pixel text-[8px] text-[#B49FCC]/50">
        v1.0.0 // BUILD 2024.12.01 // AR_HUD_INTERFACE
      </div>

      {/* System status indicators */}
      <div className="absolute top-8 right-8 flex flex-col gap-2 font-pixel text-[8px]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#F4C95D] animate-pulse" />
          <span className="text-[#B49FCC]">AR_LINK: ACTIVE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#B49FCC]" />
          <span className="text-[#B49FCC]">GPS_SYNC: OK</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#F4C95D] animate-pulse" />
          <span className="text-[#B49FCC]">QUEST_DB: LOADING</span>
        </div>
      </div>
    </div>
  )
}
