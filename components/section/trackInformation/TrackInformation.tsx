import stls from '@/styles/sections/trackInformation/TrackInformation.module.sass'
import {ITrack} from "@/types/track";


interface TypeTrackInformation {
    track: ITrack
}
export const TrackInformation: React.FC<TypeTrackInformation> = ({track}) => {


    return (
        <div className={stls.container}>
            <div className={stls.image}>
                <img src={track.picture} alt=""/>
            </div>
            <div className={stls.content}>
                <h2 className={stls.text}>{track.name}</h2>
                <p className={stls.text}>{track.artist}</p>
                <p className={stls.text}>{track.text}</p>
                <p className={stls.text}>{track.listens}</p>
                <ul className={stls.comments}>
                    {
                        track.comments.map(item => {
                            return (
                                <li key={item._id}>
                                    <p className={stls.text}>{item.usernmae}</p>
                                    <p className={stls.text}>{item.text}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}