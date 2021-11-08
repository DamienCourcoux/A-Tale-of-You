// == Import
import { FaImages } from 'react-icons/fa';
import './styles.scss';
import { useEffect, useState } from 'react';
import { selectCharacters } from 'src/actions/game';
import { useDispatch, useSelector } from 'react-redux';

// == Composant
const SelectCharacter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectCharacters());
    // console.log(selectCharacters);
  }, []);

  const { classlist } = useSelector((state) => ({
    classlist: state.game.classlist,
  }));

  const selectWarrior = classlist.filter((selectChar) => selectChar.index);
  // console.log(classlist);
  console.log(selectWarrior);

  return (
    <div className="select_character">
      <div className="select_character__content">
        <p> choisis ta classe </p>
        <div className="select_character__list">
          <button type="button" onClick={() => selectWarrior}>Guerrier</button>
          <button type="button" onClick={() => selectThief}>Roublard</button>
          <button type="button" onClick={() => selectWizard}>Magicien</button>
          <button type="button" onClick={() => selectBard}>Barde</button>
          <div>
            <ul>
              {/* {selectWarrior} */}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SelectCharacter;
