// Exercício 7 : Retorne a quantidade de documentos da coleção books.

db.books.count();
431

// Exercício 8 : Conte quantos livros existem com o status = "PUBLISH".

db.books.count({ status: "PUBLISH" });
363

// Exercício 9 : Exiba os atributos title , isbn e pageCount dos 3 primeiros livros. NÃO retorne o atributo _id .

db.books.find({},{ _id: 0,  title: 1, isbn: 1, pageCount: 1 }).limit(3);

[
  {
    title: 'Specification by Example',
    isbn: '1617290084',
    pageCount: 0
  },
  {
    title: 'Collective Intelligence in Action',
    isbn: '1933988312',
    pageCount: 425
  },
  { title: 'Flex on Java', isbn: '1933988797', pageCount: 265 }
]

// Exercício 10: Pule 5 documentos e exiba os atributos _id , title , authors e status dos livros com
// o status = "MEAP" , limitando-se a 10 documentos.

db.books.find({ status: "MEAP"}, {title: 1, authors: 1, status: 1}).skip(5).limit(10);

[
  {
    _id: 550,
    title: 'Big Data',
    status: 'MEAP',
    authors: [ 'Nathan Marz', 'James Warren' ]
  },
  {
    _id: 562,
    title: 'Java Persistence with Hibernate, Second Edition',
    status: 'MEAP',
    authors: [ 'Christian Bauer', 'Gavin King', '', 'Gary Gregory' ]
  },
  {
    _id: 599,
    title: 'Augmented Reality Revealed',
    status: 'MEAP',
    authors: [ 'Robert A. Rice Jr.' ]
  },
  {
    _id: 607,
    title: 'Building Well-Structured JavaScript Applications',
    status: 'MEAP',
    authors: [ 'Julio C. Ody' ]
  },
  {
    _id: 642,
    title: 'Node.js in Practice',
    status: 'MEAP',
    authors: [ 'Alex Young', 'Marc Harter' ]
  },
  {
    _id: 637,
    title: 'Neo4j in Action',
    status: 'MEAP',
    authors: [ 'Jonas Partner', 'Aleksa Vukotic', '', 'Nicki Watt' ]
  },
  {
    _id: 648,
    title: 'RabbitMQ in Depth',
    status: 'MEAP',
    authors: [ 'Gavin M. Roy' ]
  },
  {
    _id: 649,
    title: 'Akka in Action',
    status: 'MEAP',
    authors: [
      'Raymond Roestenburg',
      'Rob Bakker',
      'Rob Williams',
      'Steven Haines'
    ]
  },
  {
    _id: 657,
    title: 'Grails in Action, Second Edition',
    status: 'MEAP',
    authors: [ 'Glen Smith', 'Peter Ledbrook' ]
  },
  {
    _id: 658,
    title: 'Rails 4 in Action',
    status: 'MEAP',
    authors: [ 'Ryan Bigg', 'Yehuda Katz', 'and Steve Klabnik', '' ]
  }
]
