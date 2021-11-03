export const LOAD_STORY = 'LOAD_STORY';
export const SAVE_STORY = 'SAVE_STORY';

export const loadStory = () => ({
  type: LOAD_STORY,
});

export const saveStory = (payload) => ({
  type: SAVE_STORY,
  story: payload[0],
  characters: payload[1],
});
