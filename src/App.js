import logo from "./logo.svg";
import { useState, useEffect } from "react";
import useSearch from "./hooks/useSearch";
import Main from "./components/Main/Main";

function App() {
  // Todo: Work on skeleton loader
  const [activeSong, setActiveSong] = useState({});
  const [extraResults, setExtraResults] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [term, setTerm] = useState("Wizkid Mood");
  const { refreshFunction } = useSearch(
    term,
    setActiveSong,
    setExtraResults,
    setLoadingState
  );

  const onResultClick = (song) => {
    setExtraResults((prevExtraResults) => {
      prevExtraResults.push(activeSong);
      return prevExtraResults.filter(
        (oldSong) => oldSong.result.id !== song.result.id
      );
    });
    setActiveSong(song);
  };

  useEffect(() => console.log(extraResults, "extra"));

  return (
    <div className="app">
      <main>
        <section className="main-inner">
          <img src={logo} alt="logo" className="logo" />
          <button className="help-button center">?</button>
          <h1 className="title">LYRICS SEARCH</h1>
          <p className="talk">
            Search for your favorite songs and get the lyrics so you stop
            singing rubbish 😙.
          </p>
          <section className="input-container">
            <button className="submit" type="submit">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.44334 1.68333C6.16538 1.68267 6.8714 1.89618 7.47207 2.29685C8.07275 2.69751 8.5411 3.26734 8.81787 3.93423C9.09464 4.60112 9.1674 5.33512 9.02694 6.04337C8.88648 6.75162 8.53912 7.4023 8.02879 7.91309C7.51846 8.42389 6.8681 8.77185 6.15998 8.91295C5.45185 9.05406 4.71779 8.98197 4.05065 8.70581C3.3835 8.42965 2.81325 7.96182 2.41204 7.36151C2.01082 6.7612 1.79667 6.05538 1.79667 5.33333C1.80105 4.36722 2.18655 3.44187 2.86939 2.75841C3.55223 2.07494 4.47723 1.68859 5.44334 1.68333ZM5.44334 1C4.58628 1 3.74848 1.25415 3.03586 1.7303C2.32325 2.20645 1.76784 2.88323 1.43986 3.67504C1.11188 4.46685 1.02606 5.33814 1.19327 6.17872C1.36047 7.01931 1.77318 7.79143 2.37921 8.39746C2.98523 9.00349 3.75736 9.4162 4.59794 9.5834C5.43853 9.7506 6.30982 9.66479 7.10163 9.33681C7.89344 9.00883 8.57022 8.45342 9.04637 7.7408C9.52252 7.02819 9.77667 6.19039 9.77667 5.33333C9.77667 4.18406 9.32012 3.08186 8.50747 2.2692C7.69481 1.45655 6.59261 1 5.44334 1Z"
                  fill="white"
                />
                <path
                  d="M11.6667 11.0967L9.21 8.62332L8.73666 9.09332L11.1933 11.5667C11.2242 11.5977 11.2609 11.6224 11.3013 11.6393C11.3417 11.6562 11.385 11.665 11.4288 11.6652C11.4726 11.6653 11.516 11.6569 11.5565 11.6402C11.5971 11.6236 11.6339 11.5992 11.665 11.5683C11.6961 11.5375 11.7208 11.5008 11.7377 11.4604C11.7546 11.42 11.7634 11.3766 11.7635 11.3328C11.7637 11.289 11.7552 11.2456 11.7386 11.2051C11.722 11.1646 11.6975 11.1277 11.6667 11.0967Z"
                  fill="white"
                />
              </svg>
            </button>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                let searchTerm = e.currentTarget.term.value;
                if (!searchTerm) return;
                refreshFunction(searchTerm);
              }}
            >
              <input type="text" name="term" placeholder="Search" />
            </form>
          </section>
          <Main
            activeSongProp={activeSong}
            extraResults={extraResults}
            loadingProp={loadingState}
            onResultClick={onResultClick}
            key={activeSong?.result?.id}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
