import stls from '@/styles/sections/trackItem/TrackItem.module.sass'
import React from 'react'
import {ITrack} from "@/types/track";
import {useRouter} from "next/router";


interface TypeTrackItem {
    track: ITrack
    active?: boolean
}

export const TrackItem: React.FC<TypeTrackItem> = ({track, active = false}) => {
    const router = useRouter()

    const clickHandle = () => router.push('/tracks/' + track._id)

    return (
        <li className={stls.container} onDoubleClick={clickHandle}>
            <div className={stls.icon} onDoubleClick={e => e.stopPropagation()}>
                {
                    active ? 'Stop' : 'Play'
                }
            </div>
            <div className={stls.content}>
                <div className={stls.title}>{track.name}</div>
                <div className={stls.subtitle}>{track.artist}</div>
            </div>
        </li>
    )
}