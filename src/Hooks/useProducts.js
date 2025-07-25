

import { useQuery } from "@tanstack/react-query";
import axios from "axios"

export default function useProducts() {
    // const [filterProducts, setFilterProducts] = useState([]);


    // get products

    const getProducts = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products');
            console.log(res.data);
            return res.data
            
        } catch (error) {
            console.log(error + " error from getProducts ");
            
        }
        
    }

    const { data: allProducts, isLoading ,isError ,error } = useQuery({
        queryKey: ['allProducts'], 
        queryFn: getProducts,

    });


    

    


    // const filterProductsSearch = (searchKey) => {
    //     const filter = allProducts.filter((pro) => {
    //         pro.title.toLowerCase().includes(searchKey.toLowerCase())
    //     }
    //     );
    //     setFilterProducts(filter)


    // }

    // get spacific product
    // const getProductById = async ({ queryKey }) => {
    //     const [, id] = queryKey;
    //     const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    //     return res.data; // this is already the product object
    // };

    // const useProductDetails = (id) => {
    //     return useQuery({
    //         queryKey: ['getProductById', id],
    //         queryFn: getProductById,
    //         enabled: !!id, // only run if id exists
    //     });
    // };

    // const productDetails = data?.data.data;


    return {
        allProducts,
        isLoading,
        isError,
        error,
        // filterProductsSearch,
        // filterProducts
        // productDetails,
        // loadingProduct
    }
}
