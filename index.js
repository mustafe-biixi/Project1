const express = require('express'),
      app = express();
app.get('/',(req,res) => {
    res.send('Hello, Welcome to our service');
});
app.listen(3000,()=> {console.log('Server is up and running on port 3000')});