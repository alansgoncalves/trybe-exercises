use('agg_example');

db.clients.find();
db.transactions.find();

// 1. Selecione todos os clientes com as suas respectivas transações feitas:
// db.clients.aggregate([
//   {
//     $lookup: {
//       from: "transactions",
//       localField: "name",
//       foreignField: "from",
//       as: "transactions_docs"
//     }
//   },
// ]);

// 2. Selecione quatro clientes com as suas respectivas transações recebidas:
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_docs"
    }
  },
   { $limit : 4 }
]);

// 3. Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas:
db.clients.aggregate([
  {
    $match: { State: 'Florida' },
  },
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_docs"
    },
  },
]);
