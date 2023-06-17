const request = require('request');
const breedSearchUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreed = function(argv) {
  const breed = argv[2];
  console.log(breed);
  request(`${breedSearchUrl}${breed}`, (error, response, body) => {
    // the URL results in an error
    if (error) {
      console.log('Error:', error);
      return;
    }
    // convert the JSON string into an object
    const data = JSON.parse(body);
    //print out error message when breed is not found
    if (data.length === 0) {
      console.log(`${breed} breed is not found`);
      return;
    }
    console.log(data[0]["description"]);
  });

};

fetchBreed(process.argv);