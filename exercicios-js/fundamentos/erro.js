function tratarErroELancar(erro) {
    //throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
   try {
       console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }  
}  //try serve para tratar erros, ou seja, caso ocorra algum erro, ele vai executar o bloco de código dentro do try, caso não ocorra nenhum erro, ele vai executar o bloco de código dentro do catch.

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)