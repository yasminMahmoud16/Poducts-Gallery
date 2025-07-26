import { Button } from '@/Components/ui/button.jsx'
import React from 'react'

export default function SizeBtn() {
    const sizeList = [
        { size: "sm" },
        { size: "md" },
        { size: "lg" },
        { size: "xl" },
        { size: "2xl" },
    ]
    return <>
        <h2 className='capitalize font-poppins font-medium '>select size:</h2>
        <div className="flex items-center justify-center gap-2">
            {sizeList.map((size) => (
                <Button className=" w-15 md:w-20  py-6 px-4 rounded-4xl bg-white text-black border-2 border-[#0d4679] font-goldman font-medium transition-all hover:bg-[#0d4679] hover:text-white">{size.size}</Button>
            ))}

        </div>
    </>
}
