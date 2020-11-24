///////////////////////////Récupération de l'ID  utilisation des paramètres de l'url(variable d'URL)/////////////////////////////////

const params = new URLSearchParams(window.location.search); /////La propriété location, de l'objet Javascript window, permet de récupérer la chaine de requêtes, on l'analyse ///
const furnitureId = params.get("id"); ///retourne la premiere valeure associée au parametre de recherche donnée////
console.log(furnitureId);

//////////////////////////Requête fetch avec l'identifiant id////////////////////////////////

const getProducts = async function () {
  let response = await fetch(
    `http://localhost:3000/api/furniture/${furnitureId}`
  );
  let product = await response.json();
  console.log(product);
  displayOneProduct(product);
};
getProducts();

////////////////////////////////////////////AFFICHAGE DU PRODUIT , injection dans le DOM //////////////////////////////////////////////

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
                          Type de vernis</label
                        >
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

  /////////evnt click qui lance la fonction  de callback  d'ajout au panier avec le vernis selectionné hop hop hop  ////////

  let addToCartBtn = document.querySelector("#ajouter-au-panier");
  console.log(addToCartBtn);

  addToCartBtn.addEventListener("click", () => {
    let select = document.querySelector(".product-section_select");
    let addToCartBtn = document.querySelector("#ajouter-au-panier");
    console.log(addToCartBtn);
    product.selectedVarnish = select.options[select.selectedIndex].value;
    ////[]qui représente lindex du premier element selectionnée option dans lelemetn html select ////
    ////La propriété selectedIndex  renvoie l'index de l'option sélectionnée dans une liste déroulante.///
    window.location = "./panier.html";
    console.log(addToCartBtn);

    ajouterAuPanier(product);
  });

  //////////creation du déroullant avec les options avec  FOR OF////////

  /* let option = document.createElement("option");
  let select = document.querySelector(".product-section_select");

  for (const option of product.varnish) {
    ///// la boucle me permet de parcourir les différentes propriété dc les diff vernis de mon objet product.varnish en créant un menu deroul avec
    //les différentes options////

    select.innerHTML += `<option>${option}</option>`;
  }*/

  product.varnish.forEach(function (varnish) {
    console.log(varnish);
    let option = document.createElement("option");
    let select = document.querySelector(".product-section_select");

    option.value = varnish;
    option.textContent = varnish;
    select.appendChild(option);
  });
}
///////////////////////////////////////////création de la fonction ajout de produit au local storage/////////////////////////////////////////////////////////

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
    ///Si le localStorage est vide la fonction crée un nouveau tableau cartProducts et l'enregistre dans le localStorage ////
    console.log(cartProducts); /// getitem renvoie la valeur associée à la clé cartproducts////
    cartProducts.push(saveToCartProduct); ///on ajoute au tableau Save avec les données du new produit  avec push/////
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts)); //nom de la clé cartproduct et sa valeur, le JSON Stringify convertit le tableau en chaine car SET est string//////
  } else {
    ////Sinon la fonction récupère le tableau du localStorage, ajoute le nouveau produit, et enregistre le nouveau tableau//////

    cartProducts = JSON.parse(localStorage.getItem("cartProducts")); // je recup le tableau du LS get renvoie la valeure associée à la clé cardproducts/////

    if (newDifferentProduct) cartProducts.push(saveToCartProduct); ///// si ya un nouveau produit on rajoute au tableau vide cartP les nouvelles données//////

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts)); //////////// on stocke les nouvelles données////
  }

  alert("Votre produit a bien été ajouté au panier");
}
