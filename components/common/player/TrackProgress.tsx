import stls from '@/styles/common/player/TrackProgress.module.sass'

interface TypeTrackProgress {
    left: number
    right: number
    onChange: (e: number) => void
}

export const TrackProgress: React.FC<TypeTrackProgress> = ({left, right, onChange}) => {
    return (
        <div className={stls.container}>
            <input
                className={stls.input}
                type="range"
                max={right}
                min={left}
                value={left}
                onChange={() => onChange}
            />
            <div className={stls.progress}>{left} | {right}</div>
        </div>
    )
}