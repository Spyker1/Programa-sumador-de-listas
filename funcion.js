function sumarListas(listaA, listaB) {
    let resultado = [];
    let maxLength = Math.max(listaA.length, listaB.length);

    for (let i = 0; i < maxLength; i++) {
        let suma = (listaA[i % listaA.length] || 0) + (listaB[i % listaB.length] || 0);
        resultado.push(suma);
    }

    return resultado;
}

// Ejemplo 1
let listaA1 = [1, 2, 3, 4];
let listaB1 = [7, 6, 5, 4, 9];
let resultado1 = sumarListas(listaA1, listaB1);
console.log("Lista A1:", listaA1);
console.log("Lista B1:", listaB1);
console.log("Resultado 1:", resultado1);

// Ejemplo 2
let listaC2 = [1, 2, 3, 4, 5, 6];
let listaD2 = [1, 2];
let resultado2 = sumarListas(listaC2, listaD2);
console.log("Lista C2:", listaC2);
console.log("Lista D2:", listaD2);
console.log("Resultado 2:", resultado2);
