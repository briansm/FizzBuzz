var numeros=100;
//ciclo que imprimen numeros del 1 al 100
for(var i=1;i<=numeros;i++){
  document.write(i+"<br/>");
}

//Funcion que comprueba si es divisible
function esdiv(iter,num){
  if(iter%num==0){
    return true;
  }else{
    return false;
  }
}
