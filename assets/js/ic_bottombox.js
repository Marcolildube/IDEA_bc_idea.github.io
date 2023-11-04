function toggleParagraphs(boxNumber) {
  const paragraphs = document.getElementById(`paragraphs${boxNumber}`);
  paragraphs.classList.toggle('hidden');
}

function toggleBottomBoxParagraphs() {
  const bottomBoxParagraphs = document.getElementById('bottomBoxParagraphs');
  bottomBoxParagraphs.classList.toggle('hidden');
  const bottomTitle = document.getElementById('bottomTitle');
  if (bottomBoxParagraphs.classList.contains('hidden')) {
    bottomTitle.innerText = 'Nouveau Titre';
  } else {
    bottomTitle.innerText = 'Nouveau Titre (Cliquez pour masquer)';
  }
}

