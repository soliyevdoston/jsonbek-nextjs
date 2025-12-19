import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#12030f52]  text-white flex items-center justify-center">
      <div className="text-center space-y-6 max-w-xl px-4">
        <h1 className="text-4xl text-5xl font-bold">
          Hikoyalar olamiga xush kelibsiz ✍️
        </h1>

        <p className="">
          Comedy, drama, romance va adventure janridagi eng qiziqarli
          hikoyalarni bir joyda o‘qing.
        </p>

        <Link href="/SSR">
          <Button
            className=" px-10 py-6 transition
   
    hover:bg-white
    hover:text-black
    active:scale-95"
          >
            Hikoyalarni ko‘rish
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-6 right-6">
        <h5 className="pb-[10px] ">
          O'zingizga mos render turi orqali qidiring
        </h5>
        <div className=" flex  gap-2">
          <Link href="/CSR">
            <Button
              className="
    transition
   
    hover:bg-white
    hover:text-black
    active:scale-95
  "
            >
              CSR
            </Button>
          </Link>

          <Link href="/ISR">
            <Button
              className="
    transition
    
    hover:bg-white
    hover:text-black
    active:scale-95
  "
            >
              ISR
            </Button>
          </Link>

          <Link href="/SSG">
            <Button
              className="
    transition
    
    hover:bg-white
    hover:text-black
    active:scale-95
  "
            >
              SSG
            </Button>
          </Link>

          <Link href="/SSR">
            <Button
              className="
    transition
    
    hover:bg-white
    hover:text-black
    active:scale-95
  "
            >
              SSR
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-6  ">
        Ma’lumotlar{" "}
        <a
          href="https://jsonbek.uz"
          target="_blank"
          className=" hover:text-white "
        >
          Jsonbek.uz
        </a>{" "}
        dan olingan
      </div>
    </div>
  );
}
