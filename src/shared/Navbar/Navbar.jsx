

import * as icon from '@/assets/icons/icons.js'
import * as img from '@/assets/images/images.js'
import { Button } from "@/Components/ui/button.jsx"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "@/Redux/Slices/theme.js"


export default function Navbar() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);
    return (
            <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:bg-[#0d4679] dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full shadow dark:shadow-gray-50/40">
                <div className="h-full flex items-center justify-between mx-auto px-4">
                    <div className="w-9 flex items-center gap-2">

                        <img src={img.logo} alt="" />
                        
                        <div className="flex flex-col justify-center">
                            <p className="uppercase text-xs font-bold text-[#0d4679] dark:text-white ">products</p>
                            <p className="uppercase text-xs font-bold text-[#0d4679] dark:text-white">gallery</p>

                        </div>
                    </div>
                    {/* Desktop Menu */}
                    <div className="flex items-center gap-3">
                        <Button
                            variant='gost'
                            onClick={() => dispatch(toggleTheme())}
                            className="bg-[#0d4679] dark:bg-white rounded-full cursor-pointer 
                                        transition-all duration-300 ease-in-out 
                                        hover:scale-105 hover:ring-2 hover:ring-[#cbe0f3] 
                                        dark:hover:ring-[#9ecef9]"
                        >
                            {theme === "light" ? (
                                <icon.Moon className="w-8 h-8 text-white dark:text-[#0d4679]" />
                            ) : (
                                    <icon.SunDim className="w-8 h-8 text-white dark:text-[#0d4679]" />
                            )}
                        </Button>

                        {/* <Button
                            variant="outline"
                            className="hidden sm:inline-flex rounded-full"
                        >
                            Sign In
                        </Button> */}
                        {/* Mobile Menu */}
                        <div className="md:hidden">
                        </div>
                    </div>
                </div>
            </nav>
    )
}

