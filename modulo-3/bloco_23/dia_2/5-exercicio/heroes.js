use('super-heroes');

// Exercício 1: Inspecione um documento para que você se familiarize com a estrutura. Entenda 
// os atributos e os níveis existentes:
db.heroes.findOne();

// Exercício 2: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de
// que essa informação está em centímetros
db.heroes.find({ 'aspects.height': {$lt: 180} });

// Exercício 3: Retorne o total de super-heróis menores que 1.80m:
db.heroes.count({ 'aspects.height': {$lt: 180} });
// 421

// Exercício 4: Retorne o total de super-heróis com até 1.80m:
db.heroes.count({ 'aspects.height': {$lte: 180} });
//459

// Exercício 5: Selecione um super-herói com 2.00m ou mais de altura:
db.heroes.findOne({ 'aspects.height': {$gte: 200 } });
// {
//   "_id": {
//     "$oid": "613f457bde148e308d409a4a"
//   },
//   "name": "Abomination",
//   "alignment": "bad",
//   "gender": "Male",
//   "race": "Human / Radiation",
//   "aspects": {
//     "eyeColor": "green",
//     "hairColor": "No Hair",
//     "height": 203,
//     "weight": 200
//   },
//   "publisher": "Marvel Comics"
// }

// Exercício 6: Retorne o total de super-heróis com 2.00m ou mais:
db.heroes.count({ 'aspects.height': {$gte: 200 } });
//59

// Exercício 7: Selecione todos os super-heróis que têm olhos verdes:
db.heroes.find({ 'aspects.eyeColor': {$eq: 'green'} });

// Exercício 8: Retorne o total de super-heróis com olhos azuis:
db.heroes.count({ 'aspects.eyeColor': {$eq: 'blue'} });
// 225

// Exercício 9: Utilizando o operador $in , selecione todos os super-heróis
// com cabelos pretos ou carecas ( "No Hair" ):
db.heroes.find({ 'aspects.hairColor': { $in: [ 'Black', 'No Hair' ] } });

// Exercício 10: Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" ):
db.heroes.count({ 'aspects.hairColor': { $in: [ 'Black', 'No Hair' ] } });
// 233

// Exercício 11: Retorne o total de super-heróis que não tenham cabelos 
// pretos ou não sejam carecas:
db.heroes.count({ 'aspects.hairColor': { $nin: [ 'Black', 'No Hair' ] } });
// 501

// Exercício 12: Utilizando o operador $not, retorne o total de super-heróis
// que não tenham mais de 1.80m de altura:
db.heroes.count({ 'aspects.height': { $not: { $gt: 180 } } });
//459

// Exercício 13: Selecione todos os super-heróis que não sejam humanos nem sejam 
// maiores do que 1.80m:
db.heroes.find({
  $nor: [
    { 'race': 'Human'}, {'aspects.height': { $gt: 180} }
  ] 
});

// Exercício 14: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e 
// que sejam publicados pela Marvel Comics:
db.heroes.find({
    $and: [
      { $or: [{ 'aspects.height': 180 }, {  'aspects.height': 200 }] },
      { publisher: 'Marvel Comics' }
    ]
  }).pretty();

// Exercício 15: Selecione todos os super-heróis que pesem entre 80kg e 100kg, sejam
// Humanos ou Mutantes e não sejam publicados pela DC Comics:
db.heroes.find({
    $and: [
      { 
        'aspects.weight': { $gte: 80, $lte: 100 } 
      },
      { 
        $or: [{ race: 'Human'}, { race: 'Mutant' }] 
      },
      { 
        publisher: { $ne: 'Dc Comics' }
      }
    ]
  }).pretty();

// 16. Exercício 16: Retorne o total de documentos que não contêm o campo race:
db.heroes.count({ race: { $exists: false } });
// 304

// Exercício 17: Retorne o total de documentos que contêm o campo hairColor:
db.heroes.count({ 'aspects.hairColor': { $exists: true } });
// 562

// Exercício 18: Remova apenas um documento publicado pela Sony Pictures:
db.heroes.deleteOne({ publisher: 'Sony Pictures'});

// Exercício 19: Remova todos os documentos publicados pelo George Lucas:
db.heroes.deletemany({ publisher: 'George Lucas'});
