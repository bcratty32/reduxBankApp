import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
    username: "Brando",
    balance: 100000000
}
const store = createStore(reducer, initialState);

export default store;