import {PlayerActionType, PlayerState, TypePlayerActions} from "@/types/player"



const initialState: PlayerState = {
    active: null,
    volume: 0,
    duration: 0,
    currentTime: 0,
    pause: false
}

export const playerReducer = (state = initialState, action: TypePlayerActions): PlayerState => {

    switch (action.type) {
        case PlayerActionType.PLAY:
            return {
                ...state,
                pause: false
            }
        case PlayerActionType.PAUSE:
            return {
                ...state,
                pause: true
            }
        case PlayerActionType.SET_CURRENT_TIME:
            return {
                ...state,
                currentTime: action.payload
            }
        case PlayerActionType.SET_VOLUME:
            return {
                ...state,
                volume: action.payload
            }
        case PlayerActionType.SET_DURATION:
            return {
                ...state,
                duration: action.payload
            }
        case PlayerActionType.SET_ACTIVE:
            return {
                ...state,
                active: action.payload,
                duration: 0,
                currentTime: 0
            }
        default:
            return state
    }
}