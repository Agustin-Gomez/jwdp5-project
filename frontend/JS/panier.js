////////////////////////////////////////////////////////////////////////SUR CETTE PAGE : AFFICHAGE DU CONTENU DU PANIER ET AFFICHAGE DE FORMULAIRE DANS STRUCTURE CONDITIONELLE////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let addBasket = document.querySelector("#monpanier");

let total = 0;

///////////////////////////////////////////////////////////////////////////AFFICHAGE DU CONTENU DU PANIER DANS FONCTION DISPLAYCART AVEC BOUCLE FOR EACH///////////////////////////////////////////////////////////////////////////////////////////////////

function displayCart() {
  if (localStorage.getItem("cartProducts") !== null) {
    let products = JSON.parse(localStorage.getItem("cartProducts"));

    addBasket.innerHTML += `
        <div class="table-responsive">   
          <h2>Détail de votre panier</h2>
            <table class="table table-bordered table-responsive " id="resume_panier">
              <thead>
                <tr>
                  <th scope="col" class="produit">Article</th>
                  <th scope="col" class="description">Nom</th>
                  <th scope="col" class="vernis">Vernis</th>
                  <th scope="col" class="quantité">Quantité</th>
                  <th scope="col" class="prix">Prix</th>
                  <th scope="col" class="supprimer">Supprimer</th>
                </tr>
              </thead>
              
              <tbody id="resume_panier_test">
                
              </tbody>
            </table>
            </div>
      `;

    let resumePanier = document.querySelector("#resume_panier_test");

    products.forEach((product) => {
      const divPrice = product.price / 100;
      const goodPrice = divPrice.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR",
      });
      const divQuantity = product.quantity / 100;
      total = total + divPrice;

      resumePanier.innerHTML += `
         <tr>
                  <td class="produit">
                    <img
                      class="card-img-top"
                      src="${product.imageUrl}"
                      alt="photo meuble"
                      id="article-photo"
                    />
                  </td>

                  <td class="description">${product.name}</td>
                  <td class="vernis">${product.selectedVarnish}</td>
                  <td class="quantité">
                    <button class="cart_remove">-</button>${product.quantity}
                    <button class="cart_add">+</button>
                  </td>
                  <td class="prix">${goodPrice}</td>
                  <td class="supprimer">
                    <button
                      type="button"
                      class="btn btn-outline-success btn-sm mb-2 "
                      id="supprimePanier"
                    >
                      X
                    </button>
                  </td>
                   `;
    });

    addBasket.innerHTML += `
    <tfoot class="thetotal">
                <tr class="totalPrice">
                  <td class="bigprice">Prix total:${total.toFixed(2)} € </td>
                </tr>
              </tfoot>`;

    //////////////////////////////////////////////////AFFICHAGE DU CONTENU DU FORMULAIRE TOUJOURS DANS FONCTION DISPLAYCART,ECOUTE DE LENVOIE DU FORMULAIRE AVEC ADDEVENTLISTENER///////////////////////////////////////////////////////////////

    let addToForm = document.querySelector("#leformulaire");

    addToForm.innerHTML += `
            <h2>
              Pour pouvoir valider votre commande merci de remplir tous les
              champs
            </h2>
             <form class="cart-form" action="post"  type="submit">
              <div class="row form-group">
                <div class="col-md-5">
                  <label for="prenom_contact">Prénom :</label>
                  <input
                    type="text"
                    name="prenom_contact"
                    id="prenom_contact"
                    class="form-control"
                    placeholder="Votre prénom"
                    pattern"/^[a-zA-Z][a-z]+([-'\s][a-zA-Z][a]+)?$/"
                    maxlength="30" 
                    required /> 
                    <span id="missPrenom"></span>
               </div>
                <div class="col-md-2"></div>
                <div class="col-md-5">
                  <label for="nom_contact">Nom :</label>
                  <input
                    type="text"
                    name="nom_contact"
                    id="nom_contact"
                    class="form-control"
                    placeholder="Votre nom"
                    maxlenght="50"
                    pattern"[A-Za-z]{2,}"
                    required />
                    <span id="missNom"></span>
                </div>
              </div>
              <div class="col-md-12 form-group">
                <label for="email_contact">Adresse mail :</label>
                <input
                    type="email"
                    name="email_contact"
                    id="email_contact"
                    class="form-control"
                    placeholder="exemple@gmail.com"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}" 
                    maxlength="30" 
                    required />
                    <span id="missEmail"></span>

              </div>
              <div class="row form-group">
                <div class="col-md-5">
                  <label for="adresse_contact">Adresse :</label>
                  <input
                    type="text"
                    name="adresse_contact"
                    id="adresse_contact"
                    class="form-control"
                    placeholder="Votre adresse"
                    maxlength="200"
                     required />
                     <span id="missAdresse"></span>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-5">
                  <label for="ville_contact">Ville :</label>
                  <input
                    type="text"
                    name="ville_contact"
                    id="ville_contact"
                    class="form-control"
                    placeholder="Votre ville"
                    maxlength="30"
                     required/>
                      <span id="missVille"></span>
                </div>
              </div>
              <button
                type="submit"
                value="valider"
                class="btn btn-danger"
                id="envoyer_commande">Commander</button>
            </form>`;

    //////////////////////////////////////////////////////////////////VERIFICATION DES DONNEES DU FORMULAIRE AVEC FONCTION VALIDATION ET ADDEVENTLISTENER NOM PRENOM VILLE///////////////////////////////////////////////////

    let prenom = document.querySelector("#prenom_contact");
    let missPrenom = document.querySelector("#missPrenom");
    let nom = document.querySelector("#nom_contact");
    let missNom = document.querySelector("#missNom");
    let ville = document.querySelector("#ville_contact");
    let missVille = document.querySelector("#missVille");
    let adresse = document.querySelector("#adresse_contact");
    let missAdresse = document.querySelector("#missAdresse");
    let email = document.querySelector("#email_contact");
    let missEmail = document.querySelector("#missEmail");
    let emailValid = /[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}/;
    let adresseValid = /^[0-9][\s][a-zA-Z][a-z]/;
    let villeValid = /^[a-zA-Z][a-z]+([-'\s][a-zA-Z][a]+)?$/;
    let nomValid = /^[a-zA-Z][a-z]+([-'\s][a-zA-Z][a]+)?$/;
    let prenomValid = /^[a-zA-Z][a-z]+([-'\s][a-zA-Z][a]+)?$/;

    function validationField(input, missInput, texte) {
      let forOk = true;

      if (input.validity.valueMissing) {
        missInput.textContent = "Veuillez remplir ce champ";
        forOk = false;
      } else if (texte.test(input.value) == false) {
        missInput.textContent = "Format incorrect";
        forOk = false;
      }

      return forOk;
    }

    function validation(e) {
      let validOk = true;

      if (
        validationField(prenom, missPrenom, prenomValid) === false ||
        validationField(nom, missNom, nomValid) === false ||
        validationField(ville, missVille, villeValid) === false ||
        validationField(adresse, missAdresse, adresseValid) === false ||
        validationField(email, missEmail, emailValid) === false
      ) {
        validOk = false;
      }

      return validOk;
    }

    const form = document.querySelector(".cart-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = validation(e);
      if (isValid == true) {
        submitForm();
      }
    });
  } else {
    let addContent = document.querySelector("#madiv");
    addContent.innerHTML += `
     <div class="col-lg-12 text-center">
       <p class="mt-5">
       Votre panier est vide ! <br />
       <a href="./index.html">Revenir à la page d'accueil</a>
      </p>
     </div>
            
        `;
  }
}
displayCart();
///////////////////////////////////////////////////////////////////////FONCTION SUBMITFORM = RECUPERATION DES VALEURES DE LINPUT DANS LOBJET CONTACT///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////RECUPERATION DES ID DES PRODUITS DU PANIER DANS LE TABLEAU PRODUCTS///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////FORMATAGE DE LOJET ET DU TABLEAU EN CHAINE DE CARATERES AVANT LENVOIE DANS FONCTION POSTORDER////////////////////////////////////////////////////////////

function submitForm() {
  let contact = {
    firstName: document.getElementById("prenom_contact").value,
    lastName: document.getElementById("nom_contact").value,
    address: document.getElementById("adresse_contact").value,
    city: document.getElementById("ville_contact").value,
    email: document.getElementById("email_contact").value,
  };

  /*let productObj = JSON.parse(localStorage.getItem("cartProducts"));
  let products =
    localStorage.getItem("cartProducts") !== null
      ? productObj.forEach((p) => {
          products.push(p._id);
        })
      : [];*/

  let products = [];

  if (localStorage.getItem("cartProducts") !== null) {
    let productObj = JSON.parse(localStorage.getItem("cartProducts"));

    productObj.forEach((p) => {
      products.push(p._id);
    });
  }

  let contactProducts = JSON.stringify({
    contact,
    products,
  });

  postOrder(contactProducts);
}

//////////////////////////////////////////////////////////////////////////////FONCTION POSTORDER = REQUETE POST//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// ENVOI AU SERVEUR L'OBJET CONTACT ET LE TABLEAU PRODUCTS AVEC LE BON FORMAT/////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// ENREGISTREMENT DE LOBJET CONTACT ET DE L'ORDERID RECUS DU SERVEUR, ET DU TOTAL DE LA COMMANDE SUR LE LOCAL STORAGE////////////////////////////////////////////////////////////////////////////////////////////////////

function postOrder(contactProducts) {
  fetch("http://localhost:3000/api/furniture/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: contactProducts,
  })
    .then((response) => {
      return response.json();
    })
    .then((r) => {
      localStorage.setItem("contact", JSON.stringify(r.contact));
      localStorage.setItem("orderId", JSON.stringify(r.orderId));
      localStorage.setItem("total", JSON.stringify(total));
      localStorage.removeItem("cartProducts");
      window.location.replace("./confirmation.html");
    })
    .catch((e) => {
      displayError();
      console.log(e);
    });
}
