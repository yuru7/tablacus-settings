# 「ユーザースタイルシート」アドオン用 CSS
[ユーザースタイルシート](https://tablacus.github.io/wiki/addons/usercss.html) アドオンを使うと、独自の CSS を読み込ませ、 Tablacus の見た目をカスタマイズできます。

## サンプル
本ディレクトリの [user.css](https://github.com/yuru7/tablacus-settings/blob/master/user-style-sheet/user.css) の内容をユーザースタイルシートアドオンのオプション画面で貼り付けて使用することで、Tablacus を下図のような見た目にできます。  
**なお、下図の見た目に関わる部分で、主に以下のアドオンもインストールしています。**

* メインメニューボタン
* タブグループ
* Inner パンくずリストアドレスバー
* Inner フィルターバー
* Inner 戻る
* Inner 進む
* Inner 上へ
* Inner 更新
* ダークモード

### 通常時

![normal](https://github.com/yuru7/tablacus-settings/raw/master/images/uss_image1.png)

### ダークモード

![dark](https://github.com/yuru7/tablacus-settings/raw/master/images/uss_image2.png)

## 通常用とダークモード用の切替え方法

本ディレクトリにアップされている [user.css](https://github.com/yuru7/tablacus-settings/blob/master/user-style-sheet/user.css) では、初期設定でダークモード用になっています。

以下のように [user.css](https://github.com/yuru7/tablacus-settings/blob/master/user-style-sheet/user.css) 内のコメントアウトを切り替えることで、ダークモード用から通常用に切り替えます。

* `/* --- 通常時の配色 ここから --- */` の1行下の `/*` を削除
* `/* --- 通常時の配色 ここまで --- */` の1行上の `*/` を削除
* `/* --- ダークモード時の配色 ここから --- */` の1行下に `/*` を追加
* `/* --- ダークモード時の配色 ここまで --- */` の1行上に `*/` を追加
