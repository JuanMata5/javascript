// for ( inicialización ; condición ; expresión final) {
// bloque de código }

for ( let i = 0; i <= 10; i++) {
   if(i % 2 === 1){
   console.log('número => ', i);
  }
}



 for ( let i = 0; i < frutas.length; i++) {
  console.log(`fruta ${i}:`, frutas[i]);
}



 for(let fruta of frutas){
  if(fruta === 'naranja'){
     break
  }
  console.log('fruta: ', fruta);
}

