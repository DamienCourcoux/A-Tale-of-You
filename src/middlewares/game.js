import axios from 'axios';

import {
  LOAD_STORY,
  saveStory,
  SELECT_CHOICE,
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
    case SELECT_CHOICE: {
      // temporaire, il faudra entre deux déterminer quelles est la conséquence
      // (résultat d'un jet, issue d'un combat)
      // pour l'instant, tout est réussi
      const id = action.consequences[0].paragraph_id;
      const condition = action.description;
      axios.get(`http://3.80.80.108:3000/paragraph/${id}`)
        .then((response) => {
          console.log(condition);
          // aller dans le reducer pour l'action success
          store.dispatch(saveParagraph(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case SELECT_CHARACTERS: {
    next(action);
    const serverRequest = async () => {
      try {
        const { data: response } = await axios.get('http://3.80.80.108:3000/story');
        const characters = [];
        response.story.characters.forEach((character) => {
          characters.push({
            name: character.class,
            picture: character.illustration,
            primary_characteristic: character.primary_characteristic,
            hp: character.hp,
            strength: character.strength,
            dexterity: character.dexterity,
            intelligence: character.intelligence,
            charism: character.charism,
          });
        });

        const actionSaveCharacters = saveCharacters(characters);
        store.dispatch(actionSaveCharacters);
      }
      catch (error) {
        console.log(error);
      }
    };
    serverRequest();
    break;
  }
    default:
      next(action);
  }
};

export default game;
