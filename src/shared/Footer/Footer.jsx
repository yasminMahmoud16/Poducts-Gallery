import React from 'react'
import * as Img from '@/assets/images/images.js'
export default function Footer() {
    return <>


        <footer class="bg-white dark:bg-[#1d293d] rounded-lg shadow-sm  m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                {/* <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={Img.logo2} class="w-40" alt=" Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>

                </div> */}
                <hr class="my-6  border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    </>
}
