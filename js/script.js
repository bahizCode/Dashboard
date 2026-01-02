
// ini buka tutup sidebar
const sidebar = document.querySelector('.a .content');
const burger = document.getElementById('burger');
const sidebarClose = document.querySelector('.header-a span');

const openSidebar = () => sidebar.classList.add('show');
const closeSidebar = () => sidebar.classList.remove('show');

burger.addEventListener('click', (e) => {
  e.stopPropagation();
  openSidebar();
});

sidebarClose.addEventListener('click', closeSidebar);

document.addEventListener('click', (e) => {
  if (
    sidebar.classList.contains('show') &&
    !sidebar.contains(e.target) &&
    !burger.contains(e.target)
  ) {
    closeSidebar();
  }
});

// ini saat navbarnya aktif berubah warna
const iconSide = document.querySelectorAll('.con-icon a');
iconSide.forEach(icon =>  {
  icon.addEventListener('click', (e) => {
    iconSide?.forEach(i => i.classList.remove('active'));
    e.currentTarget.classList.add('active');
  })
});


// ini darkmode
const mode = document.querySelectorAll('.mode span');
mode?.forEach(m => {
  m.addEventListener('click', (e) => {
    mode.forEach(m => m.classList.remove('active'));
    m.classList.add('active');

    const light = document.querySelector('.mode .light');
    const body = document.body;
    
    if(e.target === light) {
        body.classList.remove('dark');
        body.classList.add('light');
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
    }
  })
})






// ini untuk modal box
const modal = document.querySelector('.modal-box');
const modalClose = modal.querySelector('.close');

const modalImg = modal.querySelector('.modal-img img');
const modalName = modal.querySelector('.top h3');
const modalRating = modal.querySelector('.top2 p');
const modalEval = modal.querySelector('.top2 .eval');
const modalQty = modal.querySelector('.detail span');
const modalPrice = modal.querySelector('.delivery h5');
const modalStatus = modal.querySelector('.delivery span:last-child');

document.querySelectorAll('.det').forEach(btn => {
  btn.addEventListener('click', () => {
    modalImg.src = btn.dataset.img;
    modalName.textContent = btn.dataset.name;
    modalRating.textContent = btn.dataset.rating;
    modalEval.textContent = btn.dataset.eval;
    modalQty.textContent = btn.dataset.qty;
    modalPrice.textContent = btn.dataset.price;
    modalStatus.textContent = btn.dataset.status;

    modal.classList.add('show');
  });
});

const closeModal = () => modal.classList.remove('show');

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => e.target === modal && closeModal());

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});








// const lightBtn = document.querySelector('.light');
// const darkBtn = document.querySelector('.dark');

// const setTheme = (theme) => {
//   document.body.classList.remove('light', 'dark');
//   document.body.classList.add(theme);

//   lightBtn.classList.toggle('active', theme === 'light');
//   darkBtn.classList.toggle('active', theme === 'dark');

//   localStorage.setItem('theme', theme);
// };

// Load theme
// const savedTheme = localStorage.getItem('theme') || 'dark';
// setTheme(savedTheme);

// lightBtn.addEventListener('click', () => setTheme('light'));
// darkBtn.addEventListener('click', () => setTheme('dark'));

