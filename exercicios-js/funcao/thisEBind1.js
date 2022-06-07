const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e o o

const falardePessoa = pessoa.falar.bind(pessoa) // bind serve para passar o this
falardePessoa() 