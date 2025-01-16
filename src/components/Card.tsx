import { PropsWithChildren } from "react";

export const Card = ({children}: PropsWithChildren) => {
    return (
        <div className="bg-white border-2 border-blue-500 min-w-[400px] min-h-[150px] flex flex-col wrap">
            {
                children
            }
        </div>
    )
}