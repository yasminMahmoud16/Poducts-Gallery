import ProductCard from '@/Component/products/productCard.jsx';
import Search from '@/Component/search/Search.jsx';

export default function Home() {

  return <>
    



    <section className='min-h-screen'>

      <div className="container p-28">
        <h1 className='text-5xl text-center font-semibold font-poppins capitalize text-[#0d4679] dark:text-white my-7'>our products gallery </h1>
        <ProductCard/>

      </div>

    </section>
  </>
}
