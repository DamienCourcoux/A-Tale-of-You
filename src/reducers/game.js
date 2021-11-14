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
  END_FIGHT,
} from 'src/actions/game';

export const initialState = {
  // Data for /histoire
  storyTitle: '',
  storyDescription: '',
  classList: [],
  paragraph: {
    description: '',
    choices: [],
  },
  enemy: null,
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
  // data for IngameFight
  fightStarted: false,
  diceIsShowed: false,
  fightTextButton: 'attaque - héros',
  fightHistory: [],
  fightTurn: 1,
  fightCharacterRoll: 0,
  fightEnemyRoll: 0,
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
            break;
          }
        }
      }
      if (action.payload.enemy) {
        return {
          ...state,
          paragraph: action.payload.paragraph,
          enemy: {
            name: action.payload.enemy.name,
            illustration: action.payload.enemy.illustration,
            primaryCharacteristic: action.payload.enemy.characteristic,
            maxHp: action.payload.enemy.hp,
            strength: action.payload.enemy.strength,
            dexterity: action.payload.enemy.dexterity,
            intelligence: action.payload.enemy.intelligence,
            charism: action.payload.enemy.charism,
          },
          enemyCurrentHp: action.payload.enemy.hp,
        };
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
        characterCurrentHp: selectedCharacter.hp,
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
        choiceIndex: action.choiceIndex,
        fightStarted: true,
        diceIsShowed: false,
        fightTextButton: 'attaque - héros',
        fightHistory: [
          '<span class=bold>Début du combat<span>',
          "<span class=bold>Tour 1: phase d'attaque<span>",
        ],
        fightTurn: 1,
        fightCharacterRoll: 0,
        fightEnemyRoll: 0,
      };
    }
    case UPDATE_FIGHT: {
      let {
        fightCharacterRoll,
        fightEnemyRoll,
        fightTurn,
        characterCurrentHp,
        enemyCurrentHp,
      } = state;
      let fightTextButton;
      const diceRoll = state.resultRoll[0] + state.resultRoll[1];
      let statCharacter;
      let statEnemy;
      const characterPrimaryCharacteristic = state.character.primaryCharacteristic;
      const enemyPrimaryCharacteristic = state.enemy.primaryCharacteristic;
      const weaponBonus = state.weapon.bonus;
      const armorBonus = state.armor.bonus;
      let fightHistory = [...state.fightHistory];

      switch (state.fightTextButton) {
        case 'attaque - héros':
          fightTextButton = 'parade - ennemi';
          statCharacter = state.character[characterPrimaryCharacteristic];
          fightCharacterRoll = diceRoll + statCharacter + weaponBonus;
          fightHistory = [
            ...fightHistory,
            `Héros : ${diceRoll} + ${statCharacter} + ${weaponBonus} => <span class="bold">${fightCharacterRoll}<span>`,
          ];
          break;
        case 'parade - ennemi':
          fightTextButton = 'attaque - ennemi';
          statEnemy = state.enemy[characterPrimaryCharacteristic];
          fightEnemyRoll = diceRoll + statEnemy;
          fightHistory = [
            ...fightHistory,
            `Ennemi : ${diceRoll} + ${statEnemy} => <span class="bold">${fightEnemyRoll}<span>`,
          ];
          if (fightCharacterRoll > fightEnemyRoll) {
            fightHistory = [
              ...fightHistory,
              `Attaque réussie: <span class="bold">Ennemi: ${fightEnemyRoll} - ${fightCharacterRoll} => ${fightEnemyRoll - fightCharacterRoll} PV !<span>`,
            ];
            enemyCurrentHp += fightEnemyRoll - fightCharacterRoll;
          }
          else if (fightCharacterRoll <= fightEnemyRoll) {
            fightHistory = [
              ...fightHistory,
              'Attaque échouée: <span class="bold">Ennemi: -0 PV !<span>',
            ];
          }
          if (enemyCurrentHp <= 0) {
            enemyCurrentHp = 0;
            fightHistory = [
              ...fightHistory,
              '<span class="bold">L\'ennemi est mort !',
            ];
            fightTextButton = 'Vous avez gagné !';
          }
          else {
            fightTurn += 1;
            fightHistory = [
              ...fightHistory,
              `<span class=bold>Tour ${fightTurn}: phase de parade<span>`,
            ];
          }
          break;
        case 'attaque - ennemi':
          fightTextButton = 'parade - héros';
          statEnemy = state.enemy[enemyPrimaryCharacteristic];
          fightEnemyRoll = diceRoll + statEnemy;
          fightHistory = [
            ...fightHistory,
            `Ennemi : ${diceRoll} + ${statEnemy} => <span class="bold">${fightEnemyRoll}<span>`,
          ];
          break;
        case 'parade - héros':
          fightTextButton = 'attaque - héros';
          statCharacter = state.character[enemyPrimaryCharacteristic];
          fightCharacterRoll = diceRoll + statCharacter + armorBonus;
          fightHistory = [
            ...fightHistory,
            `Héros : ${diceRoll} + ${statCharacter} + ${armorBonus} => <span class="bold">${fightCharacterRoll}<span>`,
          ];
          if (fightEnemyRoll > fightCharacterRoll) {
            fightHistory = [
              ...fightHistory,
              `Parade échouée: <span class="bold">Héros: ${fightCharacterRoll} - ${fightEnemyRoll} => ${fightCharacterRoll - fightEnemyRoll} PV !<span>`,
            ];
            characterCurrentHp += fightCharacterRoll - fightEnemyRoll;
          }
          else if (fightEnemyRoll <= fightCharacterRoll) {
            fightHistory = [
              ...fightHistory,
              'Parade réussie: <span class="bold">Héros: -0 PV !<span>',
            ];
          }
          if (characterCurrentHp <= 0) {
            characterCurrentHp = 0;
            fightHistory = [
              ...fightHistory,
              '<span class="bold">Vous êtes mort ...',
            ];
            fightTextButton = 'Vous avez perdu ...';
          }
          else {
            fightTurn += 1;
            fightHistory = [
              ...fightHistory,
              `<span class=bold>Tour ${fightTurn}: phase d'attaque<span>`,
            ];
          }
          break;
        default:
          fightTextButton = 'erreur';
          fightHistory = [
            ...fightHistory,
            '',
          ];
          break;
      }
      return {
        ...state,
        fightTextButton,
        fightCharacterRoll,
        fightEnemyRoll,
        fightHistory,
        fightTurn,
        characterCurrentHp,
        enemyCurrentHp,
      };
    }
    case END_FIGHT: {
      return {
        ...state,
        choiceIndex: null,
        fightStarted: false,
        diceIsShowed: false,
        fightTextButton: 'attaque - héros',
        fightHistory: [],
        fightTurn: 1,
        fightCharacterRoll: 0,
        fightEnemyRoll: 0,
      };
    }
    default:
      return state;
  }
};

export default reducer;
