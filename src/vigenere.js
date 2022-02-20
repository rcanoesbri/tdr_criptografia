/* eslint-env browser */

function getLetter(num){
  if (num>=26){
    num = num-26;
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

window.onload = function() {
  const boton = document.getElementById('boton');
  boton.addEventListener('click', encriptar);
};