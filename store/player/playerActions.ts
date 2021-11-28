import {PlayerActionType, TypePlayerActions} from "@/types/player";
import {ITrack} from "@/types/track";


export const playTrack = (): TypePlayerActions => ({
    type: PlayerActionType.PLAY
})

export const pauseTrack = (): TypePlayerActions => ({
    type: PlayerActionType.PAUSE
})

export const setDuration = (payload: number): TypePlayerActions => ({
    type: PlayerActionType.SET_DURATION,
    payload
})

export const setVulame = (payload: number): TypePlayerActions => ({
    type: PlayerActionType.SET_VOLUME,
    payload
})

export const setCurrent = (payload: number): TypePlayerActions => ({
    type: PlayerActionType.SET_CURRENT_TIME,
    payload
})

export const setActive = (payload: ITrack): TypePlayerActions => ({
    type: PlayerActionType.SET_ACTIVE,
    payload
})