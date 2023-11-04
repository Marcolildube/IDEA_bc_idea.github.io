const subtitle = document.getElementById('subtitle');
const words = subtitle.innerText.split(' ');
subtitle.innerHTML = '';

let currentWordIndex = 0;

function showWords() {
  if (currentWordIndex < words.length) {
    subtitle.innerHTML += words[currentWordIndex] + ' ';
    currentWordIndex++;
    setTimeout(showWords, 1000); // Ajustez le délai (en millisecondes) entre chaque mot
  } else {
    currentWordIndex = 0; // Réinitialise l'index pour recommencer la boucle
    subtitle.innerHTML = '';
    setTimeout(showWords, 1000);
  }
}

showWords();
