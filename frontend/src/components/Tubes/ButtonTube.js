import { useState } from "react";
import Button from "../Button";

export default function ButtonTube({ className = "" }) {
  const [borderRadius, setBorderRadius] = useState(5);
  const onChangeBorderRadius = (e) => setBorderRadius(e.target.value);

  const [borderWidth, setBorderWidth] = useState(0.5);
  const onChangeBorderWidth = (e) => setBorderWidth(e.target.value);

  const [lineHeight, setLineHeight] = useState(1);
  const onChangeLineHeight = (e) => setLineHeight(e.target.value);

  const [horizontalPadding, setHorizontalPadding] = useState(20);
  const onChangeHorizontalPadding = (e) => setHorizontalPadding(e.target.value);

  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const onChangeBackgroundColor = (e) => setBackgroundColor(e.target.value);

  const [textColor, setTextColor] = useState("#4f7bc2");
  const onChangeTextColor = (e) => setTextColor(e.target.value);

  const [hoverBg, setHoverBg] = useState("#4f7bc2");
  const onChangeHoverBg = (e) => setHoverBg(e.target.value);

  const [hoverText, setHoverText] = useState("#c3cfe2");
  const onChangeHoverText = (e) => setHoverText(e.target.value);

  const [borderType, setBorderType] = useState("solid");

  const [letterSpacing, setLetterSpacing] = useState(1);
  const onChangeLetterSpacing = (e) => setLetterSpacing(e.target.value);

  const [fontSize, setFontSize] = useState(0.875);
  const onChangeFontSize = (e) => setFontSize(e.target.value);

  const [capitalize, setCapitalize] = useState(false);
  const [italicized, setItalicized] = useState(false);
  const [bold, setBold] = useState(false);

  const [copied, setCopied] = useState(false);

  const copyStyle = () => {
    navigator.clipboard.writeText(style2);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const resetAll = () => {
    setBorderRadius(5);
    setLineHeight(1);
    setHorizontalPadding(20);
    setBackgroundColor("transparent");
    setTextColor("#4f7bc2");
    setLetterSpacing(1);
    setCapitalize(false);
    setItalicized(false);
    setFontSize(0.875);
    setBorderWidth(0.5);
    setHoverBg("#4f7bc2");
    setHoverText("#c3cfe2");
    setBorderType("solid");
    setBold(false);
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
    fontSize: `${fontSize}rem`,
    borderRadius: `${borderRadius}px`,
    backgroundColor: backgroundColor,
    color: textColor,
    border: `${borderWidth}px ${borderType} ${textColor}`,
    letterSpacing: `${letterSpacing}px`,
    paddingLeft: `${horizontalPadding}px`,
    paddingRight: `${horizontalPadding}px`,
    lineHeight: lineHeight,
    textTransform: capitalize ? "uppercase" : "unset",
    fontStyle: italicized ? "italic" : null,
    fontWeight: bold ? "bold" : null,
  };

  const style2 = `
  /* --btn-color: ${textColor};
  --btn-hover-bg: ${hoverBg};
  --btn-hover-txt: ${hoverText}; */

  .btn {
    font-size: ${fontSize}rem;
    border-radius: ${borderRadius}px;
    background-color: transparent;
    color: var(--btn-color);
    border: ${borderWidth}px ${borderType} var(--btn-color);
    letter-spacing: ${letterSpacing}px;
    padding-left: ${horizontalPadding}px;
    padding-right: ${horizontalPadding}px;
    line-height: ${lineHeight};
    text-transform: ${capitalize ? "uppercase" : "unset"};
    font-style: ${italicized ? "italic" : "unset"};
    font-weight: ${bold ? "bold" : "unset"};
  }

  .btn:hover, .btn.active {
    background-color: var(--btn-hover-bg);
    color: var(--btn-hover-txt);
    border-color: transparent;
  }
  `;

  return (
    <div className={className + " row m-0"} style={{ height: "90vh" }}>
      <div className="col-4 d-flex">
        <div className="m-auto w-100">
          <div className="d-flex mb-4">
            <Button
              onClick={() => setCapitalize(!capitalize)}
              className={"me-1 " + (capitalize ? "active" : "")}
              text="All Caps"
            />
            <Button
              onClick={() => setItalicized(!italicized)}
              className={"me-1 " + (italicized ? " active" : "")}
              text="Italic"
            />
            <Button
              onClick={() => setBold(!bold)}
              className={"me-1 " + (bold ? " active" : "")}
              text="Bold"
            />
          </div>

          <div className="mb-2">
            <div className="between small">
              <div>Font Size</div>
              <div className="me-3">{fontSize} rem</div>
            </div>
            <div className="d-flex">
              <input
                step={0.025}
                max={10}
                min={0.875}
                onChange={onChangeFontSize}
                value={fontSize}
                className="form-range"
                type="range"
              />
            </div>
          </div>

          <div className="my-2">
            <div className="between small">
              <div>Letter Spacing</div>
              <div className="me-3">{letterSpacing} px</div>
            </div>
            <div className="d-flex">
              <input
                max={10}
                min={1}
                step={0.5}
                onChange={onChangeLetterSpacing}
                value={letterSpacing}
                className="form-range"
                type="range"
              />
            </div>
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
              <div>Line Height</div>
              <div className="me-3">{lineHeight}</div>
            </div>
            <div className="d-flex">
              <input
                max={15}
                min={1}
                step={0.5}
                onChange={onChangeLineHeight}
                value={lineHeight}
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
            <div className="row mb-2">
              <div className="col-1"></div>
              <div className="col">
                <div className="px-5 text-custom">Normal</div>
              </div>
              <div className="col">
                <div className="px-5 text-custom">Hover</div>
              </div>
            </div>
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
              <div className="col d-flex">
                <input
                  onChange={onChangeHoverBg}
                  value={hoverBg}
                  className="form-control form-control-sm form-control-color m-2"
                  type="color"
                />
                <div className="my-auto text-uppercase">{hoverBg}</div>
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
              <div className="col d-flex">
                <input
                  onChange={onChangeHoverText}
                  value={hoverText}
                  className="form-control form-control-sm form-control-color m-2"
                  type="color"
                />
                <div className="my-auto text-uppercase">{hoverText}</div>
              </div>
            </div>
          </div>

          <Button onClick={() => resetAll()} text="Reset All" />
        </div>
      </div>
      <div className="col-4 d-flex">
        <div className="m-auto" style={{ zoom: "2" }}>
          <button className="m-1" style={style}>
            Button
          </button>
          <button
            className="m-1"
            style={{
              ...style,
              backgroundColor: hoverBg,
              color: hoverText,
              border: `${borderWidth}px ${borderType} ${backgroundColor}`,
            }}>
            Hover
          </button>
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
