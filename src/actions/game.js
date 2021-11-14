export const LOAD_STORY = 'LOAD_STORY';
export const SAVE_STORY = 'SAVE_STORY';
export const LOAD_PARAGRAPH = 'LOAD_PARAGRAPH';
export const SAVE_PARAGRAPH = 'SAVE_PARAGRAPH';
export const SELECT_CHARACTERS = 'SELECT_CHARACTERS';
export const SAVE_CHARACTERS = 'SAVE_CHARACTERS';
export const SHOW_DICE_ROLLER = 'SHOW_DICE_ROLLER';
export const HIDE_DICE_ROLLER = 'HIDE_DICE_ROLLER';
export const ROLL_DICE = 'ROLL_DICE';
export const CHANGE_SELECTED_CHARACTER = 'CHANGE_SELECTED_CHARACTER';
export const START_GAME = 'START_GAME';
export const TOGGLE_STATS = 'TOGGLE_STATS';
export const END_GAME = 'END_GAME';
export const SHOW_DICE = 'SHOW_DICE';
export const START_FIGHT = 'START_FIGHT';
export const UPDATE_FIGHT = 'UPDATE_FIGHT';
export const END_FIGHT = 'END_FIGHT';

export const loadStory = () => ({
  type: LOAD_STORY,
});

export const saveStory = (payload) => ({
  type: SAVE_STORY,
  payload,
});

export const loadParagraph = (consequence) => ({
  type: LOAD_PARAGRAPH,
  consequence,
});

export const saveParagraph = (payload) => ({
  type: SAVE_PARAGRAPH,
  payload,
});

export const showDiceRoller = (choiceIndex) => ({
  type: SHOW_DICE_ROLLER,
  choiceIndex,
});

export const hideDiceRoller = () => ({
  type: HIDE_DICE_ROLLER,
});

export const rollDice = (number) => ({
  type: ROLL_DICE,
  number,
});

export const changeSelectedCharacter = (selectedClass) => ({
  type: CHANGE_SELECTED_CHARACTER,
  selectedClass,
});

export const startGame = () => ({
  type: START_GAME,
});

export const toggleStats = (statsIsOpen) => ({
  type: TOGGLE_STATS,
  statsIsOpen,
});

export const endGame = () => ({
  type: END_GAME,
});

export const showDice = () => ({
  type: SHOW_DICE,
});

export const startFight = (choiceIndex) => ({
  type: START_FIGHT,
  choiceIndex,
});

export const updateFight = () => ({
  type: UPDATE_FIGHT,
});

export const endFight = () => ({
  type: END_FIGHT,
});
