const express = require('express')
const app = express()

// app.use('/', function (req, res) {
//   res.send('Hello dunia')
// })

app.get('/', function (req, res) {
    res.send('Hello dunia')
  })

  app.put('/', function (req, res) {
    res.send('Hello duniaaa')
  })
  

app.listen(3000, () => {
    console.log("server running on port: 3000");
});