// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  //boceto: 
  /*var arrayClaves = Object.keys(objeto);
  var arrayValores = Object.values(objeto);
  var arrayConjunto = [];
  for(var i=0; i<arrayClaves.lenght; i++);
    for(var j=0; j<arrayValores.lenght; j++); 
      arrayConjunto.push([arrayClaves[i]+','+arrayValores[j]]);
    return arrayConjunto;
    */
    var nuevoArreg = [];
    Object.entries(objeto).forEach(([key, value]) =>{
      nuevoArreg.push([key + ',' + value]);
    }); return nuevoArreg;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  /*var objeto = {};
  var arr = [];
  for(var i=0; i<string.length; i++) {
    if(string[i] === string.charAt(i)) {
    arr.push(string[i]);
    objeto[string[i]] = arr.length;
  }}; return objeto; */
  var objeto = {};
  for(var i=0; i<string.length; i+=1) {
    if(objeto[string[i]]) {
      objeto[string[i]]+=1
    } else {
      objeto[string[i]]=1;}
  } return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayu = '';
  var mini = '';
  for(var i=0; i<s.length; i+=1) {
    if(s[i] === s.charAt(i).toUpperCase()) {
      mayu = mayu + s[i];
    } else {
      mini = mini + s[i];
    }
  } return mayu + mini;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var vuelta = '';
  for(var i=str.length-1; i>=0; i--) {
    vuelta = vuelta + str[i]
  } var vuel2 = vuelta.split(' ').reverse();
  return vuel2.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var capic = numero.toString();
  var cape2 = '';
  for(var i=capic.length-1; i>=0; i--) {
    cape2 = cape2 + capic[i];
  }
  if(capic === cape2) {
    return 'Es capicua';
  } return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var strsinabc = '';
  for(var i=0; i<cadena.length; i++) {
    if(cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c') {
      strsinabc = strsinabc + cadena[i];
    }
  } return strsinabc;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var acum = [];
  for(var i=0; i<arr.length; i++) 
    for(var j=0; j<arr.length; j++) {
      if(arr.length[i]<arr.length[j]) {
        acum.unshift(arr[i])
      } 
      if (arr.length[i]>arr.length[j]) {
        acum.push(arr[i])
      }
    } return acum;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var inters = [];
  for(var i=0; i<arreglo1.length; i+=1)
    for(var j=0; j<arreglo2.length; j+=1) {
      if(arreglo1[i] === arreglo2[j]) {
        inters.push(arreglo1[i])
      }
    }
    return inters;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

