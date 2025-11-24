# 明治竜5銭銀貨 啓蒙サイト (Meiji Dragon 5 Sen Fan Site)

「掌の上の小宇宙」をテーマにした、明治竜5銭銀貨の魅力を伝えるWebサイトです。
銀貨の持つ歴史の重みと、精緻な美しさをWeb表現の限界に挑んで再現しました。

## ✨ 特徴 (Ultra Rich Features)

このサイトは、単なる情報サイトではなく、没入感のある視覚体験を提供します。

*   **Cosmic Particle Background**:
    *   HTML5 Canvasを使用した動的なパーティクルシステム。
    *   銀の粒子が星雲のように漂い、マウスの動きに反応して揺らぎます。
*   **3D Coin Experience**:
    *   CSS 3D Transforms と JavaScript を組み合わせ、マウスの動きに合わせて立体的に傾く銀貨を表現。
    *   光源計算により、鈍い銀の輝きがリアルタイムに変化します。
*   **The Loupe (鑑定眼)**:
    *   カスタムカーソルによる「ルーペ」効果。
    *   スポットライトのように周囲を照らし、暗闇の中で銀貨を鑑定しているような没入感を演出します。
*   **Metallic Textures & Glow**:
    *   文字や枠線に、本物の銀のようなメタリックな輝きとグラデーションを適用。
    *   重要なキーワードは呼吸するように発光します。

## 🛠 技術スタック

*   **Framework**: Vite
*   **Language**: TypeScript
*   **Styling**: Vanilla CSS (No frameworks, pure CSS3)
*   **Deployment**: Cloudflare Pages

## 🚀 実行方法

### 開発サーバー起動

```bash
npm install
npm run dev
```

### ビルド & デプロイ (Cloudflare)

```bash
npm run deploy
```

## 📁 ディレクトリ構成

*   `src/background.ts`: Canvasパーティクル背景のロジック
*   `src/coin.ts`: 3Dコインエフェクトのロジック
*   `src/main.ts`: エントリーポイント、全体制御
*   `src/style.css`: デザイン、アニメーション定義
*   `index.html`: サイト構造

---
&copy; 2024 Meiji Dragon 5 Sen Fan Site
