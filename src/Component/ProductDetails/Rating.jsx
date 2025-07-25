import React from 'react'
import * as icon from '@/assets/icons/icons.js'
export default function Rating({ details }) {
    const { rate, count } = details.rating || {};

    const rateList = [
        {
            rate: 1,
            icon: <icon.Star />
        },
        {
            rate: 2,
            icon: <icon.Star />
        },
        {
            rate: 3,
            icon: <icon.Star />
        },
        {
            rate: 4,
            icon: <icon.Star />
        },
        {
            rate: 5,
            icon: <icon.Star />
        },
    ]
    return <>
        
        <h2 className="capitalize font-goldman font-medium p-5 ">reviwing & rating</h2>

        <div className='flex flex-col items-center justify-center gap-2  '>
            {/* <div className='col-span-2  items-center justify-items-center'> */}
                        <h1 className='font-poppins text-9xl'>
                            {rate}<span className='text-2xl text-gray-400'>/5</span>
                            </h1>
                            <p className='font-poppins text-gray-400 text-md capitalize'>({ count} new reviwing)</p>

                            <div className='flex  items-center justify-center gap-2'>
                                {rateList.map((star) => (
                                    <p className='text-amber-400 mb-2'>

                                        {star.icon}
                                    </p>
                                ))}
                            </div>
                    
            {/* </div> */}
            {/* <div className='col-span-4'>
                <div>
                    
                </div>

            </div> */}

        </div>

    </>
}
