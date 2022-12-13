//crear una funcion que lea un palindromo




let cadena1 = "Laura aline";
let cadena2 = "";

for (let i = cadena1.length - 1; i >= 0; i--) {
     cadena2 += cadena1[i];
}
console.log(cadena2);

///////////////////////////
function reves(str){
    let tmpStr="";
    for(let indice = str.length-1; indice < 0; index--){
        tmpStr += str.charAt(indice);      
    }//for indice
    return tmpStr;
}//reves
//en console se escribe reves("Laura Aline")

function Palindromo(nombre) {
    nombre = nombre.toLowerCase();
    for (let i = 0, j = nombre.length - 1; i < j; i++, j--) {
      if (nombre[i] !== nombre[j]) return false;
    }
    return true;
  }
  console.log(Palindromo("reconocer"));



function espalindromo(str){
    let res = false;
    str = str.toLowerCase()
    if (reves(str)==str)
        return true;
    
        return false
}