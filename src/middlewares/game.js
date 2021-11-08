import axios from 'axios';

import {
  LOAD_STORY,
  saveStory,
  SELECT_CHOICE,
  saveParagraph,
} from 'src/actions/game';

// temporaire, à la place importer axios
import data from 'src/data/story';

const game = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_STORY: {
      next(action);
      const serverRequest = async () => {
        try {
          // temporaire, à la place faire la requête axios
          const response = data;

          // A changer lorsqu'axios sera en place
          // const actionLoadStory = loadStory (response.data);
          const actionSaveStory = saveStory(response);
          store.dispatch(actionSaveStory);
        }
        catch (error) {
          console.log(error);
        }
      };
      serverRequest();
      break;
    }
    case SELECT_CHOICE: {
      // temporaire, il faudra entre deux déterminer quelles est la conséquence
      // (résultat d'un jet, issue d'un combat)
      // pour l'instant, tout est réussi
      const id = action.consequences[0].paragraph_id;

      // console.log('Request paragraph: ', id);

      axios.get(`http://3.80.80.108:3000/paragraph/${id}`)
        .then((response) => {
          // aller dans le reducer pour l'action success
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
