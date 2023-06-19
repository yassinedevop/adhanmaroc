const https = require('https');
const cheerio = require('cheerio');
const express = require('express');
const app = express();
const port = 3000;
var jsonTables = {};
const options = {
  rejectUnauthorized: false
};
const HtmlTableToJson = require('html-table-to-json');


// Define the API endpoint
app.get('/api/city', (req, res) => {
  const city = req.query.city;
  const url = 'https://habous.gov.ma/prieres/horaire_hijri_2.php?ville=' + city; // Replace with the URL of the HTML page

  https.get(url, options, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      //const $ = cheerio.load(data);
      const html = data;

      jsonTables = new HtmlTableToJson(html);

      console.log(jsonTables['results']);
    });
  });

  // Perform any necessary operations with the city parameter
  // For demonstration purposes, we'll simply return it as a JSON response
  res.json(jsonTables);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});