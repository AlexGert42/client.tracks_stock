import { Player } from "../common/player/Player"


interface TypeFileUpload {
    file: any
    setFile: Function
    accept: string,
    placeholder: string
}


export const FileUpload: React.FC<TypeFileUpload> = ({file, setFile, accept, placeholder, ...props}) => {


    return (
        <>
            <input
                type="file"
                accept={accept}
                {...props}
                onChange={() => setFile}
            />
            <div>{placeholder}</div>

        </>

    )
}