"use client";

import Image from "next/image";
import { SetStateAction, useState } from "react";
import {
  RxDot,
  RxDotFilled,
  RxChevronLeft,
  RxChevronRight,
} from "react-icons/rx";

interface Slide {
  url: string;
  type: "image" | "iframe";
}

export interface Slides extends Array<Slide> { }

export default function Carousel({ slides }: { slides: Slides }) {


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="group relative h-fit w-fit pt-6">
      {slides[currentIndex].type === "image" ? (
        <Image
          src={slides[currentIndex].url}
          alt="Photo"
          className="rounded-2xl"
          width={1024}
          height={576}
        />
      ) : (
        <iframe
          src={slides[currentIndex].url}
          allowFullScreen
          className="w-full h-full rounded-2xl"
          style={{ width: "1024px", height: "512px" }}
          allow="autoplay"
        ></iframe>
      )}
      <div className="absolute left-5 top-[50%] hidden translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <RxChevronLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute right-5 top-[50%] hidden translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <RxChevronRight onClick={nextSlide} size={30} />
      </div>
      <div className="top-4 flex justify-center py-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-2xl"
          >
            {slideIndex == currentIndex ? <RxDotFilled /> : <RxDot />}
          </div>
        ))}
      </div>
    </div>
  );
}
