const screens = document.querySelectorAll("[data-screen]");
const buttons = document.querySelectorAll(".menu-button");
const navigationButtons = document.querySelectorAll("[data-target]");
const difficultyButtons = document.querySelectorAll("[data-difficulty]");
const difficultyInput = document.querySelector("input[name='difficulty']");
const questButtons = document.querySelectorAll("[data-quest-title]");
const questStory = document.querySelector("textarea[name='questStory']");
const questReward = document.querySelector("input[name='questReward']");
const questXp = document.querySelector("input[name='questXp']");
const questGiver = document.querySelector("input[name='questGiver']");
const enemyButtons = document.querySelectorAll("[data-enemy-name]");
const runningButtons = document.querySelectorAll("[data-campaign-name]");
const historyButtons = document.querySelectorAll("[data-history-title]");
const characterButtons = document.querySelectorAll("[data-char-name]");
const friendRequest = document.querySelector("[data-friend-request]");
const dismissRequestButtons = document.querySelectorAll("[data-dismiss-request]");
const diceButtons = document.querySelectorAll("[data-dice]");
const diceResult = document.querySelector("[data-dice-result]");
const rollButton = document.querySelector("[data-roll-button]");
const rollOutput = document.querySelector("[data-roll-output]");
const toolBackButtons = document.querySelectorAll("[data-tool-back]");
let selectedDie = "d20";
const enemySheet = {
  name: document.querySelector("[data-enemy-sheet-name]"),
  cr: document.querySelector("[data-enemy-sheet-cr]"),
  description: document.querySelector("[data-enemy-sheet-description]"),
  health: document.querySelector("[data-enemy-sheet-health]"),
  armor: document.querySelector("[data-enemy-sheet-armor]"),
  speed: document.querySelector("[data-enemy-sheet-speed]"),
  abilities: document.querySelector("[data-enemy-sheet-abilities]"),
};
const runningDetails = {
  name: document.querySelector("[data-running-name]"),
  players: document.querySelector("[data-running-players]"),
  difficulty: document.querySelector("[data-running-difficulty]"),
  level: document.querySelector("[data-running-level]"),
  owner: document.querySelector("[data-running-owner]"),
};
const historyDetails = {
  title: document.querySelector("[data-history-title-out]"),
  role: document.querySelector("[data-history-role-out]"),
  status: document.querySelector("[data-history-status-out]"),
  difficulty: document.querySelector("[data-history-difficulty-out]"),
  character: document.querySelector("[data-history-character-out]"),
  duration: document.querySelector("[data-history-duration-out]"),
};
const characterDetails = {
  name: document.querySelector("[data-char-name-out]"),
  className: document.querySelector("[data-char-class-out]"),
  level: document.querySelector("[data-char-level-out]"),
  ac: document.querySelector("[data-char-ac-out]"),
  hp: document.querySelector("[data-char-hp-out]"),
  affinity: document.querySelector("[data-char-affinity-out]"),
  inventory: document.querySelector("[data-char-inventory-out]"),
};

const showScreen = (screenName) => {
  screens.forEach((screen) => {
    screen.hidden = screen.dataset.screen !== screenName;
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.removeAttribute("data-active"));
    button.setAttribute("data-active", "true");
  });
});

navigationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.return) {
      toolBackButtons.forEach((backButton) => {
        backButton.dataset.target = button.dataset.return;
      });
    }
    showScreen(button.dataset.target);
  });
});

difficultyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    difficultyButtons.forEach((item) => {
      item.removeAttribute("data-selected");
      item.setAttribute("aria-pressed", "false");
    });

    button.setAttribute("data-selected", "true");
    button.setAttribute("aria-pressed", "true");
    difficultyInput.value = button.dataset.difficulty;
  });
});

questButtons.forEach((button) => {
  button.addEventListener("click", () => {
    questButtons.forEach((item) => item.classList.remove("quest-chip-active"));
    button.classList.add("quest-chip-active");

    questStory.value = button.dataset.questStory;
    questReward.value = button.dataset.questReward;
    questXp.value = button.dataset.questXp;
    questGiver.value = button.dataset.questGiver;
  });
});

enemyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    enemyButtons.forEach((item) => item.classList.remove("enemy-chip-active"));
    button.classList.add("enemy-chip-active");

    enemySheet.name.textContent = button.dataset.enemyName;
    enemySheet.cr.textContent = button.dataset.enemyCr;
    enemySheet.description.textContent = button.dataset.enemyDescription;
    enemySheet.health.textContent = button.dataset.enemyHealth;
    enemySheet.armor.textContent = button.dataset.enemyArmor;
    enemySheet.speed.textContent = button.dataset.enemySpeed;
    enemySheet.abilities.textContent = button.dataset.enemyAbilities;
  });
});

runningButtons.forEach((button) => {
  button.addEventListener("click", () => {
    runningButtons.forEach((item) => item.classList.remove("running-chip-active"));
    button.classList.add("running-chip-active");

    runningDetails.name.textContent = button.dataset.campaignName;
    runningDetails.players.textContent = button.dataset.campaignPlayers;
    runningDetails.difficulty.textContent = button.dataset.campaignDifficulty;
    runningDetails.level.textContent = button.dataset.campaignLevel;
    runningDetails.owner.textContent = button.dataset.campaignOwner;
  });
});

historyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    historyButtons.forEach((item) => item.classList.remove("history-chip-active"));
    button.classList.add("history-chip-active");

    historyDetails.title.textContent = button.dataset.historyTitle;
    historyDetails.role.textContent = button.dataset.historyRole;
    historyDetails.status.textContent = button.dataset.historyStatus;
    historyDetails.difficulty.textContent = button.dataset.historyDifficulty;
    historyDetails.character.textContent = button.dataset.historyCharacter;
    historyDetails.duration.textContent = button.dataset.historyDuration;
  });
});

characterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    characterButtons.forEach((item) => item.classList.remove("character-chip-active"));
    button.classList.add("character-chip-active");

    characterDetails.name.textContent = button.dataset.charName;
    characterDetails.className.textContent = button.dataset.charClass;
    characterDetails.level.textContent = button.dataset.charLevel;
    characterDetails.ac.textContent = button.dataset.charAc;
    characterDetails.hp.textContent = button.dataset.charHp;
    characterDetails.affinity.textContent = button.dataset.charAffinity;
    characterDetails.inventory.textContent = button.dataset.charInventory;
  });
});

dismissRequestButtons.forEach((button) => {
  button.addEventListener("click", () => {
    friendRequest.hidden = true;
  });
});

diceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    diceButtons.forEach((item) => item.classList.remove("dice-option-active"));
    button.classList.add("dice-option-active");
    selectedDie = button.dataset.dice;
    diceResult.textContent = button.dataset.dice;
  });
});

rollButton.addEventListener("click", () => {
  const sides = Number(selectedDie.replace("d", ""));
  const result = Math.floor(Math.random() * sides) + 1;
  rollOutput.textContent = result;
});
