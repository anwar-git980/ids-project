import { useState, useEffect } from "react";
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
        style={{
          all: "unset",
          display: "block",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          padding: "1rem",
          cursor: "pointer",
          transition: "background-color 100ms ease-in-out",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft
          style={{ stroke: "white", fill: "black", width: "2rem", height: "2rem" }}
          aria-hidden
        />
      </button>

      <button
        onClick={showNextImage}
        style={{
          all: "unset",
          display: "block",
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          padding: "1rem",
          cursor: "pointer",
          transition: "background-color 100ms ease-in-out",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
        aria-label="View Next Image"
      >
        <ArrowBigRight
          style={{ stroke: "white", fill: "black", width: "2rem", height: "2rem" }}
          aria-hidden
        />
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
