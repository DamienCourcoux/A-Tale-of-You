// == Import
import profileData from 'src/data/profile';

import { FaPen, FaEllipsisH } from 'react-icons/fa';
import Schema from 'src/assets/schema.png';

import './profile.scss';

// == Composant
const Profile = () => (
  profileData.map((data) => (
    <section key={data.id} className="profile">
      <div className="profile__book">
        <div className="profile__book--pageLeft">
          <img src={Schema} alt="illustration" />
        </div>
        <div className="profile__book--pageRight">
          <div className="profile__book--pageRight__title">
            <h1>Profil</h1>
            <a href="#" className="profile__book--pageRight__title--menu">
              <FaEllipsisH />
            </a>
          </div>
          <span className="hr"> </span>
          <div className="profile__book--pageRight__myProfile">
            <div className="profile__book--pageRight__myProfile--image">
              <img src={data.image} alt="Votre img de profil" />
              <a href="#" className="profile__book--pageRight__myProfile--image--edit edit">
                <FaPen />
              </a>
            </div>
            <div className="profile__book--pageRight__myProfile--data">
              <div className="profile__book--pageRight__myProfile--data--title">
                <h2>{data.pseudo}</h2>
                <a href="#" className="edit">
                  <FaPen />
                </a>
              </div>
              <div className="profile__book--pageRight__myProfile--data--mail">
                <p><span>Mail:</span> {data.email}</p>
                <a href="#" className="edit">
                  <FaPen />
                </a>
              </div>
              <div className="profile__book--pageRight__myProfile--data--password">
                <p><span>Mot de passe:</span> {data.password}</p>
                <a href="#" className="edit">
                  <FaPen />
                </a>
              </div>
            </div>
          </div>
          <span className="hr"> </span>
        </div>
      </div>
    </section>
  ))
);

// == Export
export default Profile;
