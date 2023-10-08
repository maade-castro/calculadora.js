//esta funcion esta concatenada con el html usando getElementById
//el value es propiedad del input y agrega el valor del boton que toquemos en la calculadora
function agregar (valor){
    document.getElementById('pantalla').value += valor
}

//esta funcion borra la pnatlla
//al dejar el valor vacio limpara la pantalla (value=' ')
function borrar() {
    document.getElementById ('pantalla').value = ''
}


//esta accion calcula lo mostrado en la pantalla de la calculadora
//valorPantalla= traemos el documento de html y le colamos value para que genere caracteres en la pantalla
//resultado= eval es propio de js y calcula matematicamente su contenido
//el valor es igaul al calculo de eval (value=resultado)
function calcular (){
    const valorPantalla= document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado 
}