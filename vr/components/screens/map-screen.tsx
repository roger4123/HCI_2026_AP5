"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

 export default function MapScreen() {
   const [voiceText, setVoiceText] = useState("")
const fullText = 'Alexandru: "Move my character closer to the dragon!"'
  
   useEffect(() => {
     let index = 0
     const interval = setInterval(() => {
       if (index <= fullText.length) {
         setVoiceText(fullText.slice(0, index))
         index++
       } else {
         clearInterval(interval)
       }
     }, 50)
     return () => clearInterval(interval)
   }, [])

  const partyMembers = [
    { name: "Elara", role: "Rogue", hp: 85, color: "#50C878", steps: "5 Steps" },
    { name: "Thorin", role: "Warrior", hp: 100, color: "#4A90D9", steps: "10 Steps" },
    { name: "Aldric", role: "Mage", hp: 65, color: "#B49FCC", steps: "10 Steps" },
  ]

  return (
    <div className="w-full h-full relative ar-flicker overflow-hidden">
      {/* Background: Holographic battlefield on wooden table */}
      <div className="absolute inset-0">
        <Image
          src="/images/holographic-battlefield.jpg"
          alt="Holographic tactical battlefield"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better HUD visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/60 via-transparent to-[#0B1020]/40" />
      </div>

      {/* Holographic edge glow effect - bottom */}
      <div 
        className="absolute bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(0,255,170,0.15) 0%, transparent 60%)',
          filter: 'blur(30px)'
        }}
      />

      {/* Party HP Bars - Top Left */}
      <div className="absolute top-6 left-6 z-10">
        <div className="bg-[#0B1020]/90 backdrop-blur-sm border border-[#B49FCC]/40 p-4">
          <div className="font-pixel text-[9px] text-[#B49FCC] tracking-widest mb-3">
            [ PARTY_STATUS ]
          </div>
          
          <div className="flex flex-col gap-3">
            {partyMembers.map((member) => (
              <div key={member.name} className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-4">
                  <span 
                    className="font-pixel text-[9px]"
                    style={{ color: member.color, textShadow: `0 0 6px ${member.color}` }}
                  >
                    {member.name}
                  </span>
                  <span className="font-pixel text-[7px] text-white/60">
                    {member.hp}/100
                  </span>
                </div>
                <div className="w-28 h-2 bg-[#0B1020] border border-white/20">
                  <div 
                    className="h-full transition-all duration-500"
                    style={{ 
                      width: `${member.hp}%`,
                      backgroundColor: member.hp > 50 ? '#50C878' : member.hp > 25 ? '#F4C95D' : '#ff4444',
                      boxShadow: `0 0 4px ${member.hp > 50 ? '#50C878' : member.hp > 25 ? '#F4C95D' : '#ff4444'}`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status - Top Right */}
      <div className="absolute top-6 right-6 z-10">
        <div className="bg-[#36213E]/90 backdrop-blur-sm border border-[#B49FCC]/50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-[#00ffaa] animate-pulse rounded-full" />
            <span className="font-pixel text-[10px] text-[#00ffaa]">MAP_SYNC: ACTIVE</span>
          </div>
          <div className="h-px bg-[#B49FCC]/30 my-2" />
          <div className="font-pixel text-[9px] text-[#F4C95D]">
            TURN: Alexandru
          </div>
          <div className="font-pixel text-[7px] text-white/50 mt-1">
            COMBAT ROUND 7
          </div>
        </div>
      </div>

      {/* Floating character labels overlaid on the holographic map */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* Elara label - positioned left area of battlefield */}
        <div 
          className="absolute animate-in fade-in duration-500"
          style={{ left: '-180px', top: '20px' }}
        >
          <div className="flex flex-col items-center gap-1">
            <div 
              className="bg-[#0B1020]/95 border-2 border-[#50C878] px-3 py-1.5"
              style={{ boxShadow: '0 0 15px rgba(80,200,120,0.4)' }}
            >
              <div className="font-pixel text-[10px] text-[#50C878] text-center" style={{ textShadow: '0 0 8px #50C878' }}>
                Elara
              </div>
            </div>
            <div className="font-pixel text-[8px] text-[#50C878] bg-[#0B1020]/80 px-2 py-0.5">
              5 Steps
            </div>
          </div>
        </div>

        {/* Thorin label - positioned center-left of battlefield */}
        <div 
          className="absolute animate-in fade-in duration-500"
          style={{ left: '-60px', top: '-60px', animationDelay: '100ms' }}
        >
          <div className="flex flex-col items-center gap-1">
            <div 
              className="bg-[#0B1020]/95 border-2 border-[#4A90D9] px-3 py-1.5"
              style={{ boxShadow: '0 0 15px rgba(74,144,217,0.4)' }}
            >
              <div className="font-pixel text-[10px] text-[#4A90D9] text-center" style={{ textShadow: '0 0 8px #4A90D9' }}>
                Thorin
              </div>
            </div>
            <div className="font-pixel text-[8px] text-[#4A90D9] bg-[#0B1020]/80 px-2 py-0.5">
              10 Steps
            </div>
          </div>
        </div>

        {/* Aldric label - positioned center of battlefield */}
        <div 
          className="absolute animate-in fade-in duration-500"
          style={{ left: '80px', top: '40px', animationDelay: '200ms' }}
        >
          <div className="flex flex-col items-center gap-1">
            <div 
              className="bg-[#0B1020]/95 border-2 border-[#B49FCC] px-3 py-1.5"
              style={{ boxShadow: '0 0 15px rgba(180,159,204,0.4)' }}
            >
              <div className="font-pixel text-[10px] text-[#B49FCC] text-center" style={{ textShadow: '0 0 8px #B49FCC' }}>
                Aldric
              </div>
            </div>
            <div className="font-pixel text-[8px] text-[#B49FCC] bg-[#0B1020]/80 px-2 py-0.5">
              10 Steps
            </div>
          </div>
        </div>

        {/* Enemy 1 label - positioned right area */}
        <div 
          className="absolute animate-in fade-in duration-500"
          style={{ left: '200px', top: '-40px', animationDelay: '300ms' }}
        >
          <div 
            className="bg-[#0B1020]/95 border-2 border-[#ff4444] px-3 py-1.5"
            style={{ boxShadow: '0 0 15px rgba(255,68,68,0.4)' }}
          >
            <div className="font-pixel text-[10px] text-[#ff4444] text-center" style={{ textShadow: '0 0 8px #ff4444' }}>
              Enemy
            </div>
          </div>
        </div>

        {/* Enemy 2 label - positioned far right */}
        <div 
          className="absolute animate-in fade-in duration-500"
          style={{ left: '160px', top: '100px', animationDelay: '400ms' }}
        >
          <div 
            className="bg-[#0B1020]/95 border-2 border-[#ff4444] px-3 py-1.5"
            style={{ boxShadow: '0 0 15px rgba(255,68,68,0.4)' }}
          >
            <div className="font-pixel text-[10px] text-[#ff4444] text-center" style={{ textShadow: '0 0 8px #ff4444' }}>
              Enemy
            </div>
          </div>
        </div>

        {/* Dotted movement lines SVG overlay */}
        <svg 
          className="absolute pointer-events-none" 
          width="500" 
          height="300" 
          style={{ left: '-250px', top: '-120px' }}
        >
          {/* Elara to Enemy 1 */}
          <line 
            x1="70" y1="140"
            x2="450" y2="80"
            stroke="#50C878"
            strokeWidth="2"
            strokeDasharray="8 6"
            opacity="0.7"
          />
          {/* Thorin to Enemy 1 */}
          <line 
            x1="190" y1="60"
            x2="450" y2="80"
            stroke="#4A90D9"
            strokeWidth="2"
            strokeDasharray="8 6"
            opacity="0.7"
          />
          {/* Aldric to Enemy 2 */}
          <line 
            x1="330" y1="160"
            x2="410" y2="220"
            stroke="#B49FCC"
            strokeWidth="2"
            strokeDasharray="8 6"
            opacity="0.7"
          />
        </svg>
      </div>
      

      {/* AR corner brackets */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#00ffaa]" style={{ boxShadow: '0 0 10px rgba(0,255,170,0.3)' }} />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#00ffaa]" style={{ boxShadow: '0 0 10px rgba(0,255,170,0.3)' }} />
      <div className="absolute bottom-20 left-4 w-12 h-12 border-b-2 border-l-2 border-[#00ffaa]" style={{ boxShadow: '0 0 10px rgba(0,255,170,0.3)' }} />
      <div className="absolute bottom-20 right-4 w-12 h-12 border-b-2 border-r-2 border-[#00ffaa]" style={{ boxShadow: '0 0 10px rgba(0,255,170,0.3)' }} />

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
    </div>
  )
}
