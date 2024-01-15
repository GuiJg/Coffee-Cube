//texto estilo typing animado do banner
const textElement = document.getElementById('animated-events');
const words = ['10 Shows', '20 Aniversários', '5 Palestras', '10 Feiras'];
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        textElement.innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 200);
    } else {
        setTimeout(erase, 500);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.innerHTML = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 150);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

type();