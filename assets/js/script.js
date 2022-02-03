// fetch('./assets/data/movies.json') // aller chercher le json
//     .then((response) => { // contenu stocker dans response
//         return response.json(); // retourne ce qu'il a trouver
//     })
//     .then((datas) => {

//         datas.results.forEach((element) => {
//             // console.log(element);
//             // console.log(data.results[1]original_titile)
//             container.innerHTML +=
//             `
//             <div class="row d-flex align-items-center p-4">
//                 <div class="col-12 col-sm-5 col-lg-4 col-xl-3">
//                     <img src="${element.poster_path}" class="img-fluid rounded" alt="image de film"></img>
//                 </div>
//                 <div class="col-12 col-sm-7 col-lg-8 col-xl-9">
//                     <div class="card-body">
//                         <h5 class="card-title title-color fw-bold">${element.original_title}</h5>
//                         <p class="card-text">${element.overview}</p>
//                         <p class="card-text"><small class="text-muted">Note: ${element.vote_average}</small></p>
//                         <button type="button" id="addProduct" class="btn btn-primary btn-block">Ajouter au panier</button>
//                     </div>
//                 </div>
//             </div>
//             `
//         });
//     })


// variables panier
let cart =   [
                {
                    "id"                : "0",
                    "original_title"    : "piano",
                    "second_title"      : "46 touches",
                    "description"       : "trés bon piano",
                    "product_poster"    : "element.poster_path",
                    "product_price"     : "150",
                    "vote_average"      : "5.8",
                },
                {
                    "id"                : "1",
                    "original_title"    : "violon",
                    "second_title"      : "luxe plus",
                    "description"       : "très bon violo",
                    "product_poster"    : "img_link",
                    "product_price"     : "1000",
                    "vote_average"      : "9",
                }
            ];
// local storage panier
localStorage.setItem("cart", JSON.stringify(cart));