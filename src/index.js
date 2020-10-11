import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./contexts";
import reducer, { initialState } from "./reducers";
import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<StateProvider reducer={reducer} initialState={initialState}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
