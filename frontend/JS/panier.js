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

//////ajout d'un article au panier//////
/*
function addAproduct(product) {
  if (localStorage.length > 0) {
    let product = JSON.parse(localStorage.getItem("cartProducts"));
    console.log(cartProducts);
    const basket = document.querySelector(".card mt-4");
    console.log(basket);

    const divPrice = product.price / 100;
    const totalPrice = x;

    product.forEach((product) => {
      //// je sais pas ou mettre mes place holders , je dois creer mes div..../////
      basket.innerHTML += `
           
      <h2>Détail de votre panier</h2>
      <table class="table table-bordered" id="resume_panier">
        <thead>
          <tr>
           <th scope="col" class="produit">Article</th>
                  <th scope="col" class="description">Prix</th>
                  <th scope="col" class="quantité">Quantité</th>
                  <th scope="col" class="prixtotal">Prix total</th>
                  <th scope="col" class="supprime"></th>
          </tr>
        </thead>
        <tbody id="resume_panier_test">
        <td></td>
        
        
        </tbody>
      </table>
      <div class="col-md-12 text-center" id="erreur_panier">
        <p>Vous n'avez pas de commande</p>
        <p>Sous total : <span class="subtotal"></span>€</p>
      </div>
    </div>;
            `;
    });
  } else {
    card.innerHTML = `
        <tbody id="resume_panier_test">
        
            <p class="text-center lead">Votre panier est vide :'(</p>
        </tbody>`;
  }
}*/
