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
app.get('/api/:city?', (req, res) => {
  const city = req.query.city;
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

app.get('/api/', (req, res) => {

  res.sendFile(__dirname + "/public/index.html");
})

app.get('*', (req, res) => {
  res.send("Coming Soon")
})



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


