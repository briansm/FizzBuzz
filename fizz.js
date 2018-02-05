var numeros=100;
//ciclo que imprimen numeros del 1 al 100
for(var i=1;i<=numeros;i++){
  if(esdiv(i,3)){
    document.write("Fizz");
  }
  if(esdiv(i,5)){
    document.write("Buzz");
  }
  if(!esdiv(i,3)&&!esdiv(i,5)){
    document.write(i);
  }
  document.write("<br/>");
}

//Funcion que comprueba si es divisible
function esdiv(iter,num){
  if(iter%num==0){
    return true;
  }else{
    return false;
  }
}
