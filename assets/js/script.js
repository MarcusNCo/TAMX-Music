let allProducts = [];

fetch('./assets/data/instruments.json') // aller chercher le json
    .then((response) => { // contenu stocker dans response
        return response.json(); // retourne ce qu'il a trouver
    })
    .then((datas) => {
        // var datasProduct = datas; // Ce que on recupere on le met dans datasProduct (pour le panier)
        allProducts = datas;
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
                
            })
        });

    })
const displayCart = (itemJson) => {
    product.innerHTML +=
    `
    <div>
        <div class="priceTitle w-100 d-flex justify-content-between">
        <h4 class="productPrice">${itemJson.original_title}</h4>
        <h4 class="productTitle">${itemJson.product_price} </h4>
    </div>
    <img class="imgModal m-3" src="${itemJson.product_poster}" alt="">
    <div class="quantityDeleteValid w-100 d-flex justify-content-around">
        <div class="blockQuantityDelete w-100 h-50">
            <div class="input-group w-25 mb-3">
                <button class="btn btn-dark dropdown-toggle btnQuantity" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">Qté</button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" id="1" href="#">1</a></li>
                    <li><a class="dropdown-item" id="2" href="#">2</a></li>
                    <li><a class="dropdown-item" id="3" href="#">3</a></li>
                    <li><a class="dropdown-item" id="4" href="#">4</a></li>
                    <li><a class="dropdown-item" id="5" href="#">5</a></li>
                    <li><a class="dropdown-item" id="6" href="#">6</a></li>
                    <li><a class="dropdown-item" id="7" href="#">7</a></li>
                    <li><a class="dropdown-item" id="8" href="#">8</a></li>
                    <li><a class="dropdown-item" id="9" href="#">9</a></li>
                    <li><a class="dropdown-item" id="10" href="#">10</a></li>
                </ul>
            </div>
            <img class="pictureBin btnDelete" id="binBtn" src="assets/img/Bin (1).png" alt="corbeille">
        </div>
    </div>
    `
}        
// affichage des elements du panier
const loadCart = (datas) => {
    let cart = JSON.parse(localStorage.getItem('cart'));

    let totalHt = 0;
    let totalTtc = 0;
    product.innerHTML = "";
    
    cart.forEach(itemCart => {
        datas.clavier.forEach(itemJson => {
            if (itemCart[0] == itemJson.id) {
                console.log(cart);
                displayCart(itemJson);
                let price = itemJson.product_price.split(' ')[0];
                totalHt = (totalHt + Number(price)) * itemCart[1];
                totalTtc = totalHt * 1.20;
            }
        });
        datas.boiteRythme.forEach(itemJson => {
            if (itemCart[0] == itemJson.id) {
                displayCart(itemJson);
                let price = itemJson.product_price.split(' ')[0];
                totalHt = totalHt + Number(price);
                totalTtc = totalHt * 1.20;
            }
        });
        datas.batterie.forEach(itemJson => {
            if (itemCart[0] == itemJson.id) {
                displayCart(itemJson);
                let price = itemJson.product_price.split(' ')[0];
                totalHt = totalHt + Number(price);
                totalTtc = totalHt * 1.20;
            }
        });
        datas.guitar.forEach(itemJson => {
            if (itemCart[0] == itemJson.id) {
                displayCart(itemJson);
                let price = itemJson.product_price.split(' ')[0];
                totalHt = totalHt + Number(price);
                totalTtc = totalHt * 1.20;
            }
        });
        datas.studio.forEach(itemJson => {
            if (itemCart[0] == itemJson.id) {
                displayCart(itemJson);
                let price = itemJson.product_price.split(' ')[0];
                totalHt = totalHt + Number(price);
                totalTtc = totalHt * 1.20;
            }
        });
        totalProductHt = totalHt.toFixed(2);
        totalProductTtc = totalTtc.toFixed(2);
        resultHT.innerHTML = `${totalProductHt} €`;
        resultTTC.innerHTML = `${totalProductTtc} €`;
    });
    
}
// Button reset panier
resetCart.addEventListener('click', () => {
    // supprimer localStorage panier
    localStorage.removeItem('cart');
    // reinitialisation valeurs calc
    product.innerHTML = "";
    resultHT.innerHTML = "0 €";
    resultTTC.innerHTML = "0 €";
})

// modal
openModal.addEventListener('click', () => {
    loadCart(allProducts);
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