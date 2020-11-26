////////////////////////////////////////////////////////////////////RECUPERATION DES PRODUITS DEPUIS DE SERVEUR///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const getProducts = async () => {
  try {
    let response = await fetch("http://localhost:3000/api/furniture");

    if (response.ok) {
      let products = await response.json();
      console.log(products);
      displayAllProduct(products);
    } else {
      console.error("Retour du serveur : ", response.status);
    }
  } catch (e) {
    console.log(e);
  }
};

getProducts();

//////////////////////////////////////////////////////////////AFFICHAGE DES PRODUITS SOUS FORME DE LISTE, injection dans le DOM ////////////////////////////////////////////////////////////////////////////////////////////////////
function displayAllProduct(products) {
  const productList = document.getElementById("productList");
  console.log(productList);

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
    console.log(listeImages);

    i = 0;
    listeImages.item(i).classList.add("active");

    /* for (i = 0; i < listeImages.lenght; i++) {
      if (i == active) {
        listeImages.item(i).classList.add("active");
      }
    }*/

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
