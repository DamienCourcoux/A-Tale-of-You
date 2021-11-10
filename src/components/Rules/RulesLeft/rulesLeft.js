// == Import
import './rulesLeft.scss';

// == Composant
const RulesLeft = () => (
  <div className="rulesLeft shadow">
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

    <ul>
      <li>La force (FOR en jeu)</li>
      <li>La dextérité (DEX en jeu)</li>
      <li>L'intelligence (INT en jeu)</li>
      <li>Le charisme (CHA en jeu)</li>
    </ul>

    <p>
      Une de ces quatre caractéristiques sera la caractéristique
      dite "primaire"d'une entité. Cela sera représenté sur la fiche
      de l'entité par l'intitulé de la caractéristique en gras.
    </p>

    <p>
      Ces caractéristiques serviront au cours de l'aventure à déterminer
      l'issue d'une action. Par exemple :
    </p>

    <ul>
      <li>
        Intimider une entité pourrait être plus simple pour un personnage
        possédant une force élevée
      </li>
      <li>
        Scruter une pièce sans se faire repéré par de potentielles ennemis
        pourrait être plus simple pour un personnage possédant une dextérité élevée
      </li>
      <li>
        Comprendre l'utilité d'un artefact pourrait être plus simple
        pour un personnage possédant une intelligence élevée
      </li>
      <li>
        Diminuer l'hostilité d'une entité envers vous pourrait être
        plus simple pour un personnage possédant un charisme élevé
      </li>
    </ul>

    <p>
      Ces caractéristiques seront aussi très importantes lors des combats (cf plus bas).
    </p>

    <h2>Classes jouables</h2>

    <p>
      A ce stade, quatre classes sont jouables. La caractéristique primaire
      de la classe en question sera supérieure à la moyenne. La caractéristique
      primaire de chaque classe est :
    </p>

    <ul>
      <li>Le guerrier : force</li>
      <li>Le roublard : dextérité</li>
      <li>Le magicien : intelligence</li>
      <li>Le barde : charisme</li>
    </ul>

    <h2>Les jets</h2>

    <p>
      Un jet consiste à lancer un dé à 20 faces et y ajouter d'autres valeurs
      telles celle d'une caractéristique ou d'un bonus d'équipement.
      Trois types de jets peuvent avoir lieux au cours d'une partie :
    </p>

    <ul>
      <li>
        Les jets d'action, lorsque le joueur doit effectuer un jet
        pour déterminer l'issue d'une action.
      </li>
      <li>
        Les jets d'attaque, en combat lorsque le joueur tente d'attaquer
        un ennemi.
      </li>
      <li>
        Les jets de parade, en combat lorsque le joueur tente de parer
        une attaque ennemie.
      </li>
    </ul>

    <h2>Conditions de réussite d'un jet d'action</h2>

    <p>
      Au cours de son aventure, le joueur pourrait être amené à effectuer
      un jet afin de déterminer l'issue d'une action. Cette action est appelée
      "jet d'action". Le joueur lance alors un dé à 20 faces et additionne le
      résultat du lancer à la caractéristique liée à l'action. Si le résultat
      est supérieur ou égale à une valeur (stockée sur nos serveurs),
      alors l'action est réussie!
    </p>

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
      Il sera amené au cours de ses péripéties à en trouver de plus performants.
      Les équipements procureront des bonus fixes aux jets effectués par le joueur.
    </p>

    <p>
      Il existe trois types d'équipements :
    </p>

    <ul>
      <li>Les armes : bonus aux jets d'attaque</li>
      <li>Les armures : bonus aux jets de défense</li>
      <li>Les accessoires : bonus aux jets d'action</li>
    </ul>

    <h2>L'inventaire</h2>

    <p>
      Au cours de l'aventure, le personnage sera amené à prendre possession
      d'objets tels que des clés, des parchemins ou encore des artefacts.
      Ces objets permettront au joueur d'avoir accès à de nouvelles actions
      à certains moments de l'aventure, ils sont donc très importants et peuvent
      même être indispensables à la réussite de l'aventure, alors ne les ratez pas!
    </p>

    <h2>Interface de jeu en dehors des combats</h2>

    <p>
      Cette interface sera décomposée en 2 parties :
    </p>

    <ul>
      <li>A gauche :
        <ul>
          <li>
            La contenu textuel du paragraphe en cours. Décrit la scène et
            les différentes actions qui vous sont proposées de faire.
          </li>
          <li>
            Des boutons. Permet d'envoyer une information au jeu :
            <ul>
              <li>
                Si un seul bouton : indique au jeu d'afficher le paragraphe suivant.
                Généralement "Continuer" sera inscrit à l'intérieur du bouton.
              </li>
              <li>
                Si plusieurs boutons : indique au jeu l'action que vous avez
                décidé d'exécuter. Un bref résumé de l'action en question sera inscrit
                à l'intérieur du bouton. Si l'issue d'une action est conditionnée
                par un jet de dé, la caractéristique utilisée pour déterminer
                l'issue sera indiquée entre guillemets.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>A droite :
        <ul>
          <li>
            Une icone permettant d'accéder à un résumé des règles.
          </li>
          <li>
            Les caractéristiques du personnage joué. Sa caractéristique
            primaire est affichée en gras.
          </li>
          {/* <li></li>
          <li></li>
          <li></li> */}
        </ul>
      </li>
    </ul>

    <h2>Interface de jeu durant les combats</h2>
    {/* à compléter */}
    <div className="hr" />
  </div>
);

// == Export
export default RulesLeft;
