import { PropsWithChildren } from "react";

export const Card = ({children}: PropsWithChildren) => {
    return (
        <div className="bg-white shadow-md my-2 sm:min-w-[400px] sm:max-w-[400px] min-h-[150px] flex flex-col wrap lg:hover:scale-105 transition-all">
            {
                children
            }
        </div>
    )
}