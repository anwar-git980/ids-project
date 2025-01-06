// import { useState, useEffect } from "react";
// import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

// export function ImageSlider({ images }) {
//   const [imageIndex, setImageIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setImageIndex((index) => (index + 1) % images.length);
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(timer);
//   }, [images.length]);

//   function showNextImage() {
//     setImageIndex((index) => {
//       if (index === images.length - 1) return 0;
//       return index + 1;
//     });
//   }

//   function showPrevImage() {
//     setImageIndex((index) => {
//       if (index === 0) return images.length - 1;
//       return index - 1;
//     });
//   }

//   return (
//     <section
//       aria-label="Image Slider"
//       style={{
//         width: "100%",
//         height: "100%",
//         position: "relative",
//         boxSizing: "border-box",
//       }}
//     >
//       <a
//         href="#after-image-slider-controls"
//         style={{
//           position: "absolute",
//           width: "1px",
//           height: "1px",
//           padding: 0,
//           margin: "-1px",
//           overflow: "hidden",
//           border: 0,
//           clip: "rect(0, 0, 0, 0)",
//           backgroundColor: "transparent",
//         }}
//         className="skip-link"
//       >
//         Skip Image Slider Controls
//       </a>
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           overflow: "hidden",
//         }}
//       >
//         {images.map(({ url, alt }, index) => (
//           <img
//             key={url}
//             src={url}
//             alt={alt}
//             aria-hidden={imageIndex !== index}
//             style={{
//               objectFit: "cover",
//               width: "100%",
//               height: "100%",
//               display: "block",
//               flexShrink: 0,
//               flexGrow: 0,
//               transform: translateX(${-100 * imageIndex}%),
//               transition: "transform 300ms ease-in-out",
//             }}
//           />
//         ))}
//       </div>
//       <button
//         onClick={showPrevImage}
//         style={{
//           all: "unset",
//           display: "block",
//           position: "absolute",
//           top: 0,
//           bottom: 0,
//           left: 0,
//           padding: "1rem",
//           cursor: "pointer",
//           transition: "background-color 100ms ease-in-out",
//           backgroundColor: "rgba(0, 0, 0, 0.2)",
//         }}
//         aria-label="View Previous Image"
//       >
//         <ArrowBigLeft
//           style={{ stroke: "white", fill: "black", width: "2rem", height: "2rem" }}
//           aria-hidden
//         />
//       </button>
//       <button
//         onClick={showNextImage}
//         style={{
//           all: "unset",
//           display: "block",
//           position: "absolute",
//           top: 0,
//           bottom: 0,
//           right: 0,
//           padding: "1rem",
//           cursor: "pointer",
//           transition: "background-color 100ms ease-in-out",
//           backgroundColor: "rgba(0, 0, 0, 0.2)",
//         }}
//         aria-label="View Next Image"
//       >
//         <ArrowBigRight
//           style={{ stroke: "white", fill: "black", width: "2rem", height: "2rem" }}
//           aria-hidden
//         />
//       </button>
//       <div
//         style={{
//           position: "absolute",
//           bottom: ".5rem",
//           left: "50%",
//           transform: "translateX(-50%)",
//           display: "flex",
//           gap: ".25rem",
//         }}
//       >
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setImageIndex(index)}
//             style={{
//               all: "unset",
//               display: "block",
//               cursor: "pointer",
//               width: "1rem",
//               height: "1rem",
//               transition: "transform 100ms ease-in-out",
//               transform: index === imageIndex ? "scale(1.2)" : "scale(1)",
//             }}
//             aria-label={View Image ${index + 1}}
//           >
//             {index === imageIndex ? (
//               <CircleDot
//                 style={{
//                   stroke: "white",
//                   fill: "black",
//                   height: "100%",
//                   width: "100%",
//                 }}
//                 aria-hidden
//               />
//             ) : (
//               <Circle
//                 style={{
//                   stroke: "white",
//                   fill: "black",
//                   height: "100%",
//                   width: "100%",
//                 }}
//                 aria-hidden
//               />
//             )}
//           </button>
//         ))}
//       </div>
//       <div id="after-image-slider-controls" />
//     </section>
//   );
// }



import { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

export function PicSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((index) => (index + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section
      aria-label="Image Slider"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <a
        href="#after-image-slider-controls"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          border: 0,
          clip: "rect(0, 0, 0, 0)",
          backgroundColor: "transparent",
        }}
        className="skip-link"
      >
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              display: "block",
              flexShrink: 0,
              flexGrow: 0,
              transform: `translateX(${-100 * imageIndex}%)`,
              transition: "transform 300ms ease-in-out",
            }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        style={{
          all: "unset",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "1rem",
          width: "3rem",
          height: "3rem",
          cursor: "pointer",
          transition: "background-color 100ms ease-in-out",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderRadius: "50%",
        }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft
          style={{ stroke: "white", width: "2rem", height: "2rem" }}
          aria-hidden
        />
      </button>
      <button
        onClick={showNextImage}
        style={{
          all: "unset",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "1rem",
          width: "3rem",
          height: "3rem",
          cursor: "pointer",
          transition: "background-color 100ms ease-in-out",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderRadius: "50%",
        }}
        aria-label="View Next Image"
      >
        <ArrowBigRight
          style={{ stroke: "white", width: "2rem", height: "2rem" }}
          aria-hidden
        />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setImageIndex(index)}
            style={{
              all: "unset",
              display: "block",
              cursor: "pointer",
              width: "1rem",
              height: "1rem",
              transition: "transform 100ms ease-in-out",
              transform: index === imageIndex ? "scale(1.2)" : "scale(1)",
            }}
            aria-label={`View Image ${index + 1}`}
          >
            {index === imageIndex ? (
              <CircleDot
                style={{
                  stroke: "white",
                  fill: "black",
                  height: "100%",
                  width: "100%",
                }}
                aria-hidden
              />
            ) : (
              <Circle
                style={{
                  stroke: "white",
                  fill: "black",
                  height: "100%",
                  width: "100%",
                }}
                aria-hidden
              />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}