// サンプル記事データ
const articles = [
    {
        id: 1,
        title: 'React Hooks完全ガイド：useStateとuseEffectの使い方',
        excerpt: 'React Hooksの基本から応用まで、useStateとuseEffectを中心に詳しく解説します。実践的な例を交えながら、モダンなReact開発のベストプラクティスを学びましょう。',
        content: `
# React Hooks完全ガイド

React Hooksは、関数コンポーネントで状態管理やライフサイクル機能を使用できるようにする機能です。

## useStateとは

\`useState\`は、関数コンポーネントで状態を管理するためのフックです。

\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        増やす
      </button>
    </div>
  );
}
\`\`\`

## useEffectとは

\`useEffect\`は、副作用を処理するためのフックです。コンポーネントのマウント時や更新時に実行されます。

\`\`\`javascript
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  
  return <div>{data && <p>{data.message}</p>}</div>;
}
\`\`\`

## まとめ

React Hooksを使うことで、より簡潔で読みやすいコードを書くことができます。
        `,
        category: 'React',
        tags: ['React', 'JavaScript', 'Hooks', 'フロントエンド'],
        date: '2024-01-15',
        readTime: 8,
        thumbnail: '⚛️'
    },
    {
        id: 2,
        title: 'TypeScriptで型安全なAPIクライアントを構築する',
        excerpt: 'TypeScriptの型システムを活用して、安全で保守性の高いAPIクライアントを作成する方法を解説します。型定義からエラーハンドリングまで、実践的なテクニックを紹介します。',
        content: `
# TypeScriptで型安全なAPIクライアントを構築する

TypeScriptを使うことで、APIクライアントの型安全性を大幅に向上させることができます。

## 型定義の作成

まず、APIレスポンスの型を定義します。

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
\`\`\`

## APIクライアントの実装

型安全なAPIクライアントを実装します。

\`\`\`typescript
async function fetchUser(id: number): Promise<ApiResponse<User>> {
  const response = await fetch(\`/api/users/\${id}\`);
  const data: ApiResponse<User> = await response.json();
  return data;
}
\`\`\`

## エラーハンドリング

適切なエラーハンドリングを追加します。

\`\`\`typescript
try {
  const result = await fetchUser(1);
  console.log(result.data);
} catch (error) {
  console.error('エラーが発生しました:', error);
}
\`\`\`
        `,
        category: 'TypeScript',
        tags: ['TypeScript', 'API', '型安全', 'バックエンド'],
        date: '2024-01-20',
        readTime: 12,
        thumbnail: '📘'
    },
    {
        id: 3,
        title: 'CSS GridとFlexboxを使ったモダンなレイアウト設計',
        excerpt: 'CSS GridとFlexboxを組み合わせて、レスポンシブで美しいレイアウトを作成する方法を学びます。実践的な例を通じて、モダンなCSSの使い方をマスターしましょう。',
        content: `
# CSS GridとFlexboxを使ったモダンなレイアウト設計

CSS GridとFlexboxを組み合わせることで、複雑なレイアウトも簡単に作成できます。

## CSS Gridの基本

CSS Gridは、2次元のレイアウトシステムです。

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\`

## Flexboxの基本

Flexboxは、1次元のレイアウトシステムです。

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## 組み合わせの例

GridとFlexboxを組み合わせた実践的な例です。

\`\`\`css
.page-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`
        `,
        category: 'CSS',
        tags: ['CSS', 'Grid', 'Flexbox', 'レイアウト', 'デザイン'],
        date: '2024-01-25',
        readTime: 10,
        thumbnail: '🎨'
    },
    {
        id: 4,
        title: 'Node.jsとExpressでRESTful APIを構築する',
        excerpt: 'Node.jsとExpressフレームワークを使用して、RESTful APIを構築する方法を解説します。ルーティング、ミドルウェア、エラーハンドリングなど、実践的な内容をカバーします。',
        content: `
# Node.jsとExpressでRESTful APIを構築する

Expressは、Node.jsで最も人気のあるWebフレームワークの一つです。

## Expressのセットアップ

まず、Expressをインストールします。

\`\`\`bash
npm init -y
npm install express
\`\`\`

## 基本的なサーバー

シンプルなExpressサーバーを作成します。

\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
\`\`\`

## RESTfulエンドポイント

RESTfulなAPIエンドポイントを作成します。

\`\`\`javascript
app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.post('/api/users', (req, res) => {
  const user = req.body;
  res.status(201).json({ user });
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, updated: true });
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.status(204).send();
});
\`\`\`
        `,
        category: 'Node.js',
        tags: ['Node.js', 'Express', 'API', 'バックエンド', 'REST'],
        date: '2024-02-01',
        readTime: 15,
        thumbnail: '🚀'
    },
    {
        id: 5,
        title: 'Gitのベストプラクティス：コミットメッセージとブランチ戦略',
        excerpt: '効果的なGitの使い方を学びます。意味のあるコミットメッセージの書き方から、Git FlowやGitHub Flowなどのブランチ戦略まで、実践的なベストプラクティスを紹介します。',
        content: `
# Gitのベストプラクティス

Gitを効果的に使うことで、チーム開発の効率が大幅に向上します。

## コミットメッセージの書き方

良いコミットメッセージは、変更の意図を明確に伝えます。

\`\`\`
feat: ユーザー認証機能を追加

- ログイン機能を実装
- セッション管理を追加
- パスワードリセット機能を追加
\`\`\`

## ブランチ戦略

### Git Flow

Git Flowは、長期的なリリースサイクルに適した戦略です。

- \`main\`: 本番環境用
- \`develop\`: 開発用
- \`feature/\`: 機能開発用
- \`release/\`: リリース準備用
- \`hotfix/\`: 緊急修正用

### GitHub Flow

GitHub Flowは、シンプルで柔軟な戦略です。

1. ブランチを作成
2. 変更をコミット
3. プルリクエストを作成
4. レビューとマージ

## まとめ

適切なGitの使い方を身につけることで、チーム開発がスムーズになります。
        `,
        category: 'Git',
        tags: ['Git', 'バージョン管理', '開発ツール', 'ベストプラクティス'],
        date: '2024-02-05',
        readTime: 7,
        thumbnail: '🔧'
    },
    {
        id: 6,
        title: 'Vue.js 3 Composition API入門',
        excerpt: 'Vue.js 3のComposition APIについて、基本から応用まで詳しく解説します。Options APIとの違いや、いつComposition APIを使うべきかも説明します。',
        content: `
# Vue.js 3 Composition API入門

Composition APIは、Vue.js 3で導入された新しいAPIです。

## Composition APIとは

Composition APIは、ロジックの再利用性とコードの整理を向上させるAPIです。

\`\`\`javascript
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    
    const increment = () => {
      count.value++;
    };
    
    onMounted(() => {
      console.log('コンポーネントがマウントされました');
    });
    
    return {
      count,
      doubleCount,
      increment
    };
  }
};
\`\`\`

## Options APIとの比較

Options APIとComposition APIの違いを理解しましょう。

### Options API

\`\`\`javascript
export default {
  data() {
    return {
      count: 0
    };
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    }
  }
};
\`\`\`

### Composition API

\`\`\`javascript
import { ref, computed } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    return { count, doubleCount };
  }
};
\`\`\`

## まとめ

Composition APIを使うことで、より柔軟で保守性の高いコードを書くことができます。
        `,
        category: 'Vue.js',
        tags: ['Vue.js', 'JavaScript', 'フロントエンド', 'Composition API'],
        date: '2024-02-10',
        readTime: 9,
        thumbnail: '💚'
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
