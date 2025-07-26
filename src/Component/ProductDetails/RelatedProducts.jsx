import useProducts from '@/Hooks/useProducts.js';
import React from 'react'
import { Link } from 'react-router-dom';
import * as icon from '@/assets/icons/icons.js'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
export default function RelatedProducts() {
        const { allProducts} = useProducts();
    
    return (
        <>
            <h2 className="text-xl font-bold font-goldman mb-4 px-2">Related Products</h2>

            <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                <div className="flex flex-nowrap gap-4 px-4 pb-4">
                    {allProducts?.map((pro) => (
                        <Link to={`/product-details/${pro.id}`} key={pro.id}>
                            <Card
                                className="relative bg-[#f4f4f5] dark:bg-slate-800 text-[#0d4679] dark:text-white shadow-md dark:shadow-gray-50/10 rounded-2xl w-60 min-w-[240px] overflow-hidden transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl group py-1 cursor-pointer border-0"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 to-blue-50/5 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 pointer-events-none"></div>

                                <CardHeader className="px-1 flex items-center justify-center">
                                    <div className="overflow-hidden rounded-xl w-full flex items-center justify-center p-4 bg-white">
                                        <img
                                            src={pro.image}
                                            alt={pro.title}
                                            className="h-48 w-full object-contain rounded-md transition-transform duration-300"
                                        />
                                    </div>
                                </CardHeader>

                                <CardContent className="px-4">
                                    <CardTitle className="text-black dark:text-white font-semibold leading-normal line-clamp-1 transition-colors duration-300 group-hover:text-blue-950 dark:group-hover:text-blue-300 text-sm font-poppins capitalize">
                                        {pro.title.split(' ').slice(0, 2).join(' ')}
                                    </CardTitle>
                                    <p className="text-md font-medium font-goldman text-orange-300">
                                        ${pro.price}
                                    </p>
                                </CardContent>

                                <CardFooter className="px-4 pb-4 flex flex-col">
                                    <div className="absolute bg-gray-300 bottom-5 right-4 w-10 h-10 rounded-full flex items-center justify-center">
                                        <icon.ShoppingBag className="text-white font-bold transition-colors duration-300 group-hover:text-[#0d4679] dark:text-[#0d4679] dark:group-hover:text-white" />
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
