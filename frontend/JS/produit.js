// il faut récupérer l'ID dans l'url//  get /:_id ,récupération du produit et il faut quil puisse s'afficher//
// ajouter le produit dans le panier avec le vernis choisis//
//il faut pouvoir choisir un vernis//
//il faut pouvoir etre redirigé vers la page panier//
// comme page accueil ajout de la photo titre prix description==> doivent correspondrent  a 1 produit  boutons option et panier//
// on peu creer un alerte ajout au panier pour avertir le client que son action a bien été prise en compte//
//local storage :stocker des données en cache pour meilleure performance , experience utilisateur , quand on ajoute au panier: ajout au localstorage//

//////////////////////////////caractéristique d'un produit/////////////////////////////

class product {
  constructor(id, varnishSelected) {
    this.varnish = varnishSelected;
    this.id = id;
  }
}
///////////////////////////Récupération de l'ID  utilisation des paramètres de l'url(variable d'URL)/////////////////////////////////

function getId() {
  const param = window.location.search; ////La propriété location, de l'objet Javascript window, permet de récupérer la chaine de requêtes ///
  console.log(param);

  const urlParams = new URLSearchParams(param); ///analyse des paramètres de la chaîne////

  const id = param.replace("?id=", ""); //// récupération uniquement de l'identifiant , on enlève ?id////
  console.log(id);
  return id;
}

////////Requête fetch avec l'identifiant id////////////////////////////////
const getProducts = async () => {
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
};

////////////////////////AFFICHAGE DU PRODUIT , injection dans le DOM //////////////

function displayOneProduct(products) {
  ////je me place dans la div article////
  const article = document.getElementById("article");
  console.log(productList);
  const carousel = document.querySelector(".carousel-inner");

  products.forEach((product) => {
    ////création du contenu de la div article////
    carousel.innerHTML += `
              <div class="carousel-item">
                <img class="d-block img-fluid" src="${product.imageUrl}" alt="${product.name}">
              </div>

    `;
    article.innerHTML += `

         <div class="card h-100">
                <img class="card-img-top" src="${product.imageUrl}" alt="${product.name}">
                <div class="card-body">
                 <a class="card-a" href="./produit.html?${product._id}"><h4 class="card-title">${product.name}</h4></a>
                  <h5 id="prix-meuble">${product.price}</h5>
                 <p class="card-text">${product.description}</p>
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
                          id="option_personnalisation" ${product.varnish}
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
  });
}
