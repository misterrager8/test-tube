import { useState } from "react";

export default function Button({ className = "" }) {
  const [borderRadius, setBorderRadius] = useState(5);
  const onChangeBorderRadius = (e) => setBorderRadius(e.target.value);

  const [verticalPadding, setVerticalPadding] = useState(1);
  const onChangeVerticalPadding = (e) => setVerticalPadding(e.target.value);

  const [horizontalPadding, setHorizontalPadding] = useState(20);
  const onChangeHorizontalPadding = (e) => setHorizontalPadding(e.target.value);

  const [backgroundColor, setBackgroundColor] = useState("#cccccc");
  const onChangeBackgroundColor = (e) => setBackgroundColor(e.target.value);

  const [textColor, setTextColor] = useState("#1a1a1a");
  const onChangeTextColor = (e) => setTextColor(e.target.value);

  const [letterSpacing, setLetterSpacing] = useState(1);
  const onChangeLetterSpacing = (e) => setLetterSpacing(e.target.value);

  const [capitalize, setCapitalize] = useState(false);

  return (
    <div className={className + " w-100 d-flex"} style={{ height: "60vh" }}>
      <div className="m-auto w-75 h-75">
        <div className="p-5">
          <button
            style={{
              fontSize: "small",
              borderRadius: `${borderRadius}px`,
              backgroundColor: backgroundColor,
              color: textColor,
              border: `.5px solid ${textColor}`,
              letterSpacing: `${letterSpacing}px`,
              paddingLeft: `${horizontalPadding}px`,
              paddingRight: `${horizontalPadding}px`,
              paddingTop: `${verticalPadding}px`,
              paddingBottom: `${verticalPadding}px`,
              textTransform: capitalize ? "uppercase" : "unset",
            }}>
            Button
          </button>
        </div>

        <button
          onClick={() => setCapitalize(!capitalize)}
          className={"btn btn-sm" + (capitalize ? " active" : "")}>
          All Caps
        </button>

        <div className="my-3">
          <div>Letter Spacing</div>
          <div className="d-flex">
            <div className="me-3">{letterSpacing} px</div>
            <input
              max={10}
              min={1}
              onChange={onChangeLetterSpacing}
              value={letterSpacing}
              className="form-range w-50"
              type="range"
            />
          </div>
        </div>

        <div className="my-3">
          <div>Horizontal Padding</div>
          <div className="d-flex">
            <div className="me-3">{horizontalPadding} px</div>
            <input
              max={100}
              min={20}
              onChange={onChangeHorizontalPadding}
              value={horizontalPadding}
              className="form-range w-50"
              type="range"
            />
          </div>
        </div>

        <div className="my-3">
          <div>Vertical Padding</div>
          <div className="d-flex">
            <div className="me-3">{verticalPadding} px</div>
            <input
              max={100}
              min={1}
              onChange={onChangeVerticalPadding}
              value={verticalPadding}
              className="form-range w-50"
              type="range"
            />
          </div>
        </div>

        <div className="my-3">
          <div>Border Radius</div>
          <div className="d-flex">
            <div className="me-3">{borderRadius} px</div>
            <input
              max={10}
              min={0}
              onChange={onChangeBorderRadius}
              value={borderRadius}
              className="form-range w-50"
              type="range"
            />
          </div>
        </div>

        <div className="my-3">
          <div>Background Color</div>
          <div className="d-flex">
            <div className="text-uppercase me-3 small my-auto">
              {backgroundColor}
            </div>
            <input
              onChange={onChangeBackgroundColor}
              value={backgroundColor}
              className="form-control form-control-color"
              type="color"
            />
          </div>
        </div>

        <div>
          <div>Text + Border Color</div>
          <div className="d-flex">
            <div className="text-uppercase me-3 small my-auto">{textColor}</div>
            <input
              onChange={onChangeTextColor}
              value={textColor}
              className="form-control form-control-color"
              type="color"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
