// ==================== MAIN SITE SCRIPT ====================

// Back to Top
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Menu
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');

function openMenu() {
    mobileMenu.classList.add('open');
    menuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);

// Functions
function itch() {
    window.open('https://lukzxdd.itch.io/light/purchase?popup=1', 'Popup', 'width=500,height=400,scrollbars=no');
}

function support() {
    window.open('mailto:contatosadberry@gmail.com', 'Popup', 'width=500,height=400,scrollbars=no');
}

function screenshot1() { window.open("/Public/IMG/screen1.png", "_blank"); }
function screenshot2() { window.open("/Public/IMG/screen2.png", "_blank"); }
function screenshot3() { window.open("/Public/IMG/screen3.png", "_blank"); }
function screenshot4() { window.open("/Public/IMG/screen4.png", "_blank"); }

function mudarPagina() {
    document.body.style.animation = 'none';
    document.body.offsetHeight;
    document.body.style.animation = 'fadeInPage 0.5s ease-out';
}

// Retro Popup
const popup = document.getElementById('retroPopup');
const closePopupBtn = document.getElementById('closePopup');

if (!localStorage.getItem('retroPopupShown')) {
    setTimeout(() => {
        if (popup) popup.classList.add('show');
    }, 1500);
}

if (closePopupBtn) {
    closePopupBtn.addEventListener('click', () => {
        if (popup) popup.classList.remove('show');
        localStorage.setItem('retroPopupShown', 'true');
    });
}

if (popup) {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('show');
            localStorage.setItem('retroPopupShown', 'true');
        }
    });
}