db.produtos.find({ vendidos:
     { $gt: 50, $lt: 100 } }, { nome: true, vendidos: true, _id: 0 }).sort({ vendidos: 1 });