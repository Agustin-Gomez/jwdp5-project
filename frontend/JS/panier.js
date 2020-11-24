//////////////////////////////////////////////////Ajout d'un article sur la page panier///////////////////////////////////////////////////////////////////
let addBasket = document.querySelector("#monpanier");
console.log(addBasket);

/*let total = 0;*/

displayCart();

function displayCart() {
  console.log(displayCart);

  if (localStorage.getItem("cartProducts") !== null) {
    let products = JSON.parse(localStorage.getItem("cartProducts"));
    total = 0;

    addBasket.innerHTML += `
           
      <h2>Détail de votre panier</h2>
            <table class="table table-bordered" id="resume_panier">
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
              <tfoot class="thetotal">
                <tr class="totalPrice">
                  <td class="bigprice">Prix total:${(total / 100).toFixed(
                    2
                  )} </td>
                </tr>
              </tfoot>
              <tbody id="resume_panier_test">
                
              </tbody>
            </table>
     
            `;

    let resumePanier = document.querySelector("#resume_panier_test");
    console.log(resumePanier);
    console.log(products);
    products.forEach((product) => {
      const divPrice = product.price / 100;

      const goodPrice = divPrice.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR",
      });

      const divQuantity = product.quantity / 100;
      console.log(resumePanier);

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
                  <td class="prix">${goodPrice * divQuantity}</td>
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

    let addToForm = document.querySelector("#leformulaire");
    console.log(addToForm);
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
                     maxlength="30"  pattern="[A-Za-z]{2,}" required />
                     
                  
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-5">
                  <label for="nom_contact">Nom :</label>
                  <input
                    type="text"
                    name="nom_contact"
                    id="nom_contact"
                    class="form-control"
                    maxlenght="50" pattern"[A-Za-z]{2,}" required />
                  
                </div>
              </div>
              <div class="col-md-12 form-group">
                <label for="email_contact">Adresse mail :</label>
                <input
                  type="email"
                  name="email_contact"
                  id="email_contact"
                  class="form-control"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}" maxlength="30" required />
              </div>
              <div class="row form-group">
                <div class="col-md-5">
                  <label for="adresse_contact">Adresse :</label>
                  <input
                    type="text"
                    name="adresse_contact"
                    id="adresse_contact"
                    class="form-control"
                    maxlength="200" required />
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-5">
                  <label for="ville_contact">Ville :</label>
                  <input
                    type="text"
                    name="ville_contact"
                    id="ville_contact"
                    class="form-control"
                    maxlength="30" required/>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-danger"
                id="envoyer_commande"
              >
                Commander
              </button>
            </form>`;

    const form = document.querySelector(".cart-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } else {
    const mistackingCart = document.querySelector("#erreur_panier");
    mistackingCart.innerHTML += `
            
            <p class="cart_vide">
                Votre panier est vide ! 
                <br/>
                <a href="./index.html">Revenir à la page d'accueil</a>
            </p>
        `;
  }
}

/////récupération des valeures de linput dans lobjet contact////
function submitForm() {
  let contact = {
    firstName: document.getElementById("prenom_contact").value,
    lastName: document.getElementById("nom_contact").value,
    address: document.getElementById("adresse_contact").value,
    city: document.getElementById("ville_contact").value,
    email: document.getElementById("email_contact").value,
  };

  let products = [];

  if (localStorage.getItem("cartProducts") !== null) {
    let productObj = JSON.parse(localStorage.getItem("cartProducts"));

    productObj.forEach((p) => {
      ////Récupération des id des produits du panier dans le tableau products////
      products.push(p._id);
    });
  }

  let contactProducts = JSON.stringify({
    contact,
    products,
  });

  postOrder(contactProducts);
}

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

      window.location.replace("./confirmation.html");
    })
    .catch((e) => {
      displayError();
      console.log(e);
    });
}
