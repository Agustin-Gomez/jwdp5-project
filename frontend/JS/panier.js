/*let card = document.getElementById("card");
console.log(card);

//// fonction setPanier pour stocker  un produit////
function setPanier() {
  localStorage.setItem("card", JSON.stringify("card")); /// la fonction setPanier crée un objet de stockage avec clé et valeur////
  updatePanier();
  console.log(setPanier); ///*/
/*}*/
//le 1er argument est la clé et précise lendroit ou les données sont stockées///
////récupération du produit////
/*
function addToBasket() {
  let basketContent = JSON.parse(localStorage.getItem("basketContent")); //// on récupere la clé basketC/////
  console.log(basketContent);
  if (basketContent === null) {
    basketContent = [];
  }
  let product = new product(id, varnishSelected); /// JE SOUHAITE AJOUTER UN PRODUIT AU PANIER sil nya rien dedans////
  basketContent.push(product);
  localStorage.setItem("basketContent", JSON.stringify(basketContent)); /// en chaine de caractere////
}*/

//////création de la fonction pour l'ajout au local storage/////////////

function ajoutLocalStorage() {
  // stockage des données du produit ajouté ,dans un objet////
  let saveToCartProduct = {
    _id: product._id,
    imageUrl: product.imageUrl,
    name: product.name,
    price: product.price,
    quantity: 1,
    choixOption: product.varnish,
  };

  let newDifferentProduct = true;

  if (localStorage.getItem("cartProducts") === null) {
    //// cartProducts tableau vide qui contiendra les données du produit ajoutés savetoCp///////
    ///Si le localStorage est vide elle crée un nouveau tableau cartProducts et l'enregistre dans le localStorage ////
    console.log(cartProducts);
    cartProducts.push(saveToCartProduct);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  } else {
    ////Sinon elle récupère le tableau du localStorage, ajoute le nouveau produit, et enregistre le nouveau tableau//////

    cartProducts = JSON.parse(localStorage.getItem("cartProducts")); // je recup le tableau du LS/////

    cartProducts.forEach((prod) => {
      ///boucle sur chaque produit si yen a pas de nouveaux on peu augmenter sa quantité//////
      //// ajout du nouveau produit////
      if (product._id === prod._id && product.varnish === prod.varnish) {
        /// si on change pas de produit///
        prod.quantity++; /// on peut augmenter sa quantité///
        newDifferentProduct = false; //// il nay pas de nouveau produit////
      }
    });

    if (newDifferentProduct) cartProducts.push(saveToCartProduct); ///// si ya un nouveau produit on rajoute au tableau vide cartP les nouvelles données//////

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts)); //////////// on stocke les nouvelles données////
  }

  ajoutLocalStorage();
}

//////ajout d'un article au panier//////

function displayAllProduct(products) {
  if (localStorage.length > 0) {
    let products = JSON.parse(localStorage.getItem("card"));
    console.log(data);
    let card = document.getElementById("card");
    console.log(card);

    const divPrice = product.price / 100;

    products.forEach((product) => {
      //// je sais pas ou mettre mes place holders , je dois creer mes div..../////
      card.innerHTML += `
           
      <h2>Détail de votre panier</h2>
      <table class="table table-bordered" id="resume_panier">
        <thead>
          <tr>
            <th scope="col">article</th>
            <th scope="col">prix</th>
            <th scope="col">quantité</th>
            <th scope="col">Prix total</th>
          </tr>
        </thead>
        <tbody id="resume_panier_test">
        <div class="image">${product.imageUrl}</div>
                  <div class="prix">${divPrice.toFixed(2)}</div>
                  <div class="quantité">${1}</div>
                  <div class="Prixtotal">$</div>
                  <div class="supprimer"></div>
        
        </tbody>
      </table>
      <div class="col-md-12 text-center" id="erreur_panier">
        <p>Vous n'avez pas de commande</p>
        <p>Sous total : <span class="subtotal"></span>€</p>
      </div>
    </div>;
            `;
    });
    //////dans la fonction je fais comme la page produit  en bas utlisatio nde la for i je traduit ca en for of///////
  } else {
    card.innerHTML = `
        <tbody id="resume_panier_test">
        
            <p class="text-center lead">Votre panier est vide :'(</p>
        </tbody>`;
  }
}
