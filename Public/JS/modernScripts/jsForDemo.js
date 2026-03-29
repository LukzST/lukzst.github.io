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
        
        function support() {
            window.location.href = "/support/";
        }
        
        function mudarPagina() {
            document.body.style.animation = 'none';
            document.body.offsetHeight;
            document.body.style.animation = 'fadeInPage 0.5s ease-out';
        }

        const downloadBtn = document.querySelector('#windows-x86_64-downloads .download-button');
        const twilightInfo = document.getElementById('twilight-info');

        if (downloadBtn && twilightInfo) {
            downloadBtn.addEventListener('mouseover', () => {
                twilightInfo.dataset.twilight = 'true';
                twilightInfo.style.opacity = '0';
                twilightInfo.style.transition = 'opacity 0.3s ease';
                requestAnimationFrame(() => {
                    twilightInfo.style.opacity = '1';
                });
            });
            downloadBtn.addEventListener('mouseout', () => {
                twilightInfo.style.opacity = '0';
                setTimeout(() => {
                    twilightInfo.dataset.twilight = 'false';
                }, 300);
            });
        }