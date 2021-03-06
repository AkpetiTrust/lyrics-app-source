import style from "./index.module.css";
import emailjs from "emailjs-com";

const Form = ({ formActive, setFormActive }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    emailjs
      .sendForm(
        "service_bukbqtm",
        "lyrics_form",
        form,
        "user_0NnjmDdRD3GunYYUXZyax"
      )
      .then(
        (result) => {
          //   console.log(result.text);
        },
        (error) => {
          //   console.log(error.text);
        }
      );

    form.reset();
    setFormActive(false);
  };

  return (
    <form
      className={`${style.form} ${formActive ? style.active : ""}`}
      onSubmit={handleSubmit}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        className={style.close}
        onClick={() => setFormActive(false)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0575 8.99999L13.2825 5.78249C13.4237 5.64126 13.503 5.44971 13.503 5.24999C13.503 5.05026 13.4237 4.85871 13.2825 4.71749C13.1412 4.57626 12.9497 4.49692 12.75 4.49692C12.5502 4.49692 12.3587 4.57626 12.2175 4.71749L8.99995 7.94249L5.78245 4.71749C5.64123 4.57626 5.44968 4.49692 5.24995 4.49692C5.05023 4.49692 4.85868 4.57626 4.71745 4.71749C4.57623 4.85871 4.49689 5.05026 4.49689 5.24999C4.49689 5.44971 4.57623 5.64126 4.71745 5.78249L7.94245 8.99999L4.71745 12.2175C4.64716 12.2872 4.59136 12.3702 4.55329 12.4616C4.51521 12.5529 4.49561 12.651 4.49561 12.75C4.49561 12.849 4.51521 12.947 4.55329 13.0384C4.59136 13.1298 4.64716 13.2128 4.71745 13.2825C4.78718 13.3528 4.87013 13.4086 4.96152 13.4467C5.05292 13.4847 5.15095 13.5043 5.24995 13.5043C5.34896 13.5043 5.44699 13.4847 5.53839 13.4467C5.62978 13.4086 5.71273 13.3528 5.78245 13.2825L8.99995 10.0575L12.2175 13.2825C12.2872 13.3528 12.3701 13.4086 12.4615 13.4467C12.5529 13.4847 12.6509 13.5043 12.75 13.5043C12.849 13.5043 12.947 13.4847 13.0384 13.4467C13.1298 13.4086 13.2127 13.3528 13.2825 13.2825C13.3527 13.2128 13.4085 13.1298 13.4466 13.0384C13.4847 12.947 13.5043 12.849 13.5043 12.75C13.5043 12.651 13.4847 12.5529 13.4466 12.4616C13.4085 12.3702 13.3527 12.2872 13.2825 12.2175L10.0575 8.99999Z"
          fill="#FF0101"
        />
      </svg>

      <p className={style.title}>NEED HELP?</p>
      <p>Send a message to contact me.</p>
      <textarea name="message"></textarea>
      <button type="submit">SUBMIT</button>
      <p>
        Designed by{" "}
        <a href="https://trust-akpeti.com" target="_blank" rel="noreferrer">
          Akpeti Trust
        </a>
      </p>
    </form>
  );
};

export default Form;
