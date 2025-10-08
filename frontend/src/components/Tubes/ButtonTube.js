import { useState } from "react";
import Button from "../Button";

export default function ButtonTube({ className = "" }) {
  const [borderRadius, setBorderRadius] = useState(5);
  const onChangeBorderRadius = (e) => setBorderRadius(e.target.value);

  const [borderWidth, setBorderWidth] = useState(0.5);
  const onChangeBorderWidth = (e) => setBorderWidth(e.target.value);

  const [verticalPadding, setVerticalPadding] = useState(1);
  const onChangeVerticalPadding = (e) => setVerticalPadding(e.target.value);

  const [horizontalPadding, setHorizontalPadding] = useState(20);
  const onChangeHorizontalPadding = (e) => setHorizontalPadding(e.target.value);

  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const onChangeBackgroundColor = (e) => setBackgroundColor(e.target.value);

  const [textColor, setTextColor] = useState("gray");
  const onChangeTextColor = (e) => setTextColor(e.target.value);

  const [hoverBg, setHoverBg] = useState("gray");
  const onChangeHoverColor = (e) => setHoverBg(e.target.value);

  const [hoverText, setHoverText] = useState("#cccccc");
  const onChangeHoverText = (e) => setHoverText(e.target.value);

  const [borderType, setBorderType] = useState("solid");

  const [letterSpacing, setLetterSpacing] = useState(1);
  const onChangeLetterSpacing = (e) => setLetterSpacing(e.target.value);

  const [fontSize, setFontSize] = useState(0.875);
  const onChangeFontSize = (e) => setFontSize(e.target.value);

  const [capitalize, setCapitalize] = useState(false);
  const [italicized, setItalicized] = useState(false);
  const [bold, setBold] = useState(false);

  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyStyle = () => {
    navigator.clipboard.writeText(style2);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const resetAll = () => {
    setBorderRadius(5);
    setVerticalPadding(1);
    setHorizontalPadding(20);
    setBackgroundColor("transparent");
    setTextColor("gray");
    setLetterSpacing(1);
    setCapitalize(false);
    setItalicized(false);
    setFontSize(0.875);
    setBorderWidth(0.5);
    setHoverBg("gray");
    setHoverText("#cccccc");
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
    transition: ".5s background-color",
    fontSize: `${fontSize}rem`,
    borderRadius: `${borderRadius}px`,
    backgroundColor: hovered ? hoverBg : backgroundColor,
    color: hovered ? hoverText : textColor,
    border: `${borderWidth}px ${borderType} ${textColor}`,
    letterSpacing: `${letterSpacing}px`,
    paddingLeft: `${horizontalPadding}px`,
    paddingRight: `${horizontalPadding}px`,
    paddingTop: `${verticalPadding}px`,
    paddingBottom: `${verticalPadding}px`,
    textTransform: capitalize ? "uppercase" : "unset",
    fontStyle: italicized ? "italic" : null,
    fontWeight: bold ? "bold" : null,
  };

  const style2 = `
  .btn {
    transition: .5s background-color;
    font-size: ${fontSize}rem;
    border-radius: ${borderRadius}px;
    background-color: ${backgroundColor};
    color: ${textColor};
    border: ${borderWidth}px ${borderType} ${textColor};
    letter-spacing: ${letterSpacing}px;
    padding-left: ${horizontalPadding}px;
    padding-right: ${horizontalPadding}px;
    padding-top: ${verticalPadding}px;
    padding-bottom: ${verticalPadding}px;
    text-transform: ${capitalize ? "uppercase" : "unset"};
    font-style: ${italicized ? "italic" : "unset"};
    font-weight: ${bold ? "bold" : "unset"};
  }

  .btn:hover, .btn.active {
    background-color: ${hoverBg};
    color: ${hoverText};
  }
  `;

  return (
    <div className={className + " row m-0"} style={{ height: "90vh" }}>
      <div className="col-4 d-flex">
        <div className="m-auto w-100">
          <div className="btn-group">
            <Button
              onClick={() => setCapitalize(!capitalize)}
              className={capitalize ? "active" : ""}
              text="All Caps"
            />
            <Button
              onClick={() => setItalicized(!italicized)}
              className={italicized ? " active" : ""}
              text="Italic"
            />
            <Button
              onClick={() => setBold(!bold)}
              className={bold ? " active" : ""}
              text="Bold"
            />
          </div>

          <div className="my-3">
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

          <div className="my-3">
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

          <div className="my-3">
            <div className="between small">
              <div>Horizontal Padding</div>
              <div className="me-3">{horizontalPadding} px</div>
            </div>
            <div className="d-flex">
              <input
                max={100}
                min={20}
                onChange={onChangeHorizontalPadding}
                value={horizontalPadding}
                className="form-range"
                type="range"
              />
            </div>
          </div>

          <div className="my-3">
            <div className="between small">
              <div>Vertical Padding</div>
              <div className="me-3">{verticalPadding} px</div>
            </div>
            <div className="d-flex">
              <input
                max={15}
                min={1}
                onChange={onChangeVerticalPadding}
                value={verticalPadding}
                className="form-range"
                type="range"
              />
            </div>
          </div>

          <div className="my-3">
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

          <div className="my-3">
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

          <div className="between">
            <div className="small mb-2 p-2">
              <div>Normal</div>
              <div className="between my-2">
                <div className="my-auto">BG</div>
                <div className="d-flex">
                  <div className="text-uppercase me-3 small my-auto">
                    {backgroundColor}
                  </div>
                  <input
                    onChange={onChangeBackgroundColor}
                    value={backgroundColor}
                    className="form-control form-control-sm form-control-color"
                    type="color"
                  />
                </div>
              </div>

              <div className="between my-2">
                <div className="my-auto">Text</div>
                <div className="d-flex">
                  <div className="text-uppercase me-3 small my-auto">
                    {textColor}
                  </div>
                  <input
                    onChange={onChangeTextColor}
                    value={textColor}
                    className="form-control form-control-sm form-control-color"
                    type="color"
                  />
                </div>
              </div>
            </div>
            <div className="small mb-2 p-2">
              <div>Hover </div>
              <div className="between my-2">
                <div className="d-flex">
                  <div className="text-uppercase me-3 small my-auto">
                    {backgroundColor}
                  </div>
                  <input
                    onChange={onChangeHoverColor}
                    value={hoverBg}
                    className="form-control form-control-sm form-control-color"
                    type="color"
                  />
                </div>
              </div>
              <div className="between my-2">
                <div className="d-flex">
                  <div className="text-uppercase me-3 small my-auto">
                    {hoverText}
                  </div>
                  <input
                    onChange={onChangeHoverText}
                    value={hoverText}
                    className="form-control form-control-sm form-control-color"
                    type="color"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button onClick={() => resetAll()} text="Reset All" />
        </div>
      </div>
      <div className="col-4 d-flex">
        <div className="m-auto">
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={style}>
            Button
          </button>
        </div>
      </div>
      <div className="col-4 d-flex">
        <div className="m-auto">
          <div className="between">
            <Button
              onClick={() => copyStyle()}
              icon={copied ? "check-lg" : "clipboard"}
              text="Copy"
            />
          </div>
          <div
            className="mt-4 font-monospace small"
            style={{ whiteSpace: "pre-wrap" }}>
            {style2}
          </div>
        </div>
      </div>
    </div>
  );
}
