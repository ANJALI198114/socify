import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1A1A2E] text-white p-4 sm:p-6 md:p-8">
      <div className="mb-6 sm:mb-8 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[400px]">
        <Image
          src={`/dating-app-concept-social-media.png`}
          alt="Swipeverse Illustration"
          width={500}
          height={400}
          priority
          className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] mb-2 sm:mb-4 text-center animate-fade-in">
        SWIPEVERSE
      </h1>
      <p className="text-base sm:text-lg md:text-xl tracking-[0.3em] mb-8 sm:mb-10 text-gray-300 text-center">
        UNBIASED DATING APP
      </p>

      <Link
        href="/home"
        className="bg-white text-[#1A1A2E] font-semibold py-3 px-8 rounded-md 
                 hover:bg-gray-200 transition-all duration-300 ease-in-out
                 transform hover:scale-105 active:scale-95
                 text-sm sm:text-base md:text-lg
                 w-full sm:w-auto text-center
                 max-w-[200px] sm:max-w-none"
      >
        LET'S START
      </Link>
    </div>
  );
}
