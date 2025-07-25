import * as icon from '@/assets/icons/icons.js'



import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function DropDownSort({ setSlectSort }) {
    const [selectedOption, setSelectedOption] = useState("none");

    const handleSelect = (option) => {
        setSelectedOption(option);
        setSlectSort(option)
    };


    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="relative
                            flex items-center justify-center
                            bg-[#0d4679] text-white font-popins
                            px-3 py-2 rounded-full
                            shadow-lg hover:shadow-xl
                            active:translate-y-0.5 active:shadow-md
                            transition-all duration-200
                            border border-blue-900/30
                            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                            bg-gradient-to-b from-[#0d4679] to-[#0b3c68]
">
                                Filter
                            <icon.ArrowDownWideNarrow size={16} className="mt-1 ml-1" />
                        </DropdownMenuTrigger>

            <DropdownMenuContent className="dark:bg-[#0d4779] w-50 border-0 md:absolute md:-left-5 md:-top-1">
                <DropdownMenuCheckboxItem
                    checked={selectedOption === "none"}
                    onCheckedChange={() => handleSelect("none")}
                    className="hover:bg-amber-200"
                >
                    None
                </DropdownMenuCheckboxItem>

                <DropdownMenuCheckboxItem
                    checked={selectedOption === "lowToHigh"}
                    onCheckedChange={() => handleSelect("lowToHigh")}
                    className="hover:bg-amber-200"
                >
                    {"Price (Low > High)"}
                </DropdownMenuCheckboxItem>

                <DropdownMenuCheckboxItem
                    checked={selectedOption === "highToLow"}
                    onCheckedChange={() => handleSelect("highToLow")}
                    className="hover:bg-amber-200"
                >
                    {"Price (High > Low)"}
                </DropdownMenuCheckboxItem>

                <DropdownMenuCheckboxItem
                    checked={selectedOption === "aToZ"}
                    onCheckedChange={() => handleSelect("aToZ")}
                    className="hover:bg-amber-200"
                >
                    Name (A–Z)
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>

        </DropdownMenu>
    );
}
