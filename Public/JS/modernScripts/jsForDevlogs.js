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
    // 1. Criar o elemento de seção (estilo Zen)
                const section = document.createElement('section');
                section.className = "release-note-item relative mt-12 flex flex-col pt-24 lg:flex-row";
                section.style.borderTop = "1px solid var(--zen-subtle)";
                section.id = folder.name;

                // 2. Injetar o HTML de texto limpo
                section.innerHTML = `
                    <div class="flex w-full flex-col gap-2 px-5 md:px-10 md:pr-32 text-left">
                        
                        <div class="w-full justify-between sm:flex items-center">
                            <div class="flex flex-col gap-1 text-sm font-bold opacity-80 sm:flex-row sm:items-center sm:gap-0">
                                <span style="font-family: 'Bricolage Grotesque'; font-size: 1.3rem; color: var(--zen-dark);">${folder.name.toUpperCase()}</span>
                                <span class="text-muted-foreground mx-3 hidden sm:block opacity-30">•</span> 
                                <a href="https://github.com/${repoOwner}/${repoName}/tree/main/${targetPath}/${folder.name}" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                class="zen-link text-xs !no-underline font-bold"
                                style="color: var(--zen-coral);">
                                VIEW ON GITHUB →
                                </a>
                            </div>
                            <div class="text-xs font-bold opacity-40" style="color: var(--zen-dark);">FINAL BUILD</div>
                        </div>

                        <div class="mt-6 flex flex-col gap-8">
                            <ul class="flex flex-col gap-1" style="list-style: none; padding: 0;">
                                <li class="flex gap-4 items-start">
                                    <div style="color: var(--zen-coral); min-width: 65px; font-weight: 800; font-size: 0.85rem; text-transform: uppercase;">Note</div>
                                    <div>
                                        <span class="text-base opacity-80" style="color: var(--zen-dark); line-height: 1.7;">
                                            Final build for ${folder.name} is available. This release includes all compiled assets. 
                                            Access the repository link above to see full details and source code.
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                `;

                container.appendChild(section);
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