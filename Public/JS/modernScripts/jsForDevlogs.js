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
        const [repoRes, releasesRes] = await Promise.all([
            fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${targetPath}`),
            fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases`)
        ]);

        const folderData = await repoRes.json();
        const releases = await releasesRes.json();

        const folders = folderData.filter(item => {
            return item.type === 'dir' && 
                !['BETA_V1.0', 'V1.0.1', 'BETA'].includes(item.name) &&
                !item.name.includes('BETA');
        });

        if (folders.length === 0) {
            container.innerHTML = '<div class="text-center opacity-50 py-12">No versions found.</div>';
            return;
        }

        container.innerHTML = '';

        folders.forEach(folder => {
            const releaseInfo = releases.find(r => r.tag_name === folder.name || r.name === folder.name);
            
            const githubDescription = releaseInfo ? releaseInfo.body : "No description provided in GitHub release.";

            const section = document.createElement('section');
            section.className = "release-note-item relative mt-12 flex flex-col pt-24 lg:flex-row";
            section.style.borderTop = "1px solid var(--zen-subtle)";

            section.innerHTML = `
                <div class="flex w-full flex-col gap-2 px-5 md:px-10 md:pr-32 text-left">
                    <div class="w-full justify-between sm:flex items-center">
                        <div class="flex flex-col gap-1 text-sm font-bold opacity-80 sm:flex-row sm:items-center sm:gap-0">
                            <span style="font-family: 'Bricolage Grotesque'; font-size: 1.3rem; color: var(--zen-dark);">${folder.name.toUpperCase()}</span>
                            <span class="text-muted-foreground mx-3 hidden sm:block opacity-30">•</span> 
                            <a href="${releaseInfo ? releaseInfo.html_url : `https://github.com/${repoOwner}/${repoName}/tree/main/${targetPath}/${folder.name}`}" 
                               target="_blank" rel="noopener noreferrer" class="zen-link text-xs !no-underline font-bold" style="color: var(--zen-coral);">
                               VIEW RELEASE →
                            </a>
                        </div>
                        <div class="text-xs font-bold opacity-40" style="color: var(--zen-dark);">${releaseInfo ? 'OFFICIAL RELEASE' : 'FINAL BUILD'}</div>
                    </div>

                    <div class="mt-6 flex flex-col gap-8">
                        <ul class="flex flex-col gap-1" style="list-style: none; padding: 0;">
                            <li class="flex gap-4 items-start">
                                <div style="color: var(--zen-coral); min-width: 65px; font-weight: 800; font-size: 0.85rem; text-transform: uppercase;">Note</div>
                                <div>
                                    <div class="text-base opacity-80 github-body-text" style="color: var(--zen-dark); line-height: 1.7; white-space: pre-wrap;">${githubDescription}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            `;
            container.appendChild(section);
        });
        
    } catch (error) {
        console.error('Error:', error);
        container.innerHTML = '<div class="text-center py-12" style="color: var(--zen-coral)">Error loading release notes.</div>';
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