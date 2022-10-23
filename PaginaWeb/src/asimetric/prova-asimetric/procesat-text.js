function getLetter(num){
    if (num>=26){
      num = num-26;
    } else if (num<0){
      num = num+26;
    }
    return String.fromCharCode(num + 65);
}

function getNum(str){
  let text = str
  let length = text.length;
  let textnum = [];
  for (i=0; i<length; i++){
    textnum[i] = text.charCodeAt(i);
  }
  console.log(textnum);
  return textnum;
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
    let textnum = getNum(text);
    document.getElementById('textprocessat').innerText = textnum;
}

window.onload = function(){
  const boton1 = document.getElementById('boton');
  boton1.addEventListener('click', processtext);   
}
