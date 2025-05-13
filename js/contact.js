
// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer le formulaire
    const form = document.querySelector('form');
    
    // Ajouter un écouteur d'événement au formulaire pour intercepter la soumission
    form.addEventListener('submit', function(event) {
        // Empêcher la soumission par défaut du formulaire
        event.preventDefault();
        
        // Récupérer tous les champs requis
        const nom = document.querySelector('input[aria-label="Identifiant"]'); //cela sert à cibler l'input qui a l'aria-label nom
        const prenom = document.querySelector('input[aria-label="Surnom"]'); //cela sert à cibler l'input qui a l'aria-label prenom
        const date = document.querySelector('input[aria-label="Date"]'); //cela sert à cibler l'input qui a l'aria-label date
        const email = document.querySelector('input[aria-label="Email"]'); //cela sert à cibler l'input qui a l'aria-label email
        const genreRadios = document.querySelectorAll('input[name="genre"]'); //cela sert à cibler les input qui ont le name genre
        const jeuxRadios = document.querySelectorAll('input[name="niveau"]'); //cela sert à cibler les input qui ont le name jeux
        
        // Vérifier si le identifiant contient 8 chiffres
        if (nom.value.trim().length === 8) { // Utilisation de trim() pour supprimer les espaces avant et aprés
            alert("L'identifiant doit contenir 8 chiffres."); // Utilisation de trim() pour supprimer les espaces avant et aprés
            nom.focus(); // Mettre le curseur sur le champ "Nom"
            return false; // Annuler la soumission
        }
        
        // Vérifier si tous les champs texte sont remplis
        if (!nom.value.trim() || !prenom.value.trim() || !date.value || !email.value.trim()) { // Utilisation de trim() pour supprimer les espaces avant et aprés
            alert("Veuillez remplir tous les champs requis."); // Utilisation de trim() pour supprimer les espaces avant et aprés
            return false; // Annuler la soumission
        }
        
        // Vérifier si un genre est sélectionné
        let genreSelectionne = false; // Utilisation de let au lieu de var
        for (const radio of genreRadios) { // Utilisation de const au lieu de let
            if (radio.checked) { // Utilisation de radio.checked au lieu de genre.checked
                genreSelectionne = true; // Utilisation de let au lieu de var
                break; // Utilisation de break au lieu de return
            }
        }
        
        if (!genreSelectionne) { // Utilisation de !genreSelectionne au lieu de !genre
            alert("Veuillez sélectionner votre genre."); // Utilisation de alert au lieu de console.log
            return false; // Utilisation de return au lieu de break
        }
        
        // Vérifier si un jeu est sélectionné
        let jeuSelectionne = false; // Utilisation de let au lieu de var
        for (const radio of jeuxRadios) { // Utilisation de const au lieu de let
            if (radio.checked) { // Utilisation de radio.checked au lieu de jeux.checked
                jeuSelectionne = true; // Utilisation de let au lieu de var
                break; // Utilisation de break au lieu de return
            }
        }
        
        if (!jeuSelectionne) { // Utilisation de !jeuSelectionne au lieu de !jeux
            alert("Veuillez sélectionner le niveau de danger."); // Utilisation de alert au lieu de console.log
            return false;
        }
        
        // Vérifier si l'email est valide
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // emailRegex est une expression régulière pour valider une adresse email
        if (!emailRegex.test(email.value.trim())) { // Utilisation de trim() pour supprimer les espaces avant et aprés
            alert("Veuillez entrer une adresse email valide."); // Utilisation de trim() pour supprimer les espaces avant et aprés
            email.focus(); // Mettre le curseur sur le champ "Email"
            return false; // Annuler la soumission
        }
        
        // Si toutes les validations sont passées, afficher un message de confirmation
        alert("✅ Votre signalement à bien été envoyé ✅"); // Utilisation de alert au lieu de console.log
        
        // Réinitialiser le formulaire
        form.reset(); // Utilisation de form.reset() au lieu de document.querySelector('form').reset()
    });
});



//
// bouton remonter en haut de la page
//

// Obtenir le bouton remonter haut de page
let mybutton = document.getElementById("scrollToTopBtn");

// Quand l'utilisateur fait défiler la page de 20px vers le bas, montrer le bouton
window.onscroll = function() {scrollFunction()};

// Fonction pour gérer l'affichage du bouton en fonction du défilement de la page
function scrollFunction() {
  // Si l'utilisateur a fait défiler plus de 20 pixels vers le bas
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // Afficher le bouton
    mybutton.style.display = "block";
  } else {
    // Sinon, cacher le bouton
    mybutton.style.display = "none";
  }
}

// Quand l'utilisateur clique sur le bouton, remonter en haut de la page
mybutton.onclick = function() {
  // Défilement en douceur jusqu'en haut de la page
  window.scrollTo({top: 0, behavior: 'smooth'});
};

//
// bouton remonter en haut de la page
//