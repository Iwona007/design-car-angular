const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/design-car-angular'));

app.listen(process.env.PORT || 8081);


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/design-car-angular/index.html'));
});

console.log('Console listening!' + app.get('port'));
