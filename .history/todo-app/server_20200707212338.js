let express = require('express') //invite from node modules
let app = express()
let mongodb = require('mongodb') // invite from node modules
let db //defined below at mongodb connect
let mongoose = require('mongoose')

let connectionString =
  'mongodb+srv://todoappuser:todoappuser@cluster0-to-do.b5gol.mongodb.net/Cluster0-to-do?retryWrites=true&w=majority'

//first param : connection string; second param: mongodb config property, third param: the action in the method
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err, client) {
    db = client.db() //this selects our mongodb database
    // app.listen(3000);
  }
)

app.use(express.urlencoded({ extended: false }))

// app.get('/db', (req,res)=>console.log(db.collection('items').find().toArray()))

app.get('/', (req, res) => {
  db.collection('items')
    .find()
    .toArray((err, items) => {
      // console.log(items)
      console.table(items)
    })

  //html start
  
})
// end html
console.log('html parsed. congrats.')
console.log('database loaded. congrats.')

app.post('/create-item', (req, res) => {
  // console.log('make this dynamic')
  // console.log(req.body.item)
  db.collection('items').insertOne({ text: req.body.item }, () => {
    res.send('Thanks for submitting.' + '<br> <br><a href="/"> home </a>')
  })
})

//end
app.listen(3000)
