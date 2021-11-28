import stls from '@/styles/pages/tracks/Tracks.module.sass'
import {Main} from "@/components/layouts/Main"
import {Content} from "@/components/layouts/content/Content";
import {useRouter} from "next/router";
import {ITrack} from "@/types/track";
import {TrackList} from "@/section/trackList/TrackList";
import {Button} from "@/components/common/button/Button";
import {UseTypedSelector} from "../../helpers/useTypedSelector";


const Tracks = () => {
    const router = useRouter()

    const {} = UseTypedSelector(state => state.player)

    const tracks: ITrack[] | [] = [
        {
            _id: "619a6c5dcbefbd7354f564b9888",
            comments: [],
            audio: "audio/38cecc4b-abd8-4561-9195-f48e523fadd1.mp3",
            picture: "image/ce977bc5-48cf-46ab-9094-e3acd76d1f95.jpg",
            listens: 3,
            text: "test2",
            artist: "test2",
            name: "test2",
        },
        {
            _id: "619a6c5dcbefbd7354f564b9777",
            comments: [],
            audio: "audio/38cecc4b-abd8-4561-9195-f48e523fadd1.mp3",
            picture: "image/ce977bc5-48cf-46ab-9094-e3acd76d1f95.jpg",
            listens: 3,
            text: "test2",
            artist: "test2",
            name: "test3",
        },
        {
            _id: "619a6c5dcbefbd7354f564b966",
            comments: [],
            audio: "audio/38cecc4b-abd8-4561-9195-f48e523fadd1.mp3",
            picture: "image/ce977bc5-48cf-46ab-9094-e3acd76d1f95.jpg",
            listens: 3,
            text: "test2",
            artist: "test2",
            name: "test4",
        }
    ]

    return (
        <Main>
            <Content>
                <div className={stls.content}>
                    <div className={stls.add_track}>
                        <Button onClick={() => router.push('/tracks/create')}>Dowload Tracks</Button>
                    </div>
                    <div className={stls.list}>
                        <TrackList tracks={tracks}/>
                    </div>
                </div>
                <div className={stls.information}>
                    information
                </div>
            </Content>
        </Main>
    )
}


export default Tracks