// サンプル記事データ
const articles = [
    // ============================================
    // 📝 記事の雛形（テンプレート）
    // ============================================
    // 新しい記事を追加する際は、以下の雛形をコピーして使用してください
    // この雛形はコメントアウトされているので、記事として表示されません
    // 
    // {
    //     id: 1,  // 既存の最大ID + 1に変更してください
    //     title: '記事のタイトルをここに書く',
    //     excerpt: '記事の簡単な説明を50-150文字程度で書く。記事一覧ページで表示されます。',
    //     content: `
    // # 記事のタイトル
    // 
    // ここに記事の本文をMarkdown形式で書きます。
    // 
    // ## 見出し2
    // 
    // 段落を書くことができます。空行を入れると段落として認識されます。
    // 
    // ### 見出し3
    // 
    // - リスト項目1
    // - リスト項目2
    // - リスト項目3
    // 
    // **太字**や*斜体*も使えます。
    // 
    // \`\`\`javascript
    // // コードブロックの例
    // const example = 'Hello World';
    // console.log(example);
    // \`\`\`
    // 
    // コードブロックは、言語名を指定できます（javascript, python, css など）
    //     `,
    //     category: 'カテゴリー名',  // 例：'React', 'TypeScript', 'CSS' など
    //     tags: ['タグ1', 'タグ2', 'タグ3'],  // 複数のタグを指定可能
    //     date: '2024-02-15',  // YYYY-MM-DD形式で記入（例：'2024-02-15'）
    //     readTime: 5,  // 読了時間（分）を推定して記入
    //     thumbnail: '📝'  // 絵文字またはアイコン（例：'⚛️', '📘', '🎨' など）
    // },
    // ============================================
    // ここから下に新しい記事を追加してください
    // ============================================
];

// アプリケーションの状態管理
const state = {
    articles: articles,
    filteredArticles: articles,
    currentPage: 1,
    articlesPerPage: 6,
    currentView: 'grid',
    activeCategory: 'all',
    activeTags: [],
    searchQuery: '',
    theme: localStorage.getItem('theme') || 'dark'
};

// DOM要素の取得
const elements = {
    articlesGrid: document.getElementById('articlesGrid'),
    searchInput: document.getElementById('searchInput'),
    categoryFilters: document.getElementById('categoryFilters'),
    tagCloud: document.getElementById('tagCloud'),
    themeToggle: document.getElementById('themeToggle'),
    hamburger: document.getElementById('hamburger'),
    navMenu: document.querySelector('.nav-menu'),
    articleModal: document.getElementById('articleModal'),
    modalClose: document.getElementById('modalClose'),
    articleDetail: document.getElementById('articleDetail'),
    pagination: document.getElementById('pagination'),
    noResults: document.getElementById('noResults'),
    articleCount: document.getElementById('articleCount'),
    categoryCount: document.getElementById('categoryCount'),
    tagCount: document.getElementById('tagCount'),
    viewToggle: document.querySelectorAll('.view-btn')
};

// テーマ切り替え
function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeIcon();
}

function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('theme', state.theme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = elements.themeToggle.querySelector('.theme-icon');
    icon.textContent = state.theme === 'dark' ? '🌙' : '☀️';
}

// カテゴリーとタグの抽出
function getCategories() {
    const categories = [...new Set(articles.map(article => article.category))];
    return categories;
}

function getAllTags() {
    const tags = articles.flatMap(article => article.tags);
    return [...new Set(tags)];
}

// カテゴリーフィルターの作成
function renderCategoryFilters() {
    const categories = getCategories();
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.textContent = category;
        button.setAttribute('data-category', category);
        button.addEventListener('click', () => filterByCategory(category));
        elements.categoryFilters.appendChild(button);
    });
}

// タグクラウドの作成
function renderTagCloud() {
    const tags = getAllTags();
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag-item';
        tagElement.textContent = tag;
        tagElement.addEventListener('click', () => toggleTag(tag));
        elements.tagCloud.appendChild(tagElement);
    });
}

// カテゴリーでフィルタ
function filterByCategory(category) {
    state.activeCategory = category;
    
    // アクティブなボタンの更新
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
    
    applyFilters();
}

// タグのトグル
function toggleTag(tag) {
    const tagElement = [...elements.tagCloud.children].find(
        el => el.textContent === tag
    );
    
    if (state.activeTags.includes(tag)) {
        state.activeTags = state.activeTags.filter(t => t !== tag);
        tagElement.classList.remove('active');
    } else {
        state.activeTags.push(tag);
        tagElement.classList.add('active');
    }
    
    applyFilters();
}

// 検索機能
function handleSearch() {
    state.searchQuery = elements.searchInput.value.toLowerCase().trim();
    state.currentPage = 1;
    applyFilters();
}

// フィルターの適用
function applyFilters() {
    let filtered = [...state.articles];
    
    // カテゴリーフィルター
    if (state.activeCategory !== 'all') {
        filtered = filtered.filter(article => 
            article.category === state.activeCategory
        );
    }
    
    // タグフィルター
    if (state.activeTags.length > 0) {
        filtered = filtered.filter(article =>
            state.activeTags.some(tag => article.tags.includes(tag))
        );
    }
    
    // 検索フィルター
    if (state.searchQuery) {
        filtered = filtered.filter(article =>
            article.title.toLowerCase().includes(state.searchQuery) ||
            article.excerpt.toLowerCase().includes(state.searchQuery) ||
            article.tags.some(tag => tag.toLowerCase().includes(state.searchQuery))
        );
    }
    
    state.filteredArticles = filtered;
    renderArticles();
    renderPagination();
    
    // 結果がない場合の表示
    if (filtered.length === 0) {
        elements.noResults.style.display = 'block';
    } else {
        elements.noResults.style.display = 'none';
    }
}

// 記事カードの作成
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = `article-card ${state.currentView === 'list' ? 'list-view' : ''}`;
    
    const date = new Date(article.date).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    card.innerHTML = `
        <div class="article-thumbnail">${article.thumbnail}</div>
        <div class="article-content">
            <div class="article-meta">
                <span class="article-category">${article.category}</span>
                <span>${date}</span>
                <span>${article.readTime}分で読める</span>
            </div>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-tags">
                ${article.tags.map(tag => `<span class="article-tag">${tag}</span>`).join('')}
            </div>
            <div class="article-footer">
                <span>続きを読む →</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => showArticleDetail(article));
    
    return card;
}

// 記事一覧のレンダリング
function renderArticles() {
    elements.articlesGrid.innerHTML = '';
    elements.articlesGrid.className = `articles-grid ${state.currentView === 'list' ? 'list-view' : ''}`;
    
    const start = (state.currentPage - 1) * state.articlesPerPage;
    const end = start + state.articlesPerPage;
    const articlesToShow = state.filteredArticles.slice(start, end);
    
    articlesToShow.forEach(article => {
        const card = createArticleCard(article);
        elements.articlesGrid.appendChild(card);
    });
    
    // アニメーション
    const cards = elements.articlesGrid.querySelectorAll('.article-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// ページネーションのレンダリング
function renderPagination() {
    const totalPages = Math.ceil(state.filteredArticles.length / state.articlesPerPage);
    
    if (totalPages <= 1) {
        elements.pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // 前へボタン
    paginationHTML += `
        <button class="pagination-btn" ${state.currentPage === 1 ? 'disabled' : ''} 
                onclick="changePage(${state.currentPage - 1})">
            前へ
        </button>
    `;
    
    // ページ番号
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= state.currentPage - 1 && i <= state.currentPage + 1)) {
            paginationHTML += `
                <button class="pagination-btn ${i === state.currentPage ? 'active' : ''}" 
                        onclick="changePage(${i})">
                    ${i}
                </button>
            `;
        } else if (i === state.currentPage - 2 || i === state.currentPage + 2) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
    }
    
    // 次へボタン
    paginationHTML += `
        <button class="pagination-btn" ${state.currentPage === totalPages ? 'disabled' : ''} 
                onclick="changePage(${state.currentPage + 1})">
            次へ
        </button>
    `;
    
    elements.pagination.innerHTML = paginationHTML;
}

// ページ変更
function changePage(page) {
    state.currentPage = page;
    renderArticles();
    renderPagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 記事詳細の表示
function showArticleDetail(article) {
    const date = new Date(article.date).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Markdown風のコンテンツをHTMLに変換（簡易版）
    let content = article.content
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/gim, '<em>$1</em>')
        .replace(/`([^`]+)`/gim, '<code>$1</code>')
        .replace(/```(\w+)?\n([\s\S]*?)```/gim, (match, lang, code) => {
            const codeId = Math.random().toString(36).substr(2, 9);
            return `<pre><button class="code-copy-btn" onclick="copyCode('${codeId}')">コピー</button><code id="${codeId}">${code.trim()}</code></pre>`;
        })
        .replace(/\n\n/gim, '</p><p>')
        .replace(/^(.*)$/gim, '<p>$1</p>');
    
    elements.articleDetail.innerHTML = `
        <div class="article-detail-header">
            <h1 class="article-detail-title">${article.title}</h1>
            <div class="article-detail-meta">
                <span class="article-category">${article.category}</span>
                <span>${date}</span>
                <span>${article.readTime}分で読める</span>
                <div class="article-tags">
                    ${article.tags.map(tag => `<span class="article-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
        <div class="article-detail-body">
            ${content}
        </div>
    `;
    
    elements.articleModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// コードコピー機能
function copyCode(codeId) {
    const codeElement = document.getElementById(codeId);
    const text = codeElement.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const btn = codeElement.parentElement.querySelector('.code-copy-btn');
        const originalText = btn.textContent;
        btn.textContent = 'コピーしました！';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

// モーダルを閉じる
function closeModal() {
    elements.articleModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ビュー切り替え
function toggleView(view) {
    state.currentView = view;
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-view') === view) {
            btn.classList.add('active');
        }
    });
    renderArticles();
}

// 統計情報の更新
function updateStats() {
    const categories = getCategories();
    const tags = getAllTags();
    
    animateCounter(elements.articleCount, articles.length);
    animateCounter(elements.categoryCount, categories.length);
    animateCounter(elements.tagCount, tags.length);
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// イベントリスナーの設定
function initEventListeners() {
    // テーマ切り替え
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // 検索
    elements.searchInput.addEventListener('input', handleSearch);
    
    // ハンバーガーメニュー
    elements.hamburger.addEventListener('click', () => {
        elements.hamburger.classList.toggle('active');
        elements.navMenu.classList.toggle('active');
    });
    
    // モーダルを閉じる
    elements.modalClose.addEventListener('click', closeModal);
    elements.articleModal.addEventListener('click', (e) => {
        if (e.target === elements.articleModal) {
            closeModal();
        }
    });
    
    // ESCキーでモーダルを閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.articleModal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // ビュー切り替え
    elements.viewToggle.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleView(btn.getAttribute('data-view'));
        });
    });
    
    // ナビゲーションリンク
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// グローバル関数（HTMLから呼び出し可能）
window.changePage = changePage;
window.copyCode = copyCode;

// 初期化
function init() {
    initTheme();
    renderCategoryFilters();
    renderTagCloud();
    renderArticles();
    renderPagination();
    updateStats();
    initEventListeners();
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', init);
