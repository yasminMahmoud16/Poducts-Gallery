import { useMemo, useState } from "react";

export default function useSearchFilter(allProducts) {
        const [search, setSearch] = useState('');
    
        console.log("All Products:", allProducts);
    
        const filteredProducts = useMemo(() => {
            return allProducts?.filter((pro) =>
                pro.title.toLowerCase().includes(search.toLowerCase())
            );
        }, [allProducts, search]);
        console.log("Filtered Products:", filteredProducts);
    
    return {
        search,
        setSearch,
        filteredProducts,
  }
}
