import { useSelector, useDispatch } from 'react-redux';

import {
  requestParagraph,
  showDiceRoller,
} from 'src/actions/game';

import parse from 'html-react-parser';

import './ingame.scss';
import { GiBroadsword, GiShoulderArmor, GiPearlNecklace } from 'react-icons/gi';
import { FaImages } from 'react-icons/fa';


const Ingame = () => {
 

  const {
    paragraphDescription,
    paragraphOption1Id,
    paragraphOption1Text,
    paragraphOption2Id,
    paragraphOption2Text,
    paragraphRollsId,
    paragraphRollsText,
    characterMaxHp,
    characterCurrentHp,
    characterStrength,characterDexterity,
    characterIntelligence,
    characterCharism,
    weaponName,
    weaponBonus,
    armorName,
    armorBonus,
    accessoryName,
    accessoryBonus,
    characterPicture,
    inventoryName,
    characterPrimaryCharacteristic,
  } = useSelector((state) => ({
    paragraphDescription: state.game.paragraphDescription,
    paragraphOption1Id: state.game.paragraphOption1Id,
    paragraphOption1Text: state.game.paragraphOption1Text,
    paragraphOption2Id: state.game.paragraphOption2Id,
    paragraphOption2Text: state.game.paragraphOption2Text,
    paragraphRollsId: state.game.paragraphRollsId,
    paragraphRollsText: state.game.paragraphRollsText,
    characterMaxHp: state.game.characterMaxHp,
    characterCurrentHp: state.game.characterCurrentHp,
    characterStrength: state.game.characterStrength,
    characterDexterity:state.game.characterDexterity,
    characterIntelligence:state.game.characterIntelligence,
    characterCharism:state.game.characterCharism,
    weaponName:state.game.weaponName,
    weaponBonus:state.game.weaponBonus,
    armorName:state.game.armorName,
    armorBonus:state.game.armorBonus,
    accessoryName:state.game.accessoryName,
    accessoryBonus:state.game.accessoryBonus,
    characterPicture:state.game.characterPicture,
    inventoryName:state.game.inventoryName,
    characterPrimaryCharacteristic:state.game.characterPrimaryCharacteristic,

  }));
  
  const dispatch = useDispatch();

  const handleSelectChoice = (choice) => {
    dispatch(requestParagraph(choice));
  };
    
   const jsxItems = inventoryName.map((item, index) => (
    <li 
      key={index+1}
    >
      {item}
    </li>
  ));

  const handleShowDiceRoller = () => {
    dispatch(showDiceRoller());
  };

  return (
    <section className="ingame">
      <div className="ingame__border shadow">
        <div className="ingame__pages shadow">
          <div className="ingame__page shadow">
            <div className="ingame__page--history">
              <h1>Le Chevalier Noir</h1>
              <div className="hr" />
              {parse(paragraphDescription)}
            </div>
            <div className="ingame_page--options">
              <div className="hr" />
              {
                paragraphOption1Id && (
                  <button
                    className="ingame__page__button"
                    type="button"
                    onClick={() => handleSelectChoice(paragraphOption1Id)}
                  >
                    {paragraphOption1Text}
                  </button>
                )
              }
              {
                paragraphOption2Id && (
                  <button
                    className="ingame__page__button"
                    type="button"
                    onClick={() => handleSelectChoice(paragraphOption2Id)}
                  >
                    {paragraphOption2Text}
                  </button>
                )
              }
              {
                paragraphRollsId && (
                  <button
                    className="ingame__page__button"
                    type="button"
                    onClick={handleShowDiceRoller}
                  >
                    {paragraphRollsText}
                  </button>
                )
              }
            </div>
          </div>
          <div className="ingame__page ingame__page__right shadow">
            <h1 className="ingame__page__right__title">Fiche Personnage</h1>

            <div className="ingame__page__right__stats">
              <div className="ingame__page__right__stats__illustration ingame__page__fake_image ingame__page__fake_image--150">
                <img className="fit-picture" src={characterPicture}></img>
              </div>

              <h2 className="ingame__page__right__stats__title">Caractéristiques</h2>

              <ul className="ingame__page__right__stats__name">
                <li>Points de vie</li>
                <li 
                  className={
                    characterPrimaryCharacteristic === 'strength'
                      ? 'bold'
                      : ''
                  } 
                >
                  Force
                </li> 
                <li
                  className={
                    characterPrimaryCharacteristic === 'dexterity'
                        ? 'bold'
                        : ''
                  } 
                >
                  Dextérité
                </li>
                <li
                  className={
                    characterPrimaryCharacteristic === 'intelligence'
                        ? 'bold'
                        : ''
                  } 
                >
                  Intelligence
                </li>
                <li
                  className={
                    characterPrimaryCharacteristic === 'charism'
                        ? 'bold'
                        : ''
                  } 
                >
                  Charisme
                </li>
              </ul>

              <ul className="ingame__page__right__stats__value">
                <li>{characterCurrentHp}/{characterMaxHp}</li>
                <li>{characterStrength}</li>
                <li>{characterDexterity}</li>
                <li>{characterIntelligence}</li>
                <li>{characterCharism}</li>
              </ul>
            </div>

            {/* character's equipments */}
            <h2 className="ingame__page__right__equipments__title">Equipements</h2>

            <div className="ingame__page__right__equipments">
              <div className="ingame__page__right__equipments__item">
                <div className="ingame__page__fake_image ingame__page__fake_image--50" title={weaponName}>
                  <GiBroadsword size={40} />
                </div>
                <div className="ingame__page__right__equipments__item__value">
                  {weaponBonus}
                </div>
              </div>
              <div className="ingame__page__right__equipments__item">
                <div className="ingame__page__fake_image ingame__page__fake_image--50" title={armorName}>
                  <GiShoulderArmor size={40} />
                </div>
                <div className="ingame__page__right__equipments__item__value">
                  {armorBonus}
                </div>
              </div>
              <div className="ingame__page__right__equipments__item">
                <div className="ingame__page__fake_image ingame__page__fake_image--50" title={accessoryName}>
                  <GiPearlNecklace size={40} />
                </div>
                <div className="ingame__page__right__equipments__item__value">
                  {accessoryBonus}
                </div>
              </div>
            </div>

            {/* character's inventory */}
            <div className="ingame__page__right__inventory">
              <h2>Inventaire</h2>
              <div className="ingame__page__right__inventory__scroller">
                <ul>{jsxItems}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Ingame;
