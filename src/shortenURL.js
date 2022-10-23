function shortenURL(urlToShorten) {
  return fetch(`https://api.shrtco.de/v2/shorten?url=${urlToShorten}`)
    .then((response) => response.json())
    .then((response) => response.result.full_short_link);
}

export default shortenURL;
