const textArea = document.querySelector(".textArea");
const mensajes = document.querySelector(".mensajes");

//*La letra "e" es convertida para "enter"
//*La letra "i" es convertida para "imes"
//*La letra "a" es convertida para "ai"
//*La letra "o" es convertida para "ober"
//*La letra "u" es convertida para "ufat"

function btnBoton1() {
    if (validarTexto(textArea.value)) {
        const textoEncriptado = encriptar(textArea.value);
        mensajes.value = textoEncriptado;
        textArea.value = "";
        mensajes.style.backgroundImage = "none";
        ig.style.display = "none"
        ng.style.display = "none"
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnBoton2() {
    if (validarTexto(textArea.value)) {
        const textoEncriptado = desencriptar(textArea.value);
        mensajes.value = textoEncriptado;
        textArea.value = "";
        mensajes.style.backgroundImage = "none";
        ig.style.display = "none"
        ng.style.display = "none"
        
    }
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function validarTexto(texto) {
    const tieneMayusculas = /[A-Z]/.test(texto);
    const tieneAcentos = /[áéíóúÁÉÍÓÚ]/.test(texto);
    
    if (tieneMayusculas || tieneAcentos) {
        alert("Por favor, ingrese solo letras minúsculas y sin acentos.");
        return false;
    }
    
    return true;
}
