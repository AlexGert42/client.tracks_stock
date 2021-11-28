import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {createStore} from "redux";
import {reducer, RootState} from "./store";
import {pauseTrack, playTrack, setActive, setCurrent, setDuration, setVulame} from "./player/playerActions";


const makeStore: MakeStore<any> = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<any>(makeStore, {debug: true});


//import actions
export const ActionCreaters = {
    playTrack,
    pauseTrack,
    setDuration,
    setVulame,
    setCurrent,
    setActive
}