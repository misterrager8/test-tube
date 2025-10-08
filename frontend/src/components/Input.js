export default function Input({
  value,
  onChange,
  placeholder,
  type_ = "text",
  className = "",
  size = "sm",
  border = true,
  required = false,
}) {
  return (
    <input
      required={required}
      autoComplete="off"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type_}
      className={
        className +
        " form-control" +
        (size ? ` form-control-${size}` : "") +
        (border ? "" : " border-0")
      }
    />
  );
}
