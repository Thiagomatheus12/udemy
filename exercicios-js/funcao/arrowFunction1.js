let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}  
ola = () => 'Olá' // return implícito
ola = _ => 'Olá' // possui um parametro, pode ser ignorado
console.log(ola())