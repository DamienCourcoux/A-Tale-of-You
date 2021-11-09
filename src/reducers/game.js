import {
  SAVE_STORY,
  SAVE_PARAGRAPH,
  SHOW_DICE_ROLLER,
  HIDE_DICE_ROLLER,
  ROLL_DICE,
  CHANGE_SELECTED_CHARACTER,
} from 'src/actions/game';

export const initialState = {
  // Data for /histoire
  storyTitle: '',
  storyDescription: '',
  classList: [],
  // Data for /jouer - left page
  // paragraph: {
  //   description: STRING, NOT NULL
  //   choices: [
  //     {
  //       description: STRING, NOT NULL
  //       success_condition: INTEGER
  //       consequences: [
  //         {
  //           boolean: BOOLEAN, NOT NULL
  //           paragraph_id: INTEGER, NOT NULL
  //         },
  //       ],
  //     },
  //   ],
  // },
  paragraph: {
    description: '',
    choices: [],
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
        classList: action.payload.characters,
        paragraph: {
          choices: [
            {
              consequences: [
                {
                  paragraph_id: action.payload.paragraph_id,
                },
              ],
            },
          ],
        },
      };
    }
    case SAVE_PARAGRAPH: {
      if (action.payload.object) {
        switch (action.payload.object.type) {
          case 'item': {
            const inventoryUpdated = [...state.inventory];
            inventoryUpdated.push(action.payload.object.name);
            return {
              ...state,
              paragraph: action.payload.paragraph,
              inventory: inventoryUpdated,
            };
          }
          case 'weapon': {
            return {
              ...state,
              paragraph: action.payload.paragraph,
              weapon: {
                name: action.payload.object.name,
                bonus: action.payload.object.bonus,
              },
            };
          }
          case 'armor': {
            return {
              ...state,
              paragraph: action.payload.paragraph,
              armor: {
                name: action.payload.object.name,
                bonus: action.payload.object.bonus,
              },
            };
          }
          case 'accessory': {
            return {
              ...state,
              paragraph: action.payload.paragraph,
              accessory: {
                name: action.payload.object.name,
                bonus: action.payload.object.bonus,
              },
            };
          }
          default: {
            return {
              ...state,
              paragraph: action.payload.paragraph,
              enemy: action.payload.enemy,
            };
          }
        }
      }
      return {
        ...state,
        paragraph: action.payload.paragraph,
        enemy: action.payload.enemy,
      };
    }
    case SHOW_DICE_ROLLER: {
      return {
        ...state,
        diceRollerIsOpen: true,
      };
    }
    case HIDE_DICE_ROLLER: {
      return {
        ...state,
        diceRollerIsOpen: false,
      };
    }
    case ROLL_DICE: {
      return {
        ...state,
        isRoll: true,
        numberDices: action.number,
      };
    }
    case CHANGE_SELECTED_CHARACTER: {
      let selectedCharacter = {};
      state.classList.forEach((target) => {
        if (target.class === action.selectedClass) {
          selectedCharacter = target;
        }
      });
      return {
        ...state,
        character: {
          class: selectedCharacter.class,
          illustration: selectedCharacter.illustration,
          primaryCharacteristic: selectedCharacter.primary_characteristic,
          maxHp: selectedCharacter.hp,
          strength: selectedCharacter.strength,
          dexterity: selectedCharacter.dexterity,
          intelligence: selectedCharacter.intelligence,
          charism: selectedCharacter.charism,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
