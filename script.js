document.addEventListener("DOMContentLoaded", () => {

    // Sélectionner les éléments à l'aide de leur identifiant
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Fonction pour générer une couleur aléatoire au format hexadécimal
  function getRandomColor() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'); // Générer une couleur hexadécimale aléatoire (#RRGGBB)
    return randomColor;
  }

  // Ajouter un écouteur d'événements au bouton pour changer la couleur de la boîte
  changeColorBtn.addEventListener('click', () =>{
    const newColor = getRandomColor();  // Appliquer une nouvelle couleur à la boîte de couleur
    colorBox.style.backgroundColor = newColor;
  });

});