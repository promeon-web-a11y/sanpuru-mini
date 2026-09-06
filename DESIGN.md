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
派生値は「固定の算出方法・固定の用途」を持つものだけ 2 つ許可する。

| Role | Token | HEX | 主な用途 |
|---|---|---|---|
| Primary | `--color-primary` | `#3A5A40` | 主要ボタン、Reason の上罫線・数字、箇条書きマーカー、リンク、`flow-note` の面 |
| Secondary | `--color-secondary` | `#2B3A32` | フッター背景、濃色セクション（CTA帯）、締めの面 |
| Accent | `--color-accent` | `#C8A97E` | 予備。現状ページ内では未使用（**面塗り禁止**。使うなら細い罫線 / hover 下線のみ） |
| Background | `--color-bg` | `#FFFFFF` | ページ基本背景 |
| Surface | `--color-surface` | `#F5F3EE` | 交互セクション背景・カード地（ウォームグレージュ） |
| Text Primary | `--color-text` | `#2A2A28` | 本文・見出し（真っ黒にしない） |
| Text Secondary | `--color-text-sub` | `#6B6B66` | 補足文、キャプション、定休日など |
| Border | `--color-border` | `#E4E1D9` | 1px 罫線、カード枠、フォーム入力枠 |

### 派生値（新色ではない。これ以外を作らない）
| Token | 値 | 算出 | 用途（固定） |
|---|---|---|---|
| `--color-primary-dark` | `#2E4833` | Primary を約 12% 暗く | ボタン / リンク hover のみ |
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
- **日本語フォント**: Noto Sans JP（Webフォント）。読み込みウェイトは **400 / 500 / 700**（見出しは **600 中心**、700 は多用しない）。900 は使わない。明朝は使わない。
- **英字フォント**: Inter。読み込みは 400 / 500 / 600。用途は **英字ラベル・数字・電話番号・日付**に限定。セリフ英字は使わない。
- 見出しと本文は同一書体。差は **size / weight / color / letter-spacing** だけでつける。
- 見出しは巨大化しない。地域密着・個人事業主のリフォーム店として自然なサイズ感（H1 で 60px 超にしない）。

### タイプスケール（Mobile / Tablet / Desktop）

`:root` を 3 段階のブレイクポイント（≤640 / 641–1024 / ≥1025）で切替。PC 版を縮小しただけにしない。

| Token | 用途 | Mobile | Tablet | Desktop | weight | line-height | letter-spacing |
|---|---|---|---|---|---|---|---|
| H1 | FVキャッチ（ページに1つ・`max-width:44rem`） | 33px | 40px | **52px** | 600 | 1.42 | 0.01em |
| H2 | セクション見出し・リード見出し | 26px | 28px | **32px** | 600 | 1.4 | 0.02em |
| H3 | サービス名・Case名・理由タイトル | 20px | 20px | **22px** | 600 | 1.55 | 0.02em |
| H4 | 予備の小見出し | 16px | 16px | 16px | 500 | 1.7 | 0.02em |
| Body | 本文 | 16px | 16px | **17px** | 400 | 1.9（PC 1.85） | 0.02em |
| Small | 補足・注記・工期・地域ラベル | 13px | 13px | 14px | 400 | 1.8 | 0.02em |
| Caption | 免責・英字ラベル・「代表」ラベル | 12px | 12px | 13px | 500 | 1.6 | 0.1em（英字ラベルは大文字） |
| 箇条書き（Serviceカード） | — | 15px | 15px | 15px | 400 | 1.7 | 0.02em |

### 比率・下限ルール
- H2 : Body ≒ **1.9倍前後**（3倍にしない = チラシ化防止）。H3 : Body ≒ 1.25〜1.3倍（差は主に **太さと色**）。
- 本文・箇条書きは **どの画面でも 15px を下回らない**（SP でも 14px 以下にしない）。
- 本文行間は 16px で 1.9 / 17px で 1.85。About・代表紹介・Reason の説明文は特に読みやすさ優先。
- 和文 letter-spacing は本文で **+0.04em を超えない**。

### 英字ラベル（`.eyebrow`）
- About / Service / Reason / Works / Representative / Flow / Contact を残す。ただし**日本語見出しより目立たせない**。
- size 12〜13px / weight 500 / letter-spacing 0.1em / 色 `--color-text-sub`（Primary 緑にしない）。
- 脇のティックは 20×1px の淡いグレー（`--color-text-sub` opacity .6）。

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
8px ベース。この数列にない**レイアウト余白**を新規に使わない。
※コンポーネント内部（カード内 h3 下・タグ間・入力欄 padding など）は 4px 刻み（6 / 10 / 12 / 20）まで許容。

### 幅・余白トークン
| 項目 | Token | 値 |
|---|---|---|
| 最大コンテンツ幅 | `--content-max` | **1120px** |
| 広幅（写真・帯） | `--content-wide` | 1280px |
| 読ませる本文幅 | `.prose` | **34em**（約 28〜34 字 / 560〜620px。`--content-text` 720px は上限） |
| 左右 padding | `--pad-x` | **PC 40px / Tablet 32px / Mobile 20px** |
| セクション上下（標準） | `--section-y` | **PC 96 / Tablet 80 / Mobile 64** |
| セクション上下（ゆとり） | `--section-y-airy` | **PC 124 / Tablet 104 / Mobile 80** |

### セクションリズム（均一余白にしない）
全セクションを同じ `padding` にしない。次の 3 段階で強弱をつける（Mobile は約 65〜70%）。

| セクション | 上 | 下 |
|---|---|---|
| Hero → About | About は `--section-y-airy` を**上のみ**（`.section--airy-top`） | 標準 |
| Service / Works / Flow / Contact | 標準 `--section-y` | 標準 |
| Reason | `--section-y-airy` を**上のみ** | 標準 |
| 代表紹介 | `--section-y-airy` を**上下とも**（`.section--airy`） | `--section-y-airy` |
| CTA 帯 | `.section--lg`（`--section-y` × 1.12。やや詰めて強調） | 同左 |

背景色の白 ⇔ グレージュ交互（About白 / Service灰 / Reason白 / Works灰 / 代表白 / Flow灰）＋この余白の強弱＋2カラム反転で「設計されたリズム」を作る。

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
- **9px 以上の角丸は使わない。pill（完全角丸）は不使用**（施工事例の地域は素のテキストにした）。
- 要素ごとに radius をバラバラにしない。サイト内で使う radius は 0 / 6 / 8 の 3 種類に固定。

### Border
- 罫線は `1px solid var(--color-border)` のみ。黒に近い線・2px 以上の汎用枠・二重線は使わない。
- アクセント罫線: **Reason の各項目の上辺のみ** `2px solid var(--color-primary)`（構造を示す指標。カード枠ではない）。これ以外に太い/色付き罫線を増やさない。

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
| セクション上下（標準 `--section-y`） | 64px | 80px | 96px |
| セクション上下（`--section-y-airy`：About/Reason は上のみ、代表紹介は上下） | 80px | 104px | 124px |
| CTA帯（`.section--lg` = section-y × 1.12） | 72px | 90px | 107px |
| カードグリッド gap | 16px | 24px | 32px |

機械的な均一余白を避けるため、全セクションを同じ値にしない（§14）。

### 文字サイズ
| | Mobile | Tablet | Desktop |
|---|---|---|---|
| Body | 16px | 16px | 17px |
| H1 | 33px | 40px | 52px |
| H2 | 26px | 28px | 32px |
| H3 | 20px | 20px | 22px |
| 補足 / 箇条書き | 13〜15px | 13〜15px | 14〜15px |

### レイアウト変更
- **Desktop**: 2カラム（画像＋文、左右交互）/ 3カラム（施工事例）/ 2×2（サービス・理由）/ 横並びナビ ＋ 電話 ＋ CTA ボタン。
- **Tablet**: 画像＋文は 2カラム維持。施工事例 → 2カラム。2×2 は維持（or 2列）。ナビはハンバーガー（≤1024px）＋下部固定CTAバー。
- **Mobile**: 全要素 1カラム縦積み（画像＝先、文＝後）。ハンバーガーナビ。電話は下部固定 CTA バーに集約（ヘッダー内の電話表記は非表示）。施工事例は 1列 or 横スナップスクロール。ヒーロー 76〜84vh。

---

## 11. Japanese Typography Rules

- **改行の制御は `<span class="nowrap">` で行う（`<br>` の乱用禁止）**: 見出しは「意味のまとまり」ごとに `nowrap` で包み、折り位置をブラウザに委ねつつ**分割されて困る箇所だけ**を保護する。`<br>` は文末（。）や読点クローズ（、）など**真の節境界のみ**に限定（本サイトでは H1 と CTA h2 の 1 箇所ずつ）。About/代表紹介の見出しは `<br>` を使わず nowrap 単位だけで組む。
- **孤立文字を作らない**: 最終行に助詞や 1〜3 文字だけ残さない。nowrap 単位の切り方で回避。見出しに `text-wrap: balance;`、本文に `text-wrap: pretty;`。
- **意味の途中で改行しない**: 名詞＋修飾語、括弧句、「〜できる」などの述語を跨いで割らない。Desktop / Tablet / Mobile それぞれで確認する（PC で自然でも SP で崩れる例に注意）。
- **本文の横幅を広げすぎない**: 読ませる本文は `.prose { max-width: 34em }`（1 行 **約 28〜34 文字** / 約 560〜620px）。About・代表紹介はこの範囲。全幅の長い行にしない。
- **本文を小さくしすぎない**: どの画面でも本文・箇条書きは 15px 未満にしない。`line-height` は 16px→1.9 / 17px→1.85。
- **均等割り付けを使わない**: `text-align: justify` は使わず、左揃え・右ラグド。
- **禁則処理**: `line-break: strict;` を本文・見出しに指定。行頭に句読点・閉じ括弧、行末に開き括弧が来ないようにする。
- **半角で組む要素**: 数字・電話番号・日付・時間（9:00〜18:00）・郵便番号は英字フォント（`--font-en`）で半角。全角数字を使わない。
- **約物**: 三点リーダは「…」（`……` の 2 つ）、波ダッシュは「〜」。ハイフンと混在させない。

---

## 12. Anti-AI Design Rules

### やらないこと
1. **紫〜青系グラデーションを安易に使わない**（このサイトはグラデーション自体を使わない。写真上の単色暗幕のみ）。
2. **不要なカード UI を量産しない**。カード化するのは **Service（枠線カード）だけ**。Reason＝上罫線＋小さな番号、Flow＝罫線なしの素の並び、Works＝写真＋地の文。**Service / Reason / Flow を同じ見た目にしない**。文章はカードに入れず地の文。
3. **全セクションを中央揃えにしない**（中央揃えは **CTA帯の 1 セクションのみ**。本文・箇条書き・カード内・Reason・代表紹介は必ず左揃え。2カラムの非対称も使う）。
4. **box-shadow を乱用しない**（§8 の 2 値のみ。常時影のカードを作らない。分離は 1px border ＋ Surface 地）。
5. **巨大 / 不揃いの border-radius を使わない**（0 / 6 / 8px のみ。pill 不使用）。
6. **アイコンを装飾目的だけで使わない**（Reason は装飾アイコンではなく **01〜04 の番号（18px・控えめ）**。番号を巨大化して主役にしない。線アイコンは電話など機能目的のみ）。
7. **3カラムカードを何度も繰り返さない**（3カラムグリッドは施工事例の 1 箇所だけ。連続セクションで反復しない）。
8. **意味のない英語ラベルを乱用しない**（`ABOUT` `SERVICE` `WORKS` `REASON` `FLOW` `CONTACT` など**実在の語**のみ。造語・キャッチの英訳を大きく置かない。size 12〜13px / weight 500 / 字間 0.1em / `--color-text-sub`。日本語見出しより目立たせない）。
9. **pill 型 UI を使わない**（ボタンは矩形角丸 6px。施工事例の地域も素のテキスト）。
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
  --overlay-hero:       rgba(29,35,30,.38);

  /* ---- Spacing (only these 9) ---- */
  --space-1: 4px;  --space-2: 8px;  --space-3: 16px;
  --space-4: 24px; --space-5: 32px; --space-6: 48px;
  --space-7: 64px; --space-8: 96px; --space-9: 120px;
  /* コンポーネント内部（カード内 h3 下・タグ間など）は 4px 刻み（10 / 12 / 20）まで可 */

  /* ---- Layout ---- */
  --content-max: 1120px;
  --content-wide: 1280px;
  --content-text: 720px;
  --pad-x: 40px;                          /* tablet 32 / mobile 20 via media query */
  --section-y: 96px;                      /* tablet 80 / mobile 64 via media query */
  --section-y-airy: 124px;                /* tablet 104 / mobile 80：About(上)・Reason(上)・代表紹介(上下) */

  /* ---- Type scale (Desktop 値。tablet / mobile は media query で差し替え) ---- */
  --fs-h1: 3.25rem;  --fs-h2: 2rem;   --fs-h3: 1.375rem; --fs-h4: 1rem;
  --fs-body: 1.0625rem; --fs-small: 0.875rem; --fs-caption: 0.8125rem;
  /* 見出し weight は 600。700 は brand ロゴなど最小限。 */

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
> - 2026-09-07 実装 → 文字組み仕上げ調整:
>   H1 44→52px / 見出し weight 700→600 / H2 32・H3 22 に整理 / 英字ラベルを緑→グレー・控えめに /
>   本文幅 38em→34em / セクション余白に airy 段階を追加（均一余白を解消）/
>   Service だけカード・Reason は上罫線＋小番号(18px)・Flow はカード廃止 / pill 廃止（Works 地域は素テキスト）/
>   見出しの `<br>` を nowrap 単位主体に置換。文章・写真・構成・リンク・フォーム機能は不変更。
