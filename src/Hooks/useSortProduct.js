import { useMemo } from "react";

export default function useSortProducts(filteredProducts, selectSort) {
    const sortedProducts = useMemo(() => {
        if (!filteredProducts) return [];

        if (selectSort === "none") {
            return filteredProducts;
        }

        const sorted = [...filteredProducts];

        switch (selectSort) {
            case "lowToHigh":
                sorted.sort((a, b) => a.price - b.price);
                break;
            case "highToLow":
                sorted.sort((a, b) => b.price - a.price);
                break;
            case "aToZ":
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            default:
                break;
        }

        return sorted;
    }, [filteredProducts, selectSort]);

    return sortedProducts;
}
