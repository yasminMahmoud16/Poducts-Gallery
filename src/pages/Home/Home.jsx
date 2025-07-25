import ProductCard from '@/Component/products/productCard.jsx';
import Search from '@/Component/search/Search.jsx';

export default function Home() {

  return <>
    



    <section className='min-h-screen'>
      {/* <div className='pt-28 mb-10 flex items-center justify-center'>
        <Search/>

      </div> */}
      <div className="container p-28">
        <ProductCard/>

      </div>

    </section>
  </>
}
