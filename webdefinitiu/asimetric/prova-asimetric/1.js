document.getElementById("vigenere").onclick = function () {
  location.href = "PaginaWeb/src/vigenere/vigenere.html";
}

document.getElementById("cesar").onclick = function () {
  location.href = "PaginaWeb/src/cesar/cesar.html";
}

document.getElementById("asimetrica").onclick = function () {
  location.href = "PaginaWeb/src/asimetric/prova-asimetric/1.html";
}

document.getElementById("teoria").onclick = function () {
  location.href = "PaginaWeb/webcopy.html";
}

document.getElementById("paginaprincipal").onclick = function () {
  location.href = "PaginaWeb/introduccio.html";
}

let p;
let q;
let n;
let z;
let j;

let claus = [];

let cleartext = [];
let textfinal = [];
let ciphertext = [];

function getLetter(str){
  let text = str;
  let length = text.length;
  for (i=0; i<length; i++){
    let number = Number(text[i]);
    textfinal[i] = String.fromCharCode(number);
  }
  cleartext = textfinal;
}

function getNum(str){
  let text = str
  let length = text.length;
  for (i=0; i<length; i++){
    cleartext[i] = BigInt(text.charCodeAt(i));
  }
  console.log(cleartext);
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

function processtext(){
  let text = document.getElementById('textaprocessar').value;
  text = text.toUpperCase();
  text = sanitizetext(text);
  console.log(text);
  texto = getNum(text);
  document.getElementById('textprocessat').innerText = cleartext;
  console.log(cleartext);
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
    let num = Math.floor(Math.random() * 1000);
    prime = isPrime(num);
    if (prime === true){
      console.log('works');
      return num;
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
    let z = (p-1)*(q-1);
    console.log(z);
    document.getElementById('z').innerText = z;
    let k = findCoprime(z);
    console.log(k);
    document.getElementById('k').innerText = k;
    let j = findj(z, k);
    console.log(j);
    document.getElementById('j').innerText = j;
    claus = [BigInt(p), BigInt(q), BigInt(n), BigInt(z), BigInt(k), BigInt(j)];
    console.log('works');
}

function encriptar(){
  let length = cleartext.length;
  for (i=0; i<length; i++){
    console.log(claus);
    ciphertext[i] = BigInt(((cleartext[i]**claus[4]) % claus[2]));
    console.log(ciphertext);
    document.getElementById('resultat').innerText = ciphertext;
  }
  console.log(ciphertext);
  let textencriptat = ciphertext.join('');
  document.getElementById('resultat').innerText = textencriptat;
  return ciphertext;
} 

function desencriptar(){
  let length = ciphertext.length;
  for (i=0; i<length; i++){
    console.log(claus);
    cleartext[i] = BigInt(((ciphertext[i]**claus[5]) % claus[2]));
    console.log(cleartext);
    document.getElementById('resultat').innerText = cleartext;
  }
  console.log(cleartext);
  let result = getLetter(cleartext);
  let textfinal = cleartext.join('');
  document.getElementById('resultat').innerText = textfinal;
}

function funciona (){
  console.log('funciona');
}

window.onload = function(){
    const boton1 = document.getElementById('crearclaus');
    boton1.addEventListener('click', calcularclaus);   
    boton1.addEventListener('click', funciona);
    const boton2 = document.getElementById('encriptar');
    boton2.addEventListener('click', encriptar);
    const boton3 = document.getElementById('desencriptar');
    boton3.addEventListener('click', desencriptar);
    const boton4 = document.getElementById('boton');
    boton4.addEventListener('click', processtext); 
}
