function crearclaus(){
  let array_claus = [];
  let p = randomnumber();
  document.getElementById('p').innerText = p;
  array_claus[1] = p;
  let q = randomnumber();
  document.getElementById('q').innerText = q;
  array_claus[2] = q;
  let n = p*q;
  document.getElementById('n').innerText = n;
  array_claus[3] = n;
  let phiN = (p-1)*(q-1);
  document.getElementById('phiN').innerText = phiN;
  array_claus[4] = phiN;
  let e = findCoprime(phiN);
  document.getElementById('e').innerText = e;
  array_claus[5] = e;
  let d = findD(phiN, e);
  document.getElementById('d').innerText = d;
  array_claus[6] = d;
  return array_claus;
}

function crearapartirPQ(){
  let array_claus = [];
  let p = document.getElementById('pinput').value;
  document.getElementById('p').innerText = p;
  array_claus[0] = p;
  let q = document.getElementById('qinput').value;
  document.getElementById('q').innerText = q;
  array_claus[1] = q;
  let n = p*q;
  document.getElementById('n').innerText = n;
  array_claus[2] = n;
  let phiN = (p-1)*(q-1);
  document.getElementById('phiN').innerText = phiN;
  array_claus[3] = phiN;
  let e = findCoprime(phiN);
  document.getElementById('e').innerText = e;
  array_claus[4] = e;
  let d = findD(phiN, e);
  document.getElementById('d').innerText = d;
  array_claus[5] = d;
  return array_claus;
}

function encriptar(){
  let claus = crearclaus();
  let ciphertext;
  let e = claus[4];
  let n = claus[3];
  let cleartext = document.getElementById('cleartext').value;
  ciphertext = (cleartext ** e) % n;
  document.getElementById('result').innerText = ciphertext;
}

function encriptarapartirPQ(){
  let claus = crearapartirPQ();
  let ciphertext;
  let e = claus[4];
  let n = claus[3];
  let cleartext = document.getElementById('cleartext').value;
  ciphertext = (cleartext ** e) % n;
  document.getElementById('result').innerText = ciphertext;
}

function desencriptar(){
  let d = document.getElementById('dinput').value;
  let n = document.getElementById('ninput').value;
  let ciphertext = document.getElementById('ciphertext').value;
  let cleartext = (ciphertext ** d) % n;
  console.log(cleartext);
  document.getElementById('result').innerText = cleartext;
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
  let number = 0;
  while (prime === false){
    let num = Math.floor(Math.random() * 50);
    prime = isPrime(num);
    if (prime === true){
      console.log('works');
      number = num;
      break;
    }
  }
  return number;
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

function findD(phiN, e){
  let d;
  let dFound = false;
  let count = 1;
  while (dFound === false){
    let N =phiN-count;
    if ((N*e - 1) % phiN === 0){
      d = N;
      dFound = true;
      break;
    }
    count++;
  }
  return d;
}

window.onload = function() {
  console.log('funciona');
  const boton1 = document.getElementById('clausaleatories');
  boton1.addEventListener('click', crearclaus);
  const boton2 = document.getElementById('encriptar');
  boton2.addEventListener('click', encriptar);
  const boton3 = document.getElementById('desencriptar');
  boton3.addEventListener('click', desencriptar);
  const boton4 = document.getElementById('crearapartirPQ');
  boton4.addEventListener('click', encriptarapartirPQ);
};
