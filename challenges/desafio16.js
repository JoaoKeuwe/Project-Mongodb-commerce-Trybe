db.produtos.updateOne(
    {
      nome: "Big Mac" },
    { $addToSet: { ultimaModificacao: { $currentDate: { $type: "timestamps" } } } },
  );
  db.produtos.find({ ultimaModificacao: { $exists: true } }, { _id: false, nome: true });