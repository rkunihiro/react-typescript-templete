import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./App";

const container = document.createElement("div");
document.body.appendChild(container);

const element = (
    <>
        <App />
    </>
);
ReactDOM.render(element, container);
