import './styles.scss';

// == Composant
const Rules = () => (
  <div className="rules">

    <div className="rules__h1">Règles du jeu</div>

    {/* <div className="rules__h2">Introduction</div>

    <div className="rules__text">
      Ce projet s’inspire directement des livres dont vous êtes le héros, un genre de romans ayant pour caractéristiques d’être interactifs. Le déroulement de l’histoire dépend des choix du lecteur. A la fin de chaque paragraphe, des choix vous sont proposés. Selon votre choix, vous êtes redirigé vers un autre paragraphe qui en décrit les conséquences, vous propose de nouveaux choix d’actions, vous invite à vous rendre à un autre paragraphe, etc… Jusqu’à la réussite de votre mission (et donc la fin du roman)... ou l’échec!
    </div>

    <div className="rules__text">
      A Tale of You a pour but de s’inspirer de grands classiques des livres dont vous êtes le héros ainsi que des jeux de rôle pour proposer de prendre part à des aventures inédites à ses utilisateurs. A Tale of You possède ses propres mécaniques de jeu, notamment pour les combats.
    </div> */}

    <div className="rules__h2">Caractéristiques des entités</div>

    <div className="rules__text">
      Les entités possèdent toutes une caractéristique variable au cours de la partie : les points de vie. Cette caractéristique représente la force vitale. Lorsqu'elle tombe à 0, l'entité est vaincue.
    </div>

    <div className="rules__text">
      Les entités possèdent quatre caractéristiques fixes au cours de la partie :
      <ul>
        <li>La force (FOR en jeu)</li>
        <li>La dextérité (DEX en jeu)</li>
        <li>L'intelligence (INT en jeu)</li>
        <li>Le charisme (CHA en jeu)</li>
      </ul>
      Une de ces quatre caractéristiques sera la caractéristique dite "primaire" d'une entité. Cela sera représenté sur la fiche de l'entité par l'intitulé de la caractéristique en gras.
    </div>
    <div className="rules__text">
      Ces caractéristiques serviront au cours de l'aventure à déterminer l'issue d'une action. Par exemple :
      <ul>
        <li>Intimider une entité pourrait être plus simple pour un personnage possédant une force élevée</li>
        <li>Scruter une pièce sans se faire repéré par de potentielles ennemis pourrait être plus simple pour un personnage possédant une dextérité élevée</li>
        <li>Comprendre l'utilité d'un artefact pourrait être plus simple pour un personnage possédant une intelligence élevée</li>
        <li>Diminuer l'hostilité d'une entité envers vous pourrait être plus simple pour un personnage possédant un charisme élevé</li>
      </ul>
    </div>
    <div className="rules__text">
      Ces caractéristiques seront aussi très importantes lors des combats (cf plus bas).
    </div>

    <div className="rules__h2">Classes jouables</div>

    <div className="rules__text">
      A ce stade, quatre classes sont jouables. La caractéristique primaire de la classe en question sera supérieure à la moyenne. La caractéristique primaire de chaque classe est :
      <ul>
        <li>Le guerrier : force</li>
        <li>Le roublard : dextérité</li>
        <li>Le magicien : intelligence</li>
        <li>Le barde : charisme</li>
      </ul>
    </div>

    <div className="rules__h2">Les jets</div>

    <div className="rules__text">
      Un jet consiste à lancer un dé à 20 faces et y ajouter d'autres valeurs telles celle d'une caractéristique ou d'un bonus d'équipement. Trois types de jets peuvent avoir lieux au cours d'une partie :
      <ul>
        <li>Les jets d'action, lorsque le joueur doit effectuer un jet pour déterminer l'issue d'une action.</li>
        <li>Les jets d'attaque, en combat lorsque le joueur tente d'attaquer un ennemi.</li>
        <li>Les jets de parade, en combat lorsque le joueur tente de parer une attaque ennemie.</li>
      </ul>
    </div>

    <div className="rules__h2">Conditions de réussite d'un jet d'action</div>

    <div className="rules__text">
      Au cours de son aventure, le joueur pourrait être amené à effectuer un jet afin de déterminer l'issue d'une action. Cette action est appelée "jet d'action". Le joueur lance alors un dé à 20 faces et additionne le résultat du lancer à la caractéristique liée à l'action. Si le résultat est supérieur ou égale à une valeur (stockée sur nos serveurs), alors l'action est réussie!
    </div>

    <div className="rules__h2">Equipements</div>

    <div className="rules__text">
      Le personnage incarné par le héros commence son aventure avec des équipements ne procurant aucun effet particulier.
    </div>
    <div className="rules__text">
      Il sera amené au cours de ses péripéties à en trouver de plus performants. Les équipements procureront des bonus fixes aux jets effectués par le joueur.
    </div>
    <div className="rules__text">
      Il sera amené au cours de ses péripéties à en trouver de plus performants. Les équipements procureront des bonus fixes aux jets effectués par le joueur.
    </div>
    <div className="rules__text">
      Il existe trois types d'équipements :
      <ul>
        <li>Les armes : bonus aux jets d'attaque</li>
        <li>Les armures : bonus aux jets de défense</li>
        <li>Les accessoires : bonus aux jets d'action</li>
      </ul>
    </div>

    <div className="rules__h2">L'inventaire</div>

    <div className="rules__text">
      Au cours de l'aventure, le personnage sera amené à prendre possession d'objets tels que des clés, des parchemins ou encore des artefacts. Ces objets permettront au joueur d'avoir accès à de nouvelles actions à certains moments de l'aventure, ils sont donc très importants et peuvent même être indispensables à la réussite de l'aventure, alors ne les ratez pas!
    </div>

    <div className="rules__h2">Interface de jeu en dehors des combats</div>

    <div className="rules__text">
      Cette interface sera décomposée en 2 parties :
      <ul>
        <li>A gauche :
          <ul>
            <li>La contenu textuel du paragraphe en cours. Décrit la scène et les différentes actions qui vous sont proposées de faire.</li>
            <li>Des boutons. Permet d'envoyer une information au jeu :
              <ul>
                <li>Si un seul bouton : indique au jeu d'afficher le paragraphe suivant. Généralement "Continuer" sera inscrit à l'intérieur du bouton.</li>
                <li>Si plusieurs boutons : indique au jeu l'action que vous avez décidé d'exécuter. Un bref résumé de l'action en question sera inscrit à l'intérieur du bouton. Si l'issue d'une action est conditionnée par un jet de dé, la caractéristique utilisée pour déterminer l'issue sera indiquée entre guillemets.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>A droite :
          <ul>
            <li>Une icone permettant d'accéder à un résumé des règles.</li>
            <li>Les caractéristiques du personnage joué. Sa caractéristique primaire est affichée en gras.</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </li>
      </ul>
    </div>

    <div className="rules__h2">Interface de jeu durant les combats</div>
    {/* à compléter */}

  </div>
);

// == Export
export default Rules
