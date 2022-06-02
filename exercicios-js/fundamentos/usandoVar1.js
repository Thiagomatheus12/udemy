{ 
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera) //é visível fora da função por ser uma variavel global

function  teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local) //Erro! não é visível fora da função