import express from 'express'
import { readFile } from 'fs/promises'
import { renderToString } from 'react-dom/server'
import { App } from './App'

const app = express()

app.get('/', async (req, res) => {
  const template = await readFile('./index.html', 'utf-8')
  const html = renderToString(<App />)

  res.send(
    template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  )
})

app.use(express.static('./dist'))

app.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000')
})
