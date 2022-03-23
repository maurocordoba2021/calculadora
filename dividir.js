function dividir (numeroA, numeroB) {
    if (numeroA != 0 && numeroB != 0) {
    return numeroA / numeroB
} else {
    return 'No se puede dividir por cero'
}
}
module.exports = dividir;
//console.log(dividir(10, 5))
//console.log(dividir(0, 5))
