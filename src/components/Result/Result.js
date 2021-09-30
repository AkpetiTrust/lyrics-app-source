import React from "react";
import style from "./index.module.css";

const Result = ({ song, onResultClick }) => {
  return (
    <div className={style.result}>
      <img
        src={song.result.header_image_thumbnail_url}
        alt={song.result.full_title}
        onClick={() => {
          onResultClick(song);
        }}
      />
    </div>
  );
};

export default Result;
