module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 72], // ヘッダーの最大長を72文字に制限
    'type-empty': [2, 'never'], // タイプは空にできない
    'subject-empty': [2, 'never'], // サブジェクトは空にできない
    // 他のルールをここに追加
  },
};