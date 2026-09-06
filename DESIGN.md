# DESIGN.md — 澄家リフォーム（すみかリフォーム）Mini サンプルサイト

> このファイルはこの案件専用のデザインシステム定義です。
> **デザインに関わる変更を行う前に必ずこのファイルを読むこと。**
> ここに定義されていない色・radius・shadow・フォントサイズ・アニメーションを
> ページ単位で勝手に追加しないこと。追加が必要な場合はまずこのファイルを更新する。

- 案件形式: Promeon Web **Miniプラン / 1ページ（静的 HTML/CSS/最小 JS）**
- 想定クライアント: 一人で営む地域密着型リフォーム店（**架空**）
- 制作方針の出典: 事前のサイト診断・参考サイト分析・会社情報・目的・ターゲット
- 参考にした実在サイト（コピーではなく抽出）: 江面工務店 / YourHome / いちずリフォーム / やまとリフォーム

---

## 1. Design Concept

### デザインコンセプト
**「工事だけでなく、来たときよりも気持ちよく。」を視覚化する。**
装飾で魅せるのではなく、**白・余白・写真・活字階層**で「清潔・丁寧・誠実・話しやすい」を伝える。
色数を絞り、写真を主役にし、情報を正しい順序と一定のリズムで置く。

### ユーザーに与える印象
- 清潔感がある / 生活感のある明るさ
- 家に入れても安心できそうな人柄
- 小さな相談でも頼んでよさそうな親しみ
- 誠実で、余計な工事を勧めなさそう
- 個人だが、最初から最後まで責任を持ってくれそう

### ブランドキーワード
`清潔` `丁寧` `誠実` `話しやすい` `地域密着` `一人の職人` `住まい・インテリア寄り`

### 避ける印象（このサイトでは NG）
- 黒 × 黄 × 赤 の「強い職人系」/ 工事現場的な威圧感
- 大手ゼネコン的な「施工実績◯万件」の物量アピール
- IT / SaaS / 医療クリニック的な青緑・エメラルド
- おしゃれカフェ的なセリフ英字・華奢な大見出し
- AI 生成テンプレっぽさ（→ §12 で明示）

---

## 2. Color System

**コア 8 色のみ。むやみに増やさない。**
派生値は「固定の算出方法・固定の用途」を持つものだけ 3 つ許可する。

| Role | Token | HEX | 主な用途 |
|---|---|---|---|
| Primary | `--color-primary` | `#3A5A40` | 主要ボタン、見出しキーワード、数字バッジ、アイコン線、リンク、罫線アクセント |
| Secondary | `--color-secondary` | `#2B3A32` | フッター背景、濃色セクション、締めの面 |
| Accent | `--color-accent` | `#C8A97E` | 見出し脇の細い罫線 / タグの縁 / hover 下線のみ（**面塗り禁止**） |
| Background | `--color-bg` | `#FFFFFF` | ページ基本背景 |
| Surface | `--color-surface` | `#F5F3EE` | 交互セクション背景・カード地（ウォームグレージュ） |
| Text Primary | `--color-text` | `#2A2A28` | 本文・見出し（真っ黒にしない） |
| Text Secondary | `--color-text-sub` | `#6B6B66` | 補足文、キャプション、定休日など |
| Border | `--color-border` | `#E4E1D9` | 1px 罫線、カード枠、フォーム入力枠 |

### 派生値（新色ではない。これ以外を作らない）
| Token | 値 | 算出 | 用途（固定） |
|---|---|---|---|
| `--color-primary-dark` | `#2E4833` | Primary を約 12% 暗く | ボタン / リンク hover のみ |
| `--color-accent-soft` | `#EFE7D9` | Accent の tint | 施工事例カテゴリタグの背景のみ（任意） |
| `--overlay-hero` | `rgba(29,35,30,.38)` | Secondary 相当の暗幕 | ヒーロー写真上のオーバーレイのみ |

### 使用比率の目安（画面面積）
- Background(白): **75〜85%**
- Surface(グレージュ): 10〜18%
- Primary(緑): **3〜8%**（色が付く = 押せる or 見出しの要点）
- Accent(キャメル): **1〜3%**（細い線・小さなタグのみ）
- グラデーション: **不使用**。写真上の単色オーバーレイのみ可。

---

## 3. Typography

### フォントファミリー
```
--font-jp: "Noto Sans JP","Hiragino Kaku Gothic ProN","Hiragino Sans","Yu Gothic","YuGothic",Meiryo,sans-serif;
--font-en: "Inter","Helvetica Neue",Arial, var(--font-jp);
```
- **日本語フォント**: Noto Sans JP（Webフォント）。読み込みウェイトは **400 / 500 / 700 のみ**。900 は使わない。明朝は使わない（代表挨拶も含めゴシックで統一）。
- **英字フォント**: Inter。読み込みは 400 / 500 / 600。用途は **英字ラベル・数字・電話番号・日付**に限定。セリフ英字は使わない。
- 見出しと本文は同一書体。差は **size / weight / color / letter-spacing** だけでつける。

### タイプスケール（PC / SP）

| Token | 用途 | PC size | SP size | weight | line-height | letter-spacing |
|---|---|---|---|---|---|---|
| H1 | FVキャッチ（ページに1つ） | 44px (2.75rem) | 30px (1.875rem) | 700 | 1.35 | 0.02em |
| H2 | セクション見出し | 32px (2rem) | 24px (1.5rem) | 700 | 1.4 | 0.03em |
| H3 | サービス名・Case名・理由タイトル | 19px (1.1875rem) | 17px (1.0625rem) | 700 | 1.5 | 0.02em |
| H4 | 小見出し・ラベル的見出し | 16px (1rem) | 15px (0.9375rem) | 500 | 1.6 | 0.04em |
| Body | 本文 | 17px (1.0625rem) | 16px (1rem) | 400 | 1.9 | 0.02em |
| Small | 箇条書き注記・工期など | 14px (0.875rem) | 13px (0.8125rem) | 400 | 1.8 | 0.02em |
| Caption | 定休日・免責・英字ラベル | 12.5px (0.78rem) | 12px (0.75rem) | 500 | 1.6 | 0.08em（英字ラベルは 0.14em・大文字） |

### 比率ルール
- H2 : Body ≒ **1.8〜2.0倍**（3倍にしない = チラシ化防止）
- H3 : Body ≒ 1.1〜1.25倍（差は主に **太さと色**でつける）
- 本文サイズは **PC 16px / SP 15px を下回らない**
- 和文 letter-spacing は本文で **+0.04em を超えない**

---

## 4. Layout

### Spacing スケール（この 9 値のみ）
```
--space-1: 4px;
--space-2: 8px;
--space-3: 16px;
--space-4: 24px;
--space-5: 32px;
--space-6: 48px;
--space-7: 64px;
--space-8: 96px;
--space-9: 120px;
```
8px ベース。この数列にない余白値を新規に使わない。

### 幅・余白トークン
| 項目 | Token | 値 |
|---|---|---|
| 最大コンテンツ幅 | `--content-max` | **1120px** |
| 広幅（写真・帯） | `--content-wide` | 1280px |
| 本文テキスト幅（読みやすさ） | `--content-text` | **720px**（本文ブロックは必ずこれ以下） |
| 左右 padding | `--pad-x` | **PC 40px / Tablet 32px / Mobile 20px** |
| セクション上下余白 | `--section-y` | **PC 96px（FV直後・最終CTA前は 120px）/ Tablet 80px / Mobile 64px** |

### 主要 gap
| 箇所 | 値 |
|---|---|
| カードグリッド gap | PC 32px / SP 20px |
| 見出し → 本文 | 16px（`--space-3`） |
| 本文 → ボタン | 32px（`--space-5`） |
| セクション見出し → 中身 | 48px（`--space-6`） |
| 数字バッジ → タイトル | 16px |
| カード内 padding | 32px（SP 24px） |
| カード内 要素間 | 16px |

---

## 5. Grid

| 型 | 使用条件 | このサイトでの割り当て | SP / Tablet |
|---|---|---|---|
| **1カラム** | 文章のみのブロック、幅 ≤ 720px。FVコピー、コンセプト導入文、代表メッセージ本文、最終CTA | ②コンセプト導入 / ⑥代表メッセージ本文 / ⑧最終CTA | そのまま1カラム |
| **2カラム（画像＋文）** | 写真と文章を対にする。写真幅 45〜50%。**セクションごとに写真の左右を反転**して単調さを避ける | ②澄家リフォームについて（写真左／文右）/ ⑥代表紹介（写真右／文左） | 1カラムに縦積み（写真が先） |
| **2×2（4項目カード）** | 項目が 4 つで対等。3カラムの代用としてこちらを優先 | ③サービス内容（4種）/ ④選ばれる理由（01〜04） | SP 1列 / Tablet 2列 |
| **3カラムグリッド** | **施工事例のみ。ページ内で 1 箇所だけ。** | ⑤施工事例（3件） | SP 1列 または横スナップスクロール / Tablet 2列 |

### 禁止
- **3カラムカードを連続するセクションで使わない。** ページ全体で 3カラムグリッドは最大 1 箇所。
- サービス・理由を「3つ」に無理に丸めて 3カラム化しない（4つ = 2×2 を維持）。
- 全セクションを「見出し＋3カラムカード」の同型反復にしない（§12）。

---

## 6. Images

すべて原則 `object-fit: cover; object-position: center;`。
ネイティブ比率のままの `<img>` 直置きはしない。比率は必ず CSS 側で固定する。

| Slot | 推奨アスペクト比 | 表示方法 |
|---|---|---|
| **Hero** | 16:9（SP は `object-position` で 4:5 相当にトリミング可） | 全幅（full-bleed）、`object-fit: cover`、高さ **72〜86vh** で上限、`--overlay-hero` の暗幕を重ねる |
| **About / コンセプト** | 4:3 | `object-fit: cover`、`--radius-md`(8px)、カラム幅の 45〜50% |
| **Service（サムネを付ける場合）** | 3:2 | `object-fit: cover`、`--radius-md`、**全カードで同一比率**に統一 |
| **Works（施工事例）** | **4:3 厳守・全カード完全同一** | `object-fit: cover`、`--radius-md`、hover 時のみ `scale(1.03)` / `--dur-img` |
| **Staff（代表）** | 4:5（縦・バストアップ） | `object-fit: cover`、`object-position: top`、`--radius-md` |
| **その他（工具整理・清掃中など）** | 1:1 または 4:3 | `object-fit: cover` |

- 写真がページに占める面積は **35〜50%** を目安（文字だけのセクションを 3 つ以上連続させない）。
- 角丸は最大 8px（`--radius-md`）。写真を完全角丸・円形にするのは代表写真も含めて行わない（小さなお客様の声アイコンを使う場合のみ円可）。

---

## 7. Buttons / CTA

CTA は **「無料相談（主）」＋「電話番号（副）」の 2 種類のみ**。ページ内で 4〜5 回反復（ヘッダー右 / FV直下 / 中盤 / 最終CTA帯 / フッター）。
文言は動詞形（例:「無料で相談する」「無料相談・見積りはこちら」）。「送信」「クリック」等の無機質語は使わない。

### Primary Button
| 項目 | 値 |
|---|---|
| height | 54px（SP 52px） |
| padding | `0 32px` |
| radius | `--radius-sm`（6px） |
| font | 1rem / weight 500 / `letter-spacing: 0.04em`（日本語） |
| color | bg `--color-primary` / text `#FFFFFF` |
| border | なし |
| hover | bg `--color-primary-dark` ＋ `--shadow-sm` / `transition: --dur-ui --ease-ui` |
| icon | 右に "→" を添える程度は可（任意） |

### Secondary Button（ゴースト）
| 項目 | 値 |
|---|---|
| height | 54px（SP 52px） |
| padding | `0 30px` |
| radius | `--radius-sm`（6px） |
| font | 1rem / weight 500 |
| color | bg transparent / text `--color-primary` |
| border | `1px solid var(--color-primary)` |
| hover | bg `rgba(58,90,64,.06)`（border は変えない） |

### Text Link
| 項目 | 値 |
|---|---|
| color | `--color-primary` |
| font | 本文継承 / weight 500 |
| decoration | `underline` / `text-underline-offset: 4px` / `text-decoration-thickness: 1px` |
| hover | color `--color-primary-dark` / thickness 2px |

### モバイル
- ボタンは幅 100%（またはそれに近い）、タップ領域 48px 以上。
- 画面下部に**固定 CTA バー**（「電話をかける」「無料相談」の 2 分割、高さ 56px）を設置。電話番号・住所はリンク化（`tel:` / 地図）。
- pill（完全角丸）ボタンは使わない。

---

## 8. Border / Radius / Shadow

### Radius（この 2 値のみ）
```
--radius-sm: 6px;   /* ボタン / 入力欄 / タグ */
--radius-md: 8px;   /* カード / 画像 */
```
- 0px（直角）も可。
- **9px 以上の角丸は使わない。** 例外は施工事例のカテゴリタグ（pill）を **最大 3 個**まで。
- 要素ごとに radius をバラバラにしない。サイト内で使う radius は 0 / 6 / 8 の 3 種類に固定。

### Border
- 罫線は `1px solid var(--color-border)` のみ。黒に近い線・2px 以上の汎用枠・二重線は使わない。
- アクセント罫線: セクション英字ラベルの下線 / 数字バッジの縦線に `3px solid var(--color-primary)`（または `--color-accent`）を使ってよい。これのみ例外。

### Shadow（この 2 値のみ）
```
--shadow-sm: 0 1px 3px rgba(29,35,30,.06);
--shadow-md: 0 4px 16px rgba(29,35,30,.10);   /* hover 時のみ */
```
- カードは **常時 shadow を付けない。** 分離は「1px border ＋ Surface 地」で行う。
- `--shadow-md` はカード / ボタンの hover 時のみ。
- 色付き shadow・大きい shadow・inset shadow・多重 shadow は使わない。
- **ページ単位で新しい shadow 値を追加しない。**

---

## 9. Animation

### 使用する
| 用途 | 動き | duration | easing |
|---|---|---|---|
| スクロールリビール | `opacity 0→1` ＋ `translateY(12px→0)`、1 回のみ、グループ内 stagger ≤ 80ms | `--dur-reveal`(0.5s) | `--ease-reveal` `cubic-bezier(.16,1,.3,1)` |
| 画像 hover | `scale(1.03)` | `--dur-img`(0.4s) | `ease` |
| ボタン / リンク hover | color・background・box-shadow | `--dur-ui`(0.2s) | `ease` |
| ヘッダー | スクロールで縮小 / 薄い影 | `--dur-ui`(0.2s) | `ease` |

```
--dur-ui: .2s;  --dur-img: .4s;  --dur-reveal: .5s;
--ease-ui: ease;  --ease-reveal: cubic-bezier(.16,1,.3,1);
```

### 使用しない
- パララックス
- 数字カウントアップ
- 無限ループ / 常時再生アニメーション
- バウンス / イラスティック / 回転
- 左右からのスライドイン、1 文字ずつのテキストアニメ
- 全要素への fade-in（リビールは「セクション見出し」「カード群」「写真」など**まとまり単位**でのみ）
- 自動送りカルーセル（原則カルーセル自体を使わない。使う場合も 5 秒以上間隔）

### アクセシビリティ
`@media (prefers-reduced-motion: reduce)` で transform / リビールを無効化し、即時表示にする。

---

## 10. Responsive

### Breakpoints
| デバイス | 範囲 |
|---|---|
| Mobile | `≤ 640px` |
| Tablet | `641px – 1024px` |
| Desktop | `≥ 1025px` |
| （ナビ折りたたみ・下部固定CTA） | `≤ 1024px`（タブレット以下）でハンバーガー化＋画面下固定CTAバー表示 |

> 補足（2026-09-07 実装時に確定）: 和文ナビラベルが長く 901–1024px で横並びが窮屈になるため、
> 横並びグローバルナビは Desktop（≥1025px）のみとし、Tablet 以下はハンバーガーに統一した。
> それに合わせ下部固定CTAバーも ≤1024px で表示する。

### 余白
| | Mobile | Tablet | Desktop |
|---|---|---|---|
| 左右 padding | 20px | 32px | 40px |
| セクション上下 | 64px | 80px | 96px（FV直後・最終CTA前 120px） |
| カードグリッド gap | 20px | 24px | 32px |

### 文字サイズ
| | Mobile | Tablet | Desktop |
|---|---|---|---|
| Body | 16px | 16px | 17px |
| H1 | 30px | 36px | 44px |
| H2 | 24px | 28px | 32px |
| H3 | 17px | 18px | 19px |

### レイアウト変更
- **Desktop**: 2カラム（画像＋文、左右交互）/ 3カラム（施工事例）/ 2×2（サービス・理由）/ 横並びナビ ＋ 電話 ＋ CTA ボタン。
- **Tablet**: 画像＋文は 2カラム維持。施工事例 → 2カラム。2×2 は維持（or 2列）。ナビはハンバーガー（≤1024px）＋下部固定CTAバー。
- **Mobile**: 全要素 1カラム縦積み（画像＝先、文＝後）。ハンバーガーナビ。電話は下部固定 CTA バーに集約（ヘッダー内の電話表記は非表示）。施工事例は 1列 or 横スナップスクロール。ヒーロー 76〜84vh。

---

## 11. Japanese Typography Rules

- **不自然な改行を避ける**: 見出しは意味の切れ目で手動 `<br>` を入れる。句や名詞のまとまりは `<span class="nowrap">`（`white-space: nowrap`）で保護する。
- **孤立文字を作らない**: 最終行に 1〜2 文字だけ残さない。文言調整または `<br>` 位置で回避。見出しには対応ブラウザで `text-wrap: balance;`、本文には `text-wrap: pretty;` を併用。
- **見出しの改行位置を設計する**: 例「住まいを直す。<br>その時間まで、気持ちよく。」のように、読点・句点・助詞前で割る。中央で機械的に折らない。
- **本文の横幅を広げすぎない**: 本文ブロックは `max-width: var(--content-text)`（720px）。1 行 **32〜45 文字**。全幅の長い行にしない。
- **本文を小さくしすぎない**: PC 16px / SP 15px 未満にしない。`line-height` は 1.8 以上。
- **均等割り付けを使わない**: `text-align: justify` は使わず、左揃え・右ラグド。
- **禁則処理**: `line-break: strict;` を本文・見出しに指定。行頭に句読点・閉じ括弧、行末に開き括弧が来ないようにする。
- **半角で組む要素**: 数字・電話番号・日付・時間（9:00〜18:00）・郵便番号は英字フォント（`--font-en`）で半角。全角数字を使わない。
- **約物**: 三点リーダは「…」（`……` の 2 つ）、波ダッシュは「〜」。ハイフンと混在させない。

---

## 12. Anti-AI Design Rules

### やらないこと
1. **紫〜青系グラデーションを安易に使わない**（このサイトはグラデーション自体を使わない。写真上の単色暗幕のみ）。
2. **不要なカード UI を量産しない**（カード化は「サービス」「選ばれる理由」「施工事例」の 3 箇所のみ。文章はカードに入れず地の文で置く）。
3. **全セクションを中央揃えにしない**（見出しは中央可。本文・箇条書き・カード内テキストは**必ず左揃え**。2カラムの非対称も使う）。
4. **box-shadow を乱用しない**（§8 の 2 値のみ。常時影のカードを作らない。分離は border ＋ Surface で行う）。
5. **巨大な border-radius を乱用しない**（0 / 6 / 8px のみ。pill は施工事例タグ最大 3 個）。
6. **アイコンを装飾目的だけで使わない**（「選ばれる理由」は装飾アイコンではなく **01〜04 の数字**。使う線アイコンは電話・メール・地図・矢印など機能目的のみ、stroke 1.5〜2px・Primary 1 色）。
7. **3カラムカードを何度も繰り返さない**（ページ内で 3カラムグリッドは施工事例の 1 箇所だけ。連続セクションで反復しない）。
8. **意味のない英語ラベルを乱用しない**（英字ラベルは `ABOUT` `SERVICE` `WORKS` `REASON` `FLOW` `CONTACT` など**実在の意味のある語**のみ。造語・キャッチの英訳を大きく置かない。サイズは Caption、字間 0.14em、あしらい扱い）。
9. **pill 型 UI を乱用しない**（ボタンは矩形角丸 6px。pill は施工事例のカテゴリタグのみ）。
10. **全要素に fade-in を付けない**（リビールはまとまり単位。装飾的な連続アニメを入れない）。
11. **情報を詰め込みすぎない**（1 スクロール = 主メッセージ 1 つ。箇条書きは 1 項目 1 行・4 項目以内。施工事例は 3 件で潔く）。

### 代わりに優先すること
**写真の存在感 / タイポグラフィの階層 / 余白 / グリッドの使い分け / 1px 罫線 / 背景色の白⇔グレージュ切り替え / レイアウトの強弱（2カラム反転・濃色フッター・CTA 帯）**
で情報の順序とリズムを作る。「設計されている感」は装飾ではなく**一貫した固定値と正しい間（ま）**から生まれる。

### レイアウトの型（同型反復を避けるための配り方）
FV（全幅）→ 2カラム画像＋文（反転あり）→ 2×2 バッジ／カード → 3カラムグリッド（施工事例のみ）→ 1カラム文章（代表）→ CTA 全幅帯 → 濃色フッター（会社概要テーブル）。
6〜8 セクションで**レイアウトの型を 3〜4 種類**混在させる。

---

## 付録: :root トークン一式（実装時にコピーして使用）

```css
:root{
  /* ---- Color: core 8 ---- */
  --color-primary:      #3A5A40;
  --color-secondary:    #2B3A32;
  --color-accent:       #C8A97E;
  --color-bg:           #FFFFFF;
  --color-surface:      #F5F3EE;
  --color-text:         #2A2A28;
  --color-text-sub:     #6B6B66;
  --color-border:       #E4E1D9;
  /* ---- Color: derived (do NOT add others) ---- */
  --color-primary-dark: #2E4833;          /* hover only */
  --color-accent-soft:  #EFE7D9;          /* Works tag bg only */
  --overlay-hero:       rgba(29,35,30,.38);

  /* ---- Spacing (only these 9) ---- */
  --space-1: 4px;  --space-2: 8px;  --space-3: 16px;
  --space-4: 24px; --space-5: 32px; --space-6: 48px;
  --space-7: 64px; --space-8: 96px; --space-9: 120px;

  /* ---- Layout ---- */
  --content-max: 1120px;
  --content-wide: 1280px;
  --content-text: 720px;
  --pad-x: 40px;                          /* tablet 32 / mobile 20 via media query */
  --section-y: 96px;                      /* tablet 80 / mobile 64 via media query */

  /* ---- Radius (only these) ---- */
  --radius-sm: 6px;                       /* buttons, inputs, tags */
  --radius-md: 8px;                       /* cards, images */

  /* ---- Shadow (only these) ---- */
  --shadow-sm: 0 1px 3px rgba(29,35,30,.06);
  --shadow-md: 0 4px 16px rgba(29,35,30,.10);   /* hover only */

  /* ---- Motion ---- */
  --dur-ui: .2s;  --dur-img: .4s;  --dur-reveal: .5s;
  --ease-ui: ease;
  --ease-reveal: cubic-bezier(.16,1,.3,1);

  /* ---- Type family ---- */
  --font-jp: "Noto Sans JP","Hiragino Kaku Gothic ProN","Hiragino Sans","Yu Gothic","YuGothic",Meiryo,sans-serif;
  --font-en: "Inter","Helvetica Neue",Arial,var(--font-jp);
}
```

> 変更履歴:
> - 2026-09-07 初版作成（サイト診断・参考サイト分析・会社情報・目的・ターゲットに基づく）
