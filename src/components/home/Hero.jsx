import { useEffect, useState } from "react";
import { heroSlides } from "../../data/heroSlides";
import Container from "../common/Container";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="mt-3">
      <Container>
        <div className="py-16 bg-[#F5F5F580] pt-16 pl-11 min-h-[480px] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="max-w-[565px]">
              <p 
                className="text-[14px] font-medium leading-[16px] tracking-[5px] uppercase mb-2 text-[#3D3D3D] transition-opacity duration-500"
                style={{ opacity: 1 }}
              >
                {slide.subtitle}
              </p>

              <h1 
                className="uppercase font-black text-[70px] leading-[70px] text-[#3D3D3D] mb-1 transition-opacity duration-500"
                style={{ opacity: 1 }}
              >
                {slide.title}
              </h1>

              <p 
                className="text-[#727272] text-[14px] mb-6 leading-[24px] transition-opacity duration-500"
                style={{ opacity: 1 }}
              >
                {slide.description}
              </p>

              <button className="bg-[#46A358] text-white px-8 py-3 rounded-md font-bold hover:bg-[#3d8e4f] transition">
                {slide.buttonText}
              </button>
            </div>

            <div className="overflow-hidden">
              <img 
                src={slide.image} 
                alt="Plant"
                className="transition-opacity duration-500"
                style={{ opacity: 1 }}
              />
            </div>
          </div>

          <div className="flex gap-2 mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
                  current === index
                    ? "bg-[#46A358] w-6"
                    : "bg-[#D9D9D9] hover:bg-[#BDBDBD]"
                }`}
              />
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default Hero;
