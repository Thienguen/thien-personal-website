/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  tabWidth: 2,
  printWidth: 120,
  endOfLine: 'lf',
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  quoteProps: 'consistent',
  importOrder: [
    '// Frameworks',
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '',
    '// Libraries',
    '<THIRD_PARTY_MODULES>',
    '',
    '// Src',
    '^types$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/hooks/(.*)$',
    '^@/stores/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^@/app/(.*)$',
    '',
    '^[./]',
  ],

  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
}
