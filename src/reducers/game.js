import {
  SAVE_STORY,
  SAVE_PARAGRAPH,
  SAVE_CHARACTERS,
} from 'src/actions/game';

export const initialState = {
  // Data for /histoire
  storyTitle: '',
  storyDescription: '',
  classList: [],
  paragraphStart: 0,
  // Data for /jouer - left page
  paragraph: {
    description: "<p>Vous vous trouvez face à une habitation, vous apercevez une porte.</p><p>Vous décidez d'entrer.<p>",
    choices: [
      {
        description: 'Continuer',
        success_condition: null,
        consequences: [
          {
            boolean: true,
            paragraph_id: 2,
          },
        ],
      },
    ],
  },
  enemy: null,
  // Data for /jouer - right page
  character: {
    class: 'guerrier',
    illustration: 'https://cdn.pixabay.com/photo/2016/03/31/23/05/armor-1297380_960_720.png',
    primaryCharacteristic: 'strength',
    maxHp: 50,
    strength: 25,
    dexterity: 20,
    intelligence: 20,
    charism: 20,
  },
  characterCurrentHp: 40,
  weapon: {
    name: 'épée en fer',
    bonus: 0,
  },
  armor: {
    name: 'cape en coton',
    bonus: 0,
  },
  accessory: {
    name: 'bijoux de famille',
    bonus: 0,
  },
  inventory: [],
  diceRollerIsOpen: false,
  isRoll: false,
  numberDices: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_STORY: {
      return {
        ...state,
        storyTitle: action.payload.title,
        storyDescription: action.payload.description,
        classlist: action.payload.characters,
        paragraphStart: action.payload.paragraph_id,
      };
    }
    case SAVE_PARAGRAPH: {
      return {
        ...state,
        // TODO a voir pour le payload
        // payload: action.payload,
        paragraphDescription: action.payload.description,
        paragraphOption1Id: action.payload.id_option_1,
        paragraphOption1Text: action.payload.option_1,
        paragraphOption2Id: action.payload.id_option_2,
        paragraphOption2Text: action.payload.option_2,
        paragraphRollsId: action.payload.paragraphRollsId,
        paragraphRollsText: action.payload.paragraphRollsText,
      };
    }
    case SAVE_CHARACTERS: {
      return {
        ...state,
        characters: action.characters,
      };
    }
    default:
      return state;
  }
};

export default reducer;
