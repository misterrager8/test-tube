import { useState } from "react";
import Button from "../Button";

export default function InputTube({ className = "" }) {
  const [borderRadius, setBorderRadius] = useState(5);
  const onChangeBorderRadius = (e) => setBorderRadius(e.target.value);

  const [borderWidth, setBorderWidth] = useState(0.5);
  const onChangeBorderWidth = (e) => setBorderWidth(e.target.value);

  const [verticalPadding, setVerticalPadding] = useState(4);
  const onChangeVerticalPadding = (e) => setVerticalPadding(e.target.value);

  const [horizontalPadding, setHorizontalPadding] = useState(23);
  const onChangeHorizontalPadding = (e) => setHorizontalPadding(e.target.value);

  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const onChangeBackgroundColor = (e) => setBackgroundColor(e.target.value);

  const [borderType, setBorderType] = useState("solid");

  const [italicized, setItalicized] = useState(false);

  const [copied, setCopied] = useState(false);

  const copyStyle = () => {
    navigator.clipboard.writeText(style2);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const resetAll = () => {
    setBorderRadius(5);
    setVerticalPadding(4);
    setHorizontalPadding(23);
    setBackgroundColor("transparent");
    setItalicized(false);
    setBorderWidth(0.5);
    setBorderType("solid");
  };

  const borderStyles = [
    "solid",
    "dotted",
    "dashed",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "none",
    "hidden",
  ];

  const style = {
    borderRadius: `${borderRadius}px`,
    backgroundColor: backgroundColor,
    color: "inherit",
    border: `${borderWidth}px ${borderType}`,
    paddingLeft: `${horizontalPadding}px`,
    paddingRight: `${horizontalPadding}px`,
    paddingTop: `${verticalPadding}px`,
    paddingBottom: `${verticalPadding}px`,
    fontStyle: italicized ? "italic" : null,
    fontSize: "0.875rem",
    outline: "none",
  };

  const style2 = `
    /* --secondary-color: ${backgroundColor}; */

  .input {
    outline: none;
    border-radius: ${borderRadius}px;
    background-color: var(--secondary-color); /* ${backgroundColor} */
    color: inherit;
    border: ${borderWidth}px ${borderType} var(--primary-txt);
    padding: ${verticalPadding}px ${horizontalPadding}px;
    font-style: ${italicized ? "italic" : "unset"};
    font-size: 0.875rem;
  }
  `;

  return (
    <div className={className + " row m-0"} style={{ height: "90vh" }}>
      <div className="col-4 d-flex">
        <div className="m-auto w-100">
          <div className="d-flex mb-4">
            <Button
              onClick={() => setItalicized(!italicized)}
              className={"me-1 " + (italicized ? " active" : "")}
              text="Italic"
            />
          </div>

          <div className="my-2">
            <div className="between small">
              <div>Horizontal Padding</div>
              <div className="me-3">{horizontalPadding} px</div>
            </div>
            <div className="d-flex">
              <input
                max={100}
                min={0}
                onChange={onChangeHorizontalPadding}
                value={horizontalPadding}
                className="form-range"
                type="range"
              />
            </div>
          </div>

          <div className="my-2">
            <div className="between small">
              <div>Vertical Padding</div>
              <div className="me-3">{verticalPadding} px</div>
            </div>
            <div className="d-flex">
              <input
                max={15}
                min={1}
                step={0.5}
                onChange={onChangeVerticalPadding}
                value={verticalPadding}
                className="form-range"
                type="range"
              />
            </div>
          </div>

          <div className="my-2">
            <div className="between small">
              <div>Border Radius</div>
              <div className="me-3">{borderRadius} px</div>
            </div>
            <div className="d-flex">
              <input
                max={100}
                min={0}
                onChange={onChangeBorderRadius}
                value={borderRadius}
                className="form-range"
                type="range"
              />
            </div>
          </div>

          <div className="my-2">
            <div className="between small">
              <div>Border Width</div>
              <div className="me-3">{borderWidth} px</div>
            </div>
            <div className="d-flex">
              <input
                step={0.5}
                max={10}
                min={0.5}
                onChange={onChangeBorderWidth}
                value={borderWidth}
                className="form-range"
                type="range"
              />
            </div>
          </div>

          <div className="mb-2" style={{ flexWrap: "wrap" }}>
            {borderStyles.map((x) => (
              <Button
                className="m-1"
                active={x === borderType}
                onClick={() => setBorderType(x)}
                text={x}
              />
            ))}
          </div>

          <div className="small my-3">
            <div className="row">
              <div className="col-1 d-flex">
                <div className="my-auto text-custom">Fill</div>
              </div>
              <div className="col d-flex">
                <input
                  onChange={onChangeBackgroundColor}
                  value={backgroundColor}
                  className="form-control form-control-sm form-control-color m-2"
                  type="color"
                />
                <div className="my-auto text-uppercase">{backgroundColor}</div>
              </div>
            </div>
          </div>

          <Button onClick={() => resetAll()} text="Reset All" />
        </div>
      </div>
      <div className="col-4 d-flex">
        <div className="m-auto">
          <input
            className="w-100 mb-3"
            placeholder="Placeholder"
            autoComplete="off"
            style={style}
          />
          <textarea
            className="w-100"
            rows={20}
            placeholder="Placeholder"
            autoComplete="off"
            style={style}></textarea>
        </div>
      </div>
      <div className="col-4 d-flex">
        <div className="m-auto">
          <div className="between">
            <Button
              onClick={() => copyStyle()}
              icon={copied ? "check-lg" : "copy"}
              text="Copy"
            />
          </div>
          <div
            className="mt-2 font-monospace small"
            style={{ whiteSpace: "pre-wrap" }}>
            {style2}
          </div>
        </div>
      </div>
    </div>
  );
}
