db.produtos.find({
    nome: { $nin: ["Big Mac", "McChicken"] } },
    { _id: false, nome: true, curtidas: 1, vendidos: 1 });