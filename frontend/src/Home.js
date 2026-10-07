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
import InputTube from "./components/Tubes/InputTube";
import NavTube from "./components/Tubes/NavTube";

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
            <Button border={false} icon="flask" />
            <div className="ms-2">
              <Button
                className="me-1"
                active={multiCtx.tab === "button"}
                onClick={() => multiCtx.setTab("button")}
                text="Button"
              />
              <Button
                className="me-1"
                active={multiCtx.tab === "text"}
                onClick={() => multiCtx.setTab("text")}
                text="Text"
              />
              <Button
                className="me-1"
                active={multiCtx.tab === "input"}
                onClick={() => multiCtx.setTab("input")}
                text="Input"
              />
              <Button
                active={multiCtx.tab === "card"}
                onClick={() => multiCtx.setTab("card")}
                text="Card"
              />
              <Button
                active={multiCtx.tab === "nav"}
                onClick={() => multiCtx.setTab("nav")}
                text="Nav"
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
        {multiCtx.tab === "button" ? (
          <ButtonTube />
        ) : multiCtx.tab === "card" ? (
          <CardTube />
        ) : multiCtx.tab === "input" ? (
          <InputTube />
        ) : multiCtx.tab === "nav" ? (
          <NavTube />
        ) : (
          <TextTube />
        )}
      </div>
    </div>
  );
}
