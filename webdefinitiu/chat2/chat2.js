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
    location.href = "index.html";
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
  
  function encriptarvigenere(){
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
        ciphernum[i] = textsanitized.charCodeAt(i) + ciphersanitized.charCodeAt(count % lengthcipher) -65 -65;
        ciphertext[i] = getLetter(ciphernum[i]);
        count++;
      } else {
        ciphertext[i] = ' ';
      }
    }
    console.log(ciphernum);
    console.log(ciphertext);
    document.getElementById('textoencriptado').innerText = ciphertext.join('');
  }
  
  function desencriptarvigenere(){
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
        ciphernum[i] = textsanitized.charCodeAt(i) - ciphersanitized.charCodeAt(count % lengthcipher);
        ciphertext[i] = getLetter(ciphernum[i]);
        count++;
      } else {
        ciphertext[i] = ' ';
      }
    }
    console.log(ciphernum);
    console.log(ciphertext);
    document.getElementById('textoencriptado').innerText = ciphertext.join('');
  }

function isPrime(num) {
    if (num <= 3) {
      return num > 1;
    }
    if ((num % 2 === 0) || (num % 3 === 0)) {
      return false;
    }
    let count = 5;
    while (Math.pow(count, 2) <= num) {
      if (num % count === 0 || num % (count + 2) === 0) {
        return false;
      }
      count += 6;
    }
    return true;
  }

function randomnumber(){
  let prime = false;
  while (prime === false){
    let num = Math.floor(Math.random() * 3000 + 1000);
    prime = isPrime(num);
    if (prime === true){
      console.log('works');
      return num;
      break;
    }
  }
}

function factorizar(num) {
    let factors = [];
    if (num % 2 === 0){
      factors[1] = 2;
    }
    if (num % 3 === 0) {
      factors[2] = 3;
    }
    let count = 5;
    let strposition = 3;
    while (count <= num) {
      if (num % count === 0) {
        if (isPrime(count) === true){
          factors[strposition] = count;
          strposition++;
        }
      }
      if (num % (count + 2) === 0) {
        if (isPrime(count+2) === true){
          factors[strposition] = count + 2;
          strposition++;
        }
      }
      count += 6;
    }
    console.log(factors);
    return factors;
}

function findCoprime(num) {
    let coprime=false;
    let factors = factorizar(num);
    let count = 1;
    let coPrime;
    while (coprime === false){
      let num2 = 16 + count;
      let length = factors.length;
      let strposition = 1;
      while (strposition <= length+1) {
        if (num2 % factors[strposition] === 0) {
          break;
        } else if (strposition === length){
          coprime = true;
          coPrime = num2;
        }
        strposition++;
      }
      count++;
    }
    return coPrime;
}


function findj(num1, num2) {
    let found = false;
    let z = num1;
    console.log(z);
    let k = num2;
    console.log(k);
    let x=1;
    while (found === false){
        let j = ((1+(x*z))/k);
        console.log(j % 1);
        console.log(j % 1 === 0);
        x++;
        if (j % 1 == 0){
            console.log(j);
            found = true;
            return j;
        }
    }
    return j;
}

function calcularclaus(){
    let p = randomnumber();
    console.log(p);
    document.getElementById('p').innerText = p;
    let q = randomnumber();
    console.log(q);
    document.getElementById('q').innerText = q;
    let n = p*q;
    console.log(n);
    document.getElementById('n').innerText = n;
    document.getElementById('n2').innerText = n;
    document.getElementById('n3').innerText = n;
    let z = (p-1)*(q-1);
    console.log(z);
    document.getElementById('z').innerText = z;
    let k = findCoprime(z);
    console.log(k);
    document.getElementById('k').innerText = k;
    document.getElementById('k2').innerText = k;
    let j = findj(z, k);
    console.log(j);
    document.getElementById('j').innerText = j;
    document.getElementById('j2').innerText = j;
    claus = [BigInt(p), BigInt(q), BigInt(n), BigInt(z), BigInt(k), BigInt(j)];
    console.log('works');
}

function encriptar(){
    console.log(claus);
    text = document.getElementById('cleartext').value;
    cleartext = text.toUpperCase();
    let count = cleartext.length;
    console.log(count);
    let clearnums = [];
    for (i=0; i<count; i++){
        clearnums[i] = cleartext.charCodeAt(i);
    }
    console.log(clearnums);
    let clearnum = clearnums.join('');
    console.log(clearnum);
    cleartext = BigInt(clearnum);
    claus[4] = BigInt(document.getElementById('inputk').value);
    claus[2] = BigInt(document.getElementById('inputn').value);
    ciphertext = BigInt(((cleartext**claus[4]) % claus[2]));
    console.log(ciphertext);
    document.getElementById('resultat').innerText = ciphertext;
} 

function desencriptar(){
    console.log('botonfunciona');
    console.log(claus);
    console.log(ciphertext);
    claus[5] = BigInt(document.getElementById('inputj').value);
    claus[2] = BigInt(document.getElementById('inputn2').value);
    cleartext = BigInt((ciphertext ** claus[5]) % claus[2]);
    let resultat = Number(cleartext); 
    console.log(resultat);
    let text = [];
    resultat = resultat.toString();
    let tamany = resultat.length;
    console.log(tamany);
    let count = 0;
    let number = resultat.split('');
    console.log(number);
    for (i=0; i<tamany/2; i++){
        text[i] = number[count] + number[count+1];
        count = count+2;
    }
    let letters = [];
    for (i=0; i<tamany/2; i++){
        letters[i] = String.fromCharCode(text[i]);
    }
    document.getElementById('resultat').innerText = letters.join('');
}


let asimetricaclick = true;

document.getElementById("encriptacioasimetrica").onclick = function () {
    if (asimetricaclick===false){
        document.getElementById("asimetric").style.display = 'none';
        asimetricaclick = true;
    } else {
        asimetricaclick = false;
        document.getElementById("asimetric").style.display = '';
    }  
}

let vigenereclick = true;

document.getElementById("encriptaciovigenere").onclick = function () {
    if (vigenereclick===false){
        document.getElementById("vigenere2").style.display = 'none';
        vigenereclick = true;
    } else {
        vigenereclick = false;
        document.getElementById("vigenere2").style.display = '';
    }  
}

window.onload = function(){
    const boton1 = document.getElementById('crearclaus');
    boton1.addEventListener('click', calcularclaus);   
    const boton2 = document.getElementById('encriptar');
    boton2.addEventListener('click', encriptar);
    const boton3 = document.getElementById('desencriptar');
    boton3.addEventListener('click', desencriptar);
    document.getElementById("vigenere2").style.display = 'none';
    document.getElementById("asimetric").style.display = 'none';
    const boton = document.getElementById('boton');
    const boton4 = document.getElementById('boton2');
    boton.addEventListener('click', encriptarvigenere);
    boton4.addEventListener('click', desencriptarvigenere);
}
