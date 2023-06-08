const navBar = require('./components/navBar.js')
const footer = require('./components/footer.js')

function template(body) {
  return html = `${navBar}
${body}
${footer}

<script src="/js/theme.js"></script>`
}

module.exports = template