console.log("MENU");
console.log("1. Triangulo");
console.log("2. Rectangulo");
console.log("3. Circulo");
var opcion =1;
var parametros= [5,10];

function areaTriangulo(parametros){
	return (parametros[0]*parametros[1])/2;}
function areaRectangulo(parametros){
	return (parametros[0]* parametros[1]);}
function areaCirculo(parametros){
	var r=parametros[0]
	return ((r*r)*Math.PI);}

if(opcion == 1){
	var operacion = areaTriangulo;
}
if(opcion == 2){
	var operacion = areaRectangulo;
}
if(opcion == 3){
	var operacion = areaCirculo;
}
function Area(operacion, parametros) {
	return operacion(parametros);}

console.log(" opcion " , opcion);
console.log("parametros",parametros);
console.log("area ",Area(operacion,parametros));	