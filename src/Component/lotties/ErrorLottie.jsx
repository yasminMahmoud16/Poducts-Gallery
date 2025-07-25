import Lottie from "lottie-react";
import errorAnimation from "@/assets/lotties/Lonely 404.json";

export default function ErrorLottie() {
  return (
    <div className="w-full  md:mt-0 md:w-2xl  flex justify-center items-center mt-10">
      <Lottie animationData={errorAnimation} loop={true} className="w-full " />
    </div>

  )
}