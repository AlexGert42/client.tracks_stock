import {Dispatch} from "redux";
import {ITrack, TrackActionTypes, TracksAction} from "@/types/track";
import {apiTracks} from "../../apiAxios/apiTracks";


export const fetchTracksThunk = () => async (dispatch: Dispatch<TracksAction>) => {
    try {
        const responce = await apiTracks.getTracks()
        console.log(responce)
        dispatch(setTracks(responce.data))
    } catch (error) {
        dispatch(setErrorTracks(error.message))
    }
}



const setTracks = (tracks: ITrack[]) => ({
    type: TrackActionTypes.FETCH_TRACKS,
    payload: tracks
})

const setErrorTracks = (error: string) => ({
    type: TrackActionTypes.FETCH_TRACKS_ERROR,
    payload: error
})

