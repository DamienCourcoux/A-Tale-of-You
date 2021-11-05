import axios from 'axios';

import {
  LOAD_STORY,
  saveStory,
  REQUEST_PARAGRAPH,
  /* saveParagraph, */
} from 'src/actions/game';

const game = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_STORY: {
      next(action);
      const serverRequest = async () => {
        try {
          const { data: response } = await axios.get('http://3.80.80.108:3000/story');
          // console.log(response);
          // console.log(response.story);

          const story = {
            stories_name: response.story[0].stories_name,
            description: response.story[0].description,
          };

          const characters = [];
          response.story.forEach((character) => {
            characters.push({
              name: character.name,
              picture: character.picture,
              primary_characteristic: character.primary_characteristic,
              hp: character.hp,
              strength: character.strength,
              dexterity: character.dexterity,
              intelligence: character.intelligence,
              charism: character.charism,
            });
          });

          console.log(story);
          console.log(characters);

          const actionSaveStory = saveStory(story, characters);
          store.dispatch(actionSaveStory);
        }
        catch (error) {
          console.log(error);
        }
      };
      serverRequest();
      break;
    }
    // case REQUEST_PARAGRAPH: {
    //   const id = action.choice;

    //   console.log('Request paragraph: ', id);

    //   axios.get(`http://3.80.80.108:3000/paragraph/${id}`)
    //     .then((response) => {
    //       // aller dans le reducer pour l'action success
    //       store.dispatch(saveParagraph(response.data));
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   next(action);
    //   break;
    // }
    default:
      next(action);
  }
};

export default game;
