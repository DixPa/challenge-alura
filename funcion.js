function encriptar () {

    let mensajeEncriptado = document.getElementById("textoIngresado").value;

    mensajeEncriptado = mensajeEncriptado.replace (/e/g, "enter");
    mensajeEncriptado = mensajeEncriptado.replace (/i/g, "imes");
    mensajeEncriptado = mensajeEncriptado.replace (/a/g, "ai");
    mensajeEncriptado = mensajeEncriptado.replace (/o/g, "ober");
    mensajeEncriptado = mensajeEncriptado.replace (/u/g, "ufat");

    console.log(mensajeEncriptado);
    document.getElementById("textoEncriptado").value = mensajeEncriptado;
}
function desencriptar() {

    let mensajeDesencriptado = document.getElementById("textoIngresado").value;

    mensajeDesencriptado = mensajeDesencriptado.replace(/enter/g, "e");
    mensajeDesencriptado = mensajeDesencriptado.replace(/imes/g, "i");
    mensajeDesencriptado = mensajeDesencriptado.replace(/ai/g, "a");
    mensajeDesencriptado = mensajeDesencriptado.replace(/ober/g, "o");
    mensajeDesencriptado = mensajeDesencriptado.replace(/ufat/g, "u");

    console.log(mensajeDesencriptado);
    document.getElementById("textoEncriptado").value = mensajeDesencriptado;
}
function copiartexto() { 
    var textoEntregado = document.getElementById("textoEncriptado");
    textoEntregado.select();
    document.execCommand("copy");
}

document.querySelector('#boton1').addEventListener('click',function(){
    document.querySelector('.chico').style.display='none';
    document.querySelector('.mensaje').style.display='none';
    document.querySelector('.mensaje2').style.display='none';
    document.querySelector('#textoEncriptado').style.display='block';
});

document.querySelector('#boton2').addEventListener('click',function(){
    document.querySelector('.chico').style.display='none';
    document.querySelector('.mensaje').style.display='none';
    document.querySelector('.mensaje2').style.display='none';
    document.querySelector('#textoEncriptado').style.display='block';
});
let botonEncriptar = document.getElementById("boton1");
botonEncriptar.onclick = encriptar;

let botonDesencriptar = document.getElementById("boton2")
botonDesencriptar.onclick = desencriptar;

let botonCopiar = document.getElementById("boton3")
botonCopiar.onclick = copiartexto;
