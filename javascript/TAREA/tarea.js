

//

//function sumaArray(array){
  // guardan el resultado en una variable resultado

  // recorremos el array y por cada elemendo lo suman a la variable

  // retornan la variable

  //return 'suma del array';
//}




// EJERCICIO 1
const numeros = [1, 5, 6, 8];

function sumaArray(array) {
  let resultado = 0; // Inicializamos la variable resultado en 0

  for (let i = 0; i < array.length; i++) {
    resultado += array[i]; // Sumamos cada elemento del array a la variable resultado
  }

  return resultado; // Retornamos la suma total
}

const sumaTotal = sumaArray(numeros); // Llamamos a la función y guardamos el resultado en sumaTotal
console.log(sumaTotal); // Imprime la suma total de los elementos del array



// EJERCICIO 2
const numerosConValidaciones = [1, '5', 6, '8'];

// Definimos la función sumaArray que toma un array como entrada
function sumaArray(array) {
  let resultado = 0; // Inicializamos la variable resultado en 0

  // Iteramos a través del array utilizando un bucle for
  for (let i = 0; i < array.length; i++) {
    resultado += parseInt(array[i]); // Sumamos cada elemento del array al resultado (incluso si es una cadena)
  }

  return resultado; // Retornamos el resultado de la suma
}

const sumaTotalValidacion = sumaArray(numerosConValidaciones); // Llamamos a la función con el array de números con validaciones
console.log(sumaTotalValidacion); // Imprimimos el resultado de la suma (en este caso, debería ser 20)


//EJERCICIO 3 
const numerosConErroresNull = [1, '5', null, '8'];

// Definimos la función sumaArray que toma un array como entrada
function sumaArray(array) {
  let resultado = 0; // Inicializamos la variable resultado en 0

  // Iteramos a través del array utilizando un bucle for
  for (let i = 0; i < array.length; i++) {
    // Comprobamos si el elemento actual no es nulo y es un número válido
    if (array[i] !== null && !isNaN(array[i])) {
      resultado += parseInt(array[i]); // Si es así, sumamos el número al resultado
    }
  }

  return resultado; // Retornamos el resultado de la suma
}

const sumaTotalNull = sumaArray(numerosConErroresNull); // Llamamos a la función con el array de números con nulos
console.log(sumaTotalNull); // Imprimimos el resultado de la suma


// EJERCICIO 4 
const numerosConErroresString = [1, 'vdsvsdasd', null, '8'];

// Definimos la función sumaArray que toma un array como entrada
function sumaArray(array) {
  let resultado = 0; // Inicializamos la variable resultado en 0

  // Iteramos a través del array utilizando un bucle for
  for (let i = 0; i < array.length; i++) {
    // Comprobamos si el elemento actual es un número y no es NaN
    if (typeof array[i] === 'number' && !isNaN(array[i])) {
      resultado += array[i]; // Si es así, sumamos el número al resultado
    } 
    // Si el elemento es una cadena
    else if (typeof array[i] === 'string') {
      const numeroParseado = parseInt(array[i]); // Intentamos convertir la cadena a número
      // Verificamos si la conversión fue exitosa y no resultó en NaN
      if (!isNaN(numeroParseado)) {
        resultado += numeroParseado; // Si es un número válido, lo sumamos al resultado
      }
    }
  }

  return resultado; // Retornamos el resultado de la suma
}

const sumaTotalString = sumaArray(numerosConErroresString); // Llamamos a la función con el array problemático
console.log(sumaTotalString); // Imprimimos el resultado de la suma
