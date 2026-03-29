// ── jsForDevlogs.js ──────────────────────────────────────────────────────────

// Back to top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop?.classList.toggle('show', window.scrollY > 300);
});
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');
function openMenu()  { mobileMenu.classList.add('open'); menuOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMenu() { mobileMenu.classList.remove('open'); menuOverlay.classList.remove('open'); document.body.style.overflow = ''; }
menuToggle?.addEventListener('click', openMenu);
menuClose?.addEventListener('click', closeMenu);
menuOverlay?.addEventListener('click', closeMenu);

function support() { window.open('mailto:contatosadberry@gmail.com'); }

// ── Current date ─────────────────────────────────────────────────────────────
const dateEl = document.getElementById('current-date');
if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// ── GitHub Releases ───────────────────────────────────────────────────────────
const GITHUB_API = 'https://api.github.com/repos/LukzST/LIGHT/releases';

// Converts GitHub markdown body to basic HTML
function parseMarkdown(md) {
    if (!md) return '<p class="release-empty">No description provided for this release.</p>';

    return md
        // Headers
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/^## (.+)$/gm,  '<h2>$1</h2>')
        .replace(/^# (.+)$/gm,   '<h1>$1</h1>')
        // Bold / italic
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g,     '<em>$1</em>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Unordered lists — group consecutive lines
        .replace(/^[-*] (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>[\s\S]*?<\/li>)(?!\s*<li>)/g, '<ul>$1</ul>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
        // Line breaks → paragraphs (skip lines that are already HTML)
        .split('\n\n')
        .map(block => {
            block = block.trim();
            if (!block) return '';
            if (block.startsWith('<')) return block;
            return `<p>${block.replace(/\n/g, '<br>')}</p>`;
        })
        .join('\n');
}

function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function buildPage(releases) {
    const container = document.getElementById('version-container');
    if (!releases.length) {
        container.innerHTML = '<p class="release-empty">No releases found.</p>';
        return;
    }

    // ── Layout wrapper ────────────────────────────────────────────────────────
    container.innerHTML = `
        <div class="releases-layout">
            <aside class="releases-sidebar" id="releases-sidebar">
                <p class="sidebar-label">Versions</p>
                <ul id="sidebar-list"></ul>
            </aside>
            <div class="releases-content" id="releases-content"></div>
        </div>
    `;

    const sidebarList  = document.getElementById('sidebar-list');
    const contentArea  = document.getElementById('releases-content');

    releases.forEach((release, i) => {
        const id      = `release-${i}`;
        const tag     = release.tag_name  || `v${i + 1}`;
        const name    = release.name      || tag;
        const date    = formatDate(release.published_at || release.created_at);
        const body    = parseMarkdown(release.body);
        const isLatest = i === 0;

        // ── Sidebar item ─────────────────────────────────────────────────────
        const li = document.createElement('li');
        li.className = 'sidebar-item' + (isLatest ? ' active' : '');
        li.dataset.target = id;
        li.innerHTML = `
            <span class="sidebar-tag">${tag}</span>
            ${isLatest ? '<span class="sidebar-badge">Latest</span>' : ''}
        `;
        li.addEventListener('click', () => {
            document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        sidebarList.appendChild(li);

        // ── Release card ──────────────────────────────────────────────────────
        const card = document.createElement('article');
        card.className = 'release-card';
        card.id = id;
        card.innerHTML = `
            <header class="release-header">
                <div class="release-meta">
                    <span class="release-tag">${tag}</span>
                    ${isLatest ? '<span class="release-badge">Latest</span>' : ''}
                    ${release.prerelease ? '<span class="release-badge prerelease">Pre-release</span>' : ''}
                </div>
                <h2 class="release-name">${name}</h2>
                <time class="release-date">${date}</time>
            </header>
            <div class="release-body">${body}</div>
            ${release.assets?.length ? `
            <div class="release-assets">
                <p class="assets-label">Downloads</p>
                <div class="assets-list">
                    ${release.assets.map(a => `
                        <a href="${a.browser_download_url}" class="asset-link" download>
                            <i class="fa-solid fa-download"></i>
                            ${a.name}
                            <span class="asset-size">${(a.size / 1024 / 1024).toFixed(1)} MB</span>
                        </a>
                    `).join('')}
                </div>
            </div>` : ''}
            <a href="${release.html_url}" target="_blank" rel="noopener" class="release-github-link">
                View on GitHub <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        `;
        contentArea.appendChild(card);
    });

    // ── Scroll spy ────────────────────────────────────────────────────────────
    const cards = contentArea.querySelectorAll('.release-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target.id;
                document.querySelectorAll('.sidebar-item').forEach(el => {
                    el.classList.toggle('active', el.dataset.target === target);
                });
            }
        });
    }, { threshold: 0.3 });
    cards.forEach(c => observer.observe(c));
}

// ── Fetch ─────────────────────────────────────────────────────────────────────
async function loadReleases() {
    const container = document.getElementById('version-container');
    try {
        const res  = await fetch(GITHUB_API);
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        const data = await res.json();
        buildPage(data);
    } catch (err) {
        container.innerHTML = `
            <div class="release-error">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <p>Could not load releases. <a href="https://github.com/LukzST/LIGHT/releases" target="_blank">View on GitHub</a>.</p>
            </div>
        `;
        console.error(err);
    }
}

document.addEventListener('DOMContentLoaded', loadReleases);