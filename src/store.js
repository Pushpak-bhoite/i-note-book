// npm i redux react-redux

import {createStore} from "redux";

import rootReduer from "./reducers";

const store = createStore (rootReduer);

 export default store ;