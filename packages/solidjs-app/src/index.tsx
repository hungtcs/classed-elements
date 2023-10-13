/* @refresh reload */
import "./index.css";

import { render } from "solid-js/web";
import { App } from "./app";

const root = document.getElementById("root");

render(() => <App />, root!);
