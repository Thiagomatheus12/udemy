let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) // !! é o operador de negação , uma ! é uma negação transforma em false
console.log(!!isAtivo) // !! é o operador de negação , uma !! transforma em true

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || 'epa'))

let nome = 'Thiago'
console.log(nome || 'Desconhecido') // se nome for vazio, retorna Desconhecido, se não, retorna nome