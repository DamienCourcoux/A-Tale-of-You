// == Import
import { FaImages } from 'react-icons/fa';

import './styles.scss';

// == Composant
const SelectCharacter = () => {
  const toto = 'SelectCharacter';

  return (
    <div className="select_character">
      <div className="select_character__content">
        <div className="select_character__list">
          <div className="select_character__fake_image select_character__fake_image--50">
            <FaImages size={25} />
          </div>
          <div className="select_character__fake_image select_character__fake_image--50">
            <FaImages size={25} />
          </div>
          <div className="select_character__fake_image select_character__fake_image--50">
            <FaImages size={25} />
          </div>
          <div className="select_character__fake_image select_character__fake_image--50">
            <FaImages size={25} />
          </div>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptas quas hic, quia error maxime et corporis,
        reprehenderit quam voluptates mollitia veritatis, temporibus quo
        voluptatem aut dolor corrupti sed. Aspernatur, earum!
      </div>
    </div>
  );
};

export default SelectCharacter;
