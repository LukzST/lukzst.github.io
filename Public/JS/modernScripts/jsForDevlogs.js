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

        const repoOwner = 'lukzst';
        const repoName = 'light';
        const targetPath = 'FINAL';

        function setCurrentDate() {
            const dateElement = document.getElementById('current-date');
            if (dateElement) {
                const today = new Date();
                const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
                dateElement.innerText = today.toLocaleDateString('pt-BR', options);
            }
        }

        async function fetchVersions() {
            const container = document.getElementById('version-container');
            if (!container) return;
            
            try {
                const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${targetPath}`);
                if (!response.ok) throw new Error('Failed to fetch');
                
                const data = await response.json();
                
                        const folders = data.filter(item => {
                            return item.type === 'dir' && 
                                item.name !== 'BETA_V1.0' && 
                                item.name !== 'V1.0.1' &&
                                item.name !== 'BETA' &&
                                !item.name.includes('BETA');
                        });
                
                if (folders.length === 0) {
                    container.innerHTML = '<div class="error-message">No versions found yet. Check back soon!</div>';
                    return;
                }
                
                container.innerHTML = '';
                
                folders.forEach(folder => {
                    const card = document.createElement('a');
                    card.href = `https://github.com/${repoOwner}/${repoName}/tree/main/${targetPath}/${folder.name}`;
                    card.target = "_blank";
                    card.className = 'version-card';
                    card.rel = "noopener noreferrer";
                    
                    card.innerHTML = `
                        <h2 style="font-family: Bricolage Grotesque;">${folder.name.toUpperCase()}</h2>
                        <p>Final build located in the repository. Click to access the files for this version.</p>
                        <div class="explore-link">
                            EXPLORE →
                        </div>
                    `;
                    
                    container.appendChild(card);
                });
                
            } catch (error) {
                console.error('Error fetching versions:', error);
                container.innerHTML = '<div class="error-message">Unable to load versions. Please try again later.</div>';
            }
        }

        function support() {
            window.location.href = "/support/";
        }
        
        function soundtrack() {
            window.location.href = "/soundtrack/";
        }

        document.addEventListener('DOMContentLoaded', () => {
            setCurrentDate();
            fetchVersions();
        });
        function mudarPagina() {
            document.body.style.animation = 'none';
            document.body.offsetHeight;
            document.body.style.animation = 'fadeInPage 0.5s ease-out';
        }