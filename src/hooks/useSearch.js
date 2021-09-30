import { useEffect, useState } from "react";

const useSearch = (term, setActiveSong, setExtraResults, setLoadingState) => {
  const [apiKey, setApiKey] = useState(
    "ac46a73f18msh6f5f3b86411baf0p162849jsn3121cc0093e9"
  );

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    };

    fetch(`https://genius.p.rapidapi.com/search?q=${term}`, options)
      .then((response) => response.json())
      .then((result) => {
        const data = result.response.hits;
        setActiveSong(data[0]);
        setExtraResults(
          data.filter((song) => song.result.id !== data[0].result.id)
        );
        setLoadingState(false);
      });
  }, []);

  const refreshFunction = (termParam) => {
    setLoadingState(true);
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    };

    fetch(`https://genius.p.rapidapi.com/search?q=${termParam}`, options)
      .then((response) => response.json())
      .then((result) => {
        const data = result.response.hits;
        setActiveSong(data[0]);
        setExtraResults(
          data.filter((song) => song.result.id !== data[0].result.id)
        );
        setLoadingState(false);
      });
  };

  return { refreshFunction };
};

export default useSearch;
