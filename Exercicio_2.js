function ordenarNumeros(array) {
    if (array[0] > array[1]) {
        [array[0], array[1]] = [array[1], array[0]];
    }
    return array;
}

const numeros = [5, 2];
const numerosOrdenados = ordenarNumeros(numeros);
console.log("Números ordenados:", numerosOrdenados);
