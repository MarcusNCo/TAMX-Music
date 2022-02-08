let card = document.getElementsByClassName('card')

fetch('./assets/data/instruments.json')
.then((response) => {
    return response.json();
})

.then((datas) => {
    for (const property in datas) {
        datas[property].forEach((elements) => { 
            document.querySelector('main').innerHTML +=
                `<div class="card">
                    <img class="overview" src="${elements.product_poster}" alt="${elements.product_poster}">
                    <div class="cardInfo">
                        <h3>${elements.original_title}</h3>
                        <span>${elements.vote_average}</span>
                    </div>
                    <div class="price">
                        <h4>${elements.product_price}</h4>
                        <span> <a href="https://github.com/AnaChqt"><img class='img' src="https://trello.com/1/cards/61fbf22639dd631a43412b82/attachments/61fd0636fc6735413bfa28f6/download/icons8-sac-de-courses-32.png" alt=""> </a></span>
                    </div>
                    <div class="description">
                        <h3>${elements.second_title}</h3>
                        ${elements.description}
                    </div>
                </div>
                `;
        });
    }
})