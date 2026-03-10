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
