import {
  FaLinkedin,
  FaGithub,
  FaDAndD,
} from 'react-icons/fa';
import {
  GiMonkey,
  GiSpaceNeedle,
  GiOneEyed,
  GiMagicGate,
} from 'react-icons/gi';

import './style.scss';

const About = () => (
  <section className="about">
    <h1 className="about__title">Team A Tale of You</h1>
    <div className="about__container">
      <div className="about__container--alexandre">
        <div className="about__container--alexandre--left">
          <FaDAndD className="aboutIcon" title="Une illustration d'un excellent développeur d'A Tale of You (Alexandre)" />
          <h2 title="Un excellent développeur">Alexandre</h2>
          <div>Lead dev back</div>
        </div>
        <div className="about__container--alexandre--right">
          <h2>Réseaux</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/alexandre-morvan-65361199/"
                title="Linkedin d'Alexandre"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AlexandreMorvan"
                title="GitHub d'Alexandre"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="about__container--damien">
        <div className="about__container--damien--left">
          <GiMonkey className="aboutIcon" title="Une illustration d'un excellent développeur d'A Tale of You (Damien)" />
          <h2 title="Un excellent développeur">Damien</h2>
          <div>Dev front / Git master</div>
        </div>
        <div className="about__container--damien--right">
          <h2>Réseaux</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/damiencourcoux/"
                title="Linkedin de Damien"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DamienCourcoux"
                title="GitHub de Damien"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="about__container--mikhael">
        <div className="about__container--mikhael--left">
          <GiSpaceNeedle className="aboutIcon" title="Une illustration d'un excellent développeur d'A Tale of You (Mikhael)" />
          <h2 title="Un excellent développeur">Mikhael</h2>
          <div>Lead dev front</div>
        </div>
        <div className="about__container--mikhael--right">
          <h2>Réseaux</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/mikhael-orloff-612091176"
                title="Linkedin de Mikhael"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/RaX-T1"
                title="GitHub de Mikhael"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="about__container--guillaume">
        <div className="about__container--guillaume--left">
          <GiOneEyed className="aboutIcon" title="Une illustration d'un excellent développeur d'A Tale of You (Guillaume)" />
          <h2 title="Un excellent développeur">Guillaume</h2>
          <div>Dev front / Scrum master</div>
        </div>
        <div className="about__container--guillaume--right">
          <h2>Réseaux</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/GuillaumeBodart/"
                title="Linkedin de Guillaume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/guillaume806"
                title="GitHub de Guillaume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="about__container--maxence">
        <div className="about__container--maxence--left">
          <GiMagicGate className="aboutIcon" title="Une illustration d'un excellent développeur d'A Tale of You (Maxence)" />
          <h2 title="Un excellent développeur">Maxence</h2>
          <div>Dev front / Product owner</div>
        </div>
        <div className="about__container--maxence--right">
          <h2>Réseaux</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/maxence-tassery-8b5045202/"
                title="Linkedin de Maxence"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Maxence-TASSERY"
                title="GitHub de Maxence"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
export default About;
