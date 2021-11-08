import axios from 'axios';

import {
  LOAD_STORY,
  saveStory,
  REQUEST_PARAGRAPH,
  SELECT_CHARACTERS,
  saveCharacters,
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
          console.log(response.story);

          const actionSaveStory = saveStory(response.story);
          store.dispatch(actionSaveStory);
          
          // const story = {
          //   stories_name: response.story.title,
          //   description: response.story.description,
          // };

          // const charactersList = [];
          // response.story.characters.forEach((character) => {
          //   charactersList.push({
          //     name: character.class,
          //     picture: character.illustration,
          //     primary_characteristic: character.primary_characteristic,
          //     hp: character.hp,
          //     strength: character.strength,
          //     dexterity: character.dexterity,
          //     intelligence: character.intelligence,
          //     charism: character.charism,
          //   });
          // });

          // const actionSaveStory = saveStory(story, charactersList);
          // store.dispatch(actionSaveStory);
        }
        catch (error) {
          console.log(error);
        }
      };
      serverRequest();
      break;
    }
    case SELECT_CHARACTERS: {
      next(action);
      const serverRequest = async () => {
        try {
          const { data: response } = await axios.get('http://3.80.80.108:3000/story');
          // console.log(response);
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
          // console.log(characters);
          // console.log(response.story);
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
