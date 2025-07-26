import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/Components/ui/button.jsx";
import SizeBtn from "./SizeBtn.jsx";
import ActionsBtn from "./ActionsBtn.jsx";
import Rating from "./rating.jsx";
import LoadingLottie from "../lotties/LoadingLottie.jsx";
import ProductCard from "../products/ProductCard.jsx";
import RelatedProducts from "./RelatedProducts.jsx";

export default function Details() {
    const { id } = useParams();

    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            return res.data;
        } catch (error) {
            console.log(error + " from getSingleProduct");
            throw error; // Important so react-query catches it
        }
    };

    const { data: details, isLoading, isError } = useQuery({
        queryKey: ['getSingleProduct', id],
        queryFn: getSingleProduct
    });





    return (
        <>
            {isLoading ? (
                <div className=" min-h-screen flex items-center justify-center bg-[#f4f4f5]/60 dark:bg-[#1d293d]">
                    <div className="">
                        <LoadingLottie />
                    </div>
                </div>
            ) : (
                <div className="container pt-28">
                    <div className="bg-[#f4f4f5] dark:bg-[#1d293d] dark:shadow-lg dark:shadow-gray-50/10 shadow rounded-2xl flex flex-col items-center p-8 ">
                        <div className="grid rid-cols-1 items-center justify-items-center md:grid-cols-6 p-3">
                                <div className="col-span-3  flex flex-col items-center justify-center gap-4 mb-4">
                                <div className=" md:w-2/3 flex items-center   justify-center ">
                                    <img
                                        src={details.image}
                                        alt="Image"
                                        className="rounded-md w-60 md:w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="col-span-3 flex flex-col justify-center">
                                <h2 className="text-2xl font-bold mb-2">{details.title}</h2>
                                <p className="text-xl font-medium">{details.category}</p>
                                <div className="flex flex-col justify-center gap-4">
                                    <p className="mt-4 text-orange-500 font-bold text-xl">
                                        ${details.price}
                                    </p>
                                    <SizeBtn />
                                    <ActionsBtn />
                                    <div>
                                        <h2 className="capitalize font-goldman font-medium">
                                            description & fit
                                        </h2>
                                        <p className="text-gray-600 leading-normal mt-2 font-poppins  md:text-sm">
                                            {details.description}
                                        </p>
                                    </div>
                                    <div>
                                        <Rating details={details} />
                                        </div>


                                        
                                </div>

                            </div>
                            </div>
                            


                           <RelatedProducts/>
                    </div>
                </div>
            )}
        </>
    );




}  