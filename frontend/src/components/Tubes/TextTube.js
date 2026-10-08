import { createContext, useEffect, useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Input from "../Input";

export const TextContext = createContext();

export default function TextTube({ className = "" }) {
  const [fontSize, setFontSize] = useState(1.5);
  const onChangeFontSize = (e) => setFontSize(e.target.value);

  const [apiKey, setApiKey] = useState(localStorage.getItem("fonts-key") || "");
  const onChangeApiKey = (e) => setApiKey(e.target.value);

  const [fonts, setFonts] = useState([]);
  const [font, setFont] = useState(null);

  const [capitalize, setCapitalize] = useState(false);
  const [italicized, setItalicized] = useState(false);
  const [bold, setBold] = useState(false);

  const [copied, setCopied] = useState(false);

  const getFonts = () => {
    fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=" + apiKey, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setFonts(data.items));
  };

  const copyStyle = () => {
    navigator.clipboard.writeText(style2);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const resetAll = () => {
    setCapitalize(false);
    setItalicized(false);
    setFontSize(1.5);
    setBold(false);
  };

  const style = {
    fontSize: `${fontSize}rem`,
    fontFamily: font?.family,
    textTransform: capitalize ? "uppercase" : "unset",
    fontStyle: italicized ? "italic" : null,
    fontWeight: bold ? "bold" : null,
  };

  const style2 = `
  * {
    font-family: "${font?.family}";
  }

  <link href="https://fonts.googleapis.com/css2?family=${font?.family?.replaceAll(" ", "+")}" rel="stylesheet" />
  `;

  const contextValue = {
    font: font,
    setFont: setFont,
  };

  useEffect(() => {
    apiKey !== "" && getFonts();
  }, []);

  return (
    <TextContext.Provider value={contextValue}>
      <form
        className="my-3 d-flex"
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem("fonts-key", apiKey);
        }}>
        <span className="small my-auto me-2">Google Fonts API Key</span>
        <Input
          className="w-50"
          value={apiKey}
          onChange={onChangeApiKey}
          placeholder="Google Fonts API Key"
        />
      </form>
      <div className={className + " row m-0"} style={{ height: "80vh" }}>
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

            <div className="small my-3">
              <div className="between">
                <Dropdown
                  menuStyle={{
                    height: "300px",
                    overflowY: "auto",
                  }}
                  target="fonts"
                  text={font ? font?.family : "Select Font"}
                  icon="type">
                  {fonts.map((x, idx) => (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => setFont({ ...x, index: idx })}
                      className={
                        "dropdown-item" +
                        (font?.family === x.family ? " active" : "")
                      }>
                      <div>{x.family}</div>
                    </div>
                  ))}
                </Dropdown>
                <Button
                  icon="shuffle"
                  onClick={() => {
                    let randInt = Math.floor(Math.random() * fonts.length);
                    let randomItem = { ...fonts[randInt], index: randInt };
                    setFont(randomItem);
                  }}
                />
              </div>
            </div>

            <Button onClick={() => resetAll()} text="Reset All" />
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex h-75 w-100">
            <div className="m-auto">
              {font ? (
                <>
                  <link
                    rel="stylesheet"
                    href={`https://fonts.googleapis.com/css2?family=${font?.family?.replaceAll(" ", "+")}`}
                  />
                  <div style={style}>
                    <div className="mb-3 text-center">{font?.family}</div>
                    <div style={{ height: "400px", overflowY: "auto" }}>
                      Pellentesque viverra magna porttitor arcu laoreet, vel
                      pharetra lacus vestibulum. Vivamus commodo libero
                      tristique, egestas diam et, gravida orci. Vestibulum sed
                      mollis velit. Mauris consequat vel velit ut aliquam. Etiam
                      aliquet enim et consectetur vestibulum. Nunc faucibus
                      cursus mauris quis dictum. Proin ante turpis, tincidunt
                      nec massa sed, feugiat bibendum lorem. Nullam id enim
                      tincidunt ex finibus vulputate eu in turpis. Morbi
                      faucibus posuere dictum. Vivamus eget nunc pulvinar,
                      pellentesque nisl at, tempus velit. Sed sed lectus non
                      lacus accumsan feugiat. Aenean lacinia ex vel ex eleifend,
                      non commodo ipsum consequat. Nunc porttitor felis egestas
                      lacus faucibus rutrum.
                    </div>
                  </div>
                </>
              ) : (
                <div>Select A Font</div>
              )}
            </div>
          </div>

          <div className="between mt-5">
            <div
              className={
                "d-flex" + (fonts[font?.index - 1] ? "" : " invisible")
              }>
              <Button
                icon="arrow-left"
                onClick={() =>
                  setFont({
                    ...fonts[font?.index - 1],
                    index: font?.index - 1,
                  })
                }
              />
              <span className="my-auto mx-1">
                {fonts[font?.index - 1]?.family}
              </span>
            </div>
            <div
              className={
                "d-flex" + (fonts[font?.index + 1] ? "" : " invisible")
              }>
              <span className="my-auto mx-1">
                {fonts[font?.index + 1]?.family}
              </span>
              <Button
                icon="arrow-right"
                onClick={() =>
                  setFont({
                    ...fonts[font?.index + 1],
                    index: font?.index + 1,
                  })
                }
              />
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
    </TextContext.Provider>
  );
}
