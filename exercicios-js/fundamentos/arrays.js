const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // não existe o indice 4, retorna undefined

valores [4] = [10]
console.log(valores)
console.log(valores.length) // retorna o tamanho do array

valores.push({id: 3}, false, null, 'teste') // adiciona novos elementos no array
console.log(valores)

console.log(valores.pop()) // remove o ultimo elemento do array
delete valores[0] // remove o elemento do indice 0
console.log(valores)

console.log(typeof valores)