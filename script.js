document.getElementById("btncopiar").style.display = 'none';

function encriptar(){
    const caracter = /[áéíóúàèìòù'A-Z0-9~!@#$%&*()_+|{}[\]\\\/?><^:"`]/;
    let texto = document.querySelector(".textoEncrip").value;
    if (texto == ""){
        alert("El capo no puede estar vacio");
    }else if(texto.match(caracter) != texto.match(caracter)){
        alert('El texto no puede contener acentos ni caracteres especiales');
        document.querySelector(".textoEncrip").value = "";
    } else{
        let textoEncript = texto.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat")
        console.log(textoEncript);

        document.getElementById("textoResultado").innerHTML = textoEncript;
        document.getElementById("immuneco").style.display = 'none';
        document.getElementById("btncopiar").style.display = 'inline';
        document.getElementById("textoNoEncontrado").style.display = 'none';
        document.getElementById("textoNoEncontrado2").style.display = 'none';


    }
}

function copiarTexto() {
    var elemento = document.getElementById("textoResultado");
    var Temp = document.createElement("input");
    
    Temp.value = elemento.innerText;
    document.body.appendChild(Temp);
    Temp.select();
    
    document.execCommand("copy");
    
    document.body.removeChild(Temp);
    

    alert("El texto se ha copiado al portapapeles");
  }

  function desEncriptar(){
    
    let texto = document.querySelector(".textoEncrip").value;
    if (texto == ""){
        alert("El capo no puede estar vacio");
    } else{
        let textoEncript = texto.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u")
        console.log(textoEncript);

        document.getElementById("textoResultado").innerHTML = textoEncript;
        document.getElementById("immuneco").style.display = 'none';
        document.getElementById("btncopiar").style.display = 'inline';
        document.getElementById("textoNoEncontrado").style.display = 'none';
        document.getElementById("textoNoEncontrado2").style.display = 'none';


    }
}


  
