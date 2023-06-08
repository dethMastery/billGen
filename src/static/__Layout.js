function pageLayout(data) {
  const head = `<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.title}</title>
  
  <link rel="stylesheet" href="/css/main.css">
  ${data.head}
</head>`

  const body = `<body>
  ${data.body}
</body>`

  return html = `<!DOCTYPE html>
<html lang="en">
  ${head}
  ${body}
</html>`
}

module.exports = pageLayout