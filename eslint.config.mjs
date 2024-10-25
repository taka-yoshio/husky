import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

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
        // 必要に応じて他のグローバル変数を追加
      },
    },
  },
  // ESLintとReactの推奨設定を追加
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  // カスタムルールの設定
  {
    rules: {
      "no-console": "warn", // console.logの使用を警告
      eqeqeq: ["error", "always"], // ===を強制
      "react/react-in-jsx-scope": "off", // React 17以降、jsxでReactをインポートしない設定
      // 他のカスタムルールをここに追加
    },
  },
];
