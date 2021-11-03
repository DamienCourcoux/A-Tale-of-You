export default [
  // Contenu de select all from stories
  // Les balises <p> sont laissées intentionnellement, ça nous sera utile pour plus tard
  {
    id: 1,
    name: 'Le Chevalier Noir',
    description: '<p>Il y a bien longtemps, un petit mais puissant royaume humanoïde existait là où maintenant se trouve une étendue sauvage. Des guerriers gobelours et ogres firent une brutale guerre d’expansion, gagnant en renommée et amassant une considérable fortune de leurs prédations. Ceux qui mourraient au combat étaient enterrés dans de larges complexes tombaux creusés aux flancs des collines, et honorés par leur peuple comme des exemples à suivre.</p><p>Parmi ces tombes ce trouvait le large pic connu sous le nom de Haute-Tour. Bien qu’il ne s’agissait ni de la plus grande ni du plus connue des tombes du royaume, Haute-Tour représente un exemple type de ces structures</p>',
    id_paragraph: 1,
  },
  // Contenu de select all from characters
  [
    {
      id: 1,
      class: 'Guerrier',
      image: null,
      primary_carac: 'strength',
      hp: 50,
      strength: 25,
      dexterity: 20,
      intelligence: 20,
      charism: 20,
    },
    {
      id: 2,
      class: 'Roublard',
      image: null,
      primary_carac: 'dexterity',
      hp: 50,
      strength: 20,
      dexterity: 25,
      intelligence: 20,
      charism: 20,
    },
    {
      id: 3,
      class: 'Magicien',
      image: null,
      primary_carac: 'intelligence',
      hp: 50,
      strength: 20,
      dexterity: 20,
      intelligence: 25,
      charism: 20,
    },
    {
      id: 4,
      class: 'Barde',
      image: null,
      primary_carac: 'charism',
      hp: 50,
      strength: 20,
      dexterity: 20,
      intelligence: 20,
      charism: 25,
    },
  ],
];
