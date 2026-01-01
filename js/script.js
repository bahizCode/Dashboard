const sideBar = document.querySelector('.content');
const menuSidebar = document.getElementById('burger');
const closeSidebar = document.querySelector('.header-a span');

console.log(sideBar)

closeSidebar.onclick = (e) => {
    sideBar.classList.remove('show');
}

menuSidebar.onclick = (e) => {
     sideBar.classList.add('show');
     closeSidebar.style.opacity = 1;
}

document.addEventListener('click', (e) => {
     if(!sideBar.contains(e.target) && !menuSidebar.contains(e.target)) {
        sideBar.classList.remove('show');
     }
})






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


const light = document.querySelector('.light');
const dark = document.querySelector('.dark');

light.onclick = (e) => {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
    document.body.style.transition = '.3s ease-in-out';
    light.classList.add('active');
    dark.classList.remove('active');
}
dark.onclick = (e) => {
    document.body.style.backgroundColor = '#0f172a';
    document.body.style.color = '#fff';
    document.body.style.transition = '.3s ease-in-out';
    dark.classList.add('active');
    light.classList.remove('active');
}
