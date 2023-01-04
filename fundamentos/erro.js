function tratarErroELancar(erro){
    throw new Error('...')
}


function imprimirNome(obj){
    try { 
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    }
}

const obj = {nome: 'Roberto'}
imprimirNome(obj)