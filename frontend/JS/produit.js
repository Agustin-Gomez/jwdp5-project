////////////////////////////////////////////////////////////RECUPERATION DE L ID ,  UTILISATION DES PARAMETRES DE L'URL /////////////////////////////////////////////////////////////////////////////////

const params = new URLSearchParams(window.location.search);
const furnitureId = params.get("id");
console.log(furnitureId);

///////////////////////////////////////////////////////////////////////REQUETE FETCH AVEC IDENTIFIANT ID//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getProducts = async function () {
  let response = await fetch(
    `http://localhost:3000/api/furniture/${furnitureId}`
  );
  let product = await response.json();
  console.log(product);
  displayOneProduct(product);
};
getProducts();

///////////////////////////////////////////////////////////////////AFFICHAGE DU PRODUIT , INJECTION DANS LE DOM ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function displayOneProduct(product) {
  console.log(displayOneProduct);

  const divPrice = product.price / 100;
  const goodPrice = divPrice.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
  });

  const article = document.getElementById("article");
  console.log(article);

  article.innerHTML += `
                <img class="card-img-top" src="${product.imageUrl}" alt="${product.name}" id="article-photo">
                <div class="card-body">
                 <h4 class="card-title">${product.name}</h4>
                  <h5 id="prix-meuble">${goodPrice}</h5>
                 <p class="card-text" id="description-article" >${product.description}</p>
                </div>
                <div class="card-footer">
                  <div class="dropdown">
                    <div class="btn-group">
                      <form>
                        <label for="varnish-select">
                          Type de vernis</label>
                        <select class=" product-section_select"
                          name="product-section_select"
                          id="varnish-select" ></select>
                      </form>
                      <button
                        type="button"
                        class="btn btn-outline-success btn-sm mb-2"
                        id="ajouter-au-panier" >
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                </div>
              </>
           `;

  ////////////////////////////////////////////////////////EVENT CLICK QUI LANCE LA FONCTION DE CALLBACK DAJOUT AU PANIER AVEC LE VERNIS SELECTIONNE ////////////////////////////////////////////////////////////////////////////////////////////////

  let addToCartBtn = document.querySelector("#ajouter-au-panier");
  console.log(addToCartBtn);

  addToCartBtn.addEventListener("click", () => {
    let select = document.querySelector(".product-section_select");
    let addToCartBtn = document.querySelector("#ajouter-au-panier");
    console.log(addToCartBtn);
    product.selectedVarnish = select.options[select.selectedIndex].value;
    window.location = "./panier.html";
    console.log(addToCartBtn);

    ajouterAuPanier(product);
  });

  ////////////////////////////////////////////////////////////////////////CREATION DU DEROULLANT AVEC LA BOUCLE  FOR OF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  let option = document.createElement("option");
  let select = document.querySelector(".product-section_select");

  for (const option of product.varnish) {
    select.innerHTML += `<option>${option}</option>`;
  }
}
/////////////////////////////////////////////////////////////////////CREATION DE LA FONCTION AJOUT DES PRODUITS AU LOCAL STORAGE/////////////////////////////////////////////////////////////////////////////////////////////////

function ajouterAuPanier(product) {
  let cartProducts = [];

  let saveToCartProduct = {
    _id: product._id,
    imageUrl: product.imageUrl,
    name: product.name,
    price: product.price,
    quantity: 1,
    selectedVarnish: product.selectedVarnish,
  };
  console.log(saveToCartProduct);

  let newDifferentProduct = true;

  if (localStorage.getItem("cartProducts") === null) {
    console.log(cartProducts);
    cartProducts.push(saveToCartProduct);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  } else {
    cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    if (newDifferentProduct) cartProducts.push(saveToCartProduct);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }
  alert("Votre produit a bien été ajouté au panier");

  /* (newDifferentProduct)
    ? cartProducts.push(saveToCartProduct)
    : localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}*/

  /*let storage = localStorage.getItem("cartProducts");

  storage === null
    ? localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
    : cartProducts.push(saveToCartProduct);*/
}
