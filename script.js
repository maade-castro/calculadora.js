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


// Agrega un evento de escucha de teclado al campo de entrada de texto
document.getElementById('pantalla').addEventListener('keydown', function(event) {
    // Obtiene el valor de la tecla presionada
    const keyValue = event.key;

    // Verifica si la tecla presionada es un número, un operador válido o la tecla "Backspace"
    if (/[\d\+\-\*\/\.]/.test(keyValue)) {
        // Agrega la tecla presionada a la pantalla
        agregar(keyValue);
    } else if (keyValue === 'Enter') {
        // Si se presiona la tecla "Enter", calcula el resultado
        calcular();
    } else if (keyValue === 'Escape') {
        // Si se presiona la tecla "Escape", borra la pantalla
        borrar();
    } else if (keyValue === 'Backspace') {
        // Si se presiona la tecla "Backspace", borra el último carácter en la pantalla
        const pantalla = document.getElementById('pantalla');
        pantalla.value = pantalla.value.slice(0, -1);
    }
});

