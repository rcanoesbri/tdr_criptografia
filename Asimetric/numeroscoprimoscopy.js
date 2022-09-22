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

function findCoprime() {
  let num = document.getElementById('num').value;
  let coprime=false;
  let factors = factorizar(num);
  let count = 1;
  let coPrime;
  while (coprime === false){
    let num2 = num - count;
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
  document.getElementById('result').innerText = coPrime;
  return coPrime;

}

function isPrime(numero) {
  if (numero <= 3) {
    return numero > 1;
  }

  if ((numero % 2 === 0) || (numero % 3 === 0)) {
    return false;
  }

  let count = 5;

  while (Math.pow(count, 2) <= numero) {
    if (numero % count === 0 || numero % (count + 2) === 0) {
      return false;
    }

    count += 6;
  }

  return true;

}

function load(){
  let num = document.getElementById('num').value;
  let factores = factorizar(num);
  console.log('funciona');
  document.getElementById('result').innerText = factores;
}

window.onload = function() {
  console.log('funciona');
  const boton = document.getElementById('boton');
  boton.addEventListener('click', load);
};
