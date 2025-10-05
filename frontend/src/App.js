import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import Home from "./Home";
import Context from "./Context";

function App() {
  return (
    <Context>
      <Home />
    </Context>
  );
}

export default App;
