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