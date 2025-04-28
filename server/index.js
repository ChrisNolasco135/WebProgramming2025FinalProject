/*  B"H
*/
// Load the http module to create an http server.
const express = require('express')
require('dotenv').config()
console.log('Environment Variables:', process.env)

const activitiesController = require('./controllers/activities');
const usersController = require('./controllers/users');
const routesController = require('./controllers/routes');



const PORT = process.env.PORT ?? 8000
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})
  app.use(express.json())

app
  .get('/hello', (req, res) => {
    res.send('Hello New Paltz, NY!!!')
  })
  .use('/api/v1/users', usersController)
  .use('/api/v1/activities', activitiesController)
  .use('/api/v1/routes', routesController)
  
  .use('/', express.static('dist')) 

// Listen on port 8000, IP defaults to
//
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
});



console.log('Hello World!')
