import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import useProducts from "@/Hooks/useProducts.js";
import * as icon from '@/assets/icons/icons.js'
import { Skeleton } from "@/components/ui/skeleton"
import ErrorLottie from "../lotties/ErrorLottie.jsx";
import Search from "../search/Search.jsx";
import { useState } from "react";
import useSearchFilter from "@/Hooks/useSearchFilter.js";
import DropDownSort from "../DropDownSort/DropDownSort.jsx";
import useSortProducts from "@/Hooks/useSortProduct.js";
import { Link } from "react-router-dom";

export default function ProductCard() {
    const { allProducts, isLoading, isError, error } = useProducts();
    const { search, setSearch, filteredProducts } = useSearchFilter(allProducts);
    const [selectSort, setSlectSort] = useState("none");
    const sortedProducts = useSortProducts(filteredProducts, selectSort);

    return (
        <>
            {isError && (
                <div className="flex flex-col items-center justify-center text-center gap-2 mx-auto">
                    <ErrorLottie />
                    <p className="text-md text-gray-500 dark:text-gray-200 font-semibold capitalize">
                        {error.message} please try again
                    </p>
                </div>
            )}

            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-10 gap-6 justify-items-center">
                    {Array.from({ length: allProducts?.length || 8 }).map((_, i) => (
                        <div key={i} className="flex flex-col space-y-3">
                            <Skeleton className="h-[125px] w-[250px] rounded-xl dark:bg-slate-600" />
                            <div className="space-y-2">
                                <Skeleton className="h-10 w-[250px] dark:bg-slate-600" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <div className="flex items-center justify-center gap-2 mb-7">
                        <Search search={search} setSearch={setSearch} />
                        <DropDownSort selectSort={selectSort} setSlectSort={setSlectSort} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-10 gap-6 justify-items-center">
                            {sortedProducts?.map((pro) => (
                                <Link to={`/product-details/${pro.id}`}>
                            <Card
                                key={pro.id}
                                className="relative bg-[#f4f4f5] dark:bg-slate-800 text-[#0d4679] dark:text-white shadow-md dark:shadow-gray-50/10 rounded-2xl w-70 h-77 md:w-60 lg:w-70 overflow-hidden transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl group py-1 cursor-pointer border-0"
                            >
                                {/* Glow effect on hover */}
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
                                    <p className="text-md font-medium font-goldman text-orange-300">${pro.price}</p>
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
                </>
            )}
        </>
    );
}
