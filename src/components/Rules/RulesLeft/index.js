// == Import
import './style.scss';

// == Composant
const RulesLeft = () => (
  <div className="page page_left shadow">
    <h1>Règles du jeu</h1>
    <div className="hr" />

    <h2>Caractéristiques des entités</h2>

    <p>
      Les entités possèdent toutes une caractéristique variable
      au cours de la partie : les points de vie. Cette caractéristique
      représente la force vitale. Lorsqu'elle tombe à 0, l'entité est vaincue.
    </p>

    <p>
      Les entités possèdent quatre caractéristiques fixes au cours de la partie :
    </p>

    <ul className="ul_description">
      <li>La force (FOR en jeu),</li>
      <li>La dextérité (DEX en jeu),</li>
      <li>L'intelligence (INT en jeu),</li>
      <li>Le charisme (CHA en jeu).</li>
    </ul>

    <p>
      Une de ces quatre caractéristiques sera la caractéristique
      dite "primaire" d'une entité. Cela sera représenté sur la fiche
      de l'entité par l'intitulé de la caractéristique et sa valeur en gras.
    </p>

    <p>
      Ces caractéristiques serviront au cours de l'aventure à déterminer
      l'issue d'une action. Par exemple :
    </p>

    <ul className="ul_description">
      <li>
        Intimider une entité pourrait être plus simple pour un personnage
        possédant une force élevée,
      </li>
      <li>
        Scruter une pièce sans se faire repérer par de potentielles ennemis
        pourrait être plus simple pour un personnage possédant une dextérité élevée,
      </li>
      <li>
        Comprendre l'utilité d'un artefact pourrait être plus simple
        pour un personnage possédant une intelligence élevée,
      </li>
      <li>
        Diminuer l'hostilité d'une entité envers vous pourrait être
        plus simple pour un personnage possédant un charisme élevé.
      </li>
    </ul>

    <p>
      Ces caractéristiques seront aussi très importantes lors des combats (cf plus bas).
    </p>

    <div className="step" />

    <h2>Classes jouables</h2>

    <p>
      A ce stade, quatre classes sont jouables. La caractéristique primaire
      de la classe en question sera supérieure à la moyenne. La caractéristique
      primaire de chaque classe est :
    </p>

    <ul className="ul_description">
      <li>Le guerrier : force,</li>
      <li>Le roublard : dextérité,</li>
      <li>Le magicien : intelligence,</li>
      <li>Le barde : charisme.</li>
    </ul>

    <div className="step" />

    <h2>Les jets</h2>

    <p>
      Au cours de vos aventures, il vous sera demandé d'effectuer des jets.
      Un jet consiste à lancer deux dés à six faces et d'y ajouter d'autres valeurs
      telles que celle d'une caractéristique ou d'un bonus d'équipement.
      Trois types de jets peuvent avoir lieu au cours d'une partie :
    </p>

    <ul className="ul_description">
      <li>
        Les jets d'action, lorsque le joueur tente d'effectuer un jet
        pour déterminer l'issue d'une action en dehors d'un combat,
      </li>
      <li>
        Les jets d'attaque, lorsque le joueur tente d'attaquer
        un ennemi durant un combat,
      </li>
      <li>
        Les jets de parade, lorsque le joueur tente de parer
        une attaque ennemie durant un combat.
      </li>
    </ul>

    <div className="step" />

    <h2>Conditions de réussite d'un jet d'action</h2>

    <p>
      Au cours de son aventure, le joueur pourrait être amené à effectuer
      un jet afin de déterminer l'issue d'une action en dehors d'un combat.
      Cette action est appelée "jet d'action". Le joueur lance alors deux dés
      à six faces et additionne le résultat du lancer à la caractéristique
      liée à l'action ainsi que son bonus d'accessoire. Si le résultat
      est supérieur ou égale à une valeur (fixe, stockée sur nos serveurs),
      alors l'action est réussie!
    </p>

    <div className="step" />

    <h2>Equipements</h2>

    <p>
      Le personnage incarné par le héros commence son aventure avec
      des équipements ne procurant aucun effet particulier.
    </p>

    <p>
      Il sera amené au cours de ses péripéties à en trouver de plus performants.
      Les équipements procureront des bonus fixes aux jets effectués par le joueur.
    </p>

    <p>
      Il existe trois types d'équipements :
    </p>

    <ul className="ul_description">
      <li>Les armes : bonus aux jets d'attaque,</li>
      <li>Les armures : bonus aux jets de parade,</li>
      <li>Les accessoires : bonus aux jets d'action.</li>
    </ul>

    <div className="step" />

    <h2>L'inventaire</h2>

    <p>
      Au cours de l'aventure, le personnage sera amené à prendre possession
      d'objets tels que des clés, des parchemins ou encore des artefacts.
      Ces objets permettront au joueur d'avoir accès à de nouvelles actions
      à certains moments de l'aventure, ils sont donc très importants et pourraient
      même devenir indispensables pour la réussite de l'aventure, alors ne les ratez pas!
    </p>

    <h2>Interface de jeu en dehors des combats</h2>

    <p>
      Cette interface sera décomposée en plusieurs parties :
    </p>

    <ul className="ul_description">
      <li>
        La contenu textuel du paragraphe en cours. Décrit la scène et
        les différentes actions qui vous sont proposées de faire.
      </li>
      <li>
        Des boutons. Permet d'envoyer une information au jeu sur l'action que vous décidez
        d'effectuer. Selon les paragraphes, le nombre de boutons peut varier, vous proposant
        diverses actions possibles.
      </li>
      <li>
        Les caractéristiques du personnage joué. Sa caractéristique
        primaire est affichée en gras.
      </li>
      <li>
        Les trois emplacements d'équipements du personnage joué et les bonus conférés par chacun
        d'entre eux.
      </li>
      <li>
        L'inventaire du personnage joué.
      </li>
    </ul>

    <div className="step" />

    <h2>Interface de jeu durant les combats</h2>

    <p>
      Cette interface sera décomposée en plusieurs parties :
    </p>

    <ul className="ul_description">
      <li>
        Les caractéristiques du personnage joué. Sa caractéristique
        primaire est affichée en gras.
      </li>
      <li>
        Les éventuels bonus conférés par l'arme et l'armure du personnage joué.
      </li>
      <li>
        Un interface de jet de dés. Le bouton permet de continuer le déroulement
        du combat et de passer au paragraphe suivant selon l'issue du combat.
      </li>
      <li>
        Les caractéristiques de l'ennemi joué. Sa caractéristique
        primaire est affichée en gras.
      </li>
      <li>
        L'historique de combat détaillant le tour de jeu, la phase, les jets réalisés
        ainsi que l'issue du tour.
      </li>
    </ul>

    <div className="step" />

    <h2>Le système de combat</h2>

    <p>En combat est divisé en tours correspondant à une des deux phases suivantes :</p>
    <ul className="ul_description">
      <li>
        Phase d'attaque : Le héros et l'ennemi effectuent tour à tour un lancer de dés. Ils
        additionnent la valeur de la caractéristique associée à la caractéristique primaire
        du héros. Le héros ajoute enfin la valeur de son bonus en attaque.
        <ul className="ul_description">
          <li>
            Si le résultat du jet du héros est supérieur à celui de l'ennemi, alors l'attaque est
            réussie et le héros inflige des dégâts à l'ennemi égaux à la différence des jets des
            deux entités.
          </li>
          <li>
            Si le résultat du jet du héros est inférieur ou égal à celui de l'ennemi, alors
            l'attaque échoue et le héros n'inflige aucun dégâts à l'ennemi.
          </li>
        </ul>
      </li>
      <li>
        Phase de parade : L'ennemi et le héros effectuent tour à tour un lancer de dés. Ils
        additionnent la valeur de la caractéristique associée à la caractéristique primaire
        de l'ennemi. Le héros ajoute enfin la valeur de son bonus en parade.
        <ul className="ul_description">
          <li>
            Si le résultat du jet du héros est supérieur ou égal à celui de l'ennemi, alors la
            parade est réussie et le héros ne subit aucun dégât.
          </li>
          <li>
            Si le résultat du jet du héros est inférieur à celui de l'ennemi, alors la parade
            échoue et le héros subit des dégâts égaux à la différence des jets des deux entités.
          </li>
        </ul>
      </li>
    </ul>
    <p>Un combat débute toujours par la phase d'attaque du personnage incarné par le joueur</p>

    <div className="hr" />
  </div>
);

// == Export
export default RulesLeft;
