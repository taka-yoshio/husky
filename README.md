# husky

Huskyは、Gitのフック（hooks）を利用して、特定の処理をGitコマンドの実行時に自動的に実行するためのツール  
これにより、コミットやプッシュなどの操作に合わせて  
コードのフォーマット、テストの実行、エラーチェックを自動で行うことができる

# eslint
JavaScriptおよびTypeScriptのコードに対して静的コード解析を行うためのツール  
主にコードの品質を保ち、エラーを未然に防ぐために使用される

# prettier
JavaScriptおよびTypeScriptのコードに対して静的コード解析を行うためのツール  
主にコードの品質を保ち、エラーを未然に防ぐために使用される

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





