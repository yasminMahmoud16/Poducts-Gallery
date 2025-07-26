import loadingAnimation from "@/assets/lotties/Loading animation.json";
import Lottie from "lottie-react";

export default function LoadingLottie() {
    return <>
        <div className="w-full  md:mt-0 md:w-2xl  flex justify-center items-center mt-10">
            <Lottie animationData={loadingAnimation} loop={true} className="w-full bg-transparent " />
        </div>
    </>
}
