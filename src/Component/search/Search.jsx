import { Input } from "@/Components/ui/input.jsx";
import * as icon from '@/assets/icons/icons.js'

export default function Search({ search, setSearch }) {


    return <>
        <div className="relative w-full max-w-2xl ">
            <icon.Search className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-300 font-bold" size={20} />

            <Input
                type="search"
                placeholder="Search"
                className="w-full px-10 py-5 border border-gray-300 bg-white shadow-lg transition-all duration-200  focus:outline focus:ring-2 focus:ring-[#0d4679]   rounded-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>


    </>
}
