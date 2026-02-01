# Git設定とGitHubへのプッシュ手順ガイド

## 📋 現在の状態

✅ Gitリポジトリは初期化済み
✅ リモートリポジトリ（GitHub）は設定済み: `https://github.com/Flowerfps/Blog.git`
✅ ローカルコミットは完了: `a9d7b4f Initial commit`

## 🔧 ステップ1: Gitユーザー情報の設定

GitHubにコミットするために、あなたの名前とメールアドレスを設定します。

### 設定コマンド（以下のコマンドを実行してください）

```bash
# あなたの名前を設定（GitHubのユーザー名または本名）
git config --global user.name "あなたの名前"

# あなたのメールアドレスを設定（GitHubに登録しているメールアドレス）
git config --global user.email "your.email@example.com"
```

**例:**
```bash
git config --global user.name "Flowerfps"
git config --global user.email "your.email@example.com"
```

### 設定確認

```bash
git config --global user.name
git config --global user.email
```

## 🔐 ステップ2: GitHub認証方法の選択

GitHubにプッシュするには、認証が必要です。以下のいずれかの方法を選択してください。

### 方法A: Personal Access Token（PAT）を使用（推奨・簡単）

1. **GitHubでPersonal Access Tokenを作成**
   - GitHubにログイン → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - "Generate new token (classic)" をクリック
   - Note: "My Portfolio" など適当な名前を入力
   - Expiration: 有効期限を設定（90日、1年など）
   - Scopes: `repo` にチェック（リポジトリへのアクセス権限）
   - "Generate token" をクリック
   - **⚠️ 重要**: 表示されたトークンをコピーして保存（後で見れません）

2. **プッシュ時にトークンを使用**
   ```bash
   git push -u origin main
   ```
   - Username: GitHubのユーザー名（例: `Flowerfps`）
   - Password: 先ほど作成したPersonal Access Tokenを貼り付け

### 方法B: GitHub CLIを使用（最も簡単）

1. **GitHub CLIをインストール**（未インストールの場合）
   ```bash
   # macOSの場合
   brew install gh
   ```

2. **GitHubにログイン**
   ```bash
   gh auth login
   ```
   - ブラウザが開くので、GitHubで認証
   - その後、自動的に認証情報が保存されます

3. **プッシュ**
   ```bash
   git push -u origin main
   ```

### 方法C: SSH鍵を使用（セキュア）

1. **SSH鍵を生成**（まだ持っていない場合）
   ```bash
   ssh-keygen -t ed25519 -C "your.email@example.com"
   ```
   - Enterキーを押してデフォルトの場所に保存
   - パスフレーズを設定（推奨）

2. **SSH鍵をGitHubに登録**
   ```bash
   # 公開鍵を表示
   cat ~/.ssh/id_ed25519.pub
   ```
   - 表示された内容をコピー
   - GitHub → Settings → SSH and GPG keys → New SSH key
   - Title: "My Mac" など適当な名前
   - Key: コピーした公開鍵を貼り付け
   - Add SSH key をクリック

3. **リモートURLをSSH形式に変更**
   ```bash
   git remote set-url origin git@github.com:Flowerfps/Blog.git
   ```

4. **プッシュ**
   ```bash
   git push -u origin main
   ```

## 🚀 ステップ3: GitHubにプッシュ

認証設定が完了したら、以下のコマンドでプッシュします：

```bash
git push -u origin main
```

`-u` オプションは、今後 `git push` だけでプッシュできるようにする設定です。

### プッシュ成功の確認

プッシュが成功すると、以下のようなメッセージが表示されます：
```
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
Writing objects: 100% (X/X), done.
To https://github.com/Flowerfps/Blog.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

GitHubのリポジトリページ（https://github.com/Flowerfps/Blog）を開いて、ファイルがアップロードされていることを確認してください。

## 📝 今後の作業フロー

### ファイルを変更した場合

1. **変更を確認**
   ```bash
   git status
   ```

2. **変更をステージング**
   ```bash
   git add .                    # すべての変更
   # または
   git add ファイル名            # 特定のファイルのみ
   ```

3. **コミット**
   ```bash
   git commit -m "変更内容の説明"
   ```

4. **GitHubにプッシュ**
   ```bash
   git push
   ```

## ❓ よくあるエラーと対処法

### エラー1: "could not read Username"
→ 認証情報が設定されていません。ステップ2の認証方法を実行してください。

### エラー2: "Host key verification failed"（SSHの場合）
→ SSH鍵がGitHubに登録されていないか、接続に問題があります。
  ```bash
  ssh -T git@github.com
  ```
  で接続テストを実行してください。

### エラー3: "Permission denied"
→ Personal Access Tokenの権限が不足しているか、期限切れです。
  新しいトークンを生成してください。

## 📚 参考リンク

- [GitHub Personal Access Token作成](https://github.com/settings/tokens)
- [GitHub SSH鍵設定](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh)
- [GitHub CLI](https://cli.github.com/)

