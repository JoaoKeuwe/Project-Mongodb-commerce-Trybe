db.produtos.find({ vendidos: { $nin: [50] }, tags: { $exists: false } },
    { _id: 0, nome: 1, vendidos: 1 });