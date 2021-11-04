import {
  SAVE_STORY,
} from 'src/actions/game';

export const initialState = {
  storyTitle: '',
  storyDescription: '',
  classList: [],
  characterName: 'guerrier',
  characterPicture: 'https://cdn.pixabay.com/photo/2016/03/31/23/05/armor-1297380_960_720.png',
  characterPrimaryCharacteristic: 'strength',
  characterMaxHp: 50,
  characterCurrentHp: 40,
  characterStrength: 25,
  characterDexterity: 20,
  characterIntelligence: 20,
  characterCharism: 20,
  weaponName: 'épée en fer',
  weaponBonus: '+0',
  armorName: 'cape en coton',
  armorBonus: '+0',
  accessoryName: 'bijoux de famille',
  accessoryBonus: '+0',
  inventoryName: [
    'clé',
    'émeraude',
    'oeil de cyclope',
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_STORY: {
      return {
        ...state,
        storyTitle: action.story.name,
        storyDescription: action.story.description,
      };
    }
    default:
      return state;
  }
};

export default reducer;
