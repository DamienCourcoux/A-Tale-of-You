export const LOAD_STORY = 'LOAD_STORY';
export const SAVE_STORY = 'SAVE_STORY';
export const REQUEST_PARAGRAPH = 'REQUEST_PARAGRAPH';
export const SAVE_PARAGRAPH = 'SAVE_PARAGRAPH';
export const SHOW_DICE_ROLLER = 'SHOW_DICE_ROLLER';
export const HIDE_DICE_ROLLER = 'HIDE_DICE_ROLLER';

export const loadStory = () => ({
  type: LOAD_STORY,
});

export const saveStory = (payload) => ({
  type: SAVE_STORY,
  story: payload[0],
  characters: payload[1],
});

export const requestParagraph = (choice) => ({
  type: REQUEST_PARAGRAPH,
  choice,
});

export const saveParagraph = (payload) => ({
  type: SAVE_PARAGRAPH,
  payload,
});

export const showDiceRoller = () => ({
  type: SHOW_DICE_ROLLER,
});

export const hideDiceRoller = () => ({
  type: HIDE_DICE_ROLLER,
});
