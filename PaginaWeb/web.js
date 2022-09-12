document.getElementById("vigenere").onclick = function () {
    location.href = "src/vigenere/vigenere.html";
}

document.getElementById("cesar").onclick = function () {
    location.href = "src/cesar/cesar.html";
}

document.getElementById("teoria").onclick = function () {
    location.href = "file:///C:/Users/Ra%C3%BAlCanoEsbr%C3%AD/Desktop/tdr_criptografia/PaginaWeb/web.html";
}

document.getElementById("vigenerebutton").onclick = function () {
    location.href = "src/vigenere/vigenere.html";
}


let introclick = false;

document.getElementById("1").onclick = function () {
    if (introclick===false){
        document.getElementById("intro").innerHTML +=
            "<h3>1.1. Terminologia</h3>";
        introclick = true;
    } else {
        introclick = false;
        document.getElementById("intro").innerHTML =
            "";
    }  
}

let historiaclick = false;

document.getElementById("2").onclick = function () {
    if (historiaclick===false){
        document.getElementById("historia").innerHTML +=
            "<h3>2.1. Criptografia a l’Antiguitat</h3> <h3>2.2. Grècia i l’Imperi Romà</h3> <h3>2.3. Edat Mitjana</h3> <h3>2.4. Xifrat Polialfabètic</h3> <h4>2.4.1. Xifrat d’Alberti</h4> <h4>2.4.2. Xifrat de Vigènere</h4> <h3>2.5. Edat Moderna</h3> <h3>2.6. La segona guerra mundial</h3> <h4>2.6.1. Màquina Enigma</h4> <h5>2.6.1.1. Funcionament</h5> <h3>2.7. El boom dels 80 i 90</h3> <h3>2.8. En l’actualitat</h3>";
        historiaclick = true;
    } else {
        historiaclick = false;
        document.getElementById("historia").innerHTML =
            "";
    }  
}

let clasicaclick = false;

document.getElementById("3").onclick = function () {
    if (clasicaclick===false){
        document.getElementById("clasica").innerHTML +=
            "<h3>3.1. Xifratge Monoalfabètic</h3><h3>3.2. Xifratge Polialfabètic</h3> <h3>3.3. Xifrat Cesar</h3> <h3>3.4. Xifrat vigènere</h3>  <h3>3.5. Xifrat Alberti</h3> <h3>3.6. Anàlisi de freqüència</h3>";
        clasicaclick = true;
    } else {
        clasicaclick = false;
        document.getElementById("clasica").innerHTML =
            "";
    }  
}

let modernaclick = false;

document.getElementById("4").onclick = function () {
    if (modernaclick===false){
        document.getElementById("moderna").innerHTML +=
            "<h3>4.1. Clau simétrica</h3> <h4>4.1.1. Data Encryption Standard - DES</h4> <h4>4.1.2. Xifratge de flux</h4> <h4>4.2.3. Xifratge de bloc</h4>  <h3>4.2. Clau asimétrica</h3> <h3>4.3. Firma digital</h3>";
        modernaclick = true;
    } else {
        modernaclick = false;
        document.getElementById("moderna").innerHTML =
            "";
    }  
}

let aplicacionsclick = false;

document.getElementById("5").onclick = function () {
    if (aplicacionsclick===false){
        document.getElementById("aplicacions").innerHTML +=
            "<h3>5.1. Aplicacions de xifratge</h3> <h3>5.2. Firma electrónica</h3> <h3>4.3. Certificats digitals</h3>";
        aplicacionsclick = true;
    } else {
        aplicacionsclick = false;
        document.getElementById("aplicacions").innerHTML =
            "";
    }  
}
