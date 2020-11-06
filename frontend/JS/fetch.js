/////////////////////////////////////////RECUPERATION DE L'API///////////////////////////////////////////////////
const getFurnitures = async function () {
  ////fct asyncrone
  try {
    //// try pour gérer les erreures d'éxécution, on y met le code suceptible à l'erreure////
    let data = await fetch("http://localhost:3000/api/furniture"); //// je veux que tu attendes de récup les données et de les parser///

    if (response.ok) {
      ////on vérifie si on a une réponse valide
      let data = await response.json(); //// on attend la conversion du json en objet////
      console.log(data);
    } else {
      console.error("Retour du serveur : ", response.status); //// retour du serveur type 404 par ex//
    }
  } catch (e) {
    //// on capture l'erreure grace au try catch////
    console.log(e);
  }
};

getFurnitures(); //// appel a get furnitures pour envoyer les photos////

////creation array pour chaque produit, card = le produit///////
function displayAllProduct(products) {
  const productList = document.getElementById("productList");
  console.log(productList);
  products.forEach((card) => {
    inHtml;
    InnerHtml += `
      <div class="card.h-100" style = "border: 1px solid rgba(0,0,0,.125); border-radius: .25rem;">
          <img class="card-img-top" src="${card.imgUrl}" alt="${card.name}>
          <h4 class="card-title">${card.title}</h4>
          <p class="card-text">${card.text}</p>
          <h5 class="card-price">${card.price}</h5>
          <a class="card-a" href="./produit.html?${card._id}">
          
        </div>
        `;
  });
}
