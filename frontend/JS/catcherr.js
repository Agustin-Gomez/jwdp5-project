////////////////////////////////////////Affichage d'un message d'erreur si la connexion n'a pas pu se faire correctement avec le serveur //////////////////////////////////////////////////////////////////////

function displayError() {
  const section = document.querySelector(".eR");

  section.innerHTML += `
        <p class="section__error">Suite à un problème technique nous ne pouvons afficher correctement la page. </br> Rééssayer plus tard.</p>
    `;
}
