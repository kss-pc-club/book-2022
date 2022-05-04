module.exports = {
  title: 'KSS PC Book 2022',
  author: 'kss-pc-club',
  language: 'ja',
  size: 'JIS-B5',
  theme: 'css/theme_print.css',
  entryContext: './manuscripts',
  entry: [
    'index.md',
    'foreword.md',
    'colophon.md',
  ],
  output: [
    './public/book.pdf',
  ],
  workspaceDir: '.cache',
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
}
