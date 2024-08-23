// Función para encriptar el texto
function encriptarTexto(texto) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    texto = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    let textoResultado = document.getElementById("outputText");
    textoResultado.select();
    document.execCommand("copy");
}

// Event listeners para los botones
document.querySelector('.btn-primary').addEventListener('click', function() {
    let texto = document.getElementById("inputText").value;
    if (texto) {
        let resultado = encriptarTexto(texto);
        mostrarResultado(resultado);
    } else {
        resetearMensaje();
    }
});

document.querySelector('.btn-secondary').addEventListener('click', function() {
    let texto = document.getElementById("inputText").value;
    if (texto) {
        let resultado = desencriptarTexto(texto);
        mostrarResultado(resultado);
    } else {
        resetearMensaje();
    }
});

// Función para mostrar el resultado en la pantalla
function mostrarResultado(resultado) {
    let messageSection = document.querySelector('.message-section');
    messageSection.innerHTML = `
        <textarea id="outputText">${resultado}</textarea>
        <div class="buttons">
        <button class="btn-copy btn-copy" onclick="copiarTexto()">Copiar</button>
        </div>
    `;
}

// Función para resetear la sección de mensaje a su estado original
function resetearMensaje() {
    let messageSection = document.querySelector('.message-section');
    messageSection.innerHTML = `
        <img class="muneco" src="src/Muñeco.png" alt="Muñeco" />
        <h2>Ningún mensaje fue encontrado</h2>
        <p>Ingresa el texto que desees encriptar o desencriptar.</p>
    `;
}
