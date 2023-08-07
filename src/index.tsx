import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from './serviceWorkerRegistration';
import { SWUpdateDialog } from './SWUpdateDialog';

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register({
    onUpdate: registration => {
      if (registration.waiting) {
        ReactDOM.render(<SWUpdateDialog registration={registration} />, document.querySelector('.SW-update-dialog'));
      }
    },
  });
  