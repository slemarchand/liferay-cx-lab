
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./App";
import "./index.css";

class WebComponent extends HTMLElement {
	connectedCallback() {
		this.root = createRoot(this);

		this.root.render(<App />, this);
	}

	disconnectedCallback() {

		//
		// Unmount React tree to prevent memory leaks.
		//
		// See React documentation at
		//
		//     https://react.dev/reference/react-dom/client/createRoot#root-unmount
		//
		// for more information.
		//

		this.root.unmount();
		delete this.root;
	}
}

const ELEMENT_ID = 'cx-react-emoji-search';

if (!customElements.get(ELEMENT_ID)) {
	customElements.define(ELEMENT_ID, WebComponent);
}
