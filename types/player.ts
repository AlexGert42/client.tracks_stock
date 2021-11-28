import {ITrack} from "@/types/track";


export interface PlayerState {
    active: null | ITrack
    volume: number
    duration: number
    currentTime: number
    pause: boolean
}

export enum PlayerActionType {
    PLAY = 'PLAY',
    PAUSE = 'PAUSE',
    SET_ACTIVE = 'SET_ACTIVE',
    SET_DURATION = 'SET_DURATION',
    SET_CURRENT_TIME = 'SET_CURRENT_TIME',
    SET_VOLUME = 'SET_VOLUME'
}



interface setPlayerAction {
    type: PlayerActionType.PLAY
}

interface setPauseAction {
    type: PlayerActionType.PAUSE
}

interface setActiveAction {
    type: PlayerActionType.SET_ACTIVE
    payload: ITrack
}

interface setDurationAction {
    type: PlayerActionType.SET_DURATION
    payload: number
}

interface setCurrentAction {
    type: PlayerActionType.SET_CURRENT_TIME
    payload: number
}

interface setVolumeAction {
    type: PlayerActionType.SET_VOLUME
    payload: number
}

export type TypePlayerActions = setPlayerAction | setPauseAction | setActiveAction | setDurationAction | setCurrentAction | setVolumeAction
