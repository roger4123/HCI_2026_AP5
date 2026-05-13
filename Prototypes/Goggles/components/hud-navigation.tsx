import type { Screen } from "@/app/page"

interface HUDNavigationProps {
  currentScreen: Screen
  setCurrentScreen: (screen: Screen) => void
}

const screens: { id: Screen; label: string; icon: string }[] = [
  { id: "boot", label: "BOOT", icon: "⬢" },
  { id: "role", label: "ROLE", icon: "◈" },
  { id: "quest", label: "QUEST", icon: "◎" },
  { id: "reward", label: "LOOT", icon: "★" },
  { id: "world", label: "WORLD", icon: "◉" },
  { id: "map", label: "MAP", icon: "▦" },
]

export default function HUDNavigation({ currentScreen, setCurrentScreen }: HUDNavigationProps) {
  const currentIndex = screens.findIndex(s => s.id === currentScreen)
  
  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : screens.length - 1
    setCurrentScreen(screens[newIndex].id)
  }
  
  const goToNext = () => {
    const newIndex = currentIndex < screens.length - 1 ? currentIndex + 1 : 0
    setCurrentScreen(screens[newIndex].id)
  }

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
      {/* Previous button */}
      <button
        onClick={goToPrevious}
        className="
          w-10 h-10 flex items-center justify-center
          border-2 border-[#B49FCC] bg-[#36213E]/80
          text-[#F4C95D] font-pixel text-base
          hover:border-[#F4C95D] hover:bg-[#36213E]
          transition-all duration-200
          hover:shadow-[0_0_15px_rgba(244,201,93,0.5)]
        "
        aria-label="Previous screen"
      >
        ◀
      </button>

      {/* Screen indicators */}
      <div className="flex items-center gap-1 px-3 py-1.5 bg-[#0B1020]/90 border border-[#B49FCC]/50">
        {screens.map((screen) => (
          <button
            key={screen.id}
            onClick={() => setCurrentScreen(screen.id)}
            className={`
              flex flex-col items-center gap-0.5 px-2 py-1
              transition-all duration-200
              ${currentScreen === screen.id 
                ? "text-[#F4C95D] scale-105" 
                : "text-[#B49FCC]/60 hover:text-[#B49FCC]"
              }
            `}
            aria-label={`Go to ${screen.label}`}
          >
            <span className="text-sm">{screen.icon}</span>
            <span 
              className={`
                font-pixel text-[6px] tracking-wider
                ${currentScreen === screen.id ? "glow-gold" : ""}
              `}
            >
              {screen.label}
            </span>
            {currentScreen === screen.id && (
              <div className="absolute -bottom-0.5 w-6 h-0.5 bg-[#F4C95D]" />
            )}
          </button>
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={goToNext}
        className="
          w-10 h-10 flex items-center justify-center
          border-2 border-[#B49FCC] bg-[#36213E]/80
          text-[#F4C95D] font-pixel text-base
          hover:border-[#F4C95D] hover:bg-[#36213E]
          transition-all duration-200
          hover:shadow-[0_0_15px_rgba(244,201,93,0.5)]
        "
        aria-label="Next screen"
      >
        ▶
      </button>

      {/* Screen counter */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 font-pixel text-[8px] text-[#B49FCC]/70">
        [{currentIndex + 1}/{screens.length}]
      </div>
    </div>
  )
}
