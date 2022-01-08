function parImpar(n) {
    if (n % 2 == 0) {
        return `Par!`
    } else {
        return `Ímpar!`
    }
}

res = parImpar(10)
console.log(res)

console.log(parImpar(15))