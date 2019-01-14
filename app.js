const express = require('express');
let router = express.Router();
const routes = require('./routes/index.js')
const mongoose = require('mongoose');
let app = express();

app.use('/',routes);

app.use((err, req, res, next) => {
  res.status(500).send({
    "Error": err.stack
  });
});

app.set('port', process.env.PORT || 4000 );
app.listen(app.get('port') , function(){
console.log('Server started on port : '+ app.get('port'));
});
module.exports = router;