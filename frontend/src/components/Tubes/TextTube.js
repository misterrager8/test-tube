import { useState } from "react";
import Button from "../Button";

export default function TextTube({ className = "" }) {
  const [textColor, setTextColor] = useState("#4f7bc2");
  const onChangeTextColor = (e) => setTextColor(e.target.value);

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
    setTextColor("#4f7bc2");
    setLetterSpacing(1);
    setCapitalize(false);
    setItalicized(false);
    setFontSize(0.875);
    setBold(false);
  };

  const style = {
    fontSize: `${fontSize}rem`,
    color: textColor,
    letterSpacing: `${letterSpacing}px`,
    textTransform: capitalize ? "uppercase" : "unset",
    fontStyle: italicized ? "italic" : null,
    fontWeight: bold ? "bold" : null,
  };

  const style2 = `
  .text-custom {
    font-size: ${fontSize}rem;
    color: ${textColor};
    letter-spacing: ${letterSpacing}px;
    text-transform: ${capitalize ? "uppercase" : "unset"};
    font-style: ${italicized ? "italic" : "unset"};
    font-weight: ${bold ? "bold" : "unset"};
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

          <div className="small my-3">
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
      <div className="col-4 d-flex">
        <div className="m-auto" style={{ zoom: "2" }}>
          <div className="m-1" style={style}>
            Text
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
