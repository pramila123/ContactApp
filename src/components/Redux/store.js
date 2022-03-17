import { createStore,combineReducers } from "redux";
import { addContact } from "./ContactReducer";
const root=combineReducers(
    {
        addContact,
    }
)
const store=createStore(root)
export default store