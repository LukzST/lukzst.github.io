const backToTop = document.getElementById("backToTopBtn");
const sidebar = document.getElementById('m3Sidebar');
const overlay = document.getElementById('sidebarOverlay');
const menuBtn = document.getElementById('menuButtonSide');

// BACK TO TOP
if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}

// SIDEBAR TOGGLE MOBILE
function openSidebar() {
    if (window.innerWidth <= 768) {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (menuBtn) menuBtn.addEventListener('click', openSidebar);
if (overlay) overlay.addEventListener('click', closeSidebar);

// NAVIGATION ACTIVE
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const href = item.getAttribute('href');
        if (href && href !== '#') {
            window.location.href = href;
        }
        closeSidebar();
    });
});

// RESIZE: fechar sidebar mobile ao redimensionar para desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeSidebar();
    }
});

// REVEAL ANIMATION
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('revealed');
    });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

const repoOwner = "lukzst";
const repoName = "light";
const targetPath = "FINAL";

function setCurrentDate() {
    const dateElement = document.getElementById("current-date");
    if (dateElement) {
        const today = new Date();
        const options = { day: "2-digit", month: "2-digit", year: "numeric" };
        dateElement.innerText = today.toLocaleDateString("pt-BR", options);
    }
}

async function fetchVersions() {
    const container = document.getElementById("version-container");
    if (!container) return;

    try {
        const [repoRes, releasesRes] = await Promise.all([
            fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${targetPath}`),
            fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases`),
        ]);

        const folderData = await repoRes.json();
        const releases = await releasesRes.json();

        const folders = folderData.filter((item) => {
            return (
                item.type === "dir" &&
                !["BETA", "OLD_V1.0.1"].includes(item.name) &&
                !item.name.includes("BETA") &&
                !item.name.includes("OLD_V1.0.1")
            );
        });

        if (folders.length === 0) {
            container.innerHTML = '<div class="loader-wrapper"><p class="note-text">No versions found.</p></div>';
            return;
        }

        folders.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, {
                numeric: true,
                sensitivity: "base",
            })
        );
        folders.reverse();

        container.innerHTML = "";

        folders.forEach((folder) => {
            const releaseInfo = releases.find(
                (r) => r.tag_name === folder.name || r.name === folder.name
            );

            const githubDescription = releaseInfo
                ? releaseInfo.body
                : "No description provided in GitHub release.";
            const changes = parseDescription(githubDescription);
            const releaseDate = releaseInfo ? formatDate(releaseInfo.published_at) : "Development";

            const card = document.createElement("div");
            card.className = "version-card reveal";

            card.innerHTML = `
                <div class="version-header">
                    <div class="version-name">
                        <span class="material-symbols-rounded">code_blocks</span>
                        ${folder.name.toUpperCase()}
                    </div>
                    <div class="version-date">
                        <span class="material-symbols-rounded">calendar_today</span>
                        ${releaseDate}
                    </div>
                </div>
                <div class="version-content">
                    <div class="version-description">
                        ${releaseInfo ? formatDescription(githubDescription) : githubDescription}
                    </div>
                    ${changes.length > 0 ? `
                        <ul class="version-changes">
                            ${changes.map(change => `
                                <li>
                                    <span class="change-icon ${change.type}">
                                        ${getChangeIcon(change.type)}
                                    </span>
                                    <span class="change-text">${change.text}</span>
                                </li>
                            `).join('')}
                        </ul>
                    ` : ''}
                </div>
                <div class="version-footer">
                    ${releaseInfo ? `
                        <a href="${releaseInfo.html_url}" target="_blank" rel="noopener noreferrer" class="download-link">
                            <span class="material-symbols-rounded">download</span>
                            Download Release
                            <span class="material-symbols-rounded">arrow_forward</span>
                        </a>
                    ` : `
                        <a href="https://github.com/${repoOwner}/${repoName}/tree/main/${targetPath}/${folder.name}" 
                           target="_blank" rel="noopener noreferrer" class="github-link">
                            <span class="material-symbols-rounded">folder_open</span>
                            View in Repository
                        </a>
                    `}
                    <a href="https://github.com/${repoOwner}/${repoName}/releases" target="_blank" rel="noopener noreferrer" class="github-link">
                        <span class="material-symbols-rounded">history</span>
                        All Releases
                    </a>
                </div>
            `;

            container.appendChild(card);
        });

        // Re-trigger reveal animation for new elements
        const newReveals = document.querySelectorAll('.reveal:not(.revealed)');
        newReveals.forEach(r => observer.observe(r));

    } catch (error) {
        console.error("Error:", error);
        container.innerHTML = '<div class="loader-wrapper"><p class="note-text" style="color: var(--md-expressive-coral);">Error loading release notes.</p></div>';
    }
}

function parseDescription(description) {
    const changes = [];
    if (!description) return changes;

    const lines = description.split('\n');
    const changeTypes = {
        added: ['added', 'add', 'new', '+'],
        fixed: ['fixed', 'fix', 'bugfix', 'patch', 'resolve'],
        improved: ['improved', 'improve', 'update', 'enhance', 'optimize'],
        removed: ['removed', 'remove', 'delete', '-']
    };

    lines.forEach(line => {
        const trimmedLine = line.trim();
        if (!trimmedLine || trimmedLine.startsWith('#') || trimmedLine.startsWith('*') && trimmedLine.length < 5) return;

        let type = 'improved';
        const lowerLine = trimmedLine.toLowerCase();

        for (const [key, keywords] of Object.entries(changeTypes)) {
            if (keywords.some(kw => lowerLine.includes(kw))) {
                type = key;
                break;
            }
        }

        // Clean up the line
        let cleanText = trimmedLine
            .replace(/^[•\-\*\d\.\s]+/, '')
            .replace(/^added:|fixed:|improved:|removed:/i, '')
            .trim();

        if (cleanText && cleanText.length > 3) {
            changes.push({ type, text: cleanText });
        }
    });

    return changes.slice(0, 8); // Limit to 8 changes per version
}

function getChangeIcon(type) {
    switch (type) {
        case 'added':
            return '✨';
        case 'fixed':
            return '🐛';
        case 'improved':
            return '⚡';
        case 'removed':
            return '🗑️';
        default:
            return '📝';
    }
}

function formatDescription(description) {
    if (!description) return 'No description available.';
    
    // Get first paragraph or first few lines as summary
    const lines = description.split('\n');
    let summary = '';
    
    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('-') && !trimmed.startsWith('*') && !trimmed.startsWith('#')) {
            summary = trimmed;
            break;
        }
    }
    
    if (!summary && lines.length > 0) {
        summary = lines[0].trim().replace(/^[•\-\*\d\.\s]+/, '');
    }
    
    return summary || 'Check the release notes on GitHub for more details.';
}

function formatDate(dateString) {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

function support() {
    window.location.href = "mailto:contatosadberry@gmail.com";
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
    setCurrentDate();
    fetchVersions();
});