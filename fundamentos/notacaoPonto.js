console.log(typeof console)
console.log(Math.ceil(6.1))

const obj = {}
obj.nome = 'bola'


function Obj(nome) {
    this.nome = nome
}

const obj2 = new Obj('Tatu')
const obj3 = new Obj('Rato')

console.log(obj2.nome)
console.log(obj3.nome)