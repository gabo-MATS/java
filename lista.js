function agregar (lista){
	for (i=0; i < lista.lenght; i++){
 		copia.push(original[i]) 
	};
	lista.push(8);
	return lista ;
}

var original = [4,5,6];

console.log (original);
console.log (agregar(original));