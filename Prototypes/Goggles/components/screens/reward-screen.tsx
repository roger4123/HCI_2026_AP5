"use client"

import { useState, useEffect } from "react"

interface Reward {
  type: "item" | "gold" | "xp"
  name: string
  value: string
  icon: string
  rarity?: "common" | "rare" | "epic" | "legendary"
}

const rewards: Reward[] = [
  { type: "xp", name: "Experience Points", value: "+2,500 XP", icon: "★" },
  { type: "gold", name: "Gold Coins", value: "+350 Gold", icon: "◆" },
  { type: "item", name: "Ancient Medallion", value: "Quest Item", icon: "⬢", rarity: "epic" },
  { type: "item", name: "Health Potion x3", value: "Consumable", icon: "♦", rarity: "common" },
]

export default function RewardScreen() {
  const [showRewards, setShowRewards] = useState(false)
  const [currentRewardIndex, setCurrentRewardIndex] = useState(-1)
  const [xpProgress, setXpProgress] = useState(49)
  const [showLevelUp, setShowLevelUp] = useState(false)

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setShowRewards(true)
    }, 500)
    return () => clearTimeout(initialDelay)
  }, [])

  useEffect(() => {
    if (showRewards && currentRewardIndex < rewards.length - 1) {
      const timer = setTimeout(() => {
        setCurrentRewardIndex(prev => prev + 1)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [showRewards, currentRewardIndex])

  useEffect(() => {
    if (currentRewardIndex === rewards.length - 1) {
      const xpTimer = setTimeout(() => {
        setXpProgress(99)
        setTimeout(() => {
          setShowLevelUp(true)
        }, 1000)
      }, 500)
      return () => clearTimeout(xpTimer)
    }
  }, [currentRewardIndex])

  const getRarityColor = (rarity?: string) => {
    switch (rarity) {
      case "common": return "#B49FCC"
      case "rare": return "#5B9BD5"
      case "epic": return "#A855F7"
      case "legendary": return "#F4C95D"
      default: return "#ffffff"
    }
  }

  const getRarityGlow = (rarity?: string) => {
    switch (rarity) {
      case "epic": return "shadow-[0_0_20px_rgba(168,85,247,0.5)]"
      case "legendary": return "shadow-[0_0_20px_rgba(244,201,93,0.5)]"
      default: return ""
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-start pt-6 px-4 pb-20 ar-flicker overflow-hidden">
      {/* Quest Complete Banner */}
      <div className="relative mb-5">
        <div className="absolute top-1/2 left-0 -translate-x-full w-16 h-px bg-gradient-to-l from-[#F4C95D] to-transparent" />
        <div className="absolute top-1/2 right-0 translate-x-full w-16 h-px bg-gradient-to-r from-[#F4C95D] to-transparent" />
        
        <div className="bg-[#36213E]/80 backdrop-blur-sm border-2 border-[#F4C95D] px-8 py-3 relative">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#F4C95D]" />
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#F4C95D]" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#F4C95D]" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#F4C95D]" />
          
          <div className="font-pixel text-[8px] text-[#B49FCC] text-center mb-1">
            [ QUEST_STATUS // COMPLETE ]
          </div>
          <h2 className="font-pixel text-xl text-[#F4C95D] text-center glow-gold">
            QUEST COMPLETE!
          </h2>
        </div>
      </div>

      {/* Quest name */}
      <div className="mb-5 text-center">
        <div className="font-pixel text-sm text-white mb-2">THE LOST ARTIFACT</div>
        <div className="font-pixel text-[8px] text-[#B49FCC]">
          You have recovered the ancient relic and returned it safely.
        </div>
      </div>

      {/* Rewards container */}
      <div className="w-full max-w-2xl mb-5">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#B49FCC]" />
          <span className="font-pixel text-[9px] text-[#B49FCC]">REWARDS EARNED</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#B49FCC]" />
        </div>

        {/* Rewards grid - proper spacing */}
        <div className="grid grid-cols-4 gap-4">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className={`
                relative p-3
                bg-[#36213E]/60 backdrop-blur-sm
                border transition-all duration-500
                ${currentRewardIndex >= index 
                  ? `opacity-100 translate-y-0 border-[#B49FCC] ${getRarityGlow(reward.rarity)}` 
                  : "opacity-0 translate-y-4 border-transparent"
                }
              `}
            >
              {/* Rarity indicator - positioned clearly above */}
              {reward.rarity && (
                <div 
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 font-pixel text-[7px] px-2 py-0.5 bg-[#0B1020] border"
                  style={{ 
                    color: getRarityColor(reward.rarity),
                    borderColor: getRarityColor(reward.rarity)
                  }}
                >
                  {reward.rarity.toUpperCase()}
                </div>
              )}

              {/* Icon - with margin top for rarity label */}
              <div 
                className={`text-2xl text-center ${reward.rarity ? 'mt-2' : ''} mb-2`}
                style={{ 
                  color: getRarityColor(reward.rarity),
                  filter: reward.rarity === 'epic' || reward.rarity === 'legendary' 
                    ? `drop-shadow(0 0 8px ${getRarityColor(reward.rarity)})` 
                    : 'none'
                }}
              >
                {reward.icon}
              </div>

              {/* Name - single line */}
              <div className="font-pixel text-[8px] text-white text-center leading-tight mb-2">
                {reward.name}
              </div>

              {/* Value - separate with gap */}
              <div 
                className="font-pixel text-[9px] text-center"
                style={{ color: reward.type === 'xp' ? '#F4C95D' : reward.type === 'gold' ? '#FFD700' : getRarityColor(reward.rarity) }}
              >
                {reward.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* XP Progress bar */}
      <div className="w-full max-w-md mb-4">
        <div className="flex justify-between font-pixel text-[8px] text-[#B49FCC] mb-1.5">
          <span>LEVEL 12</span>
          <span>LEVEL 13</span>
        </div>
        <div className="h-5 bg-[#0B1020] border-2 border-[#B49FCC] relative overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#F4C95D] to-yellow-300 transition-all duration-1000 ease-out"
            style={{ width: `${xpProgress}%` }}
          />
          <div className="absolute inset-0 flex">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex-1 border-r border-[#0B1020]/30" />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-pixel text-[10px] text-[#0B1020] font-bold">
              {xpProgress}%
            </span>
          </div>
        </div>
        <div className="text-center font-pixel text-[8px] text-[#F4C95D] mt-1.5">
          +2,500 XP GAINED
        </div>
      </div>

      {/* Level up notification */}
      {showLevelUp && (
        <div className="animate-in zoom-in fade-in duration-500 mb-4">
          <div className="bg-[#F4C95D] px-6 py-2">
            <span className="font-pixel text-sm text-[#0B1020]">★ LEVEL UP IMMINENT! ★</span>
          </div>
        </div>
      )}

      {/* Continue button */}
      <button className="
        px-8 py-3
        border-2 border-[#F4C95D] bg-[#F4C95D]/10
        font-pixel text-sm text-[#F4C95D]
        hover:bg-[#F4C95D] hover:text-[#0B1020]
        transition-all duration-200
        shadow-[0_0_20px_rgba(244,201,93,0.2)]
        hover:shadow-[0_0_30px_rgba(244,201,93,0.4)]
        mb-4
      ">
        CONTINUE ▶
      </button>

      {/* Stats summary - properly spaced and positioned */}
      <div className="flex gap-8 font-pixel text-[8px]">
        <div className="text-center flex flex-col gap-1">
          <div className="text-[#B49FCC]">TOTAL QUESTS</div>
          <div className="text-white">47</div>
        </div>
        <div className="text-center flex flex-col gap-1">
          <div className="text-[#B49FCC]">PLAYTIME</div>
          <div className="text-white">12:34:56</div>
        </div>
        <div className="text-center flex flex-col gap-1">
          <div className="text-[#B49FCC]">RANK</div>
          <div className="text-[#F4C95D]">ADVENTURER</div>
        </div>
      </div>
    </div>
  )
}
