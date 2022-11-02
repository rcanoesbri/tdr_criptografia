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


function getLetter(num){
    if (num>=26){
      num = num-26;
    } else if (num<0){
      num = num+26;
    }
    return String.fromCharCode(num + 65);
  }
  
  function sanitizecipher(str){
    const from = 'ÁÀÄÂÉÈËÊÍÌÏÎÓÒÖÔÚÙÜÛÑÇ';
    const to = 'AAAAEEEEIIIIOOOOUUUUNC';
    for (let i=0, l=from.length; i<l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str.replace(/[^a-z]/g, '');
    return str;
  }
  
  function sanitizetext(str){
    const from = 'ÁÀÄÂÉÈËÊÍÌÏÎÓÒÖÔÚÙÜÛÑÇ';
    const to = 'AAAAEEEEIIIIOOOOUUUUNC';
    for (let i=0, l=from.length; i<l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str.replace(/[^a-z0-9]/g, '');
    return str;
  }
  
  function encriptar(){
    console.log('funciona');
    let cipher = document.getElementById('cipher').value;
    cipher = cipher.toUpperCase();
    let ciphersanitized = sanitizecipher(cipher);
    let lengthcipher=ciphersanitized.length;
    console.log(lengthcipher);
  
    let plaintext = document.getElementById('plaintext').value;
    plaintext = plaintext.toUpperCase();
    let textsanitized = sanitizetext(plaintext);
    let lengthplaintext = textsanitized.length;
    let ciphernum = [];
    let ciphertext = [];
    let count = 0;
  
    console.log(plaintext);
    console.log(textsanitized);
    console.log(cipher);
    console.log(ciphersanitized);
  
  
    for (let i = 0; i < lengthplaintext; i++) {
      if (textsanitized.charCodeAt(i) >= 65 && textsanitized.charCodeAt(i) <= 90){
        ciphernum[i] = textsanitized.charCodeAt(i) + ciphersanitized.charCodeAt() -65 -65;
        ciphertext[i] = getLetter(ciphernum[i]);
        count++;
      } else {
        ciphertext[i] = ' ';
      }
    }
    console.log(ciphernum);
    console.log(ciphertext);
    document.getElementById('clauprocessada1').innerText = ciphersanitized;
    document.getElementById('textprocessat1').innerText = textsanitized;
    document.getElementById('textoencriptado').innerText = ciphertext.join('');
  }
  
  function desencriptar(){
    console.log('funciona');
    let cipher = document.getElementById('cipher').value;
    cipher = cipher.toUpperCase();
    let ciphersanitized = sanitizecipher(cipher);
    let lengthcipher=ciphersanitized.length;
    console.log(lengthcipher);
  
    let plaintext = document.getElementById('plaintext').value;
    plaintext = plaintext.toUpperCase();
    let textsanitized = sanitizetext(plaintext);
    let lengthplaintext = textsanitized.length;
    let ciphernum = [];
    let ciphertext = [];
    let count = 0;
  
    console.log(plaintext);
    console.log(textsanitized);
    console.log(cipher);
    console.log(ciphersanitized);
  
  
    for (let i = 0; i < lengthplaintext; i++) {
      if (textsanitized.charCodeAt(i) >= 65 && textsanitized.charCodeAt(i) <= 90){
        ciphernum[i] = textsanitized.charCodeAt(i) - ciphersanitized.charCodeAt();
        ciphertext[i] = getLetter(ciphernum[i]);
        count++;
      } else {
        ciphertext[i] = ' ';
      }
    }
    
    console.log(ciphernum);
    console.log(ciphertext);
    document.getElementById('clauprocessada1').innerText = ciphersanitized;
    document.getElementById('textprocessat1').innerText = textsanitized;
    document.getElementById('textoencriptado').innerText = ciphertext.join('');
  }
  
  window.onload = function() {
    const boton = document.getElementById('boton');
    const boton2 = document.getElementById('boton2');
    boton.addEventListener('click', encriptar);
    boton2.addEventListener('click', desencriptar);
  };