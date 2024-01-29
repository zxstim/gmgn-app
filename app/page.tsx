import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col relative h-96 rounded-xl text-center">
        <Image
          src="/hero-bg.png"
          alt="Hero background"
          fill={true}
          className="inset-0 rounded-xl"
          priority={true}
        />
        <h1 className="absolute inset-0 top-24 md:top-36 text-white font-semibold text-4xl">Crypto native community for builders</h1>
        <Link href="https://dapp.gmgn.app" className="absolute inset-0 mx-auto top-64 w-fit h-fit rounded-full py-2 px-4 bg-white/30 hover:bg-white/40 text-white font-bold shadow-md backdrop-filter backdrop-blur-sm">Launch app</Link>
      </div>
    </div>
  );
}
