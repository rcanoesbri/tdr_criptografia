function findD(){
  let e = document.getElementById('num').value;
  let n = document.getElementById('num2').value;
  let d;
  let dFound = false;
  let count = 1;
  while (dFound === false){
    let N =n-count;
    if ((N*e - 1) % n === 0){
      d = N;
      dFound = true;
      break;
    }
    count++;
  }
  document.getElementById('result').innerText = d;

}

window.onload = function() {
  console.log('funciona');
  const boton = document.getElementById('boton');
  boton.addEventListener('click', findD);
};
