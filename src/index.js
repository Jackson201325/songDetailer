import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import reducers from './reducers'

import { createStore } from "redux";
import { Provider } from "react-redux";

export const store = createStore(reducers);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root")
);

