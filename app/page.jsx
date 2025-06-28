import Image from "next/image";
import StepsBar from "./sections/StepsBar";
import Main from "./sections/Main";

export default function Home() {
  return (
    <main className="w-full h-dvh text-white sm:py-16  flex justify-center items-center">
      <Image loading="lazy" alt="background image" src={'/hero-1.jpg'} width={1920} height={1080} className="-z-10 object-cover h-full absolute top-0 left-0" />
      <div className="wrapper flex sm:flex-row flex-col items-center justify-center bg-secondary sm:w-4/6 w-full h-full rounded-xl overflow-clip">
        <StepsBar />
        <Main />
      </div>
    </main>
  )
}
