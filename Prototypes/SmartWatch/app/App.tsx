import { useState } from "react";
import {
  Sparkles,
  Zap,
  Bell,
  Radar,
  Dices,
  Check,
  Smartphone,
  Shield,
  ChevronRight,
} from "lucide-react";

type Screen =
  | "launcher"
  | "home"
  | "stats"
  | "countdown"
  | "confirmation"
  | "notifications"
  | "quest"
  | "questAccepted"
  | "scan"
  | "dice"
  | "diceResult"
  | "continuePhone";

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<Screen>("launcher");

  const [selectedDice, setSelectedDice] = useState("D20");
  const [selectedAction, setSelectedAction] =
    useState("Attack");
  const [diceRoll, setDiceRoll] = useState(17);

  const rollDice = () => {
    const sides = Number(selectedDice.replace("D", ""));
    const result = Math.floor(Math.random() * sides) + 1;

    setDiceRoll(result);
    setCurrentScreen("diceResult");
  };

  return (
    <div className="min-h-screen bg-[#070B1A] flex items-center justify-center p-8 gap-8">
      <div className="relative">
        <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-2xl">
          <div className="w-full h-full rounded-full bg-[#070B1A] border-2 border-gray-700 overflow-hidden">
            <div
              className="w-full h-full overflow-y-scroll overflow-x-hidden"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>{`::-webkit-scrollbar { display: none; }`}</style>

              {currentScreen === "launcher" && (
                <LauncherScreen onNavigate={setCurrentScreen} />
              )}

              {currentScreen === "home" && (
                <HomeScreen onNavigate={setCurrentScreen} />
              )}

              {currentScreen === "stats" && (
                <StatsScreen onNavigate={setCurrentScreen} />
              )}

              {currentScreen === "countdown" && (
                <CountdownScreen
                  onNavigate={setCurrentScreen}
                />
              )}

              {currentScreen === "confirmation" && (
                <ConfirmationScreen
                  onNavigate={setCurrentScreen}
                />
              )}

              {currentScreen === "notifications" && (
                <NotificationsScreen
                  onNavigate={setCurrentScreen}
                />
              )}

              {currentScreen === "quest" && (
                <QuestScreen onNavigate={setCurrentScreen} />
              )}

              {currentScreen === "questAccepted" && (
                <QuestAcceptedScreen
                  onNavigate={setCurrentScreen}
                />
              )}

              {currentScreen === "scan" && (
                <ScanScreen onNavigate={setCurrentScreen} />
              )}

              {currentScreen === "dice" && (
                <DiceScreen
                  selectedDice={selectedDice}
                  setSelectedDice={setSelectedDice}
                  selectedAction={selectedAction}
                  setSelectedAction={setSelectedAction}
                  rollDice={rollDice}
                />
              )}

              {currentScreen === "diceResult" && (
                <DiceResultScreen
                  onNavigate={setCurrentScreen}
                  selectedDice={selectedDice}
                  selectedAction={selectedAction}
                  diceRoll={diceRoll}
                />
              )}

              {currentScreen === "continuePhone" && (
                <ContinuePhoneScreen
                  onNavigate={setCurrentScreen}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1A1028] rounded-2xl p-6 w-80 border border-[#8A6A2A] shadow-xl">
        <h3 className="text-white font-serif text-xl mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#F6C74F]" />
          Wear OS Concepts
        </h3>

        <ul className="space-y-2 text-[#C9A8FF] text-sm">
          {[
            "Cards",
            "App Icons",
            "Pages",
            "Dismissing Cards",
            "Action Buttons",
            "Action Countdown and Confirmation",
            "Continuing Activities on Phone",
            "Actions on Cards",
            "Card Stacks",
            "2D Picker",
            "Selection List",
          ].map((concept) => (
            <li
              key={concept}
              className="flex items-start gap-2"
            >
              <span className="text-[#F6C74F] mt-0.5">•</span>
              <span>{concept}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LauncherScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void;
}) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-6 relative">
        <div className="w-20 h-20 bg-[#1A1028] rounded-2xl flex items-center justify-center border-2 border-[#8A6A2A] shadow-lg">
          <div className="text-4xl">🧙‍♂️</div>
        </div>

        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#F6C74F] rounded-lg flex items-center justify-center shadow-md">
          <Dices className="w-5 h-5 text-[#1A1028]" />
        </div>
      </div>

      <h2 className="text-white font-serif text-2xl mb-2">
        MidNight
      </h2>
      <p className="text-[#C9A8FF] text-sm mb-6">
        D&D Companion
      </p>

      <button
        onClick={() => onNavigate("home")}
        className="bg-[#F6C74F] text-[#1A1028] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#ffd666] transition-colors"
      >
        Open
      </button>
    </div>
  );
}

function HomeScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void;
}) {
  return (
    <div className="min-h-full flex flex-col p-5 pt-8 pb-8">
      <div className="text-center mb-4">
        <h1 className="text-white font-serif text-xl mb-1">
          The Ashen Vault
        </h1>
        <p className="text-[#C9A8FF] text-xs">Elvish Archer</p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mb-4">
        <button
          onClick={() => onNavigate("stats")}
          className="bg-[#1A1028] rounded-2xl p-3 border border-[#8A6A2A] hover:border-[#F6C74F] transition-all shadow-lg"
        >
          <Zap className="w-7 h-7 text-[#F6C74F] mx-auto mb-1.5" />
          <p className="text-white text-xs font-semibold">
            Stats
          </p>
        </button>

        <button
          onClick={() => onNavigate("notifications")}
          className="bg-[#1A1028] rounded-2xl p-3 border border-[#8A6A2A] hover:border-[#F6C74F] transition-all shadow-lg"
        >
          <Bell className="w-7 h-7 text-[#F6C74F] mx-auto mb-1.5" />
          <p className="text-white text-xs font-semibold">
            Quest
          </p>
        </button>

        <button
          onClick={() => onNavigate("scan")}
          className="bg-[#1A1028] rounded-2xl p-3 border border-[#8A6A2A] hover:border-[#F6C74F] transition-all shadow-lg"
        >
          <Radar className="w-7 h-7 text-[#F6C74F] mx-auto mb-1.5" />
          <p className="text-white text-xs font-semibold">
            Scan
          </p>
        </button>

        <button
          onClick={() => onNavigate("dice")}
          className="bg-[#1A1028] rounded-2xl p-3 border border-[#8A6A2A] hover:border-[#F6C74F] transition-all shadow-lg"
        >
          <Dices className="w-7 h-7 text-[#F6C74F] mx-auto mb-1.5" />
          <p className="text-white text-xs font-semibold">
            Dice
          </p>
        </button>
      </div>

      <div className="bg-[#120A1F] rounded-xl p-2.5 border border-[#8A6A2A] mb-4">
        <p className="text-[#C9A8FF] text-xs text-center">
          Campaign tonight • 20:00
        </p>
      </div>
    </div>
  );
}

function StatsScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void;
}) {
  return (
    <div className="min-h-full p-5 pt-6 pb-8">
      <h2 className="text-white font-serif text-lg mb-3 text-center">
        Player Stats
      </h2>

      <div className="space-y-2 mb-3">
        <StatBar label="Stamina" value={82} color="#F6C74F" />
        <StatBar label="Hunger" value={24} color="#ff6b6b" />
        <StatBar label="Mana" value={61} color="#C9A8FF" />

        <div className="bg-[#120A1F] rounded-xl p-2 border border-[#8A6A2A]">
          <div className="flex justify-between items-center">
            <span className="text-[#C9A8FF] text-sm">HP</span>
            <span className="text-white font-semibold text-sm">
              10/10
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#1A1028] rounded-2xl p-3 border border-[#8A6A2A] mb-4 shadow-lg">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 text-[#F6C74F]" />
          <h3 className="text-white font-semibold text-sm">
            Magic Potion Buff
          </h3>
        </div>

        <p className="text-[#C9A8FF] text-xs mb-1">
          +15 Stamina
        </p>
        <p className="text-[#F6C74F] text-xs">
          02:35 remaining
        </p>
      </div>

      <div className="space-y-2 mb-4">
        <button
          onClick={() => onNavigate("countdown")}
          className="w-full bg-[#F6C74F] text-[#1A1028] py-2.5 rounded-full font-semibold text-sm shadow-lg hover:bg-[#ffd666] transition-colors"
        >
          Activate
        </button>

        <button
          onClick={() => onNavigate("home")}
          className="w-full bg-[#120A1F] text-[#C9A8FF] py-2.5 rounded-full font-semibold text-sm border border-[#8A6A2A] hover:border-[#F6C74F] transition-colors"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}

function StatBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="bg-[#120A1F] rounded-xl p-2 border border-[#8A6A2A]">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[#C9A8FF] text-xs">{label}</span>
        <span className="text-white font-semibold text-xs">
          {value}%
        </span>
      </div>

      <div className="h-1.5 bg-[#070B1A] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function CountdownScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void;
}) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <h2 className="text-white font-serif text-xl mb-8 text-center">
        Potion Buff
      </h2>

      <div className="relative mb-8">
        <div
          onClick={() => onNavigate("confirmation")}
          className="w-32 h-32 rounded-full border-4 border-[#F6C74F] flex items-center justify-center shadow-lg cursor-pointer"
        >
          <div className="absolute inset-0 rounded-full border-4 border-[#F6C74F] animate-ping opacity-50"></div>
          <span className="text-6xl text-[#F6C74F] font-bold relative z-10">
            3
          </span>
        </div>
      </div>

      <p className="text-[#C9A8FF] text-center mb-8">
        Activating magic potion…
      </p>

      <button
        onClick={() => onNavigate("home")}
        className="bg-[#120A1F] text-[#C9A8FF] px-8 py-3 rounded-full font-semibold border border-[#8A6A2A] hover:border-[#F6C74F] transition-colors"
      >
        Cancel
      </button>
    </div>
  );
}

function ConfirmationScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void;
}) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <div className="w-20 h-20 rounded-full bg-[#F6C74F] flex items-center justify-center mb-6 shadow-lg">
        <Check className="w-12 h-12 text-[#1A1028]" />
      </div>

      <h2 className="text-white font-serif text-2xl mb-4 text-center">
        Buff Activated
      </h2>

      <div className="text-center mb-8">
        <p className="text-[#F6C74F] text-lg font-semibold mb-1">
          +15 Stamina
        </p>
        <p className="text-[#C9A8FF] text-sm">
          Active for 5 min
        </p>
      </div>

      <button
        onClick={() => onNavigate("home")}
        className="bg-[#F6C74F] text-[#1A1028] px-10 py-3 rounded-full font-semibold shadow-lg hover:bg-[#ffd666] transition-colors"
      >
        Done
      </button>
    </div>
  );
}

function NotificationsScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void;
}) {
  return (
    <div className="min-h-full p-5 pt-6 pb-8">
      <h2 className="text-white font-serif text-lg mb-4 text-center">
        Notifications
      </h2>

      <div className="space-y-3 mb-4">
        <button
          onClick={() => onNavigate("quest")}
          className="w-full bg-[#1A1028] rounded-2xl p-3 border border-[#8A6A2A] hover:border-[#F6C74F] transition-all shadow-lg text-left"
        >
          <div className="flex items-start justify-between mb-1.5">
            <h3 className="text-white font-semibold text-sm">
              Help Quest
            </h3>
            <span className="bg-[#ff6b6b] text-white text-xs px-2 py-0.5 rounded-full">
              Urgent
            </span>
          </div>

          <p className="text-[#C9A8FF] text-xs mb-1">
            Radu needs support nearby
          </p>
          <ChevronRight className="w-4 h-4 text-[#F6C74F] ml-auto" />
        </button>

        <div className="w-full bg-[#1A1028] rounded-2xl p-3 border border-[#8A6A2A] shadow-lg">
          <h3 className="text-white font-semibold text-sm mb-1.5">
            Campaign Reminder
          </h3>
          <p className="text-[#C9A8FF] text-xs">
            Session starts at 20:00
          </p>
        </div>

        <div className="w-full bg-[#1A1028] rounded-2xl p-3 border border-[#8A6A2A] shadow-lg">
          <h3 className="text-white font-semibold text-sm mb-1.5">
            World News
          </h3>
          <p className="text-[#C9A8FF] text-xs">
            Dragon spotted near Blackrock Cave
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void;
}) {
  return (
    <div className="min-h-full p-5 pt-6 pb-8">
      <h2 className="text-white font-serif text-lg mb-3 text-center">
        New Quest
      </h2>

      <div className="bg-[#1A1028] rounded-2xl p-3 border border-[#8A6A2A] mb-4 shadow-lg">
        <h3 className="text-white font-semibold text-sm mb-2">
          Help Radu defeat the cave troll
        </h3>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-[#F6C74F]" />
            <p className="text-[#C9A8FF] text-xs">
              Reward: +120 XP
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-[#F6C74F]" />
            <p className="text-[#C9A8FF] text-xs">
              Rare Loot Chance
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Shield className="w-3 h-3 text-[#F6C74F]" />
            <p className="text-[#C9A8FF] text-xs">
              Risk: Medium
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <button
          onClick={() => onNavigate("questAccepted")}
          className="w-full bg-[#F6C74F] text-[#1A1028] py-2.5 rounded-full font-semibold text-sm shadow-lg hover:bg-[#ffd666] transition-colors"
        >
          Accept
        </button>

        <button
          onClick={() => onNavigate("home")}
          className="w-full bg-[#120A1F] text-[#C9A8FF] py-2.5 rounded-full font-semibold text-sm border border-[#8A6A2A] hover:border-[#F6C74F] transition-colors"
        >
          Decline
        </button>

        <button
          onClick={() => onNavigate("continuePhone")}
          className="w-full bg-[#120A1F] text-[#C9A8FF] py-2.5 rounded-full font-semibold text-sm border border-[#8A6A2A] hover:border-[#F6C74F] transition-colors flex items-center justify-center gap-2"
        >
          <Smartphone className="w-3 h-3" />
          Open on Phone
        </button>
      </div>
    </div>
  );
}

function QuestAcceptedScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void;
}) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <div className="w-20 h-20 rounded-full bg-[#F6C74F] flex items-center justify-center mb-6 shadow-lg">
        <Shield className="w-12 h-12 text-[#1A1028]" />
      </div>

      <h2 className="text-white font-serif text-2xl mb-4 text-center">
        Quest Accepted
      </h2>

      <div className="text-center mb-8">
        <p className="text-[#C9A8FF] mb-1">
          You joined Radu&apos;s quest.
        </p>
        <p className="text-[#F6C74F] font-semibold">Gear up!</p>
      </div>

      <button
        onClick={() => onNavigate("home")}
        className="bg-[#F6C74F] text-[#1A1028] px-10 py-3 rounded-full font-semibold shadow-lg hover:bg-[#ffd666] transition-colors"
      >
        Back Home
      </button>
    </div>
  );
}

function ScanScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void;
}) {
  return (
    <div className="min-h-full p-5 pt-6 pb-8">
      <h2 className="text-white font-serif text-lg mb-4 text-center">
        Area Scan
      </h2>

      <div className="flex items-center justify-center mb-4 py-4">
        <div className="relative">
          <div className="absolute inset-0 rounded-full border-4 border-[#F6C74F] animate-ping opacity-30"></div>
          <div className="absolute inset-4 rounded-full border-4 border-[#F6C74F] animate-ping opacity-50"></div>

          <div className="w-24 h-24 rounded-full border-4 border-[#F6C74F] flex items-center justify-center shadow-lg bg-[#1A1028]">
            <span className="text-4xl">💎</span>
          </div>
        </div>
      </div>

      <div className="bg-[#1A1028] rounded-2xl p-3 border border-[#8A6A2A] mb-4 shadow-lg text-center">
        <p className="text-white font-semibold text-sm mb-1">
          Treasure detected
        </p>
        <p className="text-[#C9A8FF] text-xs mb-1">
          Distance: 12m
        </p>
        <p className="text-[#F6C74F] text-xs">Risk: Medium</p>
      </div>

      <div className="space-y-2 mb-4">
        <button
          onClick={() => onNavigate("scan")}
          className="w-full bg-[#F6C74F] text-[#1A1028] py-2.5 rounded-full font-semibold text-sm shadow-lg hover:bg-[#ffd666] transition-colors"
        >
          Scan Again
        </button>

        <button
          onClick={() => onNavigate("continuePhone")}
          className="w-full bg-[#120A1F] text-[#C9A8FF] py-2.5 rounded-full font-semibold text-sm border border-[#8A6A2A] hover:border-[#F6C74F] transition-colors"
        >
          Track
        </button>

        <button
          onClick={() => onNavigate("home")}
          className="w-full bg-[#120A1F] text-[#C9A8FF] py-2.5 rounded-full font-semibold text-sm border border-[#8A6A2A] hover:border-[#F6C74F] transition-colors"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}

function DiceScreen({
  selectedDice,
  setSelectedDice,
  selectedAction,
  setSelectedAction,
  rollDice,
}: {
  selectedDice: string;
  setSelectedDice: (dice: string) => void;
  selectedAction: string;
  setSelectedAction: (action: string) => void;
  rollDice: () => void;
}) {
  return (
    <div className="min-h-full p-5 pt-6 pb-8">
      <h2 className="text-white font-serif text-lg mb-3 text-center">
        Roll Dice
      </h2>

      <div className="mb-3">
        <p className="text-[#C9A8FF] text-xs mb-2 text-center">
          Select Dice Type
        </p>

        <div className="grid grid-cols-2 gap-2 mb-3">
          {["D4", "D6", "D12", "D20"].map((dice) => (
            <button
              key={dice}
              onClick={() => setSelectedDice(dice)}
              className={`py-2.5 rounded-xl font-semibold text-sm border-2 transition-all shadow-lg ${
                selectedDice === dice
                  ? "bg-[#F6C74F] text-[#1A1028] border-[#F6C74F]"
                  : "bg-[#1A1028] text-white border-[#8A6A2A] hover:border-[#F6C74F]"
              }`}
            >
              {dice}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-[#C9A8FF] text-xs mb-2 text-center">
          Action Type
        </p>

        <div className="grid grid-cols-2 gap-2">
          {["Attack", "DMG"].map((action) => (
            <button
              key={action}
              onClick={() => setSelectedAction(action)}
              className={`py-2.5 rounded-xl font-semibold text-xs border-2 transition-colors ${
                selectedAction === action
                  ? "bg-[#F6C74F] text-[#1A1028] border-[#F6C74F]"
                  : "bg-[#120A1F] text-[#C9A8FF] border-[#8A6A2A] hover:border-[#F6C74F]"
              }`}
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#120A1F] border border-[#8A6A2A] rounded-xl p-2 mb-3 text-center">
        <p className="text-[#C9A8FF] text-xs">Selected</p>
        <p className="text-[#F6C74F] text-sm font-semibold">
          {selectedDice} • {selectedAction}
        </p>
      </div>

      <button
        onClick={rollDice}
        className="w-full bg-[#F6C74F] text-[#1A1028] py-2.5 rounded-full font-semibold text-sm shadow-lg hover:bg-[#ffd666] transition-colors mb-4"
      >
        Roll {selectedDice} - {selectedAction}
      </button>
    </div>
  );
}

function DiceResultScreen({
  onNavigate,
  selectedDice,
  selectedAction,
  diceRoll,
}: {
  onNavigate: (screen: Screen) => void;
  selectedDice: string;
  selectedAction: string;
  diceRoll: number;
}) {
  const isDamage = selectedAction === "DMG";

  const resultTitle = isDamage
    ? `${diceRoll} damage dealt`
    : diceRoll >= 10
      ? "Attack successful"
      : "Attack missed";

  const resultSubtitle = isDamage
    ? `Rolled ${selectedDice} for damage`
    : `Rolled ${selectedDice} for attack`;

  return (
    <div className="min-h-full p-5 pt-8 pb-8 flex flex-col items-center justify-center">
      <h2
        className="text-white text-lg mb-6 text-center"
        style={{
          fontFamily: 'Impact, "Arial Black", sans-serif',
          letterSpacing: "0.1em",
        }}
      >
        {selectedDice} RESULT
      </h2>

      <div className="w-36 h-36 rounded-3xl bg-gradient-to-br from-[#F6C74F] to-[#ffd666] flex items-center justify-center mb-6 shadow-2xl">
        <span className="text-8xl text-[#1A1028] font-bold tracking-wider leading-none">
          {diceRoll}
        </span>
      </div>

      <div className="text-center mb-6">
        <p className="text-[#F6C74F] font-semibold mb-1">
          {resultTitle}
        </p>
        <p className="text-[#C9A8FF] text-xs">
          {resultSubtitle}
        </p>
      </div>

      <div className="space-y-2 w-full px-4 mb-4">
        <button
          onClick={() => onNavigate("dice")}
          className="w-full bg-[#F6C74F] text-[#1A1028] py-2.5 rounded-full font-semibold text-sm shadow-lg hover:bg-[#ffd666] transition-colors"
        >
          Roll Again
        </button>

        <button
          onClick={() => onNavigate("home")}
          className="w-full bg-[#120A1F] text-[#C9A8FF] py-2.5 rounded-full font-semibold text-sm border border-[#8A6A2A] hover:border-[#F6C74F] transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
}

function ContinuePhoneScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void;
}) {
  return (
    <div className="min-h-full p-5 pt-8 pb-8 flex flex-col items-center justify-center">
      <h2 className="text-white font-serif text-lg mb-4 text-center">
        Continue on Phone
      </h2>

      <div className="w-16 h-16 rounded-2xl bg-[#1A1028] flex items-center justify-center mb-4 border-2 border-[#8A6A2A] shadow-lg">
        <Smartphone className="w-10 h-10 text-[#F6C74F]" />
      </div>

      <p className="text-[#C9A8FF] text-center text-xs mb-6 px-6">
        Open the full campaign map and quest details on your
        phone.
      </p>

      <div className="space-y-2 w-full px-4 mb-4">
        <button
          onClick={() => onNavigate("home")}
          className="w-full bg-[#F6C74F] text-[#1A1028] py-2.5 rounded-full font-semibold text-sm shadow-lg hover:bg-[#ffd666] transition-colors"
        >
          Send to Phone
        </button>

        <button
          onClick={() => onNavigate("home")}
          className="w-full bg-[#120A1F] text-[#C9A8FF] py-2.5 rounded-full font-semibold text-sm border border-[#8A6A2A] hover:border-[#F6C74F] transition-colors"
        >
          Back
        </button>
      </div>
    </div>
  );
}