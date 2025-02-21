import { useEffect, useState } from "react"
import { getAll } from "../service/service"
import { Card } from "./Card";
import { Button } from "./Button";
import { Loader } from "./Loader";
import { useSearchParams } from "react-router-dom";
import { Image } from "./Image";

export const Gallery = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [images, setImages] = useState<Image[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || 1);
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
        const page = Number(searchParams.get('page'));
        setIsLoading(true);
        setSearchParams({ page: (page - 1).toString() })
        setCurrentPage(page - 1);
    }

    const handleNext = () => {
        const page = Number(searchParams.get('page')) || 1;
        setIsLoading(true);
        setSearchParams({ page: (page + 1).toString() })
        setCurrentPage(page + 1);
    }

    const renderPagination = () => {
        const pages: (string | number)[] = [];
        const range = 2;

        pages.push(1);

        if (currentPage - range > 2) {
            pages.push('...');
        }

        for (let i = Math.max(2, currentPage - range); i <= Math.min(totalPages - 1, currentPage + range); i++) {
            pages.push(i);
        }

        if (currentPage + range < totalPages - 1) {
            pages.push("...");
        }

        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages.map((page, index) =>
            page === "..." ? (
                <span key={`dots-${index}`} className="px-2">...</span>
            ) : (
                <span
                    key={page}
                    className={`cursor-pointer px-2 ${currentPage === page ? 'text-indigo-400 font-bold' : 'text-gray-500'}`}
                    onClick={() => {
                        setSearchParams({ page: page.toString() });
                        setCurrentPage(Number(page));
                        setIsLoading(true);
                    }}
                >
                    {page}
                </span>
            )
        );
    }

    return isLoading ?

        (
            <Loader style="w-full h-screen flex flex-row justify-center items-center" />
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
                        <Button onClick={() => {
                            setIsLoading(true);
                            setSearchParams({ page: "1" })
                            setCurrentPage(1);
                        }
                        } disabled={currentPage === 1}>
                            {
                                '<<'
                            }
                        </Button>
                        <Button onClick={handlePrev} disabled={currentPage === 1}>
                            {
                                '<'
                            }
                        </Button>
                        <div className="flex md:gap-2">
                            {
                                renderPagination()
                            }
                        </div>
                        <Button onClick={handleNext} disabled={currentPage === totalPages}>
                            {
                                '>'
                            }
                        </Button>
                        <Button onClick={() => {
                            setIsLoading(true);
                            setSearchParams({ page: (totalPages).toString() })
                            setCurrentPage(totalPages);
                        }} disabled={currentPage === totalPages}>
                            {
                                '>>'
                            }
                        </Button>
                    </div>
                </div>
            </section>
        )
}
