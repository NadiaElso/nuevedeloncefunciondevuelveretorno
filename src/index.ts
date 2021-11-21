//por ejemplo si invocamos a la función con los parámetros 3 y a, 
//el resultado debería ser(3,a)===>[a,a,a]

function retornoarreglo(numero:number,valor:any):any {
  let exponentearreglo:any[]=new Array(numero);


  for (let index = 0; index < exponentearreglo.length; index++) {
    exponentearreglo[index]= valor
    console.log(exponentearreglo)
    
  }
 return retornoarreglo
}


retornoarreglo(3,"b");




