# 🚀 すぐに始める！GitHubプッシュ手順（3ステップ）

## ✅ 現在の状態
- ✅ Gitリポジトリ: 設定済み
- ✅ リモートリポジトリ: `https://github.com/Flowerfps/Blog.git` に接続済み
- ✅ ローカルコミット: 完了済み

## 📝 ステップ1: Gitユーザー情報を設定（必須）

ターミナルで以下のコマンドを実行してください：

```bash
cd /Users/shuto/develop/My_Portfolio

# あなたのGitHubユーザー名を設定
git config --global user.name "Flowerfps"

# あなたのGitHubに登録しているメールアドレスを設定
git config --global user.email "your.email@example.com"
```

**⚠️ 重要**: `your.email@example.com` の部分を、GitHubに登録している実際のメールアドレスに変更してください。

## 🔑 ステップ2: GitHub Personal Access Tokenを作成

1. **ブラウザでGitHubにログイン**
   - https://github.com にアクセス

2. **Personal Access Token作成ページを開く**
   - 右上のプロフィール画像をクリック → **Settings**
   - 左メニューの一番下 → **Developer settings**
   - **Personal access tokens** → **Tokens (classic)**
   - **Generate new token** → **Generate new token (classic)**

3. **トークンを設定**
   - **Note**: `My Portfolio` など適当な名前を入力
   - **Expiration**: `90 days` または `1 year` を選択
   - **Select scopes**: `repo` にチェック（リポジトリへのアクセス権限）
   - 一番下の **Generate token** ボタンをクリック

4. **トークンをコピー**
   - ⚠️ **重要**: 表示されたトークン（`ghp_` で始まる文字列）をコピーして保存してください
   - この画面を閉じると、もう見れません！

## 🚀 ステップ3: GitHubにプッシュ

ターミナルで以下のコマンドを実行：

```bash
cd /Users/shuto/develop/My_Portfolio
git push -u origin main
```

**認証情報の入力が求められたら：**
- **Username**: `Flowerfps`（あなたのGitHubユーザー名）
- **Password**: ステップ2でコピーしたPersonal Access Tokenを貼り付け

## ✅ 成功の確認

プッシュが成功すると、以下のようなメッセージが表示されます：
```
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Writing objects: 100% (4/4), done.
To https://github.com/Flowerfps/Blog.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

その後、ブラウザで https://github.com/Flowerfps/Blog を開いて、ファイルがアップロードされていることを確認してください！

## 📚 詳細な手順

より詳しい説明や、他の認証方法については `GIT_SETUP_GUIDE.md` を参照してください。

