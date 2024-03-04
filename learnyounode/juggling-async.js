const http = require("http");
const urls = process.argv.slice(2);
const results = [];

// Function to make an HTTP GET request and collect the data
function getData(url, callback) {
  http
    .get(url, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        callback(null, data);
      });
    })
    .on("error", (error) => {
      callback(error);
    });
}

// Iterate through the URLs and make async requests
urls.forEach((url, index) => {
  getData(url, (error, data) => {
    if (error) {
      console.error(`Error fetching ${url}: ${error.message}`);
    } else {
      results[index] = data;
      // Check if all URLs have returned their data
      if (results.filter(Boolean).length === urls.length) {
        results.forEach((data) => {
          console.log(data);
        });
      }
    }
  });
});
