import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./contexts";
import reducer, { initialState } from "./reducers";
import "./index.css";
import App from "./App";

ReactDOM.render(
	<StateProvider reducer={reducer} initialState={initialState}>
		<App />
	</StateProvider>,
	document.getElementById("root")
);
