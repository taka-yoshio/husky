# husky

huskyは、Gitのフック（hooks）を利用して、特定の処理をGitコマンドの実行時に自動的に実行するためのツール  
これにより、コミットやプッシュなどの操作に合わせて  
コードのフォーマット、テストの実行、エラーチェックを自動で行うことができる

# eslint
JavaScriptおよびTypeScriptのコードに対して静的コード解析を行うためのツール  
主にコードの品質を保ち、エラーを未然に防ぐために使用される  
文法エラーの検出がメインで、不正な構文（例えば、欠けているセミコロンや誤った括弧の使い方）を検出

# prettier
JavaScriptおよびTypeScriptのコードに対して静的コード解析を行うためのツール  
主にコードの品質を保ち、エラーを未然に防ぐために使用される  
コード整形がメインで、インデント、改行、スペース、セミコロンの有無など、コード全体のスタイルを自動的に統一

# 導入手順
■環境をインストール  
npm install husky@8 --save-dev  
npm install eslint --save-dev  
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev  
npm install --save-dev @commitlint/config-conventional @commitlint/cli
npm install eslint-plugin-import --save-dev

■初期ファイルが作成される  
npx husky install  
npx eslint --init

■下記ファイルでルールなど詳細を定義する  
pre-commit(husky)  
eslint.config.mjs(eslint)    
commitlint.config.js(コミット時のルール)  





