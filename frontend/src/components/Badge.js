export default function Badge({ text, icon, className = "" }) {
  return (
    <span className={className + " badge"}>
      {icon && <i className={"me-1 bi bi-" + icon}></i>}
      {text}
    </span>
  );
}
