import {
  SAVE_STORY,
} from 'src/actions/game';

export const initialState = {
  storyTitle: '',
  storyDescription: '',
  classList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_STORY: {
      return {
        ...state,
        storyTitle: action.story.name,
        storyDescription: action.story.description,
      };
    }
    default:
      return state;
  }
};

export default reducer;
