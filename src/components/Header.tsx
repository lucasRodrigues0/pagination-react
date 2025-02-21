import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="h-[50px] w-full bg-indigo-500 flex items-center justify-center">
            <div className="container flex h-full justify-center">
                <Link to={'/'} className="flex items-center justify-center px-8 text-xl text-white w-full sm:w-[150px] md:hover:bg-indigo-700 transition-all">
                        Pagination
                </Link>
                <Link to={'/lazy'} className="flex items-center justify-center px-8 text-xl text-white w-full sm:w-[150px] md:hover:bg-indigo-700 transition-all">
                        Infinite
                </Link>
            </div>
        </div>
    )
}