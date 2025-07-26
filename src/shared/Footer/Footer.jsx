import React from 'react'
import * as Img from '@/assets/images/images.js'
export default function Footer() {
    return <>


        <footer className="bg-gradient-to-br from-white via-gray-100 to-white dark:from-[#1d293d] dark:via-[#0f172a] dark:to-[#1d293d] shadow-inner rounded-t-3xl mt-24 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-screen-xl mx-auto px-6 py-10 space-y-6">

                {/* Logo with subtle glow and animation */}
                <div className="flex justify-center items-center">
                    <img
                        src={Img.logo2}
                        alt="Logo"
                        className="w-32 md:w-40 animate-fade-in drop-shadow-md hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <hr className="border-gray-300 dark:border-gray-600 w-4/5 mx-auto" />

                {/* Copyright text */}
                <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-400 font-poppins tracking-wide">
                    © 2025
                    <a
                        href="https://flowbite.com/"
                        className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SarahaApp
                    </a>{" "}
                    · All rights reserved.
                </p>
            </div>
        </footer>




    </>
}
