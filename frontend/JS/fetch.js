/*
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
};*/
