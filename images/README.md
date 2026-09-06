# images/ — 写真の差し替え手順

現在サイトは写真の代わりに **プレースホルダ（`.ph`）** を表示しています。
以下の写真を用意し、各所の `<div class="ph ...">...</div>` を `<img>` に置き換えてください。

## 必要な写真（最低6枚）

| ファイル名（推奨） | 使用箇所 | アスペクト比 | object-fit | 内容 |
|---|---|---|---|---|
| `hero.jpg` | ファーストビュー | 16:9 | `cover` / `object-position:center` | 明るい住宅内で、養生された床の上で職人が丁寧に作業している様子 |
| `about.jpg` | 私たちのこと | 4:3 | `cover` | 養生され、工具が整理整頓された清潔な施工現場 |
| `works-01.jpg` | 施工事例 Case01 | 4:3 | `cover` | リビングのクロス張り替え |
| `works-02.jpg` | 施工事例 Case02 | 4:3 | `cover` | 洗面台の交換 |
| `works-03.jpg` | 施工事例 Case03 | 4:3 | `cover` | 床材の張り替え |
| `staff.jpg` | 代表紹介 | 4:5（縦） | `cover` / `object-position:top` | 清潔感のある作業着姿で、柔らかく笑う代表 |

### あると良い写真（任意・ブランド強化）
- 工具を整理している様子
- 作業後に掃除機をかけている様子
- 靴・作業用品を整頓している様子

## 差し替え方（例：hero）

```html
<!-- 置き換え前 -->
<div class="ph ph--hero"><span>写真：…</span></div>

<!-- 置き換え後 -->
<img src="images/hero.jpg" alt="" width="1920" height="1080">
```

- `alt` は装飾写真なら空（`alt=""`）。内容を説明する写真なら簡潔な代替テキストを入れる。
- 施工事例など遅延読み込みしたい画像には `loading="lazy" decoding="async"` を付ける（ヒーローには付けない）。
- 比率は DESIGN.md §6 に準拠。`.ph--16x9` などの比率クラスと同じ `aspect-ratio` を `<img>` 側にも効かせるため、必要なら `.work__figure img{width:100%;height:100%;object-fit:cover}` を利用。
- 画像は表示サイズの2倍程度に圧縮（幅の目安：hero 1920 / about 1200 / works 900 / staff 800）。WebP 推奨。
