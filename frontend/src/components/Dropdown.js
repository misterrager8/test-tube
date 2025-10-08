export default function Dropdown({
  text,
  target,
  icon,
  size = "sm",
  children,
  classNameBtn = "",
  classNameMenu = "",
  className = "",
  showCaret = true,
}) {
  return (
    <div className={className}>
      <a
        data-bs-target={"#" + target}
        data-bs-toggle="dropdown"
        className={
          classNameBtn +
          " btn" +
          (size ? ` btn-${size}` : "") +
          (showCaret ? " dropdown-toggle" : "")
        }>
        {icon && <i className={"me-2 bi bi-" + icon}></i>}
        {text}
      </a>
      <div id={target} className={classNameMenu + " dropdown-menu"}>
        {children}
      </div>
    </div>
  );
}
