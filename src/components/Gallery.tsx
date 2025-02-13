import { useEffect, useState } from "react"
import { getAll } from "../service/service"
import { Card } from "./Card";
import { Button } from "./Button";
import { Loader } from "./Loader";

export const Gallery = () => {

    const [images, setImages] = useState<Image[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getAll(currentPage).then(data => {
            setImages(data.results);
            setTotalPages(data.totalPages);
            setIsLoading(false);
        });

    }, [currentPage, totalPages])

    const handlePrev = () => {
        setIsLoading(true);
        setCurrentPage(currentPage - 1);
    }

    const handleNext = () => {
        setIsLoading(true);
        setCurrentPage(currentPage + 1);
    }

    return isLoading ? 

    (
        <Loader />
    )
    
    :

    (
        <section className="flex flex-col justify-center w-full my-14">
            <div className="flex flex-row flex-wrap justify-around px-10">
                {
                    images.map((image) => {
                        return (
                            <Card key={`image-${image._id}`}>
                                <div className="w-full">
                                    <img src={image.url} alt="" className="" />
                                </div>
                                <div className="px-2 py-5 leading-7">
                                    <h2 className="text-gray-600 text-xl">Title: {image.title}</h2>
                                    <p className="text-md text-gray-500">Description: {image.description}</p>
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
            <div className="w-full flex justify-center h-20">
                <div className="container flex items-center justify-center gap-2 lg:gap-10">
                    <Button onClick={handlePrev} disabled={currentPage === 1}>
                        Prev
                    </Button>
                    <Button onClick={handleNext} disabled={currentPage === totalPages}>
                        Next
                    </Button>
                </div>
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