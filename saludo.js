var sFormal= function(nombre){
	return "Buenas tardes señor "+ nombre;}

var sInformal= function(nombre){
	return "Que onda " + nombre;}

var nombre="pepe";

if(nombre=="Marc"){
	console.log(sFormal(nombre));}
else{
	console.log(sInformal(nombre));}