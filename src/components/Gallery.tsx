import { useEffect, useState } from "react"
import { getAll } from "../service/service"
import { Card } from "./Card";

export const Gallery = () => {

    const [images, setImages] = useState<Image[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);

    useEffect(() => {
        getAll().then(data => {
            setImages(data);
        });
    }, [])

    return (
        <section className="flex flex-col justify-center w-full min-h-max">
            <div className="flex justify-center">
                <div className="container flex">
                    <h1 className="text-4xl text-gray-600">Pagination-gallery</h1>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-around px-10">
                {
                    images.map((image, index) => {
                        return (
                            <Card key={`image-${image._id}`}>
                                <div className="w-full min-h-[223px] max-h-[223px]">
                                    <img src={image.url} alt="" className="" />
                                </div>
                                <div className="px-2 py-5 leading-7">
                                    <h2 className="text-gray-600 text-xl">{index}: Title: {image.title}</h2>
                                    <p className="text-md text-gray-500">description: {image.description}</p>
                                </div>
                            </Card>
                        )
                    })
                }
            </div>

        </section>
    )
}

interface Image {
    title: string,
    description: string,
    url: string,
    _id: string
}