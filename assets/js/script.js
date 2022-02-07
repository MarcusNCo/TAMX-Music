fetch('./assets/data/instruments.json') // aller chercher le json
    .then((response) => { // contenu stocker dans response
        return response.json(); // retourne ce qu'il a trouver
    })
    .then((datas) => {
        // var datasProduct = datas; // Ce que on recupere on le met dans datasProduct (pour le panier)

        // automatise l'ensemble de l'objet datas pour récuperer ses propriétés et permettre de ne plus être limiter si on ajoute une catégorie
        for (const property in datas) {
            datas[property].forEach((element) => { 
                container.innerHTML +=
                    `
                    <div class="card w-auto h-auto">
                        <img src="${element.product_poster}" alt="image du produit">
                        <div class="cardInfo">
                            <h3>${element.original_title}</h3>
                            <span>${element.vote_average}</span>
                        </div>
                        <div class="price">
                            <h4>${element.product_price}</h4>
                            <span><img src="https://trello.com/1/cards/61fbf22639dd631a43412b82/attachments/61fd0636fc6735413bfa28f6/download/icons8-sac-de-courses-32.png" class="productItem" data-cat=${property} id=${element.id} alt=""></span>
                        </div>

                        <div class="description">
                            <h3>Description</h3>
                            ${element.description}
                        </div>
                    </div>
                    `
                ;
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
                myModal.style.display = 'flex';
                myModalBg.style.display = 'block';
            })
        });

        const displayCart = (itemJson) => {
            // cartContainer.innerHTML += `${itemJson.original_title} <img src="${itemJson.product_poster}">`;
            cartImg.innerHTML +=
                `
                <div>${itemJson.original_title}</div>
                <img class="imgModal m-3" src="${itemJson.product_poster}" alt="image produit">
                `
            ;
        }

        // affichage des elements du panier
        let cart = JSON.parse(localStorage.getItem('cart'));

        cart.forEach(itemCart => {
            datas.clavier.forEach(itemJson => {
                if (itemCart[0] == itemJson.id) {
                    displayCart(itemJson);
                    // affichage des quantités du panier
                    cartImg.innerHTML +=
                    `
                    <div>${itemCart[1]}</div>
                    `;
                }
            });
            datas.boiteRythme.forEach(itemJson => {
                if (itemCart[0] == itemJson.id) {
                    displayCart(itemJson);
                    // affichage des quantités du panier
                    cartImg.innerHTML +=
                    `
                    <div>${itemCart[1]}</div>
                    `;
                }
            });
            datas.batterie.forEach(itemJson => {
                if (itemCart[0] == itemJson.id) {
                    displayCart(itemJson);
                    // affichage des quantités du panier
                    cartImg.innerHTML +=
                    `
                    <div>${itemCart[1]}</div>
                    `;
                }
            });
            datas.guitar.forEach(itemJson => {
                if (itemCart[0] == itemJson.id) {
                    displayCart(itemJson);
                    // affichage des quantités du panier
                    cartImg.innerHTML +=
                    `
                    <div>${itemCart[1]}</div>
                    `;
                }
            });
            datas.studio.forEach(itemJson => {
                if (itemCart[0] == itemJson.id) {
                    displayCart(itemJson);
                    // affichage des quantités du panier
                    cartImg.innerHTML +=
                    `
                    <div>${itemCart[1]}</div>
                    `;
                }
            });
        });
    })


// Button reset panier
resetCart.addEventListener('click', () => {
    // supprimer localStorage panier
    localStorage.removeItem('cart');
})


// modal
let productItem = document.querySelectorAll('.productItem');

test.addEventListener('click', () => {
    myModal.style.display = 'flex';
    myModalBg.style.display = 'block';
});
closeModalBuy.addEventListener('click', () => {
    myModal.style.display = 'none';
    myModalBg.style.display = 'none';
});
window.onclick = function(event) {
    if (event.target == myModalBg) {
        myModalBg.style.display = "none";
    }
}

const navigation = document.querySelector('nav')

window.addEventListener('scroll', () => {

    if (window.scrollY > 500){
        navigation.classList.add('anim-nav')
    } else {
        navigation.classList.remove('anim-nav')
    }
})