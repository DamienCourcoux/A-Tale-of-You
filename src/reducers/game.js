import {
  SAVE_STORY,
  SAVE_PARAGRAPH,
} from 'src/actions/game';

export const initialState = {
  // Data for /histoire
  storyTitle: '',
  storyDescription: '',
  classList: [],
  // Data for /jouer - left page
  // paragraphe 1
  // paragraphDescription: "<p>Vous vous trouvez face à une habitation, vous apercevez une porte.</p><p>Vous décidez d'entrer.</p>",
  // paragraphOption1Id: 2,
  // paragraphOption1Text: 'Continuer',
  // paragraphOption2Id: null,
  // paragraphOption2Text: '',
  // paragraphRollsId: null,
  // paragraphRollsText: '',
  // paragraphe 2
  paragraphDescription: "<p>Vous vous trouvez dans un couloir Nord-Sud. Vous avancez dans la direction nord jusqu'à une porte sur votre droite. Au bout du couloir vous distinguez une autre porte.</p><p>Souhaitez vous ouvrir la porte à droite ou continuer d'avancer dans le couloir?</p>",
  paragraphOption1Id: 3,
  paragraphOption1Text: 'Ouvrir la porte de droite',
  paragraphOption2Id: 7,
  paragraphOption2Text: 'Avancer',
  paragraphRollsId: null,
  paragraphRollsText: '',
  // Data for /jouer - right page
  characterName: 'guerrier',
  characterPicture: 'https://cdn.pixabay.com/photo/2016/03/31/23/05/armor-1297380_960_720.png',
  characterPrimaryCharacteristic: 'intelligence',
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
    default:
      return state;
  }
};

export default reducer;
