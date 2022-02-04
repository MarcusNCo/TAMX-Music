fetch('./assets/data/instruments.json') // aller chercher le json
    .then((response) => { // contenu stocker dans response
        return response.json(); // retourne ce qu'il a trouver
    })
    .then((datas) => {
        // automatise l'ensemble de l'objet datas pour récuperer ses propriétés et permettre de ne plus être limiter si on ajoute une catégorie
        for (const property in datas) {
            // console.log(datas[property]);
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
                            <button type="button" class="btn btn-primary btn-block productItem" id=${element.id} >Ajouter au panier</button>
                        </div>
                    </div>
                </div>
                `
            });
        }

        // variables addProduct
        let productItem = document.querySelectorAll('.productItem');
        // console.log(productItem);

        // variables panier
        let cart =   [
            // {
            //     "id"                : "1",
            //     "original_title"    : "piano",
            //     "second_title"      : "46 touches",
            //     "description"       : "trés bon piano",
            //     "product_poster"    : "element.poster_path",
            //     "product_price"     : "150",
            //     "vote_average"      : "5.8",
            // },
            // {
            //     "id"                : "2",
            //     "original_title"    : "piano",
            //     "second_title"      : "46 touches",
            //     "description"       : "trés bon piano",
            //     "product_poster"    : "element.poster_path",
            //     "product_price"     : "150",
            //     "vote_average"      : "5.8",
            // },
        ];
        // Button clic productItem
        productItem.forEach(element => {
            element.addEventListener('click', () => {
                // ajouter un element au panier
                // cart.push(datas[clavier[1]].original_title);
                console.log(cart);
                // let test = dataset.title;
                // localStorage.setItem("cart", JSON.stringify(test));
                
            })
        });


        let button = document.getElementById('button');
        button.addEventListener('click', () => {
            console.log(datas);
            cart.push(datas[clavier[1]].original_title);
        });
    })

// local storage panier
// localStorage.setItem("cart", JSON.stringify(cart));