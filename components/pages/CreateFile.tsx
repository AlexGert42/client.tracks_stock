import {FileUpload} from "@/components/file/FileUpload";
import {useState} from "react";
import {Player} from "@/components/common/player/Player";


export const CreateFile = () => {
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)

    return (
        <div>
            <FileUpload
                file={''}
                setFile={setPicture}
                accept={'image/*'}
                placeholder={'add file image'}
            />
            <FileUpload
                file={''}
                setFile={setAudio}
                accept={'image/*'}
                placeholder={'add file image'}
            />
        </div>
    )
}