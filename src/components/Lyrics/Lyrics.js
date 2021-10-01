import { useState, useEffect } from "react";
import style from "./index.module.css";

const Lyrics = ({ activeSong, lyricsActive, onArrowClick }) => {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");

  const parseResult = (result) => {
    let sliceStart = result.indexOf(`<div class=\\\\\\"rg_embed_body\\\\\\">`);
    let parsedResult = result.slice(sliceStart, result.length);
    let sliceEnd = parsedResult.indexOf("<\\/p>");
    parsedResult = parsedResult.slice(0, sliceEnd) + "</p></div>";
    parsedResult = parsedResult.replace(/\\\\n/g, "");
    parsedResult = parsedResult.replace(/\\/g, "");
    setText(parsedResult);
  };

  useEffect(() => {
    if (!activeSong?.result?.id) return;

    fetch(`https://genius.com/songs/${activeSong.result.id}/embed.js`)
      .then((response) => response.text())
      .then((result) => {
        parseResult(result);
      });
  }, []);

  return (
    <section className={`${style.lyrics} ${lyricsActive ? style.active : ""}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={style.arrow}
        xmlns="http://www.w3.org/2000/svg"
        onClick={onArrowClick}
      >
        <path
          d="M22.5 12.0011H4.71L10.155 5.46166C10.4096 5.15536 10.5321 4.76047 10.4955 4.36387C10.459 3.96727 10.2663 3.60143 9.96 3.34685C9.65368 3.09226 9.25875 2.96978 8.86211 3.00635C8.46548 3.04291 8.09961 3.23553 7.845 3.54183L0.345 12.541C0.294541 12.6126 0.249419 12.6878 0.21 12.766C0.21 12.841 0.21 12.886 0.105 12.961C0.0370105 13.133 0.00141168 13.316 0 13.5009C0.00141168 13.6859 0.0370105 13.8689 0.105 14.0409C0.105 14.1159 0.105 14.1609 0.21 14.2359C0.249419 14.3141 0.294541 14.3893 0.345 14.4609L7.845 23.46C7.98603 23.6294 8.16264 23.7655 8.36227 23.8588C8.5619 23.9522 8.77963 24.0004 9 24C9.35048 24.0007 9.69013 23.8786 9.96 23.655C10.1119 23.5291 10.2374 23.3745 10.3295 23.2C10.4215 23.0255 10.4782 22.8345 10.4963 22.6381C10.5144 22.4416 10.4936 22.2435 10.435 22.0552C10.3765 21.8668 10.2813 21.6918 10.155 21.5402L4.71 15.0008H22.5C22.8978 15.0008 23.2794 14.8428 23.5607 14.5615C23.842 14.2802 24 13.8987 24 13.5009C24 13.1031 23.842 12.7217 23.5607 12.4404C23.2794 12.1591 22.8978 12.0011 22.5 12.0011Z"
          fill="#00FFF0"
        />
      </svg>
      <div dangerouslySetInnerHTML={{ __html: text }}></div>
      <img
        src={activeSong.result.header_image_thumbnail_url}
        alt={activeSong.result.full_title}
      />
    </section>
  );
};

export default Lyrics;
