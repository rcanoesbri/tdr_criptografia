/*function contarlletres() {
    let text = document.getElementById("inputtext").value;
    let letter = document.getElementById("inputlletra").value;
    let count = text.split(letter).length-1;
    document.getElementById("resultat").innerText = count;
    console.log(count);
    return count;
}*/

function contarlletres() {
    let letter;
    let count = 0;
    let frequencies = [];
    let text = document.getElementById("inputtext").value;
    text = sanitizetext(text);
    for (let i = 0; i < 26; i++){
        console.log(text);
        console.log(i+1);
        letter = String.fromCharCode(i+65);
        console.log(letter);
        count = text.split(letter).length - 1;
        console.log(count);
        frequencies[letter] = count;
    }
    document.getElementById("resultat").innerText = frequencies;
    console.log(frequencies);
    let lletrestotals = text.length;
    document.getElementById("lletrestotals").innerText = lletrestotals;
    return frequencies;
}

function sanitizetext(str){
    str = str.toUpperCase();
    const from = 'ÁÀÄÂÉÈËÊÍÌÏÎÓÒÖÔÚÙÜÛÑÇ';
    const to = 'AAAAEEEEIIIIOOOOUUUUNC';
    for (let i=0, l=from.length; i<l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str.replace(/[^A-Z]/g, '');
    return str;
  }

window.onload = function() {
    const boton = document.getElementById('boton');
    boton.addEventListener('click', contarlletres);
}