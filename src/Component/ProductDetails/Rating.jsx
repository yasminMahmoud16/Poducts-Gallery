import React from 'react'
import * as icon from '@/assets/icons/icons.js'

export default function Rating({ details }) {
    const { rate = 0, count = 0 } = details.rating || {};

    const roundedRate = Math.round(rate); 

    return (
        <>
            <h2 className="capitalize font-goldman font-medium p-5">reviewing & rating</h2>

            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="font-poppins text-6xl">
                    {rate}<span className="text-2xl text-gray-400">/5</span>
                </h1>
                <p className="font-poppins text-gray-400 text-md capitalize">
                    ({count} new reviewing)
                </p>

                <div className="flex items-center justify-center gap-2">
                    {[...Array(5)].map((_, index) => (
                        <span key={index} className="text-amber-400">
                            {index < roundedRate ? <icon.Star /> : <icon.Star className="opacity-30" />}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}
