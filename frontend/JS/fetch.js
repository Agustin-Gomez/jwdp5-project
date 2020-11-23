////creation choix du vernis////
///// creation d'une variable pour choisir l'option////
/*let option_personnalisation = document.getElementById(
    "option_personnalisation"
  );
  let tableau_personnalisation = products.varnish;
  for (let i = 0; i < tableau_personnalisation.length; i++) {
    option_personnalisation.innerHTML +=
      "<option>" + tableau_personnalisation[i] + "</option>";
  }

  ////Au clic du bouton panier je souhaite être redirigé vers la page panier////
  let ajoutPanier = document.getElementById("ajouter-au-panier");
  ajoutPanier.addEventListener("click", () => {
    window.location = "./panier.html";
  });*/

/*let option_personnalisation = document.getElementById(
    "option_personnalisation"
  );
  let tableau_personnalisation = products.personnalisation;
  for (let i = 0; i < tableau_personnalisation.length; i++) {
    option_personnalisation.innerHTML +=
      "<option>" + tableau_personnalisation[i] + "</option>";
  }*/
/*let varnish = "";
  products.varnishes.forEach((vernis) => {
    varnish += `<option value="${vernis}">${vernis}</option>`;
    console.log(vernis);
  });*/

/*

const params = new URLSearchParams(window.location.search); /////La propriété location, de l'objet Javascript window, permet de récupérer la chaine de requêtes, on l'analyse ///
const furnitureId = params.get("id"); ///retourne la premiere valeure associée au parametre de recherche donnée////
console.log(furnitureId);

//////////////////////////Requête fetch avec l'identifiant id////////////////////////////////

const getOneId = async () => {
  try {
    //// try pour gérer les erreures d'éxécution, on y met le code suceptible à l'erreure////
    let response = await fetch(
      "http://localhost:3000/api/furniture/${furnitureId}"
    ); //// je veux que tu attendes de récup les données et de les parser///

    if (response.ok) {
      ////on vérifie si on a une réponse valide
      let furnitureId = await response.json(); //// on attend la conversion du json en objet////
      console.log(furnitureId);
      displayOneProduct(products);
    } else {
      console.error("Retour du serveur : ", response.status); //// retour du serveur type 404 par ex//
    }
  } catch (e) {
    //// on capture l'erreure grace au try catch////
    console.log(e);
  }
};

/////
/*function getId() {
  const param = window.location.search; /////La propriété location, de l'objet Javascript window, permet de récupérer la chaine de requêtes ///
  const id = param.replace("?id=", "");
  return id;
}

const id = getId();
get("http://localhost:3000/api/furniture/" + id)
  .then(function (response) {
    addProductInfo(response);
  })

  .catch(function (err) {
    console.log(err);
    if (err === 0) {
      alert("serveur HS");
    }
  });*/

////////////////////////appel FETCH avec ID//////////////////////////////////////////////////////

/*const getProducts = async () => {
  try {
    //// try pour gérer les erreures d'éxécution, on y met le code suceptible à l'erreure////
    let response = await fetch("http://localhost:3000/api/furniture/" + id); //// je veux que tu attendes de récup les données et de les parser, j'ajoute + iD pour récupérer l'ID produit///

    if (response.ok) {
      ////on vérifie si on a une réponse valide
      let products = await response.json(); //// on attend la conversion du json en objet////
      console.log(id);
    } else {
      console.error("Retour du serveur : ", response.status); //// retour du serveur type 404 par ex//
    }
  } catch (e) {
    //// on capture l'erreure grace au try catch////
    console.log(e);
  }
}; //// appel a getProduct pour envoyer les photos////

getProducts();/////



/////////////////////////////////////////RECUPERATION DE L'API///////////////////////////////////////////////////

////////////////////RECUPERATION DES PRODUITS DEPUIS DE SERVEUR////////////////////////
const getProducts = async () => {
  try {
    //// try pour gérer les erreures d'éxécution, on y met le code suceptible à l'erreure////
    let response = await fetch("http://localhost:3000/api/furniture"); //// je veux que tu attendes de récup les données et de les parser///

    if (response.ok) {
      ////on vérifie si on a une réponse valide
      let products = await response.json(); //// on attend la conversion du json en objet////
      console.log(products);
      displayAllProduct(products);
    } else {
      console.error("Retour du serveur : ", response.status); //// retour du serveur type 404 par ex//
    }
  } catch (e) {
    //// on capture l'erreure grace au try catch////
    console.log(e);
  }
}; //// appel a getProduct pour envoyer les photos////

/*getProducts();
 /* version avec adjacent ne marche pas*/

////creation array pour chaque produit, card = le produit///////
/*function displayAllProduct(products) {
  const productList = document.getElementById("productList");
  console.log(productList);
  products.forEach((card) => {
    
    productList.insertAdjacentHtml(
      "beforeend",
      `
      <div class="card.h-100">
          <img class="card-img-top" src="${product.imagrUrl}" alt="${card.name}>
          <h4 class="card-title">${product.name}</h4>
          <p class="card-text">${product.text}</p>
          <h5 class="card-price">${product.price}</h5>
          <a class="card-a" href="./produit.html?${card._id}">
          
        </div>
        `
  );
}
*/ /*version  avec fetch sans try*/
/*fetch(url)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    displayAllProducts(products);
  })
  .catch((e) => displayError());*/

/*function displayAllProduct(products) {
  ////je me place dans la div productList////
  const productList = document.getElementById("productList");
  console.log(productList);

  products.forEach((product) => {
    ////création du contenu de la div productList////
    productList.innerHTML += `
         <div class="col-lg-4 col-md-6 mb-4" >
            <div class="card h-100">
               <img class="card-img-top" src="${product.imageUrl}" alt="${product.name}>
                <div class="card-body"> 
                  <h4 class="card-title">${product.name}</h4>
                  <a class="card-a" href="./produit.html?${product._id}>
                  <p class="card-text">${product.description}</p>
               </div>
               <div class="card-footer>
                  <h5 class="card-price">${product.price}</h5>
               </div>
            </div>
        </div>
        `;
  });
}*/

/*version avec try getproduct*/
/*const getProducts = async () => {
  try {
    //// try pour gérer les erreures d'éxécution, on y met le code suceptible à l'erreure////
    let response = await fetch("http://localhost:3000/api/furniture"); //// je veux que tu attendes de récup les données et de les parser///

    if (response.ok) {
      ////on vérifie si on a une réponse valide
      let products = await response.json(); //// on attend la conversion du json en objet////
      console.log(products);
      getProducts(products);
    } else {
      console.error("Retour du serveur : ", response.status); //// retour du serveur type 404 par ex//
    }
  } catch (e) {
    //// on capture l'erreure grace au try catch////
    console.log(e);
  }
}; //// appel a getProduct pour envoyer les photos////

getProducts();

////////////////////////AFFICHAGE DES PRODUITS SOUS FORME DE LISTE, injection dans le DOM //////////////
const productList = async () => {
  try {
    const products = await getProducts();
    if (products) {
      products.forEach((product) => {
        productList.innerHTML += `
         <div class="col-lg-4 col-md-6 mb-4" >
            <div class="card h-100">
               <img class="card-img-top" src="${product.imageUrl}" alt="${product.name}>
                <div class="card-body"> 
                  <h4 class="card-title">${product.name}</h4>
                  <a class="card-a" href="./produit.html?${product._id}>
                  <p class="card-text">${product.description}</p>
               </div>
               <div class="card-footer>
                  <h5 class="card-price">${product.price}</h5>
               </div>
            </div>
        </div>
        `;
      });
    } else {
      console.error("Retour du serveur : ", response.status); //// retour du serveur type 404 par ex//
    }
  } catch (e) {
    //// on capture l'erreure grace au try catch////
    console.log(e);
  }
};*/ /*
function displayOneProduct(products) {
  ////je me place dans la div article////
  const article = document.getElementById("article");
  console.log(article);
  const carousel = document.querySelector(".carousel-inner");

  products.forEach((product) => {
    ////création du contenu de la div article////
    carousel.innerHTML += `
              <div class="carousel-item">
                <img class="d-block img-fluid" src="${product.imageUrl}" alt="${product.name}">
              </div>

    `;
    article.innerHTML += `

         <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <img class="card-img-top" src="${product.imageUrl}" alt="${product.name}" id="article-photo">
                <div class="card-body">
                 <a class="card-a" href="./produit.html?${product._id}"><h4 class="card-title">${product.name} id="nom-meuble"</h4></a>
                  <h5 id="prix-meuble">${product.price}</h5>
                 <p class="card-text" id="description-article" >${product.description}</p>
                </div>
                <div class="card-footer">
                  <div class="dropdown">
                    <div class="btn-group">
                      <form>
                        <label for="option_personnalisation">
                          option de personnalisation</label
                        >
                        <select
                          name="option_personnalisation"
                          id="option_personnalisation" ${product.varnish}
                        ></select>
                      </form>
                     
                      <button
                        type="button"
                        class="btn btn-outline-success btn-sm mb-2"
                        id="ajouter-au-panier"
                      >
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        
        `;
  });
}
*/
/*<img src="${product.imageUrl}" alt="${product.name}" id="article-photo">
        <div>${divPrice.toFixed(2)} €</div>
        <div>${1}</div></img>*/

/*
tr page panier
<tr>
        
        <td scope="col" class="produit"><img class="card-img-top" src="${
          product.imageUrl
        }" alt="${product.name}" id="article-photo">
                <a class="card-a" href="./produit.html?${
                  product._id
                }"><h4 class="card-title">${product.name}</h4></a></td>
                  <td class="description">${divPrice.toFixed(2)}</td>
                  <td class="quantité">${quantity}</td>
                  <td class="prixtotal"></td>
                  <td class="supprime"></td>
        </tr>
        */
/*const number = 123456.789;

console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number
  )
);
// expected output: "123.456,79 €"
const divPrice = product.price / 100;
new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
}).format(divPrice);*/
/*function carousel()

let active = 0;
listeImages = document.querySelectorAll(carousel-item);

let taille = listeImages.lenght;



for (i=0;i<taille;i++)
{

  if (i!=active){
    listeImages.item(i).classList.add("inactive");
  }
}*/

/*<h2>Détail de votre panier</h2>
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
      </table>*/
/*<tr>
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
    
        </tr> `;*/
/*addBasket.innerHTML += `
           
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

    /*let resumePanier = document.querySelector("#resume_panier_test");
    console.log(resumePanier);

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
                  <td class="produit">
                    <img
                      class="card-img-top"
                      src="${product.imageUrl}
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
                      class="btn btn-outline-success btn-sm mb-2"
                      id="supprimePanier"
                    >
                      x
                    </button>
                  </td> `;
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
}*/

//////il faut pouvoir augmenter la quantité de 1 dun produit///
////// et diminuer la quantité de 1 dun produit /////
///////supprimer le produit selectionné//////
/*cartProducts.forEach((prod) => {
      //// je veux pouvoir augmenter la quantité de nimporte quel produit selectionné.
      console.log(prod);

      if (
        product._id === prod._id && /// on vérifie que les 2 consitions st ttes 2 vraies///////egalité stricte on vérifie la valeure et le type//////
        product.selectedVarnish === prod.selectedVarnish
      ) {
        prod.quantity++; /// on peut augmenter sa quantité///
        newDifferentProduct = false; //// il nya pas de nouveau produit////
      }
    });*/
