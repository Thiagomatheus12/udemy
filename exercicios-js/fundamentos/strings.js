const escola = "Cod3r"

console.log(escola.charAt(4)) // começa do 0
console.log(escola.charAt(5)) // vazio
console.log(escola.charCodeAt(3)) // código da letra do unicode
console.log(escola.indexOf('3')) // posição do 3

console.log(escola.substring(1)) // começa do 1
console.log(escola.substring(0, 3)) // começa do 0 e vai até o 3 mas não inclui o 3

console.log('Escola '.concat(escola).concat("!")) // concatenação
console.log('Escola ' + escola + "!") // concatenação
console.log('3' + 2) // 32 vai concatenar ao invés de somar
console.log(escola.replace(3, 'e')) // substitui o 3 por e

console.log('Ana,Maria,Pedro' .split(',')) // transforma em array
