import ClipLoader from "react-spinners/ClipLoader"

export const Loader = () => {
    return (
        <div className="w-full h-screen flex flex-row justify-center items-center">
            <div className="container flex justify-center">
                <ClipLoader color="#6366f1" size="100px" />
            </div>
        </div>
    )
}