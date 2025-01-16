import { useEffect, useState } from "react"
import { getAll } from "../service/service"
import { Card } from "./Card";

export const Gallery = () => {

    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        getAll().then(data => {
            setImages(data);
        });
    }, [])

    return (
        <section className="flex flex-col justify-center w-full border-2 border-green-500 min-h-max">
            <div className="container">
                <h1 className="text-4xl text-gray-600">Image Gallery</h1>
            </div>
            <div className="flex flex-row flex-wrap justify-around border-2 border-red-500 px-10">
                {
                    images.map((image) => {
                        return (
                            <Card key={`image-${image._id}`}>
                                <div className="w-full min-h-[223px] max-h-[223px]">
                                    <img src={image.url} alt="" className="" />
                                </div>
                                <h2>title: {image.title}</h2>
                                <p>description: {image.description}</p>
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