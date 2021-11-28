import {Main} from "@/components/layouts/Main"
import {Content} from "@/components/layouts/content/Content";
import {Button} from "@/components/common/button/Button";
import {useRouter} from "next/router";
import { TrackInformation } from "@/components/section/trackInformation/TrackInformation";


const TrackPage = () => {
    const t = {
        _id: "619a6c5dcbefbd7354f564b9888",
        comments: [],
        audio: "audio/38cecc4b-abd8-4561-9195-f48e523fadd1.mp3",
        picture: "http://upload.wikimedia.org/wikipedia/en/9/98/Cover_lifad.jpg",
        listens: 3,
        text: "test2",
        artist: "artist",
        name: "ich will",
    }

    const router = useRouter()

    const clickHandler = () => {
        router.push('/tracks')
    }

    return (
        <Main>
            <Content row={false}>
                <div>
                    <Button onClick={clickHandler}>Back To List</Button>
                </div>
                <div>
                    <TrackInformation track={t}/>
                </div>
            </Content>
        </Main>
    )
}

export default TrackPage