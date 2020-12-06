const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/cs5610-f20-alkhalifas-client-angular-v3'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+ '/dist/cs5610-f20-alkhalifas-client-angular-v3/index.html'));});

app.listen(process.env.PORT || 8080);
