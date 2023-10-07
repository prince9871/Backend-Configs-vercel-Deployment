let express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Project!'))
app.get('/a', (req, res) => res.send('Hello World! Ji'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))