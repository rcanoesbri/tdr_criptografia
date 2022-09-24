let p;
let q;
let n;
let z;
let j;

let claus = [];

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
    console.log(claus);
    let cleartext = BigInt(document.getElementById('cleartext').value);
    let ciphertext = BigInt(((cleartext**claus[4]) % claus[2]));
    console.log(ciphertext);
    document.getElementById('resultat').innerText = ciphertext;
} 

function desencriptar(){
    console.log(claus);
    let ciphertext = BigInt(document.getElementById('ciphertext').value);
    let cleartext = BigInt(((ciphertext ** claus[5]) % claus[2]));
    console.log(cleartext);
    document.getElementById('resultat').innerText = cleartext;
}

window.onload = function(){
    const boton1 = document.getElementById('crearclaus');
    boton1.addEventListener('click', calcularclaus);   
    const boton2 = document.getElementById('encriptar');
    boton2.addEventListener('click', encriptar);
    const boton3 = document.getElementById('desencriptar');
    boton3.addEventListener('click', desencriptar);
}