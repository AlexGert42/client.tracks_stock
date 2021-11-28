import stls from '@/styles/common/player/Player.module.sass'
import {TrackProgress} from "@/components/common/player/TrackProgress";

export const Player = () => {
    const active = false

    return (
        <div className={stls.container}>
            <div>
                {
                    active ? <div className={stls.icon}>Play</div> : <div className={stls.icon}>Stop</div>
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