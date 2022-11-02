document.getElementById("vigenere").onclick = function () {
    location.href = "vigenere.html";
}

document.getElementById("cesar").onclick = function () {
    location.href = "cesar.html";
}

document.getElementById("asimetrica").onclick = function () {
    location.href = "asimetric.html";
}

document.getElementById("teoria").onclick = function () {
    location.href = "teoria.html";
}

document.getElementById("paginaprincipal").onclick = function () {
    location.href = "paginainicial.html";
}

document.getElementById("musica").onclick = function () {
    location.href = "musica.html";
}


let historiaclick = true;

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

let modernaclick = true;

document.getElementById("4").onclick = function () {
    if (modernaclick===false){
        document.getElementById("moderna").style.display = 'none';
        modernaclick = true;
    } else {
        modernaclick = false;
        document.getElementById("moderna").style.display = '';
    }  
}

let aplicacionsclick = true;

document.getElementById("5").onclick = function () {
    if (aplicacionsclick===false){
        document.getElementById("aplicacions").style.display = 'none';
        aplicacionsclick = true;
    } else {
        aplicacionsclick = false;
        document.getElementById("aplicacions").style.display = '';
    }  
}

document.getElementById('1').onclick = function (){
    document.getElementById("intro").scrollIntoView();
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

document.getElementById('80i90button').onclick = function (){
    document.getElementById('80i90').scrollIntoView();
}

document.getElementById('actualitatbutton').onclick = function (){
    document.getElementById('actualitat').scrollIntoView();
}

document.getElementById('xifratmonoalfabetic').onclick = function (){
    document.getElementById('monoalfabetic').scrollIntoView();
}

document.getElementById('xifratpolialfabetic').onclick = function (){
    document.getElementById('polialfabetic2').scrollIntoView();
}

document.getElementById('xifratcesar').onclick = function (){
    document.getElementById('cesar1').scrollIntoView();
}

document.getElementById('xifratvigenere').onclick = function (){
    document.getElementById('vigenere1').scrollIntoView();
}

document.getElementById('xifratalberti').onclick = function (){
    document.getElementById('alberti1').scrollIntoView();
}

document.getElementById('analisidefrequencia').onclick = function (){
    document.getElementById('analisifrequencia1').scrollIntoView();
}

document.getElementById('simetricabutton').onclick = function (){
    document.getElementById('encriptaciosimetrica').scrollIntoView();
}

document.getElementById('DESbutton').onclick = function (){
    document.getElementById('dataencriptionstandard').scrollIntoView();
}

document.getElementById('xifratgefluxbutton').onclick = function (){
    document.getElementById('xifratgedeflux').scrollIntoView();
}

document.getElementById('xifratgeblocbutton').onclick = function (){
    document.getElementById('xifratgedebloc').scrollIntoView();
}

document.getElementById('asimetricabutton').onclick = function (){
    document.getElementById('clauasimetrica').scrollIntoView();
}

document.getElementById('algorismesasimetricabutton').onclick = function (){
    document.getElementById('algorismesasimetrica').scrollIntoView();
}

document.getElementById('RSAbutton').onclick = function (){
    document.getElementById('RSA').scrollIntoView();
}

document.getElementById('firmadigitalbutton').onclick = function (){
    document.getElementById('firmadigital').scrollIntoView();
}

document.getElementById('aplicacionsxifratgebutton').onclick = function (){
    document.getElementById('aplicacionsxifratge').scrollIntoView();
}

document.getElementById('aplicacionsfirmaelectronicabutton').onclick = function (){
    document.getElementById('aplicacionsfirmaelectronica').scrollIntoView();
}

document.getElementById('aplicacionscertificatsdigitalsbutton').onclick = function (){
    document.getElementById('aplicacionscertificatsdigitals').scrollIntoView();
}

window.onload = function() {
    document.getElementById("historia").style.display = 'none';
    document.getElementById("clasica").style.display = 'none';
    document.getElementById("moderna").style.display = 'none';
    document.getElementById("aplicacions").style.display = 'none';
}