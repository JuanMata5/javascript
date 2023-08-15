let numero = 10;

 numero = numero + 2
 numero += 2;
 numero = numero - 2
 numero -= 2
 numero = numero * 2
 numero *= 2
 numero = numero / 2
 numero /= 2
 numero++
 numero--

console.log(numero)

// == , compara VALORES
console.log( a == b ) 
console.log( a == c )
// == , compara VALORES y TIPOS
console.log( a === b ) 
console.log( a === c )
//== , compara VALORES
console.log( a != b ) 
console.log( a != c )
//== , compara VALORES y TIPOS
console.log( a !== b )
console.log( e !== e )

//conjuncion
console.log( a > 0 && a < 1) 

/*EXP 1 | EXP2 | resultado*/
true  | true | true
true  | false| false
false | true | false
false | false| false


//disyunción
console.log( a > 0 || a < 1) 

/*EXP 1 | EXP2 | resultado*/
true  | true | true
true  | false| true
false | true | true
false | false| false



// negación
console.log( !(g) )

let a = 1; // number
let b = 2; // number
let c = '1' // string
let d = true;
let e = false;
let f = null;
let g = undefined;

// negación
console.log( !(g) )

if( !!g ) {
 console.log('NO ENCONTRAMOS A AGUSTIN')
 }

 if( e ) {
  console.log('SOY TRUE');
} else {
   console.log('SOY FALSE');
 }

// CONDICION ? CONDICION CUMPLIDA (EJECUCION) : CONDICION FALLIDA
a > 0 ? console.log('SOY TRUE') : console.log('SOY False');