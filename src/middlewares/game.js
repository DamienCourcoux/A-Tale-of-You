import axios from 'axios';

import {
  LOAD_STORY,
  saveStory,
  LOAD_PARAGRAPH,
  saveParagraph,
} from 'src/actions/game';

const game = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_STORY: {
      next(action);
      const serverRequest = async () => {
        try {
          const { data: response } = await axios.get('http://3.80.80.108:3000/story');

          const actionSaveStory = saveStory(response.story);
          store.dispatch(actionSaveStory);
        }
        catch (error) {
          console.log(error);
        }
      };
      serverRequest();
      break;
    }
    case LOAD_PARAGRAPH: {
      const id = action.consequence.paragraph_id;
      axios.get(`http://3.80.80.108:3000/paragraph/${id}`)
        .then((response) => {
          store.dispatch(saveParagraph(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default game;
