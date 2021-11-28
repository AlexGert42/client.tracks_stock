import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {createStore} from "redux";
import {reducer, RootState} from "./store";


const makeStore: MakeStore<any> = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<any>(makeStore, {debug: true});

export const ActionCreaters = {

}