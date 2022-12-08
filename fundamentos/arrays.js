const valores = [1, 2, 3, 4]
console.log(valores[0], valores[3])
console.log(valores[5])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push(false, null, 'teste')
console.log(valores)

valores.pop()
console.log(valores)

delete valores[0]
console.log(valores)

console.log(typeof valores)