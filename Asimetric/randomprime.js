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
    let num = Math.floor(Math.random() * 200)+ 50;
    prime = isPrime(num);
    if (prime === true){
      document.getElementById('result').innerText = num;
      console.log('works');
      break;
    }
  }
}

window.onload = function() {
  console.log('funciona');
  const boton = document.getElementById('boton');
  boton.addEventListener('click', randomnumber);
};
