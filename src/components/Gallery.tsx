import { useEffect } from "react"
import { getAll } from "../service/service"

export const Gallery = () => {

    useEffect(() => {
        getAll().then(data => console.log(data?.data));
    }, [])

    return (
        <section className="flex justify-center w-full">
            <div className="container">
                <h1 className="text-4xl text-gray-600">Gallery working</h1>
            </div>
        </section>
    )
}