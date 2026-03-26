
window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
});


function itch() {
    window.open('https://lukzxdd.itch.io/light/purchase?popup=1', 'Popup', 'width=500,height=400,scrollbars=no');
}
function support() {
    window.open('mailto:contatosadberry@gmail.com', 'Popup', 'width=500,height=400,scrollbars=no');
}

function soundtrack() {
    window.open('https://www.youtube.com/playlist?list=PLstaXaIuDSEidUQAif2ptoqswAv8qTJ6y', 'Popup', 'width=800,height=600,scrollbars=no');
}
function screenshot1() {
    window.open('/Public/IMG/screen1.png', 'Popup', 'width=800,height=600,scrollbars=no');
}
function screenshot2() {
    window.open('/Public/IMG/screen2.png', 'Popup', 'width=800,height=600,scrollbars=no');
}
function screenshot3() {
    window.open('/Public/IMG/screen3.png', 'Popup', 'width=800,height=600,scrollbars=no');
}
function screenshot4() {
    window.open('/Public/IMG/screen4.png', 'Popup', 'width=800,height=600,scrollbars=no');
}
function screenshot5() {
    window.open('/Public/IMG/screen6.png', 'Popup', 'width=800,height=600,scrollbars=no');
}
function screenshot6() {
    window.open('/Public/IMG/screen7.png', 'Popup', 'width=800,height=600,scrollbars=no');
}
function screenshot7() {
    window.open('/Public/IMG/screen8.png', 'Popup', 'width=800,height=600,scrollbars=no');
}
function screenshot8() {
    window.open('/Public/IMG/screen9.png', 'Popup', 'width=800,height=600,scrollbars=no');
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


// Public/JS/animations.js

document.addEventListener('DOMContentLoaded', () => {
    // Configuração do Intersection Observer
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    // Função para animar elementos com stagger
    function animateElements(elements, delayBetween = 150) {
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.transition = 'opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), filter 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.filter = 'blur(0px)';
            }, index * delayBetween);
        });
    }

    // Observer callback
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                
                // Animação Hero (#header)
                if (section.id === 'header') {
                    const elements = section.querySelectorAll('h1 b, h1 span, p, div:has(a), video, ul');
                    elements.forEach(el => {
                        el.style.opacity = '0';
                        el.style.transform = 'translateY(20px)';
                        el.style.filter = 'blur(4px)';
                    });
                    animateElements(Array.from(elements), 150);
                }
                
                // Animação About (#about)
                if (section.id === 'about') {
                    const elements = section.querySelectorAll('h2, h2 span, .bg-subtle, .bg-coral\\/10, #screenshots img');
                    elements.forEach(el => {
                        el.style.opacity = '0';
                        el.style.transform = 'translateY(20px)';
                        el.style.filter = 'blur(4px)';
                    });
                    animateElements(Array.from(elements), 150);
                }
                
                // Animação Download (#download)
                if (section.id === 'download') {
                    const elements = section.querySelectorAll('h3, a');
                    elements.forEach(el => {
                        el.style.opacity = '0';
                        el.style.transform = 'translateY(20px)';
                        el.style.filter = 'blur(4px)';
                    });
                    animateElements(Array.from(elements), 150);
                }
                
                // Animação Footer
                if (section.tagName === 'FOOTER') {
                    const elements = section.querySelectorAll('#footer-title, p, h4, li');
                    elements.forEach(el => {
                        el.style.opacity = '0';
                        el.style.transform = 'translateY(20px)';
                        el.style.filter = 'blur(4px)';
                    });
                    animateElements(Array.from(elements), 100);
                }
                
                observer.unobserve(section);
            }
        });
    }, observerOptions);

    // Observar as seções
    const header = document.getElementById('header');
    const about = document.getElementById('about');
    const download = document.getElementById('download');
    const footer = document.querySelector('footer');
    
    if (header) observer.observe(header);
    if (about) observer.observe(about);
    if (download) observer.observe(download);
    if (footer) observer.observe(footer);
    
    // Estado inicial dos elementos (escondidos)
    const style = document.createElement('style');
    style.textContent = `
        #header h1 b, #header h1 span, #header p, #header div:has(a), #header video, #header ul,
        #about h2, #about h2 span, #about .bg-subtle, #about .bg-coral\\/10, #about #screenshots img,
        #download h3, #download a,
        footer #footer-title, footer p, footer h4, footer li {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(4px);
            transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), 
                        transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), 
                        filter 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
    `;
    document.head.appendChild(style);
});