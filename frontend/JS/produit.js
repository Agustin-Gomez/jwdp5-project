////////////////////////////////////////////////////////////RECUPERATION DE L ID ,  UTILISATION DES PARAMETRES DE L'URL /////////////////////////////////////////////////////////////////////////////////

const params = new URLSearchParams(window.location.search);
const furnitureId = params.get("id");

///////////////////////////////////////////////////////////////////////REQUETE FETCH AVEC IDENTIFIANT ID//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getProducts = async function () {
  try {
    let response = await fetch(
      `http://localhost:3000/api/furniture/${furnitureId}`
    );

    if (response.ok) {
      let product = await response.json();
      displayOneProduct(product);
    } else {
      window.location = "./index.html";
    }
  } catch (e) {
    console.log(e);
  }
};
getProducts();

///////////////////////////////////////////////////////////////////AFFICHAGE DU PRODUIT , INJECTION DANS LE DOM ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function displayOneProduct(product) {
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

  ////////////////////////////////////////////////////////EVENT CLICK QUI LANCE LA FONCTION DE CALLBACK D'AJOUT AU PANIER AVEC LE VERNIS SELECTIONNE ////////////////////////////////////////////////////////////////////////////////////////////////

  let addToCartBtn = document.querySelector("#ajouter-au-panier");

  addToCartBtn.addEventListener("click", () => {
    let select = document.querySelector(".product-section_select");

    product.selectedVarnish = select.options[select.selectedIndex].value;
    window.location = "./panier.html";

    ajouterAuPanier(product);
  });

  ////////////////////////////////////////////////////////////////////////CREATION DU DEROULLANT AVEC LA BOUCLE  FOR OF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  let select = document.querySelector(".product-section_select");

  for (const option of product.varnish) {
    select.innerHTML += `<option>${option}</option>`;
  }
}
/////////////////////////////////////////////////////////////////////CREATION DE LA FONCTION TERNAIRE AJOUT DE PRODUIT AU LOCAL STORAGE/////////////////////////////////////////////////////////////////////////////////////////////////

function ajouterAuPanier(product) {
  let saveToCartProduct = {
    _id: product._id,
    imageUrl: product.imageUrl,
    name: product.name,
    price: product.price,
    quantity: 1,
    selectedVarnish: product.selectedVarnish,
  };

  let cartProducts =
    localStorage.getItem("cartProducts") === null
      ? []
      : JSON.parse(localStorage.getItem("cartProducts"));

  cartProducts.push(saveToCartProduct);
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}
