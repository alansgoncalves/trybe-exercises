// Exercício 1 : Retorne o documento com o _id igual a 8.

db.bios.find({_id: 8});
[
  {
    _id: 8,
    name: { first: 'Yukihiro', aka: 'Matz', last: 'Matsumoto' },
    birth: ISODate("1965-04-14T04:00:00.000Z"),
    contribs: [ 'Ruby' ],
    awards: [
      {
        award: 'Award for the Advancement of Free Software',
        year: '2011',
        by: 'Free Software Foundation'
      }
    ]
  }
]
