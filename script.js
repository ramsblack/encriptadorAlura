//const textoEncriptado = document.querySelector('.textoEncrip')

function validarTexto(){
    let texto = document.querySelector('.textoEncrip').value;
    let acentos = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/;
    let validador = texto.match(acentos);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

    
function encriptarTexto(){
    
}


