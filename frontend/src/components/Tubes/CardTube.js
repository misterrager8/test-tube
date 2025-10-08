import { useState } from "react";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";

export default function CardTube({ className = "" }) {
  const [borderRadius, setBorderRadius] = useState(30);
  const onChangeBorderRadius = (e) => setBorderRadius(e.target.value);

  const [padding, setPadding] = useState(45);
  const onChangePadding = (e) => setPadding(e.target.value);

  const [backgroundColor, setBackgroundColor] = useState("#bababa");
  const onChangeBackgroundColor = (e) => setBackgroundColor(e.target.value);

  const [textColor, setTextColor] = useState("#1a1a1a");
  const onChangeTextColor = (e) => setTextColor(e.target.value);

  const [showShadow, setShowShadow] = useState(true);
  const [copied, setCopied] = useState(false);

  const copyStyle = () => {
    navigator.clipboard.writeText(JSON.stringify(style, null, 4));
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const switchColors = () => {
    let color1 = backgroundColor;
    let color2 = textColor;
    setBackgroundColor(color2);
    setTextColor(color1);
  };

  const resetAll = () => {
    setBorderRadius(30);
    setPadding(45);
    setBackgroundColor("#bababa");
    setTextColor("#1a1a1a");
    setShowShadow(true);
  };

  const style = {
    overflowY: "auto",
    width: "450px",
    height: "350px",
    borderRadius: `${borderRadius}px`,
    backgroundColor: backgroundColor,
    color: textColor,
    paddingLeft: `${padding}px`,
    paddingRight: `${padding}px`,
    paddingTop: `${padding}px`,
    paddingBottom: `${padding}px`,
    boxShadow: showShadow ? `0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)` : null,
  };

  return (
    <div className={className + " row m-0"} style={{ height: "90vh" }}>
      <div className="col-4 d-flex">
        <div className="m-auto w-100">
          <div className="my-3">
            <div className="between">
              <div>Padding</div>
              <div className="me-3">{padding} px</div>
            </div>
            <div className="d-flex">
              <input
                max={100}
                min={20}
                onChange={onChangePadding}
                value={padding}
                className="form-range"
                type="range"
              />
            </div>
          </div>

          <div className="my-3">
            <div className="between">
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
          <div className="my-3 between">
            <div className="">
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
              <div>Text Color</div>
              <div className="d-flex">
                <div className="text-uppercase me-3 small my-auto">
                  {textColor}
                </div>
                <input
                  onChange={onChangeTextColor}
                  value={textColor}
                  className="form-control form-control-color"
                  type="color"
                />
              </div>
            </div>
          </div>
          <div className="between">
            <ButtonGroup>
              <Button
                text="Swap Colors"
                icon="arrow-left-right"
                onClick={() => switchColors()}
              />
              <Button
                active={showShadow}
                text="Shadow"
                icon="shadows"
                onClick={() => setShowShadow(!showShadow)}
              />
            </ButtonGroup>

            <Button onClick={() => resetAll()} text="Reset All" />
          </div>
        </div>
      </div>
      <div className="col-4 d-flex">
        <div className="m-auto">
          <div style={style}>
            <div className="h1 mb-3">Card</div>
            <div>
              Proin porttitor purus enim, non gravida urna dapibus tempus. Nam
              imperdiet quam vel feugiat volutpat. Interdum et malesuada fames
              ac ante ipsum primis in faucibus. Cras aliquam bibendum ornare.
              Aenean rhoncus felis ipsum, ac fringilla ligula feugiat id.
              Vestibulum eget nisl sit amet nulla ultricies luctus.
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 d-flex">
        <div className="m-auto">
          <Button
            onClick={() => copyStyle()}
            icon={copied ? "check-lg" : "clipboard"}
            text="Copy"
          />
          <div className="mt-4" style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(style, null, 4)}
          </div>
        </div>
      </div>
    </div>
  );
}
