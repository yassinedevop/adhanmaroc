const https = require('https');
const HtmlTableToJson = require('html-table-to-json');
const express = require('express');
const app = express();
const port = 3000;
var jsonTables = {};
const options = {
  rejectUnauthorized: false
};

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


// Define the API endpoint
app.get('/api/city/:id?', (req, res) => {
  const city = req.params.id;
  const url = 'https://habous.gov.ma/prieres/horaire_hijri_2.php?ville=' + city; // Replace with the URL of the HTML page

  https.get(url, options, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      const html = data;

      jsonTables = new HtmlTableToJson(html);
      res.setHeader('Content-Type', 'application/json');
      res.json(jsonTables['results']);
    });
  });


});


app.get('/api/cities', (req, res) => {
  // send the file cities.json
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(__dirname + "/cities.json");
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);


});


