////////////////////////////////////////////////////////////////////////SUR CETTE PAGE : AFFICHAGE DU CONTENU DU PANIER ET AFFICHAGE DE FORMULAIRE DANS STRUCTURE CONDITIONELLE////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const addBasket = document.querySelector("#monpanier");

let total = 0;

///////////////////////////////////////////////////////////////AFFICHAGE DU CONTENU DU PANIER DANS FONCTION DISPLAYCART AVEC BOUCLE FOR EACH///////////////////////////////////////////////////////////////////////////////////////////////////

function displayCart() {
  if (localStorage.getItem("cartProducts") !== null) {
    const products = JSON.parse(localStorage.getItem("cartProducts"));

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

    const resumePanier = document.querySelector("#resume_panier_test");

    products.forEach((product) => {
      const divPrice = product.price / 100;
      const goodPrice = divPrice.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR",
      });

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
                      id="supprimePanier "
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

    //////////////////////////////////////////////////////////AFFICHAGE DU CONTENU DU FORMULAIRE TOUJOURS DANS FONCTION DISPLAYCART,ECOUTE DE LENVOIE DU FORMULAIRE AVEC ADDEVENTLISTENER///////////////////////////////////////////////////////////////

    const addToForm = document.querySelector("#leformulaire");

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

    const form = document.querySelector(".cart-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const isValid = validation(e);
      if (isValid == true) {
        submitForm();
      }
    });
  } else {
    const addContent = document.querySelector("#madiv");
    addContent.innerHTML += `
     <div class="col-lg-8 mx-auto">
       <p class="mt-5">
       Votre panier est vide ! <br />
       <a href="./index.html">Revenir à la page d'accueil</a>
      </p>
     </div> `;

    const footer = document.querySelector("#myfooter");

    footer.classList.add("fixed-bottom");
  }
}
displayCart();

////////////////////////////////////////////////////////VERIFICATION DES DONNEES DU FORMULAIRE AVEC FONCTION VALIDATION ET ADDEVENTLISTENER //////////////////////////////////////////////////////////////////////

function validationField(input, missInput, texte) {
  const forOk =
    input.validity.valueMissing == true || texte.test(input.value) == false
      ? false
      : true;

  if (forOk == false) {
    missInput.textContent = "Format incorrect";
  } else {
    missInput.textContent = "";
  }
  return forOk;
}

function validation(e) {
  const prenom = document.querySelector("#prenom_contact");
  const missPrenom = document.querySelector("#missPrenom");
  const nom = document.querySelector("#nom_contact");
  const missNom = document.querySelector("#missNom");
  const ville = document.querySelector("#ville_contact");
  const missVille = document.querySelector("#missVille");
  const adresse = document.querySelector("#adresse_contact");
  const missAdresse = document.querySelector("#missAdresse");
  const email = document.querySelector("#email_contact");
  const missEmail = document.querySelector("#missEmail");
  const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const adresseValid = /^[0-9][\s][a-zA-Z][a-z]/;
  const nomValid = /^[a-zA-Z][a-z]/;
  const prenomValid = /^[a-zA-Z][a-z]/;
  const villeValid = /^[a-zA-Z][a-z]/;

  let validOk = true;
  const validPrenom = validationField(prenom, missPrenom, prenomValid);
  const validNom = validationField(nom, missNom, nomValid);
  const validAdresse = validationField(adresse, missAdresse, adresseValid);
  const validVille = validationField(ville, missVille, villeValid);
  const validMail = validationField(email, missEmail, emailValid);

  if (
    validPrenom === false ||
    validNom === false ||
    validVille === false ||
    validAdresse === false ||
    validMail === false
  ) {
    validOk = false;
  }

  return validOk;
}

///////////////////////////////////////////////////////////////FONCTION SUBMITFORM = RECUPERATION DES VALEURES DE LINPUT DANS LOBJET CONTACT///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////RECUPERATION DES ID DES PRODUITS DU PANIER DANS LE TABLEAU PRODUCTS///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////FORMATAGE DE LOJET ET DU TABLEAU EN CHAINE DE CARATERES AVANT LENVOIE DANS FONCTION POSTORDER////////////////////////////////////////////////////////////

function submitForm() {
  const contact = {
    firstName: document.getElementById("prenom_contact").value,
    lastName: document.getElementById("nom_contact").value,
    address: document.getElementById("adresse_contact").value,
    city: document.getElementById("ville_contact").value,
    email: document.getElementById("email_contact").value,
  };

  const products = [];

  if (localStorage.getItem("cartProducts") !== null) {
    const productObj = JSON.parse(localStorage.getItem("cartProducts"));

    productObj.forEach((p) => {
      products.push(p._id);
    });
  }

  const contactProducts = JSON.stringify({
    contact,
    products,
  });

  postOrder(contactProducts);
}

//////////////////////////////////////////////////////////////////////////////////////FONCTION POSTORDER = REQUETE POST//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////ENVOI AU SERVEUR L'OBJET CONTACT ET LE TABLEAU PRODUCTS AVEC LE BON FORMAT/////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////ENREGISTREMENT DE LOBJET CONTACT ET DE L'ORDERID RECUS DU SERVEUR, ET DU TOTAL DE LA COMMANDE SUR LE LOCAL STORAGE////////////////////////////////////////////////////////////////////////////////////////////////////

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
      displayErrorForm();
    });
}
