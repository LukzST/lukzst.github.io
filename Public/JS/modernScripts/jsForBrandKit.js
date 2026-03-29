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

        function itch() {
            window.open('https://lukzxdd.itch.io/light/purchase?popup=1', 'Popup', 'width=500,height=400,scrollbars=no');
        }
        function support() {
            window.open('mailto:contatosadberry@gmail.com', 'Popup', 'width=500,height=400,scrollbars=no');
        }
        
        function mudarPagina() {
            document.body.style.animation = 'none';
            document.body.offsetHeight;
            document.body.style.animation = 'fadeInPage 0.5s ease-out';
        }


         function downloadGameLogo(version) {
        if (version === 'light') {
            const link = document.createElement('a');
            link.href = '/Public/IMG/light_logo.png';
            link.download = 'game-logo-light.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else if (version === 'dark') {
            const img = document.getElementById('game-dark-img');
            
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            canvas.width = img.naturalWidth || img.width;
            canvas.height = img.naturalHeight || img.height;
            
            ctx.filter = 'invert(1)';
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            
            canvas.toBlob(function(blob) {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'game-logo-dark.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            }, 'image/png');
        }
    }
    
    function downloadStudioLogo(version) {
        if (version === 'light') {
            const link = document.createElement('a');
            link.href = '/Public/IMG/studio-logo-without.png';
            link.download = 'studio-logo-light.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else if (version === 'dark') {
            const img = document.getElementById('studio-dark-img');
            
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            canvas.width = img.naturalWidth || img.width;
            canvas.height = img.naturalHeight || img.height;
            
            ctx.filter = 'invert(1)';
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            
            canvas.toBlob(function(blob) {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'studio-logo-dark.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            }, 'image/png');
        }
    }
    
    function downloadAllAssets() {
        alert('Full package will be available soon!');
    }