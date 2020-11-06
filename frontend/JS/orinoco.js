///div class row = liste produit//

////recupération des produits depuis l serveur/////
const url = "http://localhost:3000/api/furniture";

fetch(url)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    displayAllProducts(products);
  })
  .catch((e) => displayError());

///////affichage de tous les produits , productList = section liste de produits///////

function displayAllProduct(products) {
  const productList = document.getElementById("productList");
  console.log(productList);

  ////creation array pour chaque produit, card = le produit///////
  products.forEach((card) => {
    productList.insertAdjacentHtml(
      "beforeend",
      `
        <div class="card.h-100" style = "border: 1px solid rgba(0,0,0,.125); border-radius: .25rem;">
          <img class="card-img-top" src="${card.imgUrl}" alt="${card.name}>
          <h4 class="card-title">${card.title}</h4>
          <p class="card-text">${card.text}</p>
          <h5 class="card-price">${card.price}</h5>
          <a class="card-a" href="./produit.html?${card._id}>
          
        </div>
        `
    );
  });
}
