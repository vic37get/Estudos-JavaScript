//Destructuring

const pessoa = {
    nome:'Ana',
    idade: '25',
    endereco: {
        logradouro: 'Rua Abc',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)