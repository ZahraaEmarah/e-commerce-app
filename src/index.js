import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducers";
import promiseMW from "redux-promise";
import './main.css';

let CreateStoreWithMiddleWare = applyMiddleware(promiseMW)(createStore)

ReactDom.render(<Provider store={CreateStoreWithMiddleWare(rootReducer)}>
  <App />
</Provider>
  , document.querySelector("#root"))