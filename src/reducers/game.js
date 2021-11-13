import {
  SAVE_STORY,
  SAVE_PARAGRAPH,
  SHOW_DICE_ROLLER,
  HIDE_DICE_ROLLER,
  ROLL_DICE,
  CHANGE_SELECTED_CHARACTER,
  TOGGLE_STATS,
  END_GAME,
  SHOW_DICE,
  START_FIGHT,
  UPDATE_FIGHT,
} from 'src/actions/game';

export const initialState = {
  // Data for /histoire
  storyTitle: '',
  storyDescription: '',
  classList: [],

  paragraph: {
    description: "<p>Vous avancez jusqu'à la porte à votre droite quand soudain un orc sort de la pièce et vous attaque!</p>",
    choices: [
      {
        description: 'Combattre !',
        success_condition_value: null,
        success_condition_characteristic: null,
        consequences: [
          {
            boolean: true,
            paragraph_id: 15,
          },
          {
            boolean: false,
            paragraph_id: 16,
          },
        ],
      },
    ],
  },
  object: null,
  enemy: {
    name: 'orc',
    illustration: 'https://cdn.pixabay.com/photo/2019/08/11/23/22/orc-4400044_960_720.png',
    primaryCharacteristic: 'strength',
    maxHp: 40,
    strength: 20,
    dexterity: 20,
    intelligence: 10,
    charism: 20,
  },
  enemyCurrentHp: 40,
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
  // data for stats on mobile
  statsIsOpen: false,
  // data for IngameFightLeft
  diceIsShowed: false,
  fightTextButton: 'attaque - héros',
  // data for IngameFightRight
  fightHistory: [],
  fightTurn: 1,
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
    case TOGGLE_STATS: {
      return {
        ...state,
        statsIsOpen: !action.statsIsOpen,
      };
    }
    case END_GAME: {
      return initialState;
    }
    case SHOW_DICE: {
      return {
        ...state,
        diceIsShowed: true,
      };
    }
    case START_FIGHT: {
      return {
        ...state,
        fightAction: 'attaque',
        fightActivePlayer: 'character',
        fightTextButton: 'attaque - héros',
        diceIsShowed: false,
        fightHistory: [
          '<span class=bold>Début du combat<span>',
          "<span class=bold>Tour 1: phase d'attaque<span>",
        ],
        fightTurn: 1,
      };
    }
    case UPDATE_FIGHT: {
      const diceRoll = state.resultRoll[0] + state.resultRoll[1];
      const weaponBonus = state.weapon.bonus;
      const armorBonus = state.armor.bonus;
      const characterPrimaryCharacteristic = state.character.primaryCharacteristic;
      const enemyPrimaryCharacteristic = state.enemy.primaryCharacteristic;

      let fightTextButton;
      let newFightHistory;
      let sumValues;
      let statCharacter;
      let statEnemy;

      switch (state.fightTextButton) {
        case 'attaque - héros':
          fightTextButton = 'parade - ennemi';
          statCharacter = state.character[characterPrimaryCharacteristic];
          sumValues = diceRoll + statCharacter + weaponBonus;
          newFightHistory = `Héros : ${diceRoll} + ${statCharacter} + ${weaponBonus} => <span class="bold">${sumValues}<span>`;
          break;
        case 'parade - ennemi':
          fightTextButton = 'attaque - ennemi';
          statEnemy = state.enemy[characterPrimaryCharacteristic];
          sumValues = diceRoll + statEnemy;
          newFightHistory = `Ennemi : ${diceRoll} + ${statEnemy} => <span class="bold">${sumValues}<span>`;
          break;
        case 'attaque - ennemi':
          fightTextButton = 'parade - héros';
          statEnemy = state.enemy[enemyPrimaryCharacteristic];
          sumValues = diceRoll + statEnemy;
          newFightHistory = `Ennemi : ${diceRoll} + ${statEnemy} => <span class="bold">${sumValues}<span>`;
          break;
        case 'parade - héros':
          fightTextButton = 'attaque - héros';
          statCharacter = state.character[enemyPrimaryCharacteristic];
          sumValues = diceRoll + statCharacter + armorBonus;
          newFightHistory = `Héros : ${diceRoll} + ${statCharacter} + ${armorBonus} => <span class="bold">${sumValues}<span>`;
          break;
        default:
          fightTextButton = 'erreur';
          newFightHistory = '';
          break;
      }
      return {
        ...state,
        fightTextButton,
        fightHistory: [
          ...state.fightHistory,
          newFightHistory,
        ],
      };
    }
    default:
      return state;
  }
};

export default reducer;
