

const icons = document.querySelectorAll('.con-icon a');
icons.forEach(icon => {
    if(!icons || icons.length === 0) return;
    icon.addEventListener('click', (e) => {
        icons.forEach(i => i.classList.remove('active'));
        e.currentTarget.classList.add('active');
    })
})

const detailButton = document.querySelectorAll('.det');
const modal = document.querySelector('.modal-box');
const modalClose = modal.querySelector('.close');

const modalImg = modal.querySelector('.modal-img img');
const modalNama = modal.querySelector('.top h3');
const modalRating = modal.querySelector('.top2 p');
const modalEval = modal.querySelector('.top2 .eval');
const modalQty = modal.querySelector('.detail span');
const modalPrice = modal.querySelector('.delivery h5');
const modalStat = modal.querySelector('.delivery span:last-child');

detailButton.forEach(btn => {
    btn.addEventListener('click', (e) => {
        modalImg.src = btn.dataset.img;
        modalNama.textContent = btn.dataset.name;
        modalRating.textContent = btn.dataset.rating;
        modalEval.textContent = btn.dataset.eval;
        modalQty.textContent = btn.dataset.qty;
        modalPrice.textContent = btn.dataset.price;
        modalStat.textContent = btn.dataset.status;

        modal.classList.add('show');
    })
});

modalClose.addEventListener('click', (e) => {
       modal.classList.remove('show')
});

modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.classList.remove('show')
    }
});



