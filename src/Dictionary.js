import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001000dec39151f4e2ebb3db4fb3741fb3a";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          placeholder="Search..."
          className="inputKeyword"
          type="search"
          onChange={handleKeyword}
        />
        <input type="submit" className="ok" value="Ok" />
      </form>

      <Results results={results} photos={photos} />
    </div>
  );
}
