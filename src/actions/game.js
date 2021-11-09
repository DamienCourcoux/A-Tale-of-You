export const LOAD_STORY = 'LOAD_STORY';
export const SAVE_STORY = 'SAVE_STORY';
export const SELECT_CHOICE = 'SELECT_CHOICE';
export const LOAD_PARAGRAPH = 'LOAD_PARAGRAPH';
export const SAVE_PARAGRAPH = 'SAVE_PARAGRAPH';
export const SHOW_DICE_ROLLER = 'SHOW_DICE_ROLLER';
export const HIDE_DICE_ROLLER = 'HIDE_DICE_ROLLER';
export const ROLL_DICE = 'ROLL_DICE';
export const ROLL_DICE_SUCCESS = 'ROLE_DICE_SUCCESS';

export const loadStory = () => ({
  type: LOAD_STORY,
});

export const saveStory = (payload) => ({
  type: SAVE_STORY,
  story: payload[0],
  characters: payload[1],
});

export const selectChoice = (consequences) => ({
  type: SELECT_CHOICE,
  consequences,
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

export const rollDiceSuccess = () => ({
  type: ROLL_DICE_SUCCESS,
});
