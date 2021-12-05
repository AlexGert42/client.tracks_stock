import stls from '@/styles/common/player/Player.module.sass'
import {TrackProgress} from "@/components/common/player/TrackProgress";
import {UseTypedSelector} from 'helpers/useTypedSelector';
import {useAction} from "../../../helpers/useAction";
import {useEffect} from "react";


let audio: any

export const Player = () => {
    const {active, pause, duration, volume, currentTime} = UseTypedSelector(state => state.player)
    const {pauseTrack, playTrack, setVulame, setCurrent, setDuration, setActive} = useAction()

    useEffect(() => {
        if (!audio) {
           audio = new Audio()
        } else {
            setAudio()
            play()
        }
    }, [active])




    const setAudio = () => {
       if (active) {
           audio = new Audio()
           audio.src = 'http://localhost:5000/' +  active.audio
           audio.volume = volume / 100
           audio.onloadedmetadata = () => {
               setDuration(audio.duration)
           }
           audio.ontimeupdate = () => {
               setCurrent(audio.currentTime)
           }
       }
    }




    const play = () => {
        if (pause) {
            audio.play()
            playTrack()
        } else {
            audio.pause()
            pauseTrack()
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVulame(Number(e.target.value))
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        setCurrent(Number(e.target.value))
    }


    if (!active) {
        return null
    }
    return (
        <div className={stls.container}>
            <div onClick={play}>
                {
                    !pause ? <div className={stls.icon}>Stop</div> : <div className={stls.icon}>Play</div>
                }
            </div>

            <div>
                <strong>{active?.name}</strong>
                <div>{active?.artist}</div>
            </div>

            <TrackProgress left={currentTime} right={duration} change={(e: any) => changeCurrentTime(e)}/>
            <div>
                <span>Sound</span>
                <TrackProgress left={volume} right={100} change={(e: any) => changeVolume(e)}/>
            </div>

        </div>
    )
}