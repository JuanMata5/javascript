
// funciones intro
// bloque de codigo que realiza una tarea especifica
// codigo mas organizado y reutilizable

function nombreFunction(parametro1, parametro2){
    // Cuerpo de la funcion
    // Código que realiza una tarea
    return 'valor';
}

/////////////////////////////////////////////////////////////////////

function saludar(nombre) {
   return 'Hola ' + nombre
}

const saludo = saludar('David');
console.log(saludo)
  
////////////////////////////////////////////////////////////////////
function suma(numero1, numero2){
if(!isNaN(numero1) && !isNaN(numero2)){
     return Number(numero1) + Number(numero2);
}
return 'los valores ingresados no son numeros';
}


 function suma(numero1, numero2){
   return numero1 + numero2;
}