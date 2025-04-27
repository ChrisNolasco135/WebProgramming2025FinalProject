/*  B"H
*/
// Load the http module to create an http server.

const activitiesRouter = require('./controllers/activities');
const usersRouter = require('./controllers/users');
const routesRouter = require('./controllers/routes');
const express = require('express')
require('dotenv').config()

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

app.get('/', (req, res) => {
  res.send('Hello New Paltz, NY!!!')
})
.use('/api/v1/activities', activitiesRouter)
.use('/api/v1/users', usersRouter)
.use('/api/v1/routes', routesRouter)

app
  .get('/hello', (req, res) => {
    res.send('Hello New Paltz, NY!!!')
  })
  .use('/api/v1/products', productsController)
  .use('/api/v1/users', usersController)
  
  .use('/', express.static('dist')) 

// Listen on port 8000, IP defaults to
//
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
});



console.log('Hello World!')
