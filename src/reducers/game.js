import {
  SAVE_STORY,
  SAVE_PARAGRAPH,
  SHOW_DICE_ROLLER,
  HIDE_DICE_ROLLER,
  ROLL_DICE,
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
  //       success_condition_value: INTEGER
  //       success_condition_characteristic: STRING
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
  // paragraph: {
  //   description: "<p>Vous vous trouvez dans une pièce. Vous apercevez un coffre, celui-ci semble coincé.</p><p>Vous avez le choix :</p><ul><li>User de votre habileté pour le débloquer.</li><li>Ignorer le coffre, quitter la pièce et aller au bout du couloir précédent.</li></ul>",
  //   choices: [
  //     {
  //       description: "Débloquer [DEX]",
  //       success_condition_value: 27,
  //       success_condition_characteristic: "dexterity",
  //       consequences: [
  //         {
  //           boolean: true,
  //           paragraph_id: 4,
  //         },
  //         {
  //           boolean: false,
  //           paragraph_id: 5,
  //         },
  //       ],
  //     },
  //     {
  //       description: "Partir",
  //       success_condition_value: null,
  //       success_condition_characteristic: null,
  //       consequences: [
  //         {
  //           boolean: true,
  //           paragraph_id: 6,
  //         },
  //       ],
  //     },
  //   ],
  // },
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
  characterCurrentHp: 50,
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
  // data for DiceRoller
  diceRollerIsOpen: false,
  resultRoll: [],
  choiceIndex: null,
  // isRoll: false,
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
        choiceIndex: action.choiceIndex,
      };
    }
    case HIDE_DICE_ROLLER: {
      return {
        ...state,
        diceRollerIsOpen: false,
      };
    }
    case ROLL_DICE: {
      const resultRoll = [-1, -1];
      resultRoll.forEach((roll, index) => {
        resultRoll[index] = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      });
      return {
        ...state,
        resultRoll,
      };
    }
    default:
      return state;
  }
};

export default reducer;
