import stls from '@/styles/common/player/Player.module.sass'
import {TrackProgress} from "@/components/common/player/TrackProgress";
import { UseTypedSelector } from 'helpers/useTypedSelector';
import {useAction} from "../../../helpers/useAction";
import {useEffect} from "react";

let audio: any

export const Player = () => {
    const track = {src: 'http://localhost:5000/audio/119f867c-b437-4d25-b4d8-dca7c09039e9.mp3'}
    const {active, pause, duration, volume, currentTime} = UseTypedSelector(state => state.player)
    const {pauseTrack, playTrack} = useAction()

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
            audio.src = track.src
        }
    }, [])

    const play = () => {
        console.log(pause)
        if (pause) {

            audio.play()
            playTrack()
        } else {

            audio.pause()
            pauseTrack()
        }
    }

    return (
        <div className={stls.container}>
            <div onClick={play}>
                {
                    !pause ? <div className={stls.icon}>Play</div> : <div className={stls.icon}>Stop</div>
                }
            </div>
            <TrackProgress left={0} right={100} onChange={() => {}}/>
            <div>
                <span>Sound</span>
                <TrackProgress left={0} right={100} onChange={() => {}}/>
            </div>

        </div>
    )
}