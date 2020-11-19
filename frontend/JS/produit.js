// il faut récupérer l'ID dans l'url//  get /:_id ,récupération du produit et il faut quil puisse s'afficher//
// ajouter le produit dans le panier avec le vernis choisis//
//il faut pouvoir choisir un vernis//
//il faut pouvoir etre redirigé vers la page panier//
// comme page accueil ajout de la photo titre prix description==> doivent correspondrent  a 1 produit  boutons option et panier//
// on peu creer un alerte ajout au panier pour avertir le client que son action a bien été prise en compte//
//local storage :stocker des données en cache pour meilleure performance , experience utilisateur , quand on ajoute au panier: ajout au localstorage//

///////////////////////////Récupération de l'ID  utilisation des paramètres de l'url(variable d'URL)/////////////////////////////////

const params = new URLSearchParams(window.location.search); /////La propriété location, de l'objet Javascript window, permet de récupérer la chaine de requêtes, on l'analyse ///
const furnitureId = params.get("id"); ///retourne la premiere valeure associée au parametre de recherche donnée////
console.log(furnitureId);

//////////////////////////Requête fetch avec l'identifiant id////////////////////////////////

const getProducts = async function () {
  /// fonction de récupération des données sur le serveu////
  let response = await fetch(
    /// on attend la résolution de la promesse////
    `http://localhost:3000/api/furniture/${furnitureId}`
  );
  let product = await response.json();
  console.log(product);
  displayOneProduct(product);
};
getProducts();

////////////////////////AFFICHAGE DU PRODUIT , injection dans le DOM //////////////
//

function displayOneProduct(product) {
  console.log(displayOneProduct);

  ////division du prix par 100, plus bas : € rajouté////
  const divPrice = product.price / 100;

  const article = document.getElementById("article");
  console.log(article);

  article.innerHTML += `

         
              
                <img class="card-img-top" src="${product.imageUrl}" alt="${
    product.name
  }" id="article-photo">
                <div class="card-body">
                 <a class="card-a" href="./produit.html?${
                   product._id
                 }"><h4 class="card-title">${product.name}</h4></a>
                  <h5 id="prix-meuble">${divPrice.toFixed(2)} €</h5>
                 <p class="card-text" id="description-article" >${
                   product.description
                 }</p>
                </div>
                <div class="card-footer">
                  <div class="dropdown">
                    <div class="btn-group">
                      <form>
                        <label for="varnish-select">
                          type de vernis</label
                        >
                        <select class=" product-section_select"
                          name="product-section_select"
                          id="varnish-select" ></select>
                      </form>
                     
                      <button
                        type="button"
                        class="btn btn-outline-success btn-sm mb-2"
                        id="addToCart" >
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                </div>
              </>
        
        `;

  ///fonction qui appel les options avec FOR OF///
  /*
  let option = document.createElement("option");
  let select = document.querySelector("select");

  for (const option of product.varnish) {
    select.innerHTML += `<option>${option}</option>`;
  }*/

  ////evnt click qui lance la fonction d'ajout au panier hop hop hop  /////
  let addToCartBtn = document.querySelector("#addToCart");

  addToCartBtn.addEventListener("click", () => {
    let select = document.querySelector(".product-section_select");
    product.selectedVarnish = select.options[select.selectedIndex].value; ////LONG qui représente lindex du premier element selectionnée ////
    ////La propriété selectedIndex  renvoie l'index de l'option sélectionnée dans une liste déroulante.///
    window.location = "./panier.html"; ////Au clic du bouton panier je souhaite être redirigé vers la page panier////
    console.log(AddToCartBtn);
    addToCart(product);
  });

  ///fonction qui appel les options avec FOR OF///

  let option = document.createElement("option");
  let select = document.querySelector(".product-section_select");

  for (const option of product.varnish) {
    ////for (variable of itérable) {instruction}= a chaque itération product.varnish est lobjet dt on parcours les propriétés/////
    select.innerHTML += `<option>${option}</option>`;
  }

  /* product.varnish.forEach(function (varnish) {
    console.log(choixOption);
    let option = document.createElement("option");
    let select = document.querySelector(".product-section_select");

    option.value = varnish;
    option.textContent = varnish;
    select.appendChild(option);
  });*/
}
//////////////////////////////////création de la fonction ajout au local storage/////////////////////////////////////////////////////////

function addToCart(product) {
  let cartProducts = []; ///////tableau vide au départ qui contiendra  les données du produit ajouté////////
  let saveToCartProduct = {
    //////données du produit ajouté.on initialise ici l'objet avec un ensemble de propriétés, liste de clé valeur, séparées par des ,///////////

    _id: product._id,
    imageUrl: product.imageUrl,
    name: product.name,
    price: product.price,
    quantity: 1, ////// qtité max de produit que lon met dans le local storage/////
    selectedVarnish: product.selectedvarnish,
  };
  console.log(saveToCartProduct);

  let newDifferentProduct = true; ///Boolean newdif  dans le cas ou jai un nouveau produit /////

  if (localStorage.getItem("cartProducts") === null) {
    ///Si le localStorage est vide la fonction crée un nouveau tableau cartProducts et l'enregistre dans le localStorage ////
    console.log(cartProducts); /// getitem renvoie la valeur associée à la clé cartproducts////
    cartProducts.push(saveToCartProduct); ///on ajoute au tableau Save avec les données du new produit  avec push/////
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts)); //nom de la clé cartproduct et sa valeur, le JSON Stringify convertit le tableau en chaine car SET est string//////
  } else {
    ////Sinon la fonction récupère le tableau du localStorage, ajoute le nouveau produit, et enregistre le nouveau tableau//////

    cartProducts = JSON.parse(localStorage.getItem("cartProducts")); // je recup le tableau du LS get renvoie la valeure associée à la clé cardproducts/////

    cartProducts.forEach((prod) => {
      ///boucle sur chaque produit si yen a pas de nouveaux quil ya deja un produit au panier,  on peu augmenter sa quantité//////
      //// ajout du nouveau produit//// //// prod =/////
      if (
        product._id === prod._id && /// on vérifie que les 2 consitions st ttes 2 vraies///////egalité stricte on vérifie la valeure et le type//////
        product.selectedVarnish === prod.selectedVarnish
      ) {
        prod.quantity++; /// on peut augmenter sa quantité///
        newDifferentProduct = false; //// il nya pas de nouveau produit////
      }
    });

    if (newDifferentProduct) cartProducts.push(saveToCartProduct); ///// si ya un nouveau produit on rajoute au tableau vide cartP les nouvelles données//////

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts)); //////////// on stocke les nouvelles données////
  }

  chekPanier();
  alert("Votre produit a bien été ajouté au panier");
}
