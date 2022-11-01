//nombre de variables a-z, 1-9, $,_

nombre="Luis"
console.log(nombre)
edad=25
console.log(edad)
//EJEMPLOS DE VARIABLES: _apellido, maxValor, $dolar, 

//palabras reservadas de javascript, ojo de no usar esos nombres

var valor 
console.log(valor)
valor=4.5
console.log(valor)

var estado=true
console.log(estado)
console.log(typeof estado)

// las constantes no puede modificar su valor, se escriben en mayúscula
const IVA=21.0;
IVA=15.0;

console.log(IVA)

var numb2=new Number(25)
console.log(num2)

var valor2="35"
console.log(typeof valor2) //aquí me tiene que decir que es una cadena

nuevoValor=Number.parseInt(valor2) //convierte un string en un valor numérico
console.log(typeof nuevoValor)

var numeroA=100;
var numeroB=3
var div=numeroA/numeroB
console.log(div)
var resto=numeroA%numeroB
console.log(resto)

// operadores: +=, -=, /=

var value =+ 200;    //es igual a value=value+200
console.log(value)

var nombre = prompt ("Ingrese su nombre", "") 
document.write( "Hola " + nombre)

/*function ejercicio_9 {
let suma=0;
for (i=0;i<=5;i++){ 
        suma=suma+i; 
    }
console.log(i);
}*/
