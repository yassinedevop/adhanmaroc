# Moroccan Prayer Times API

The Moroccan Prayer Times API is a JavaScript API deployed using Node.js. It provides accurate prayer times (salat times) for various cities in Morocco. The API retrieves its data from the Moroccan government's official website.

## Usage

To retrieve the prayer times for a specific city, follow the steps below:

1. **Get List of Cities**

   To obtain the list of available cities, send a GET request to the following endpoint:

   <pre>
   GET https://adhanmaroc.onrender.com/api/cities
   </pre>

   This will return a JSON array containing the cities along with their corresponding IDs.

2. **Get Prayer Times for a City**

   To retrieve the prayer times for a specific city, replace `{id}` in the following URL with the index of the city obtained from the previous step:

   <pre>
   GET https://adhanmaroc.onrender.com/api/city/{id}
   </pre>

   For example, if you want to fetch the prayer times for the Rabat with ID 1, the URL will be:

   <pre>
   GET https://adhanmaroc.onrender.com/api/city/1
   </pre>

   This will return a JSON object containing the prayer times for the specified city which is **Rabat**.

   The prayer times include:

   - Fajr: Dawn prayer time
   - Sunrise: Time of sunrise
   - Dhuhr: Midday prayer time
   - Asr: Afternoon prayer time
   - Maghrib: Sunset prayer time
   - Isha: Night prayer time

## Example Response

Here's an example response for the prayer times of a city:

```json
{
  "city": "Rabat",
  "date": "2023-06-19",
  "times": {
    "Fajr": "04:41 AM",
    "Sunrise": "06:37 AM",
    "Dhuhr": "01:06 PM",
    "Asr": "05:15 PM",
    "Maghrib": "08:32 PM",
    "Isha": "10:13 PM"
  }
}
```

## Deployment
The Moroccan Prayer Times API is currently deployed and accessible at https://adhanmaroc.onrender.com/. You can make requests to the available endpoints as described above.
