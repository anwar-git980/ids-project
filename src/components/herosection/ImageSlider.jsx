import { useState, useEffect, useCallback } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

export default function ImageSlider({ images = [], autoSlideInterval = 5000 }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showNextImage = useCallback(() => {
    setImageIndex(index => (index + 1) % images.length);
  }, [images.length]);

  const showPrevImage = useCallback(() => {
    setImageIndex(index => (index === 0 ? images.length - 1 : index - 1));
  }, [images.length]);

  useEffect(() => {
    if (!isPaused && autoSlideInterval > 0) {
      const timer = setInterval(showNextImage, autoSlideInterval);
      return () => clearInterval(timer);
    }
  }, [isPaused, autoSlideInterval, showNextImage]);

  if (!images.length) return null;

  return (
    <section 
      aria-label="Image Slider" 
      className="relative w-full h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <a
        href="#after-image-slider-controls"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-2 focus:bg-white"
      >
        Skip Image Slider Controls
      </a>

      <div className="w-full h-full flex overflow-hidden">
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="object-cover w-full h-full flex-shrink-0 flex-grow-0 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${-100 * imageIndex}%)` }}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      <button
        onClick={showPrevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="View Previous Image"
      >
        <ArrowBigLeft className="w-8 h-8 text-white" aria-hidden />
      </button>

      <button
        onClick={showNextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="View Next Image"
      >
        <ArrowBigRight className="w-8 h-8 text-white" aria-hidden />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1" role="tablist">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setImageIndex(index)}
            className="w-4 h-4 transition-transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-white rounded-full"
            aria-label={`View Image ${index + 1}`}
            aria-selected={index === imageIndex}
            role="tab"
          >
            {index === imageIndex ? (
              <CircleDot className="w-full h-full text-white fill-black" aria-hidden />
            ) : (
              <Circle className="w-full h-full text-white fill-black" aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}

