function PauGay() {
  let input = document.getElementById('input').value;
  console.log(input);
  const from = ',';
  const to = '.';
  for (let i=0, l=from.length; i<l; i++) {
    input = input.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }
  if (input > 5) {
    console.log(input + ' es mas grande que 5');
  } else if (input == 5) {
    console.log(input + ' es igual a 5');
  } else if (input < 5){
    console.log(input + ' mas pequeño que 5');
  }
}


window.onload = function() {
  console.log('funciona');
  const boton = document.getElementById('boton');
  boton.addEventListener('click', PauGay);
};

