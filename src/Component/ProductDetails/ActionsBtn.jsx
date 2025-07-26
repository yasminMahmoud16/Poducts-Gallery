import { Button } from "@/Components/ui/button.jsx";

export default function ActionsBtn() {
    return <>
        <div className="flex items-center gap-2 mt-2">
            <Button className="w-40 md:w-70  py-6 px-4 rounded-4xl bg-[#0d4679] text-white border-2 border-[#0d4679] font-popins font-bold transition-all hover:text-shadow-xs hover:bg-[#87c0f5] hover:border-[#87c0f5] hover:text-white capitalize cursor-pointer">add to cart</Button>
            <Button className="w-40 md:w-70  py-6 px-4 rounded-4xl bg-orange-200 text-[#0d4679] border-2 border-orange-200 font-popins  transition-all hover:bg-orange-300 hover:border-orange-300 hover:text-white capitalize text-md font-bold cursor-pointer">buy now</Button>
        </div>
    </>
}
