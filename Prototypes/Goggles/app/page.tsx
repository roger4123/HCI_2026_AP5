"use client"

import { useState, useEffect } from "react"
import BootScreen from "@/components/screens/boot-screen"
import RoleSelection from "@/components/screens/role-selection"
import ActiveQuestHUD from "@/components/screens/active-quest-hud"
import RewardScreen from "@/components/screens/reward-screen"
import WorldScreen from "@/components/screens/world-screen"
import MapScreen from "@/components/screens/map-screen"
import HUDNavigation from "@/components/hud-navigation"
import AROverlay from "@/components/ar-overlay"

export type Screen = "boot" | "role" | "quest" | "reward" | "world" | "map"

export default function ARPIGIInterface() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("boot")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const renderScreen = () => {
    switch (currentScreen) {
      case "boot":
        return <BootScreen />
      case "role":
        return <RoleSelection />
      case "quest":
        return <ActiveQuestHUD />
      case "reward":
        return <RewardScreen />
      case "world":
        return <WorldScreen />
      case "map":
        return <MapScreen />
      default:
        return <BootScreen />
    }
  }

  return (
    <main className="relative w-screen h-screen bg-[#0B1020] overflow-hidden">
      {/* AR Glasses viewport frame - 1920x1080 centered */}
      <div 
        className={`
          relative mx-auto h-full max-h-[1080px] max-w-[1920px] aspect-video
          transition-opacity duration-1000
          ${isLoaded ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* AR Overlay effects */}
        <AROverlay />
        
        {/* Main screen content */}
        <div className="relative z-10 w-full h-full">
          {renderScreen()}
        </div>

        {/* Navigation */}
        <HUDNavigation 
          currentScreen={currentScreen} 
          setCurrentScreen={setCurrentScreen} 
        />

        {/* Scanlines overlay */}
        <div className="absolute inset-0 scanlines z-50 pointer-events-none" />
      </div>
    </main>
  )
}
