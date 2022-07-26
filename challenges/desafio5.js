db.produtos.find({ $or: [{ vendidos: { $eq: 85 } }, { curtidas: { $eq: 36 } }] },
    { _id: false, nome: true, curtidas: true, vendidos: true });