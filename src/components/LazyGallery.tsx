import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { getAll } from "../service/service";
import { Image } from "./Image";
import { Card } from "./Card";

export const LazyGallery = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollHeight < window.scrollY + window.innerHeight) {
                setIsLoading(true);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {

        let isCanceled = false;

        if (isLoading) {
            getAll(currentPage).then(data => {
                if (!isCanceled) {
                    setImages((prevData) => {
                        const newData = data.results.filter((img: { _id: string; }) => !prevData.some(p => p._id === img._id));
                        return [...prevData, ...newData];
                    })
                    setTotalPages(data.totalPages),
                    setIsLoading(false);
                }
            });

        }

        return () => {
            isCanceled = true;
        };

    }, [currentPage, isLoading, totalPages]);
    
    useEffect(() => {
        if (isLoading && currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    }, [isLoading, totalPages]);

    return isLoading && images.length === 0 ?
        (
            <Loader style="w-full h-screen flex flex-row justify-center items-center" />
        )

        :

        (

            <section className="flex flex-col justify-center w-full my-14">
                <div className="flex flex-row flex-wrap justify-around px-10">
                    {
                        images.map((image, index) => {
                            return (
                                <Card key={`image-${image._id}-${index}`}>
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
                {
                    isLoading && currentPage < totalPages ? <Loader style="flex flex-row justify-center items-center mt-10" /> : ''
                }
            </section>
        )


}