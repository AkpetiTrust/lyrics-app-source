import React from "react";
import style from "./index.module.css";

const Skeleton = () => {
  return (
    <section className={style.skeleton}>
      <div className={style.image}></div>
      <div className={style.info}>
        <div className={style.text}></div>
        <div className={style.text}></div>
        <div className={style.text}></div>
      </div>
    </section>
  );
};

export default Skeleton;
