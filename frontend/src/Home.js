import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import { useContext, useEffect, useState } from "react";
import ButtonTube from "./components/Tubes/ButtonTube";
import Button from "./components/Button";
import { MultiContext } from "./Context";
import CardTube from "./components/Tubes/CardTube";

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
        <div className="between">
          <div className="between">
            <Button border={false} icon="beaker" />
            <div className="ms-2">
              <Button
                active={multiCtx.tab === "button"}
                border={false}
                onClick={() => multiCtx.setTab("button")}
                text="Button"
              />
              <Button
                active={multiCtx.tab === "card"}
                border={false}
                onClick={() => multiCtx.setTab("card")}
                text="Card"
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
        {multiCtx.tab === "button" ? <ButtonTube /> : <CardTube />}
      </div>
    </div>
  );
}
