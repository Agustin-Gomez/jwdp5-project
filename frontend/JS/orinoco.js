///div class row = liste produit//

////////////////////RECUPERATION DES PRODUITS DEPUIS DE SERVEUR////////////////////////
const getProducts = async () => {
  try {
    //// try pour gérer les erreures d'éxécution, on y met le code suceptible à l'erreure////
    let response = await fetch("http://localhost:3000/api/furniture"); //// je veux que tu attendes de récup les données et de les parser///

    if (response.ok) {
      ////on vérifie si on a une réponse valide, on vérifie le statut http de la réponse////
      let products = await response.json(); //// on attend la conversion du json en objet////
      console.log(products);
      displayAllProduct(products); ////réponse donc contenant la fonction qui affiche la liste des produits sous forme de liste,j'obtient un objet représentant des données////
    } else {
      console.error("Retour du serveur : ", response.status); //// renvoie le stutu code http de la réponse .retour du serveur type 404 par ex//
    }
  } catch (e) {
    //// on capture l'erreure grace au try catch////
    console.log(e);
  }
}; //// appel a getProduct pour envoyer les photos////

getProducts();

////////////////////////AFFICHAGE DES PRODUITS SOUS FORME DE LISTE, injection dans le DOM //////////////
function displayAllProduct(products) {
  ////je me place dans la div productList////
  const productList = document.getElementById("productList");
  console.log(productList);
  const carousel = document.querySelector(".carousel-inner");

  let active = 0; // on définit limage active///
  let listeImages = document.querySelectorAll("img"); /// on récupere toutes les images////

  let taille = listeImages.lenght; /// on recup la taille de la liste///

  for (i = 0; i < taille; i++) {
    /////on désactive toutes les images sauf une///
    if (i != active) {
      listeImages.item(i).classList.add("inactive");
    }
  }

  products.forEach((product) => {
    ////création du contenu de la div productList////

    const divPrice = product.price / 100;
    const goodPrice = divPrice.toLocaleString("fr-FR", {
      style: "currency",
      currency: "EUR",
    });

    carousel.innerHTML += `
              <div class="carousel-item">
                <img class="d-block img-fluid" src="${product.imageUrl}" alt="${product.name}">
              </div>
              

    `;

    productList.innerHTML += `

         <div class="col-lg-4 col-md-6 mb-4" >
            <div class="card h-100">
               <img class="card-img-top" src="${product.imageUrl}" alt="${product.name}">
              <div class= "card-body "><a class="card-a" href="./produit.html?id=${product._id}"><h4 class="card-title">${product.name}</h4></a>
                  <p class="card-text">${product.description}</p>
                   
              </div>   
               <div class="card-footer"><h5 class="card-price">${goodPrice}</h5></div> 
            </div>
        </div>
        `;
  });
}
