function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log("É verdade... " + valor)
    }
}

seForVerdadeEuFalo() // Não irá funcionar, pois o valor é undefined, ou seja, não é possível comparar com undefined.
seForVerdadeEuFalo(null) // Não irá funcionar, pois o valor é null, ou seja, não é possível comparar com null.
seForVerdadeEuFalo(undefined) // Não irá funcionar, pois o valor é undefined, ou seja, não é possível comparar com undefined.
seForVerdadeEuFalo(NaN) // Não irá funcionar, pois o valor é NaN, ou seja, não é possível comparar com NaN.
seForVerdadeEuFalo('') // Não irá funcionar, pois o valor é vazio, ou seja, não é possível comparar com vazio.
seForVerdadeEuFalo(0) // Não irá funcionar, pois o valor é 0, ou seja, não é possível comparar com 0.
seForVerdadeEuFalo(-1) 
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})