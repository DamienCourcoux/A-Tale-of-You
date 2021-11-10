import { FaLinkedin, FaGithub } from 'react-icons/fa';

import './style.scss';

const About = () => (
  <section className="about">
    <h1 className="about__title">Team A Tale of You</h1>
    <div className="about__container">
      <div className="about__container--alexandre">
        <div className="about__container--alexandre--left">
          <img src="https://picsum.photos/50" title="Un excellent développeur" alt="Img d'Alexandre, un développeur d'A Tale of You" />
          <h2 title="Un excellent développeur">Alexandre</h2>
          <p>Lead dev back</p>
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
          <img src="https://picsum.photos/50" title="Un excellent développeur" alt="Img de Damien, un développeur d'A Tale of You" />
          <h2 title="Un excellent développeur">Damien</h2>
          <p>Dev front / Git master</p>
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
          <img src="https://picsum.photos/50" title="Un excellent développeur" alt="Img de Mikhael, un développeur d'A Tale of You" />
          <h2 title="Un excellent développeur">Mikhael</h2>
          <p>Lead dev front</p>
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
          <img src="https://picsum.photos/50" title="Un excellent développeur" alt="Img de Guillaume, un développeur d'A Tale of You" />
          <h2 title="Un excellent développeur">Guillaume</h2>
          <p>Dev front / Scrum master</p>
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
          <img src="https://picsum.photos/50" title="Un excellent développeur" alt="Img de Maxence, un développeur d'A Tale of You" />
          <h2 title="Un excellent développeur">Maxence</h2>
          <p>Dev front / Product owner</p>
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
