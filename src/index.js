let express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>
  res.send(`<h1 style="@keyframes colorChange {
    0% {
      color: #ff5733; /* Start color (orange) */
    }
    50% {
      color: #c70039; /* Middle color (red) */
    }
    100% {
      color: #900c3f;
    }
  }
  .animated-text {
    font-size: 3em;
    animation: colorChange 0.5s infinite alternate;
  }">Hello Project King!</h1>`))
app.get('/a', (req, res) => res.send('Hello World! Ji')
)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
