/* eslint-env browser */

function getLetter(num){
  if (num>26){
    num = num-26;
  }
  return String.fromCharCode(num + 65);
}

function encriptar(){
  console.log('funciona');
  let cipher = document.getElementById('cipher').value;
  let lengthcipher=cipher.length;
  cipher = cipher.toUpperCase();
  console.log(lengthcipher);

  let plaintext = document.getElementById('plaintext').value;
  let lengthplaintext=plaintext.length;
  plaintext = plaintext.toUpperCase();
  let ciphernum = [];
  let ciphertext = [];

  for (let i = 0; i < lengthplaintext; i++) {
    if (plaintext.charCodeAt(i) >= 65 && plaintext.charCodeAt(i) <= 90){
      ciphernum[i] = plaintext.charCodeAt(i) + cipher.charCodeAt(i % lengthcipher) -65 -65;
      ciphertext[i] = getLetter(ciphernum[i]);
    } else {
      ciphertext[i] = ' ';
    }
  }
  console.log(ciphernum);
  console.log(ciphertext);
  document.getElementById('textoencriptado').innerText = ciphertext.join('');
}

window.onload = function() {
  const boton = document.getElementById('boton');
  boton.addEventListener('click', encriptar);
};
