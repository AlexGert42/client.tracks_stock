import stls from '@/styles/common/player/TrackProgress.module.sass'

interface TypeTrackProgress {
    left: number
    right: number
    change: (e: any) => void
}

export const TrackProgress: React.FC<TypeTrackProgress> = ({left, right, change}) => {
    return (
        <div className={stls.container}>
            <input
                className={stls.input}
                type="range"
                max={right}
                min={0}
                value={left}
                onChange={change}
            />
            <div className={stls.progress}>{Math.ceil(left)} | {Math.ceil(right)}</div>
        </div>
    )
}