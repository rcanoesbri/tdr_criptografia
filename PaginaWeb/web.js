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

let historiaclick = true;
//const enigma = document.getElementById("maquinaenigma");
            //enigma.scrollIntoView();

document.getElementById("2").onclick = function () {
    if (historiaclick===false){
        document.getElementById("historia").style.display = 'none';
            historiaclick = true;
    } else {
        historiaclick = false;
        document.getElementById("historia").style.display = '';
    }  
}

let clasicaclick = true;

document.getElementById("3").onclick = function () {
    if (clasicaclick===false){
        document.getElementById("clasica").style.display = 'none';
        clasicaclick = true;
    } else {
        clasicaclick = false;
        document.getElementById("clasica").style.display = '';
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


document.getElementById('documentdownload').onclick = function(){
    window.location='TdR.pdf';
}

document.getElementById('enigmabutton').onclick = function (){
    document.getElementById("maquinaenigma").scrollIntoView();
}

document.getElementById('antiguitatbutton').onclick = function (){
    document.getElementById("antiguitat").scrollIntoView();
}

document.getElementById('imperiromabutton').onclick = function (){
    document.getElementById("greciairoma").scrollIntoView();
}

document.getElementById('edatmitjanabutton').onclick = function (){
    document.getElementById("edatmitjana").scrollIntoView();
}

document.getElementById('polialfabeticbutton').onclick = function (){
    document.getElementById("polialfabetic").scrollIntoView();
}

document.getElementById('albertibutton').onclick = function (){
    document.getElementById("alberti").scrollIntoView();
}

document.getElementById('xifratvigenerebutton').onclick = function (){
    document.getElementById("vigenereteoria").scrollIntoView();
}

document.getElementById('edatmodernabutton').onclick = function (){
    document.getElementById("edatmoderna").scrollIntoView();
}

document.getElementById('segonaguerramunialbutton').onclick = function (){
    document.getElementById("segonaguerramundial").scrollIntoView();
}

document.getElementById('enigmabutton').onclick = function (){
    document.getElementById("maquinaenigma").scrollIntoView();
}

document.getElementById('funcionamentbutton').onclick = function (){
    document.getElementById("funcionamentenigma").scrollIntoView();
}

window.onload = function() {
    document.getElementById("historia").style.display = 'none';
    document.getElementById("clasica").style.display = 'none';
}