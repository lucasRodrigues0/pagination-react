import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="h-[50px] w-full bg-indigo-500 flex items-center justify-center">
            <div className="container flex border border-red-700 h-full justify-center">
                <Link to={'/'} className="border border-red-500 flex items-center px-8 text-xl text-white w-[150px] justify-center">
                        Pagination
                </Link>
                <Link to={'/lazy'} className="border border-red-500 flex items-center px-8 text-xl text-white w-[150px] justify-center">
                        Infinite
                </Link>
            </div>
        </div>
    )
}