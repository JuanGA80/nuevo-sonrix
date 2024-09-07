import Slider1 from "../../assets/slider-1.webp";
import Slider4 from "../../assets/slider-cel-1.webp";
import { useEffect, useState } from "react";
export const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const mobile = 768;

  const fotosChanges = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", fotosChanges);

    return () => {
      window.removeEventListener("resize", fotosChanges);
    };
  });
  return (
    <>
      <div className="hero w-screen h-full">
        <div className="container-slider-hero w-screen h-full">
          <div
            className="swiper-container relative bg-cover"
            style={
              width < mobile
                ? { backgroundImage: `url(${Slider4})` }
                : { backgroundImage: `url(${Slider1})` }
            }
          >
            <div className="phrase absolute left-0 top-0 w-full h-full flex justify-center items-end ">
              <div className="container-phrase mb-16  ">
                <h2 className="title-slider text-white text-2xl  uppercase  md:text-5xl frase px-5">
                  Nosotros
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};