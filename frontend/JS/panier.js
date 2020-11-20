//////////////////////////////////////////////////Ajout d'un article sur la page panier///////////////////////////////////////////////////////////////////
const basket = document.querySelector(".card mt-4");
console.log(basket);
let total = 0;

function displayCart() {
  console.log(displayCart);

  if (localStorage.getItem("cartProducts") !== null) {
    ///// si jai un prosuit dans le localS/////
    let products = JSON.parse(localStorage.getItem("cartProducts")); //////je le récup dans ma variable products///////
    total = 0; // on réinitialise  le total à 0 /////

    basket.innerHTML += `
           
      <h2>Détail de votre panier</h2>
      <table class="table table-bordered" id="resume_panier">
        <thead>
          <tr>
           <th scope="col" class="produit">Article</th>
                  <th scope="col" class="description">Nom</th>
                  <th scope="col" class="vernis">Vernis</th>
                  <th scope="col" class="quantité">Quantité</th>
                  <th scope="col" class="prix">Prix </th>
                  <th scope="col" class="supprimer">Supprimer</th>
          </tr>
        </thead>
        <tbody id="resume_panier_test">
        
        
        </tbody>
      </table>
     
            `;

    let resumePanier = document.querySelector("#resume_panier_test");

    products.forEach((product) => {
      //////////////je créée une boucle for each: pour chaque produit ajouté jaurais l'ensemble des propriétés et possibilité de le supprimé daugmenter sa quantité/////////////
      total = total + product.price * product.quantity;

      const divPrice = product.price / 100;
      const goodPrice = divPrice.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR",
      });
      const divQuantity = product.quantity / 100;

      resumePanier.InnerHTML += `
        <tr>
              <td class="produit"><img class="card-img-top" src="${
                product.imageUrl
              }" alt="photo meuble" id="article-photo"></td>
              <td class="description">${product.name}</td> 
                <td>${product.selectedVarnish}</td>
               <td class="quantité">
                    <button class="cart_remove">
                      -
                    </button>${product.quantity}
                    <button class="cart_add">
                      +
                    </button>
                  </td>
              <td class="prix">${goodPrice * divQuantity}</td>
             <td class="supprimer"><button id="supprimePanier">X</button></td>
    
        </tr> `;
    });

    const totalPrice = document.querySelector(".thetotal");
    totalPrice.innerHTML += `
         <tr class="totalPrice">
            <td class="bigprice">Prix total:${(total / 100).toFixed(2)} </td>
         </tr>
    `;
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

//////il faut pouvoir augmenter la quantité de 1 dun produit///
////// et diminuer la quantité de 1 dun produit /////
///////supprimer le produit selectionné//////
