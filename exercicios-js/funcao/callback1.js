//Callback = chamar de volta
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // forEach é uma função que recebe uma função como parâmetro
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

fabricantes.forEach(fabricante => console.log(fabricante)) // arrow function