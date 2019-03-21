### Create-React-App

[![CircleCI](https://circleci.com/gh/toriiico/re-ducks-typescript-material-ui-boilerplate/tree/master.svg?style=svg&circle-token=06dbf3564058a70e10cc00314540cc13f44ecfdd)](https://circleci.com/gh/toriiico/re-ducks-typescript-material-ui-boilerplate/tree/master)

# Re-ducks Typescript with Material-UI (and Formik) boilerplate

このプロジェクトは [toriiico/re-ducks-typescript-boilerplate](https://github.com/toriiico/re-ducks-typescript-boilerplate) をベースに制作されています。

![Todos Page](https://user-images.githubusercontent.com/43000286/54735181-ddaad600-4be7-11e9-8351-1565d66a6d2b.png)

もし Material-UI が好みではない場合は、 [toriiico/re-ducks-typescript-boilerplate](https://github.com/toriiico/re-ducks-typescript-boilerplate) をご利用ください。

## Features

### _Re-ducks デザインパターン_

今回のプロジェクトで使用しているデザインパターンです。  
設計思想などの詳細については[プロジェクト構造](#project-structure)、または[こちらの記事](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be)をご覧ください。

### _Typescript_

### _Material-UI フレームワーク_

React で手軽に Material デザインを適用できる UI フレームワークです。

### _Formik & Yup_

Formik は React の Form の扱いが楽になるライブラリです。  
また Formik による Form のバリデーションを Yup ライブラリに任せています。
これにより、手軽にバリデーション機能が実装できます。

### _Create-React-App_

React 環境を自動生成するライブラリです。  
`--typescript` オプションを適用した状態からプロジェクトを作成しています。

### _typesafe-actions_

action まわりを型安全にするためのライブラリです。  
また、導入することによって従来の Re-ducks パターンから types ファイルを排除し、action と reducer の齟齬が起きにくくなります。

### _reselect_

state の更新監視と state <=> view の役割の切り離しに一役買っているライブラリです。  
Re-ducks の selector で使用されています。  
メモ化とキャッシュ管理をより強化したい場合は、[re-reselect](https://github.com/toomuchdesign/re-reselect) の導入を検討することも可能です。

### _Prettier & tslint_

Prettier と tslint でフォーマットとコーディングルールを強制しています。  
本プロジェクトでは vs code の設定が含まれているため、vs code を使用しているユーザーは、セーブするごとに Prettier が動作し自動でコードフォーマットが適用され、tslint についても[拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)を追加することで自動修正が適用されます。

## Develop Environment

- OS
  - Ubuntu 18.04.1 LTS
- node
  - v11.8.0
- npm
  - 6.5.0

<a id="project-structure"></a>

## プロジェクト構造

### src のディレクトリ構成

```
/states         -- stateを扱う層
  /ducks          -- ステート毎にディレクトリができる層
    /app            -- アプリ全体のステート
    /todos          -- Todoまわりのステート
/views          -- 描画を扱う層
  /components     -- コンポーネント群
    /common         -- コアなコンポーネント（Header, Footerなど）
    /todos
  /containers     -- reduxと密な連携が必要なコンポーネントをconnectさせる層
    /todos
  /pages          -- ページ単位でコンテンツをまとめる層。URIと同期している
    /todo
  /routers        -- ルーティング設定を行う層
```

### それぞれの役割について

#### states ディレクトリ

- /ducks

  - ステートを定義するための層です。  
    ステートの全体像としては下記のようになっており、ステートのルートと ducks 以下のフォルダは基本的に同期しています。

  ```md
  (ducks/app)

  - appState
    - appInfo
      - title

  (ducks/todos)

  - todosState
    - todos[]
      - todo
        - id
        - text
        - completed
    - visibilityFilter
  ```

- ducks/\[other\]
  - index.ts
  - selectors.ts
    - \[other\]が責務を持つステートから値を取得するためのヘルパー関数群です。  
      外部から呼び出すことが可能です。
  - operations.ts
    - 受け取ったデータを加工して action を dispatch するためのヘルパー関数群です。  
      外部から呼び出すことが可能です。
  - models.ts
    - 各処理用の型定義を行うためのファイルです。  
      外部から参照することが可能です。
  - actions.ts
    - typesafe-actions を使用して純粋な action が定義される場所です。  
      基本的に action の定義を行う場所として扱い、ここでデータを加工する処理は原則行いません。
  - reducers.ts
    - react redux で使用する一般的な reducer です。
  - constants.ts
    - \[other\]内で使用する定数を扱う場所です。
  - \[any.ts\]
    - 必要に応じてファイルを増やすことが可能です。（api 接続を管理するための apis.ts など）

#### views ディレクトリ

- ./index.ts
- ./component.tsx
  - アプリの画面レイアウトを定義しているファイル群です。  
    index.ts は container として機能しています。
- /routers
  - react-router-dom を用いたルーティングを管理する層です。
- /pages
  - ページ単位でコンテンツをまとめるための層です。  
    URI と同期させることでページ毎のコンポーネント管理が楽になります。  
    pages 以下のファイル構成はレイアウト定義ファイルと同様、index.ts(container), component.tsx で構成されています。
- /components
  - 純粋なコンポーネントを扱う層です。
- /containers
  - コンポーネントに Redux を接続させるための中継オブジェクトとして機能します。  
    役割を明確にさせるため、container 内で直接コンポーネントを扱うことはありません。

## Start Todos App

```bash
git clone https://github.com/toriiico/re-ducks-typescript-material-ui-boilerplate.git

cd re-ducks-typescript-material-ui-boilerplate
npm i && npm start
```

## License

This project is licensed under the MIT license, Copyright (c) 2019 Ryosuke Narita.
For more information see `./LICENSE`.
