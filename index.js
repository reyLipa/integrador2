let boton=document.getElementById('boton');
boton.addEventListener('click',(e)=>{
   //console.log("llamando")
e.preventDefault();
llamar();


})
let llamar=()=>{
    //console.log("llamando")

let tipo=document.getElementById('tipo')
let ubicacion=document.getElementById('ubicacion')
let area=parseFloat(document.getElementById('area').value)
let categoria=document.getElementById('categoria')

//COSTO TIPO
    let costoTipo;
    if(tipo == 'hogar')
        costoTipo= 100;
    else
    costoTipo= 150

console.log(costoTipo)

//COSTO UBICACION
let costoUbicacion;
   
    if(ubicacion =='microCentro')
        costoUbicacion= 100;
    else
    costoUbicacion= 150

console.log(costoUbicacion)

//COSTO CATEGORIA
let costoCategoria;

if(categoria=='basico')
    costoCategoria=100;
else if(categoria=='intermedio')
costoCategoria=150
else 
costoCategoria=200;

console.log(costoCategoria)

//COSTO BASE
let costoBase=50;
//COSTO FINAL
let costoFinal=area*costoBase+costoTipo+costoUbicacion+costoCategoria;

let resultado=document.getElementById('resultado');
resultado.innerHTML=`el costo de seguro es : ${costoFinal}`;
console.log(`costo final de seguro `+costoFinal)
}


