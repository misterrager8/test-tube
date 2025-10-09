import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import { useContext, useEffect, useState } from "react";
import ButtonTube from "./components/Tubes/ButtonTube";
import Button from "./components/Button";
import { MultiContext } from "./Context";
import CardTube from "./components/Tubes/CardTube";
import TextTube from "./components/Tubes/TextTube";

export default function Home() {
  const [theme, setTheme] = useState(
    localStorage.getItem("testtube-theme") || "light"
  );

  const multiCtx = useContext(MultiContext);

  useEffect(() => {
    localStorage.setItem("testtube-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="">
      <div className="p-3">
        <div className="between mb-2">
          <div className="between">
            <Button border={false} icon="beaker" />
            <div className="ms-2">
              <Button
                className="me-1"
                active={multiCtx.tab === "button"}
                onClick={() => multiCtx.setTab("button")}
                text="Button"
              />
              <Button
                active={multiCtx.tab === "text"}
                onClick={() => multiCtx.setTab("text")}
                text="Text"
              />
            </div>
          </div>
          <div>
            <Button
              border={false}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              icon={theme === "light" ? "sun-fill" : "moon-fill"}
            />
          </div>
        </div>
        {multiCtx.tab === "button" ? <ButtonTube /> : <TextTube />}
      </div>
    </div>
  );
}
