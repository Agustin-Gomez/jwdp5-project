///////////////////////////////////////////////////////////// RECUPERATION DES DIFFERENTS ELEMENTS DANS LE LOCAL STORAGE POUR LES AFFICHER AU CHARGEMENT DE LA PAGE/////////////////////////////////////////////////////////////////

const maConfirmation = document.querySelector("#lacommande");

const contact = JSON.parse(localStorage.getItem("contact"));
const orderId = JSON.parse(localStorage.getItem("orderId"));
const total = JSON.parse(localStorage.getItem("total"));

maConfirmation.innerHTML += `

            <h2>
              Merci pour votre commande n° <span id="confirmation_numero">${orderId}</span>
            </h2>
            <h2>
              Prix total de votre commande <span id="confirmation_prix">${total.toFixed(
                2
              )}€</span>
            </h2>
             <ul>
                 <li class="coordonnées">Vos coordonnées : </li>
                 <li>Nom : ${contact.firstName}</li>
                 <li>Prénom : ${contact.lastName}</li>
                 <li>Adresse : ${contact.address}</li>
                 <li>Ville : ${contact.city}</li>
                <li>Adresse mail : ${contact.email}</li>
             </ul>
            <p>
              Nous vous remercions d'avoir passé commande chez Orinoco! A
              bientôt!
            </p>
            <p>Livraison en France gratuite.</p>
            <p></p>
            <p>
              Service au petit soin: nous sommes à votre disposition du lundi au
              samedi de 09h à 18h.
            </p>
            <p></p>
            <p>
              Satisfait ou rembousé: 30jours pour changer d'avis, retour sans
              frais et sans conditions.
            </p>
            <p></p>
            <p>Paiement 100% sécurisé.</p>
            <p></p>
`;

localStorage.removeItem("contact");
localStorage.removeItem("total");
localStorage.removeItem("orderId");
