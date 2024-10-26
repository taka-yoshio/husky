import globals from "globals";
import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";

export default [

  // files:は監視する対象ファイルの設定
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },

  // languageOptions:はJavaScriptのグローバル変数や環境などの設定
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        module: "readonly",
      },
    },
  },

  // eslintの監視ルールを一括で設定できる
  pluginJs.configs.recommended,

  // plugins:はESLintに追加の機能やルールを提供する外部プラグインを定義
  {
    plugins: {
      import: pluginImport,
    },
  },

  // rules:は各種ルールの具体的な設定や強制内容を指定
  // groups:はimport関係のルールを指定
  // eqeqeq:は演算子のルール設定、==ではNG、===が必須となる
  {
    rules: {
      "no-console": "off",
      eqeqeq: ["error", "always"],
      "import/first": "error",
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external", "internal", "parent", "sibling", "index"],
          ],
          "newlines-between": "always",
        },
      ],
      // 他のカスタムルールをここに追加
    },
  },
];
