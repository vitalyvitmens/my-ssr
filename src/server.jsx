import { readFile } from 'fs/promises'
import { renderToString } from 'react-dom/server'
import { App } from './App'
import http from 'http'

http
  .createServer(async (req, res) => {
    if (req.url === '/bundle.js') {
      const bundle = await readFile('./dist/bundle.js')

      res.writeHead(200, { 'Content-Type': 'text/javascript' })

      res.end(bundle)

      return
    }

    const template = await readFile('./index.html', 'utf-8')
    const data = await App.getServerSideProps()
    const html = renderToString(<App data={data} />)

    res.writeHead(200, { 'Content-Type': 'text/html' })

    res.end(
      template.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div><script>window.data = ${JSON.stringify(
          data
        )}</script>`
      )
    )
  })
  .listen(3000)

// // import express from 'express'
// import { readFile } from 'fs/promises'
// import { renderToStaticMarkup } from 'react-dom/server'
// import { App } from './App'
// import http from 'http'

// // const app = express()

// http
//   .createServer(async (req, res) => {
//     const template = await readFile('./index.html', 'utf-8')
//     const data = await App.getServerSideProps()
//     const html = renderToStaticMarkup(<App data={data} />)

//     res.writeHead(200, { 'Content-Type': 'text/html' })

//     res.end(
//       template.replace('<div id="root"></div>', `<div id="root">$script/div>`)
//     )
//   })
//   .listen(3000)

// // app.use(express.static('./dist'))

// // app.listen(3000, () => {
// //   console.log('Server is listening on http://localhost:3000')
// // })
