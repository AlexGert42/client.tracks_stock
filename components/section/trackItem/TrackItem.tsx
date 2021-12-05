import stls from '@/styles/sections/trackItem/TrackItem.module.sass'
import React from 'react'
import {ITrack} from "@/types/track";
import {useRouter} from "next/router";
import {useAction} from "../../../helpers/useAction";


interface TypeTrackItem {
    track: ITrack
    active?: boolean
}

export const TrackItem: React.FC<TypeTrackItem> = ({track, active = false}) => {
    const router = useRouter()
    const clickHandle = () => router.push('/tracks/' + track._id)

    const {playTrack, pauseTrack, setActive} = useAction()


    const play = (e: any) => {
        e.stopPropagation()
        setActive(track)
        playTrack()
    }

    return (
        <li className={stls.container} onDoubleClick={clickHandle}>
            <div className={stls.icon} onDoubleClick={e => e.stopPropagation()} onClick={play}>
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