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
    {
        id: 2,
        title: 'GitHubについて学んだこと',
        excerpt: 'GitとGitHubの基本的な使い方を学びました。リポジトリの作成からプッシュまで、実際にブログサイトをGitHubにアップロードする過程で学んだことをまとめています。',
        content: `
# GitHubについて学んだこと

エンジニアになるために、GitとGitHubの基本的な使い方を学びました。実際にブログサイトをGitHubにアップロードする過程で学んだことをまとめます。

## GitとGitHubとは

### Gitとは
- **バージョン管理システム**の一つ
- ファイルの変更履歴を記録・管理できる
- 複数人で開発する際に便利

### GitHubとは
- Gitのリモートリポジトリをホスティングするサービス
- コードをクラウド上に保存できる
- 他の人とコードを共有できる

## 最初にやったこと

### 1. Gitの設定

Gitを使う前に、自分の名前とメールアドレスを設定する必要があります。

\`\`\`bash
# ユーザー名を設定
git config --global user.name "Flowerfps"

# メールアドレスを設定
git config --global user.email "your.email@example.com"
\`\`\`

**学んだこと**: \`--global\`オプションを使うと、すべてのリポジトリでこの設定が使われます。

### 2. GitHubリポジトリの作成

GitHubのウェブサイトで新しいリポジトリを作成しました。

- リポジトリ名: \`Blog\`
- リモートURL: \`https://github.com/Flowerfps/Blog.git\`

**学んだこと**: リポジトリは「プロジェクトの保管場所」のようなもの。コードを保存する場所です。

## 基本的なGitコマンド

### git status
現在の状態を確認するコマンドです。

\`\`\`bash
git status
\`\`\`

**学んだこと**: 
- どのファイルが変更されているか確認できる
- どのファイルがステージングされているか確認できる
- とても便利なコマンド！

### git add
変更したファイルを「ステージング」するコマンドです。

\`\`\`bash
# すべての変更を追加
git add .

# 特定のファイルだけ追加
git add main.js
\`\`\`

**学んだこと**: 
- 「ステージング」= コミットする準備をすること
- \`git add .\`は、変更されたすべてのファイルを追加する便利なコマンド

### git commit
変更を記録するコマンドです。

\`\`\`bash
git commit -m "変更内容の説明"
\`\`\`

**学んだこと**: 
- コミットメッセージは、何を変更したか分かりやすく書くことが大切
- 例: \`"記事をすべて削除し、記事追加用の雛形を追加"\`

### git push
ローカルの変更をGitHubにアップロードするコマンドです。

\`\`\`bash
git push
\`\`\`

**学んだこと**: 
- ローカル（自分のPC）の変更をリモート（GitHub）に送るコマンド
- 最初は \`git push -u origin main\` を使う

## GitHubへの認証

GitHubにプッシュするには、認証が必要です。

### Personal Access Token（PAT）の作成

1. GitHubにログイン
2. Settings → Developer settings → Personal access tokens
3. "Generate new token (classic)" をクリック
4. \`repo\`にチェック（リポジトリへのアクセス権限）
5. トークンを生成してコピー

**学んだこと**: 
- パスワードの代わりにPersonal Access Tokenを使う
- トークンは一度しか表示されないので、必ずコピーして保存する
- セキュリティのため、定期的に更新する

## 実際の作業フロー

ブログサイトをGitHubにアップロードする際の流れ：

1. **ファイルを編集**（例: \`main.js\`を編集）
2. **変更を確認**: \`git status\`
3. **変更を追加**: \`git add .\`
4. **コミット**: \`git commit -m "変更内容"\`
5. **プッシュ**: \`git push\`

**学んだこと**: 
- この流れを繰り返すことで、変更履歴を管理できる
- 毎回この手順を踏むことで、コードのバックアップにもなる

## 困ったこと・学んだこと

### エラーが出たとき

\`git push\`を実行したら、SSL証明書のエラーが出ました。

**解決方法**: 権限の問題だったようです。適切な権限で実行することで解決しました。

**学んだこと**: 
- エラーメッセージをよく読むことが大切
- エラーが出ても、慌てずに対処する

### コミットメッセージの書き方

最初は何を書けばいいか分かりませんでした。

**学んだこと**: 
- 何を変更したか簡潔に書く
- 例: \`"記事を追加"\`, \`"デザインを修正"\`
- 日本語でも英語でもOK

## GitHubの便利な機能

### リポジトリの確認

GitHubのウェブサイトで、以下のことができます：

- ファイルの内容を確認
- 変更履歴を確認
- コードをブラウザで編集

**学んだこと**: 
- GitHubはコードを保存するだけでなく、管理するためのツール
- ブラウザからでも多くのことができる

## 今後の目標

- ブランチの使い方を学ぶ
- プルリクエスト（PR）の使い方を学ぶ
- 他の人のコードを見て学ぶ
- もっと詳しいGitコマンドを学ぶ

## まとめ

GitとGitHubは最初は難しく感じましたが、基本的なコマンドを覚えると、とても便利なツールだと分かりました。

- \`git add\`: 変更を追加
- \`git commit\`: 変更を記録
- \`git push\`: GitHubにアップロード

この3つのコマンドだけでも、コードの管理ができるようになりました。

これからも、GitとGitHubを使って、学んだことを記録していきます！
        `,
        category: '学習記録',
        tags: ['Git', 'GitHub', 'バージョン管理', '初心者', '学習'],
        date: '2026-02-01',
        readTime: 8,
        thumbnail: '🔧'
    },
    {
        id: 1,
        title: 'ブログサイトを作成してみた',
        excerpt: 'HTML、CSS、JavaScriptを使って初めてのブログサイトを作成しました。ポートフォリオサイトからブログサイトへの変更過程を記録しています。',
        content: `
# ブログサイトを作成してみた

エンジニアになるために学んでいることのメモとして、このブログサイトを作成しました。

## きっかけ

技術的なことを学ぶ中で、学んだことを記録しておきたいと思い、ブログサイトを作成することにしました。

## 使用した技術

- **HTML** - ページの構造
- **CSS** - デザインとスタイリング
- **JavaScript** - インタラクティブな機能

## 学んだこと

### HTMLの基本構造

\`\`\`html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>ブログタイトル</title>
</head>
<body>
    <!-- コンテンツ -->
</body>
</html>
\`\`\`

### CSSでのスタイリング

CSS変数を使って、ダークモードとライトモードを実装しました。

\`\`\`css
:root {
    --bg-primary: #0a0a0a;
    --text-primary: #f5f5f5;
}
\`\`\`

### JavaScriptでの記事管理

記事データを配列で管理し、動的に表示する仕組みを作りました。

\`\`\`javascript
const articles = [
    {
        id: 1,
        title: '記事タイトル',
        content: '記事の内容'
    }
];
\`\`\`

## 苦労した点

- レスポンシブデザインの実装
- ダークモードとライトモードの切り替え
- 記事の検索・フィルタリング機能

## 今後の予定

- 記事を定期的に追加していく
- 学んだことをどんどん記録していく
- デザインを改善していく

## まとめ

これからも学んだことを記録していきます！
        `,
        category: '学習記録',
        tags: ['HTML', 'CSS', 'JavaScript', '初心者', 'ブログ'],
        date: '2026-02-01',
        readTime: 5,
        thumbnail: '📝'
    }
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
