// J'avais un problème que j'ai rencontré sur le JS, à chaque fois que je cliqué sur le bouton submit du form pour le mail le DarkMode s'annulé à cause du refresh de la page. J'ai donc créer un fonction qui évite le refresh auto

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form-mail");

    form.addEventListener("submit", function(event) {
    
        event.preventDefault();
    });
});


// La fonction pour le DarkMode qui ajoute une class dark sur le body au clique sur le bouton DarkMode

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})