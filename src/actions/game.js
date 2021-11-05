export const LOAD_STORY = 'LOAD_STORY';
export const SAVE_STORY = 'SAVE_STORY';
export const REQUEST_PARAGRAPH = 'REQUEST_PARAGRAPH';
export const SAVE_PARAGRAPH = 'SAVE_PARAGRAPH';

export const loadStory = () => ({
  type: LOAD_STORY,
});

export const saveStory = (story, characters) => ({
  type: SAVE_STORY,
  story,
  characters,
});

export const requestParagraph = (choice) => ({
  type: REQUEST_PARAGRAPH,
  choice,
});

export const saveParagraph = (payload) => ({
  type: SAVE_PARAGRAPH,
  payload,
});
