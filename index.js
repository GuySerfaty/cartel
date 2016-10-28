let express = require('express');
let app = express();

let bodyParser = require('body-parser')

/* Settings */
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded())

if( app.get('env') === 'development' ) {
  /* Development settings */
  app.set('json spaces', 2);
}

/* Routes */
// app.use('/books', require('./controllers/books_controller'));
// app.use('/reservations', require('./controllers/reservations'));

/* Static Files */
app.use('/', express.static(`public`));

/* Docs */
app.use('/docs', require('./docs'));
app.get('/',(req, res) => {
  res.redirect('/docs')
})

app.listen(8080, () => {
  console.log('Listening on port 8080...')
  console.log(`env : ${app.get('env')}`)
})
