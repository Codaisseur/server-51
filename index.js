const express = require('express')

const app = express()

app.get(
  '/test/:person',
  function (request, response) {
    const message = `Hello ${request.params.person}`
    response.send(message)
  }
)

const onHome = (request, response) => response.send('home!')
app.get('/', onHome)

const port = 4000

function onListen () {
  const message = `Listening on :${port}`
  console.log(message)
}
app.listen(port, onListen)
