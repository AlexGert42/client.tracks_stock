import stls from '@/styles/sections/trackList/TrackList.module.sass'
import React from 'react'
import {ITrack} from "@/types/track";
import {TrackItem} from '@/section/trackItem/TrackItem';


interface TypeTrackList {
    tracks: ITrack[]
}


export const TrackList: React.FC<TypeTrackList> = ({tracks}) => {


    return (
        <div className={stls.container}>
            <h3 className={stls.title}>Track List</h3>
            <ul className={stls.list}>
                {
                    tracks.map(traskItem => {
                        return (
                            <TrackItem
                                key={traskItem._id}
                                track={traskItem}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}