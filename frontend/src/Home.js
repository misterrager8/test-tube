import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import Tube from "./components/Tubes/Button";

export default function Home() {
  return (
    <div className="">
      <div className="p-3">
        {/* <div className="between">
          <button><i className="bi bi-"></i> </button>
        </div> */}
        <Tube />
      </div>
    </div>
  );
}
