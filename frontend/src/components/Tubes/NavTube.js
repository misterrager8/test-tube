import { useState } from "react";
import Button from "../Button";

export default function NavTube({ className = "" }) {
  const [borderWidth, setBorderWidth] = useState(0.5);
  const onChangeBorderWidth = (e) => setBorderWidth(e.target.value);

  const [horizontalPadding, setHorizontalPadding] = useState(20);
  const onChangeHorizontalPadding = (e) => setHorizontalPadding(e.target.value);

  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const onChangeBackgroundColor = (e) => setBackgroundColor(e.target.value);

  const [textColor, setTextColor] = useState("#4f7bc2");
  const onChangeTextColor = (e) => setTextColor(e.target.value);

  const [height, setHeight] = useState(35);
  const onChangeHeight = (e) => setHeight(e.target.value);

  const [borderType, setBorderType] = useState("solid");
  const [orientation, setOrientation] = useState("horizontal");

  const [borderBottom, setBorderBottom] = useState(true);

  const [copied, setCopied] = useState(false);

  const copyStyle = () => {
    navigator.clipboard.writeText(style2);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const resetAll = () => {
    setHorizontalPadding(20);
    setBackgroundColor("transparent");
    setTextColor("#4f7bc2");
    setBorderWidth(0.5);
    setBorderType("solid");
    setHeight(35);
    setOrientation("horizontal");

    setBorderBottom(true);
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
  ];

  const style = {
    backgroundColor: backgroundColor,
    color: textColor,
    height: orientation === "horizontal" ? `${height}px` : "100%",
    borderBottom:
      borderBottom && orientation === "horizontal"
        ? `${borderWidth}px ${borderType} ${textColor}`
        : "none",
    borderRight:
      borderBottom && orientation === "vertical"
        ? `${borderWidth}px ${borderType} ${textColor}`
        : "none",
    paddingLeft: `${horizontalPadding}px`,
    paddingRight: `${horizontalPadding}px`,
    zIndex: 3,
    position: "absolute",
    top: 0,
    left: orientation === "horizontal" ? "unset" : 0,
    width: orientation === "horizontal" ? "100%" : "80px",
    padding: orientation === "horizontal" ? null : "10px",
    display: orientation === "horizontal" ? "flex" : "unset",
  };

  const style2 = `
  .nav-custom {
    background-color: transparent;
    color: var(--btn-color);
    border-bottom: ${
      borderBottom ? `${borderWidth}px ${borderType} var(--btn-color)` : "none"
    };
    padding-left: ${horizontalPadding}px;
    padding-right: ${horizontalPadding}px;
    height: ${height}px;
    z-index: 3;
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
  }
  `;

  return (
    <div className={className + " row m-0"} style={{ height: "90vh" }}>
      <div className="col-4 d-flex">
        <div className="m-auto w-100">
          <duv>
            <Button
              onClick={() => setOrientation("horizontal")}
              text="Horizontal"
              active={orientation === "horizontal"}
              icon="arrows"
            />
            <Button
              onClick={() => setOrientation("vertical")}
              text="Vertical"
              active={orientation === "vertical"}
              icon="arrows-vertical"
            />
          </duv>

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

          <div className="my-2">
            <div className="between small">
              <div>Height</div>
              <div className="me-3">{height} px</div>
            </div>
            <div className="d-flex">
              <input
                max={100}
                min={20}
                onChange={onChangeHeight}
                value={height}
                className="form-range"
                type="range"
              />
            </div>
          </div>

          <div className="mb-2">
            <Button
              className="m-1"
              active={borderBottom}
              onClick={() => setBorderBottom(!borderBottom)}
              text="Bottom"
            />
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
            <div className="row">
              <div className="col-1 d-flex">
                <div className="my-auto text-custom">Font</div>
              </div>
              <div className="col d-flex">
                <input
                  onChange={onChangeTextColor}
                  value={textColor}
                  className="form-control form-control-sm form-control-color m-2"
                  type="color"
                />
                <div className="my-auto text-uppercase">{textColor}</div>
              </div>
            </div>
          </div>

          <Button onClick={() => resetAll()} text="Reset All" />
        </div>
      </div>
      <div
        className="col-4 p-0"
        style={{
          position: "relative",
          border: `.5px dashed gray`,
          borderRadius: "5px",
        }}>
        <div style={style}>
          <div
            className={
              orientation === "horizontal" ? "my-auto between w-100" : ""
            }>
            <div className="">
              <Button
                className={orientation === "horizontal" ? "" : "w-100 mb-3"}
                icon="circle"
                border={false}
              />
            </div>
            <div>
              <Button
                className={orientation === "horizontal" ? "" : "w-100 mb-3"}
                icon="person-fill"
                border={false}
              />
              <Button
                className={orientation === "horizontal" ? "" : "w-100 mb-3"}
                icon="info-circle"
                border={false}
              />
              <Button
                className={orientation === "horizontal" ? "" : "w-100 mb-3"}
                icon="gear"
                border={false}
              />
              <Button
                className={orientation === "horizontal" ? "" : "w-100 mb-3"}
                icon="paint-bucket"
                border={false}
              />
            </div>
          </div>
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
