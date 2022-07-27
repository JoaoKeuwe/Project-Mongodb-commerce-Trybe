db.produtos.find({
    ingredientes: {
    $all: ["picles"],
} }, 
{
valoresNutricionais: { $slice: 3 }, 
nome: true,
ingredientes: true,
_id: false,
}); 