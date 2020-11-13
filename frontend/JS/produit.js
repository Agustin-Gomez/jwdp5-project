// il faut récupérer l'ID dans l'url//  get /:_id ,récupération du produit et il faut quil puisse s'afficher//
// ajouter le produit dans le panier avec le vernis choisis//
//il faut pouvoir choisir un vernis//
//il faut pouvoir etre redirigé vers la page panier//
// comme page accueil ajout de la photo titre prix description==> doivent correspondrent  a 1 produit  boutons option et panier//
// on peu creer un alerte ajout au panier pour avertir le client que son action a bien été prise en compte//
//local storage :stocker des données en cache pour meilleure performance , experience utilisateur , quand on ajoute au panier: ajout au localstorage//

///////////////////////////Récupération de l'ID  utilisation des paramètres de l'url(variable d'URL)/////////////////////////////////

const params = new URLSearchParams(window.location.search); /////La propriété location, de l'objet Javascript window, permet de récupérer la chaine de requêtes, on l'analyse ///
const furnitureId = params.get("id"); ///retourne la premiere valeure associée au parametre de recherche donnée////
console.log(furnitureId);

//////////////////////////Requête fetch avec l'identifiant id////////////////////////////////

const getProducts = async function () {
  /// fonction de récupération des données sur le serveu////
  let response = await fetch(
    /// on attend la résolution de la promesse////
    `http://localhost:3000/api/furniture/${furnitureId}`
  );
  let products = await response.json();
  console.log(products);
  displayOneProduct(products);
};
getProducts();

////////////////////////AFFICHAGE DU PRODUIT , injection dans le DOM //////////////
/*const displayOneProduct = async () => {
  const products = await getProducts();*/
function displayOneProduct(products) {
  console.log(displayOneProduct);

  ///// creation d'une variable pour choisir l'option////
  let option_personnalisation = document.getElementById(
    "option_personnalisation"
  );
  let tableau_personnalisation = products.varnish;
  for (let i = 0; i < tableau_personnalisation.length; i++) {
    option_personnalisation.innerHTML +=
      "<option>" + tableau_personnalisation[i] + "</option>";
  }
  ////division du prix par 100, plus bas : € rajouté////
  const divPrice = products.price / 100;

  const article = document.getElementById("article");
  console.log(article);

  article.innerHTML += `

         <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <img class="card-img-top" src="${products.imageUrl}" alt="${
    products.name
  }" id="article-photo">
                <div class="card-body">
                 <a class="card-a" href="./produit.html?${
                   products._id
                 }"><h4 class="card-title">${products.name}</h4></a>
                  <h5 id="prix-meuble">${divPrice.toFixed(2)} €</h5>
                 <p class="card-text" id="description-article" >${
                   products.description
                 }</p>
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
                          id="option_personnalisation" ${products.varnish}
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
}
