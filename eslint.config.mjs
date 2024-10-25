import globals from "globals";
import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";

export default [
  // 対象ファイルの指定
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
  // 使用するグローバル変数の設定
  {
    languageOptions: {
      globals: {
        ...globals.browser, // ブラウザのグローバル変数
        module: "readonly", // 'module' を読み取り専用のグローバル変数として追加
        // 必要に応じて他のグローバル変数を追加
      },
    },
  },
  // ESLintとReactの推奨設定を追加
  pluginJs.configs.recommended,
  // プラグインの定義をオブジェクト形式に変更
  {
    plugins: {
      import: pluginImport,
    },
  },
  // カスタムルールの設定
  {
    rules: {
      "no-console": "off", // console.logの使用を警告
      eqeqeq: ["error", "always"], // ===を強制
      "react/react-in-jsx-scope": "off", // React 17以降、jsxでReactをインポートしない設定
      "import/first": "error", // インポートはファイルの最初に
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external", "internal", "parent", "sibling", "index"],
          ],
          "newlines-between": "always", // グループ間に空行を強制
        },
      ],
      // 他のカスタムルールをここに追加
    },
  },
];
