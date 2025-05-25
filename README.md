# nok.audio

## プロジェクト概要

nok.audioは、React 18とTypeScriptを使用したViteベースのオーディオアプリケーションです。SAWWAVEをテーマにしたユーロラックモジュールの制作、ステージパフォーマンス、そして電子ビートの制作に特化しています。

「Nok」という名前は日本語の「のこぎり（NOKOGIRI）」に由来しています。

## 特徴

- モダンなReact 18とTypeScriptによる開発環境
- 高速な開発体験を提供するViteビルドツール
- スタイリングにTailwindCSSを採用
- Lucide Reactによるアイコン表示
- ESLintによるコード品質の維持

## 技術スタック

- React 18
- TypeScript
- Vite
- TailwindCSS
- ESLint
- Lucide React (アイコン用)

## セットアップ

### 必要条件

- Node.js
- pnpm

### インストール手順

リポジトリをクローンした後、以下のコマンドを実行してください：

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev
```

## 利用可能なコマンド

```bash
# 開発サーバーの起動
pnpm dev

# プロダクションビルドの作成
pnpm build

# ビルドしたアプリケーションのプレビュー
pnpm preview

# コードの品質チェック
pnpm lint
```

## プロジェクト構造

```
nok.audio/
├── src/             # メインアプリケーションのソースコード
├── .bolt/           # 設定ファイル
├── public/          # 静的ファイル
└── docs/            # ドキュメント
    └── sessions/    # セッション記録
```

## 開発ワークフロー

- TypeScriptを使用して型安全性を確保
- TailwindCSSでスタイリング
- ESLintでコード品質を維持
- 新しいセッションを追加するには、`docs/sessions/`ディレクトリに新しいMarkdownファイルを作成します。ファイル名は`YYYY-MM-DD-HH-MM-SS.md`の形式にしてください。詳細は[devin-sandbox](https://github.com/e-jigsaw/devin-sandbox)リポジトリを参照してください。

## ソーシャルメディア

- [X](https://x.com/nokaudio)
- [BOOTH](https://jgsw.booth.pm/)
- [GitHub](https://github.com/nokaudio)

## ライセンス

© 2025 nok.audio. All rights reserved.
