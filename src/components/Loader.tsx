import ClipLoader from "react-spinners/ClipLoader"

export const Loader = ({style}: Props) => {
    return (
        <div className={style}>
            <div className="container flex justify-center">
                <ClipLoader color="#6366f1" size="100px" />
            </div>
        </div>
    )
}

interface Props {
    style?: string
}