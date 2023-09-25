import styles from "./Avatar.module.css";

export default function Avatar({
  username,
  src,
  size,
  active,
  className,
  online,
  border,
}) {
  const borderProp = border === "" ? "2px" : `${border}`;
  const activeBorder = active ? `${borderProp} solid #339af0` : "0px";
  return (
    <div className="d-flex">
      <img
        key={username}
        src={src}
        alt={`${username}'s avatar`}
        style={{
          width: `${size}`,
          height: `${size}`,
          borderRadius: "50%",
          border: `${activeBorder}`,
        }}
        className={className}
      ></img>
      {online === true ? <div className={styles.onlineSign}></div> : ""}
    </div>
  );
}
