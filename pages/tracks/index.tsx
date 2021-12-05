import stls from '@/styles/pages/tracks/Tracks.module.sass'
import {Main} from "@/components/layouts/Main"
import {Content} from "@/components/layouts/content/Content";
import {useRouter} from "next/router";
import {TrackList} from "@/section/trackList/TrackList";
import {Button} from "@/components/common/button/Button";
import {UseTypedSelector} from "../../helpers/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchTracksThunk} from "../../store/tracks/tracksAction";


const Tracks = () => {
    const router = useRouter()

    const {tracks, error} = UseTypedSelector(state => state.tracks)

    if (error) {
        return (
            <div>
                <h1>{error}</h1>
            </div>
        )
    }

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


export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTracksThunk())
})