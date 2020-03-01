// API/CooperHewittApi.js

const API_TOKEN = "0033144da024017ee23feccdd8007789";

//Search for objects matching terms across all the text fields
export function getObjectwithText(text) {
  const url =
    "https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=" +
    API_TOKEN +
    "&query=" +
    text +
    "&has_images=1&page=1&per_page=100";
  return fetch(url)
    .then(response => response.json())
    .then(data => data.objects)
    .catch(error => console.error(error));
}
