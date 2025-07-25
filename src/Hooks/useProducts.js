

//   import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// export default function useProducts() {

//     // 🔹 Fetch all products
//     const fetchAllProducts = async () => {
//         const res = await axios.get("https://fakestoreapi.com/products");
//         return res.data;
//     };

//     const {
//         data: allProducts = [],
//         isLoading,
//         isError,
//         error,
//     } = useQuery({
//         queryKey: ["allProducts"],
//         queryFn: fetchAllProducts,
//     });

//     // 🔹 Fetch a specific product by ID
//     const fetchProductById = async (id) => {
//         const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
//         return res.data;
//     };

//     // 🔸 Hook consumer calls this when needed
//     const getProductById = (id) => {
//         return useQuery({
//             queryKey: ["getProductById", id],
//             queryFn: () => fetchProductById(id),
//             enabled: !!id,
//         });
//     };

//     return {
//         allProducts,
//         isLoading,
//         isError,
//         error,
//         getProductById, // function to fetch a specific product
//     };
// }


import { useQuery } from "@tanstack/react-query";
import axios from "axios"

export default function useProducts() {


    // get products

    const getProducts = async() => {
        const res = await axios.get('https://fakestoreapi.com/products');
        console.log(res.data);
        return res.data
        
    }

    const { data: allProducts, isLoading ,isError ,error } = useQuery({
        queryKey: ['allProducts'], 
        queryFn: getProducts,

    });


    

    



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
        // productDetails,
        // loadingProduct
    }
}
