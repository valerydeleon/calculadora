// var numero1 = 0;
// var numero2 = 0;
// var operacion;
//
// //recibir numeros
// function mostrarNumero(numero){
//   if(document.getElementById("resultado").value == "0" || numero1 == 0 ){
//     numero1 = numero;
//   } else{
//     numero1 += numero;
//   }
//   document.getElementById("resultado").value = numero1;
// }








//        *********  Este es el bueno  ************

function mostrarNumero(valor){
  var input =  document.getElementById("operacion")
  input.value += valor;
}

function almacenar(){
    var numeros =document.getElementById("operacion").value;
    var respuesta = document.getElementById('resultado');
    var almacen = numeros.split("+");
    var suma= Number(almacen[0]) + Number(almacen [1]);
    respuesta.value = suma;
  }

function borrar(){
  var inputC = document.getElementById("operacion")
  inputC.value = "";
}











// function sumar(num1, num2){
//
// }

//
// var num1 = parseInt(document.getElementById("btn1").value);
// var num2 = parseInt(document.getElementById("btn2").value);
//
// var xNum =
//
// var numeros = {
//
// }
