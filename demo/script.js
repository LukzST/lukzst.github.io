const repoOwner = 'lukzst';
        const repoName = 'light';
        const targetPath = 'FINAL';

        async function fetchVersions() {
            const container = document.getElementById('version-container');
            
            try {
                const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${targetPath}`);
                if (!response.ok) throw new Error();
                
                const data = await response.json();
                container.innerHTML = '';

                const folders = data.filter(item => item.type === 'dir' && item.name !== 'BETA_V1.0');

                folders.forEach(folder => {
                    const card = document.createElement('a');
                    card.href = `https://github.com/${repoOwner}/${repoName}/tree/main/${targetPath}/${folder.name}`;
                    card.target = "_blank";
                    card.className = 'version-card';
                    
                    card.innerHTML = `
                        <h2>${folder.name.toUpperCase()}</h2>
                        <p>Final build located in the repository. Click to access the files for this version.</p>
                        <span style="color: var(--primary-color); font-weight: bold;">EXPLORE →</span>
                    `;
                    
                    container.appendChild(card);
                });
            } catch (e) {
                container.innerHTML = '<p class="about-text">Erro ao carregar versões ou pasta vazia.</p>';
            }
        }

        window.onload = fetchVersions;