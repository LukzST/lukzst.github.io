function itch() {
    window.open('https://lukzxdd.itch.io/light/purchase?popup=1', 'Popup', 'width=500,height=400,scrollbars=no');
}

function support() {
    window.open('mailto:contatosadberry@gmail.com', 'Popup', 'width=500,height=400,scrollbars=no');
}

function soundtrack() {
    window.open('https://www.youtube.com/playlist?list=PLstaXaIuDSEidUQAif2ptoqswAv8qTJ6y', 'Popup', 'width=800,height=600,scrollbars=no');
}

const menu = document.getElementById('menuMobile');

menu.addEventListener('click', function(event) {
    this.classList.toggle('active');
});

const links = document.querySelectorAll('.text_header');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.stopPropagation(); 
        
        menu.classList.remove('active');
        
    });
});