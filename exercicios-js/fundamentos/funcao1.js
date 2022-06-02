//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Não funciona
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // ignora o restante somando somente os 2 primeiros que foram definidos na function
imprimirSoma() // Não funciona

//Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())