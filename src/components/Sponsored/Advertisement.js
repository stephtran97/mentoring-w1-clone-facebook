import styles from "./Advertisement.module.css";

export default function Advertisement({ adsTitle, adsUrl, adsImageSource }) {
  return (
    <div className="d-flex mb-2 hover rounded-3 p-2">
      <img src={adsImageSource} className={`${styles.adsImage}`}></img>
      <div className="d-flex flex-column justify-content-center ms-2">
        <h6 className={`${styles.adsTitle}`}>{adsTitle}</h6>
        <span className={`${styles.adsUrl}`}>{adsUrl}</span>
      </div>
    </div>
  );
}
