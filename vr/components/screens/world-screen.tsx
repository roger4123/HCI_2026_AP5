"use client"

import Image from "next/image"

export default function WorldScreen() {
  const partyMembers = [
    { name: "Elara", role: "Rogue", color: "#50C878", hp: 85, position: "25%" },
    { name: "Thorin", role: "Warrior", color: "#4A90D9", hp: 100, position: "50%" },
    { name: "Aldric", role: "Mage", color: "#B49FCC", hp: 70, position: "75%" },
  ]

  return (
    <div className="w-full h-full relative ar-flicker overflow-hidden">
      {/* Realistic photo background - real people at table with AR goggles */}
      <div className="absolute inset-0">
        <Image
          src="/images/ar-world-background.jpg"
          alt="AR view of players at table with medieval fantasy overlay"
          fill
          className="object-cover"
          priority
        />
        {/* Slight AR tint for cohesion */}
        <div className="absolute inset-0 bg-[#0B1020]/20" />
      </div>

      {/* AR Medieval Castle Overlay - Stone wall edges */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(54,33,62,0.7) 0%, transparent 12%, transparent 88%, rgba(54,33,62,0.7) 100%),
            linear-gradient(to bottom, rgba(54,33,62,0.5) 0%, transparent 15%, transparent 85%, rgba(54,33,62,0.5) 100%)
          `
        }}
      />

      {/* Stone texture overlay on walls */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 48px,
              rgba(100,80,100,0.4) 48px,
              rgba(100,80,100,0.4) 50px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 72px,
              rgba(100,80,100,0.3) 72px,
              rgba(100,80,100,0.3) 74px
            )
          `
        }}
      />

      {/* Animated Torch - Left wall */}
      <div className="absolute left-6 top-1/4">
        <div className="relative">
          {/* Torch bracket */}
          <div className="w-4 h-3 bg-[#3a2820] rounded-t" />
          {/* Torch handle */}
          <div className="w-3 h-16 bg-gradient-to-b from-[#5a4030] to-[#3a2820] mx-auto" />
          {/* Flame container */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            {/* Main flame */}
            <div 
              className="w-8 h-12 bg-gradient-to-t from-[#F4C95D] via-[#ff6b35] to-[#ff4444] rounded-full animate-pulse"
              style={{ filter: 'blur(3px)' }}
            />
            {/* Inner flame */}
            <div 
              className="absolute inset-1 bg-gradient-to-t from-[#fff8e0] via-[#F4C95D] to-transparent rounded-full animate-pulse"
              style={{ animationDelay: '0.2s' }}
            />
            {/* Glow effect */}
            <div 
              className="absolute -inset-12 rounded-full opacity-40 animate-pulse"
              style={{ 
                background: 'radial-gradient(circle, #F4C95D 0%, #ff6b35 25%, transparent 70%)',
                filter: 'blur(15px)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Animated Torch - Right wall */}
      <div className="absolute right-6 top-1/4">
        <div className="relative">
          <div className="w-4 h-3 bg-[#3a2820] rounded-t" />
          <div className="w-3 h-16 bg-gradient-to-b from-[#5a4030] to-[#3a2820] mx-auto" />
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <div 
              className="w-8 h-12 bg-gradient-to-t from-[#F4C95D] via-[#ff6b35] to-[#ff4444] rounded-full animate-pulse"
              style={{ filter: 'blur(3px)', animationDelay: '0.4s' }}
            />
            <div 
              className="absolute inset-1 bg-gradient-to-t from-[#fff8e0] via-[#F4C95D] to-transparent rounded-full animate-pulse"
              style={{ animationDelay: '0.6s' }}
            />
            <div 
              className="absolute -inset-12 rounded-full opacity-40 animate-pulse"
              style={{ 
                background: 'radial-gradient(circle, #F4C95D 0%, #ff6b35 25%, transparent 70%)',
                filter: 'blur(15px)',
                animationDelay: '0.4s'
              }}
            />
          </div>
        </div>
      </div>

      {/* Medieval Banner - Left */}
      <div className="absolute left-16 top-6">
        <div 
          className="w-14 h-24 bg-gradient-to-b from-[#8B0000] to-[#5a0000] border-2 border-[#F4C95D]/40 opacity-80"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[#F4C95D] text-2xl" style={{ textShadow: '0 0 10px #F4C95D' }}>⚔</span>
          </div>
        </div>
        {/* Banner pole */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-4 bg-[#5a4030]" />
      </div>

      {/* Medieval Banner - Right */}
      <div className="absolute right-16 top-6">
        <div 
          className="w-14 h-24 bg-gradient-to-b from-[#36213E] to-[#1a1020] border-2 border-[#B49FCC]/40 opacity-80"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[#B49FCC] text-2xl" style={{ textShadow: '0 0 10px #B49FCC' }}>✦</span>
          </div>
        </div>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-4 bg-[#5a4030]" />
      </div>



      {/* Status Panel - Top Right */}
      <div className="absolute top-6 right-6 z-10">
        <div className="bg-[#36213E]/85 backdrop-blur-sm border border-[#F4C95D]/50 px-4 py-2.5">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 bg-[#50C878] animate-pulse rounded-full" />
            <span className="font-pixel text-[10px] text-[#50C878]">WORLD_SKIN: ACTIVE</span>
          </div>
          <div className="font-pixel text-[7px] text-[#B49FCC]">
            THEME: MEDIEVAL CASTLE
          </div>
          <div className="font-pixel text-[7px] text-white/50 mt-1">
            OVERLAY QUALITY: HIGH
          </div>
        </div>
      </div>

      {/* AR Info - Top Left */}
      <div className="absolute top-6 left-6 z-10">
        <div className="bg-[#0B1020]/70 backdrop-blur-sm border border-[#B49FCC]/30 px-3 py-2">
          <div className="font-pixel text-[9px] text-[#B49FCC] tracking-widest mb-1">
            [ AR_WORLD_VIEW ]
          </div>
          <div className="font-pixel text-lg text-[#F4C95D] glow-gold">
            THE GREAT HALL
          </div>
          <div className="font-pixel text-[7px] text-white/60 mt-1">
            SESSION: ACTIVE // 3 PLAYERS
          </div>
        </div>
      </div>

      {/* Party Status Panel - Bottom Left */}
      <div className="absolute bottom-24 left-6 z-10">
        <div className="bg-[#0B1020]/85 backdrop-blur-sm border border-[#B49FCC]/30 px-4 py-3">
          <div className="font-pixel text-[8px] text-[#B49FCC] mb-2.5">PARTY STATUS</div>
          <div className="flex flex-col gap-2">
            {partyMembers.map((member) => (
              <div key={member.name} className="flex items-center gap-3">
                <div className="w-2.5 h-2.5" style={{ backgroundColor: member.color, boxShadow: `0 0 6px ${member.color}` }} />
                <span className="font-pixel text-[8px] text-white/80 w-14">{member.name}</span>
                <span className="font-pixel text-[7px]" style={{ color: member.color }}>
                  {member.role.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AR Scan Status - Bottom Right */}
      <div className="absolute bottom-24 right-6 z-10">
        <div className="bg-[#0B1020]/85 backdrop-blur-sm border border-[#B49FCC]/30 px-4 py-3">
          <div className="font-pixel text-[8px] text-[#B49FCC] mb-2">AR SCAN</div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-4 h-4 border-2 border-[#50C878] animate-spin" style={{ animationDuration: '3s' }} />
            <span className="font-pixel text-[9px] text-[#50C878]">TRACKING 3 FACES</span>
          </div>
          <div className="font-pixel text-[7px] text-white/50">
            OVERLAY: STABLE
          </div>
          <div className="font-pixel text-[7px] text-white/50">
            LATENCY: 8ms
          </div>
        </div>
      </div>

      {/* AR Corner Brackets */}
      <div className="absolute top-4 left-4 w-14 h-14 border-t-3 border-l-3 border-[#F4C95D]" />
      <div className="absolute top-4 right-4 w-14 h-14 border-t-3 border-r-3 border-[#F4C95D]" />
      <div className="absolute bottom-20 left-4 w-14 h-14 border-b-3 border-l-3 border-[#F4C95D]" />
      <div className="absolute bottom-20 right-4 w-14 h-14 border-b-3 border-r-3 border-[#F4C95D]" />

      {/* Bottom Center - AR System Info */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10">
        <div className="font-pixel text-[7px] text-[#B49FCC]/80 flex items-center gap-4">
          <span>FACE_DETECT: OK</span>
          <span className="text-[#F4C95D]">|</span>
          <span>ROOM_SCAN: 100%</span>
          <span className="text-[#F4C95D]">|</span>
          <span>SKIN_RENDER: ACTIVE</span>
        </div>
      </div>

      {/* Vignette overlay for AR effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(11,16,32,0.5) 100%)'
        }}
      />
    </div>
  )
}
