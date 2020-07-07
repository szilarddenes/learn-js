let express = require('express'); //invite from node modules
let app = express();
let mongodb = require('mongodb'); // invite from node modules
let db; //defined below at mongodb connect
let mongoose = require('mongoose');

let connectionString =
  'mongodb+srv://todoappuser:todoappuser@cluster0-to-do.b5gol.mongodb.net/Cluster0-to-do?retryWrites=true&w=majority';

//first param : connection string; second param: mongodb config property, third param: the action in the method
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err, client) {
    db = client.db(); //this selects our mongodb database
    // app.listen(3000);
  }
);

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {

  //html start
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple To-Do App</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    </head>
    <body>
      <div class="container">
        <h1 class="display-4 text-center py-1">To-Do App</h1>
        <h1 class="display-4 text-center py-1">noDemon</h1>
        
        <div class="jumbotron p-3 shadow-sm">
          <form action="/create-item" method="POST">
            <div class="d-flex align-items-center">
              <input name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
              <button class="btn btn-primary">Add New Item</button>
            </div>
          </form>
        </div>
        
        <ul class="list-group pb-5">
          <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
            <span class="item-text">Fake example item #1</span>
            <div>
              <button class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
              <button class="delete-me btn btn-danger btn-sm">Delete</button>
            </div>
          </li>
          <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
            <span class="item-text">Fake example item #2</span>
            <div>
              <button class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
              <button class="delete-me btn btn-danger btn-sm">Delete</button>
            </div>
          </li>
          <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
            <span class="item-text">Fake example item #3</span>
            <div>
              <button class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
              <button class="delete-me btn btn-danger btn-sm">Delete</button>
            </div>
          </li>
        </ul>
        
      </div>
      
    </body>
    </html>`);
});
// end html
console.log('html parsed. congrats.');
console.log('database loaded. congrats.');

app.post('/create-item', (req, res) => {
  // console.log('make this dynamic')
  // console.log(req.body.item)
  db.collection('items').insertOne({ text: req.body.item }, () => {
    res.send('Thanks for submitting.' + '<br> <br><a href="/"> home </a>');
  });
});

app.post('/db', (req,res)=>{
res
})

//end
app.listen(3000);
