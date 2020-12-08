////////////////////////////////////////////////////////////////////RECUPERATION DES PRODUITS DEPUIS DE SERVEUR ,UTILISATION TRY CATCH METHODE FETCH///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const getProducts = async () => {
  try {
    let response = await fetch("http://localhost:3000/api/furniture");
    let products = response.ok
      ? await response.json()
      : console.error("Retour du serveur : ", response.status);
    displayAllProduct(products);
  } catch (e) {
    displayError();
  }
};

getProducts();

//////////////////////////////////////////////////////////////AFFICHAGE DES PRODUITS SOUS FORME DE LISTE, INJECTION DANS LE DOM AVEC INNERHTML ////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////MISE EN PLACE DU CAROUSEL////////////////////////////////////////////////////////////////////////////////////////////////

function displayAllProduct(products) {
  const productList = document.getElementById("productList");

  const carousel = document.querySelector(".carousel-inner");

  products.forEach((product) => {
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

    let listeImages = document.querySelectorAll(".carousel-item");

    listeImages.item(0).classList.add("active");

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
