module.exports = {
  title: 'book-2022',
  author: 'kss-pc-club',
  language: 'ja',
  size: 'JIS-B5',
  theme: 'css/theme_print.css',
  entryContext: './manuscripts',
  entry: [
    { rel: 'contents' },
    'foreword.md',
  ],
  output: [
    './public/output.pdf',
  ],
  toc: true,
  tocTitle: '目次',
  workspaceDir: '.cache',
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
}
