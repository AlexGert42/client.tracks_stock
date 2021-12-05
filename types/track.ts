import {IComments} from "./comment";


export interface ITrack {
    _id: string
    name: string
    artist: string
    text: string
    listens: number
    picture: string
    audio: string
    comments: IComments[] | []
}


export interface TracksState {
    tracks: ITrack[]
    error: string
}




export enum TrackActionTypes {
    FETCH_TRACKS = 'FETCH_TRACKS',
    FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR',
}

interface FetchTracksAction {
    type: TrackActionTypes.FETCH_TRACKS,
    payload: ITrack[]
}
interface FetchTracksErrorAction {
    type: TrackActionTypes.FETCH_TRACKS_ERROR,
    payload: string
}

export type TracksAction = FetchTracksAction | FetchTracksErrorAction