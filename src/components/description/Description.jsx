import style from "./Description.module.css";

export default function Description() {
  return (
    <>
      <h1 className={style.pageTitle}>Sip Happens Café</h1>
      <p className={style.pageText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
}
