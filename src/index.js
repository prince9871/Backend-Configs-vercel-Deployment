let express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome</title>
        <style>
          @keyframes colorChange {
            0% {
              color: #ff5733; /* Start color (orange) */
            }
            50% {
              color: #c70039; /* Middle color (red) */
            }
            100% {
              color: #900c3f; /* End color (dark red) */
            }
          }
  
          .animated-text {
            font-size: 3em;
            animation: colorChange 0.5s infinite alternate;
          }
        </style>
      </head>
      <body>
        <h1 class="animated-text">Hello Project King!</h1>
      </body>
      </html>
    `)
})
app.get('/a', (req, res) => res.send('Hello World! Ji'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
