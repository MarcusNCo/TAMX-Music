fetch('./assets/data/instruments.json') // aller chercher le json
    .then((response) => { // contenu stocker dans response
        return response.json(); // retourne ce qu'il a trouver
    })
    .then((datas) => {
        var datasProduct = datas; // Ce que on recupere on le met dans datasProduct (pour le panier)


        // automatise l'ensemble de l'objet datas pour récuperer ses propriétés et permettre de ne plus être limiter si on ajoute une catégorie
        for (const property in datas) {
            datas[property].forEach((element) => {
                container.innerHTML +=
                    `
                <div class="row d-flex align-items-center p-4">
                    <div class="col-12 col-sm-5 col-lg-4 col-xl-3">
                        <img src="${element.product_poster}" class="img-fluid rounded" alt="image de film"></img>
                    </div>
                    <div class="col-12 col-sm-7 col-lg-8 col-xl-9">
                        <div class="card-body">
                            <h5 class="card-title title-color fw-bold" data-title="azerty" >${element.original_title}</h5>
                            <p class="card-text">${element.description}</p>
                            <p class="card-text"><small class="text-muted">Note: ${element.vote_average}</small></p>
                            <button type="button" class="btn btn-primary btn-block productItem" data-cat=${property} id=${element.id} >Ajouter au panier</button>
                        </div>
                    </div>
                </div>
                `
            });
        }

        // variable button ajouter au panier
        let productItem = document.querySelectorAll('.productItem');


        // Button clic productItem
        productItem.forEach(element => {
            element.addEventListener('click', (event) => {
                let cart = JSON.parse(localStorage.getItem('cart')); // on recupere le panier

                if (cart) {
                    let productExist = 0 // on regarde si le produit existe
                    cart.forEach(item => {
                        if (item[0] == event.target.getAttribute('id')) { // si il existe on ajoute 1 à sa quantité
                            productExist = 1;
                            item[1]++;
                        }
                    });
                    if (!productExist) { // s'il existe pas, on le crée avec une quantité de 1
                        cart.push([event.target.getAttribute('id'), 1]);
                    }
                    localStorage.setItem('cart', JSON.stringify(cart)); // on push le nouveau panier dans le local storage
                } else {
                    localStorage.setItem("cart", JSON.stringify([
                        [event.target.getAttribute('id'), 1]
                    ])); // on push un panier
                }
            })
        });

        const displayCart = (itemJson) => {
            cartContainer.innerHTML += `${itemJson.original_title} <img src="${itemJson.product_poster}">`;
            
        }

        // affichage des elements du panier
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.forEach(itemCart => {

            datas.clavier.forEach(itemJson => {
                if (itemCart[0] == itemJson.id) {
                    displayCart(itemJson)
                }
            });
            datas.boiteRythme.forEach(itemJson => {
                if (itemCart[0] == itemJson.id) {
                    displayCart(itemJson)
                }
            });
            datas.batterie.forEach(itemJson => {
                if (itemCart[0] == itemJson.id) {
                    displayCart(itemJson)
                }
            });
            datas.guitar.forEach(itemJson => {
                if (itemCart[0] == itemJson.id) {
                    displayCart(itemJson)
                }
            });
            datas.studio.forEach(itemJson => {
                if (itemCart[0] == itemJson.id) {
                    displayCart(itemJson)
                }
            });

        });

    })