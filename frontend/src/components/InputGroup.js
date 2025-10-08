export default function InputGroup({ children, size = "sm", className = "" }) {
  return (
    <div
      className={
        className + " input-group" + (size ? ` input-group-${size}` : "")
      }>
      {children}
    </div>
  );
}
