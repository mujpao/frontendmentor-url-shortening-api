function deserializeURLs(urls) {
  const parsedURLs = JSON.parse(urls);

  if (parsedURLs === null) {
    return null;
  }

  if (!Array.isArray(parsedURLs)) {
    return null;
  }

  let valid = true;

  parsedURLs.forEach((url) => {
    if (!("originalLink" in url && "shortenedLink" in url)) {
      valid = false;
    }
  });

  if (!valid) {
    return null;
  }

  return parsedURLs;
}

function loadURLs() {
  const urlsString = localStorage.getItem("shortenedURLs");
  if (!urlsString) {
    return [];
  }
  const urls = deserializeURLs(urlsString);

  if (urls === null) {
    return [];
  }

  return urls;
}

function storeURLS(urls) {
  localStorage.setItem("shortenedURLs", JSON.stringify(urls));
}

export { deserializeURLs, loadURLs, storeURLS };
