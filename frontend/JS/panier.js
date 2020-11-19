//////ajout d'un article sur la page panier//////
const basket = document.querySelector(".card mt-4");
console.log(basket);
let total = 0;

function displayCart() {
  if (localStorage.getItem("cartProducts") !== null) {
    let products = JSON.parse(localStorage.getItem("cartProducts"));
    total = 0; // on réinitialise  le total à 0 /////

    basket.innerHTML += `
           
      <h2>Détail de votre panier</h2>
      <table class="table table-bordered" id="resume_panier">
        <thead>
          <tr>
           <th scope="col" class="produit">Article</th>
                  <th scope="col" class="description">Nom</th>
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

    products.forEach((product, index) => {
      total = total + product.price * product.quantity;

      const divPrice = product.price / 100;

      resumePanier.InnerHTML += `
          <tr>
        
        <td class="produit"><img class="card-img-top" src="${
          product.imageUrl
        }" alt="${product.name}" id="article-photo"></td>
             <td class="description">${product.name}</td>   
                    <td class="quantité">${product.quantity}</td>
                  <td class="prix">${(
                    (product.price * product.quantity) /
                    100
                  ).toFixed(2)} €}</td>
                  <td class="supprimer"><button id="supprimePanier"-${index}">X</button></td>
                  
                  
        </tr>
    
    `;
    });

    const totalPrice = document.querySelector(".thetotal");
    totalPrice.innerHTML += `
         <tr class="totalPrice">
            <td class="bigprice">Prix total:${(total / 100).toFixed(2)} </td>
         </tr>
    `;
  } else {
    const mistackingCart = document.querySelector("#erreur_panier");
    mistackingCart.insertAdjacentHTML += `
            
            <p class="cart_vide">
                Votre panier est vide ! 
                <br/>
                <a href="./index.html">Revenir à la page d'accueil</a>
            </p>
        `;
  }
}
