// Prisiskiriame kintamuosius html elementams:
const gnomes = document.querySelectorAll('img');
const container = document.getElementById('div1');

// Kiekvienam gnomui pridedame ir atimame po naujai sukurtą klasę, kuri padaro paveikslėlį nematomu:
gnomes.forEach(gnome => {
  gnome.addEventListener('dragstart', () => {
    gnome.classList.add('dragging');
  })

  gnome.addEventListener('dragend', () => {
    gnome.classList.remove('dragging');
  })
})

// Įgaliname elemento perkėlimą:
container.addEventListener('dragover', e => {
  // Pakeičia cursor, kuris rodo, kad galima perkelti į atitinkamą container:
  e.preventDefault();
  // Kintamasis paimtam laikomam gnomui:
  const gnome = document.querySelector('.dragging');
  // Pridedamas gnomas prie kontainerio div1:
  container.appendChild(gnome);
})