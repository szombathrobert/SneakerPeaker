
"use client";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-white text-slate-600 px-4 overflow-hidden">
        <div>
            <Image 
                src="/404.png" 
                width={240} 
                height={240} 
                alt="404 Not Found" 
                loading="lazy"
                />
        </div>
      <p
        className="text-2xl md:text-3xl mb-6 text-slate-600 text-center z-10"
      >
        404 - The page you are searching for <br /> ran away with your shoes
      </p>
      <Link
        href="/"
        className="z-10 bg-blue-400 hover:bg-blue-800 transition px-6 py-3 rounded-lg font-semibold shadow-lg"
      >
        Return to the Home Page
      </Link>
    </div>
  );
}
