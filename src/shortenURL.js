function shortenURL(urlToShorten) {
  return fetch(`https://api.shrtco.de/v2/shorten?url=${urlToShorten}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`invalid response code ${response.status}`);
      }
      return response.json();
    })
    .then((response) => response.result.full_short_link);
}

export default shortenURL;
