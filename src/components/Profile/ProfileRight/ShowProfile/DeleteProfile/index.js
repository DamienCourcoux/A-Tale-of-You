// == Import
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  createDeleteProfilAction,
  createNoDeleteProfilAction,
} from 'src/actions/user';

import './style.scss';

// == Composant
const DeleteProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = () => {
    dispatch(createDeleteProfilAction());
    history.replace('/');
  };

  const handleNoDelete = () => {
    dispatch(createNoDeleteProfilAction());
  };

  return (
    <div className="modal modal--close">
      <div className="modal__content">
        <h2>Supprimer mon profil</h2>
        <p>Souhaitez-vous vraiment nous quitter? Cette action est définitive.</p>
        <div className="modal__content--button">
          <button
            type="button"
            className="yes"
            onClick={handleDelete}
          >
            Oui
          </button>
          <button
            type="button"
            className="no"
            onClick={handleNoDelete}
          >
            Non
          </button>
        </div>
      </div>
    </div>
  );
};

// == Export
export default DeleteProfile;
