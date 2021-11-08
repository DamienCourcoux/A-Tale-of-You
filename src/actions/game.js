export const LOAD_STORY = 'LOAD_STORY';
export const SAVE_STORY = 'SAVE_STORY';
export const SELECT_CHOICE = 'SELECT_CHOICE';
export const SAVE_PARAGRAPH = 'SAVE_PARAGRAPH';
export const SELECT_CHARACTERS = 'SELECT_CHARACTERS';
export const SAVE_CHARACTERS = 'SAVE_CHARACTERS';
export const SHOW_DICE_ROLLER = 'SHOW_DICE_ROLLER';
export const HIDE_DICE_ROLLER = 'HIDE_DICE_ROLLER';
export const ROLL_DICE = 'ROLL_DICE';

export const loadStory = () => ({
  type: LOAD_STORY,
});

export const saveStory = (payload) => ({
  type: SAVE_STORY,
  payload,
});

export const selectChoice = (consequences) => ({
  type: SELECT_CHOICE,
  consequences,
});

export const saveParagraph = (payload) => ({
  type: SAVE_PARAGRAPH,
  payload,
});

export const selectCharacters = () => ({
  type: SELECT_CHARACTERS,
});

export const saveCharacters = (characters) => ({
  type: SAVE_CHARACTERS,
  characters,
});

export const showDiceRoller = () => ({
  type: SHOW_DICE_ROLLER,
});

export const hideDiceRoller = () => ({
  type: HIDE_DICE_ROLLER,
});

export const rollDice = (number) => ({
  type: ROLL_DICE,
  number,
});
