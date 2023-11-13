import hero from "../../assets/img/Hero.png";
import heart from "../../assets/img/Heart.png";

import men1 from "../../assets/img/men1.png";
import men2 from "../../assets/img/men2.png";
import men3 from "../../assets/img/men3.png";
import men4 from "../../assets/img/men4.png";

import plus from "../../assets/img/pluc.png";
const Hero = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-5 lg:gap-0 md:flex md:flex-row items-center justify-between py-[55px]">
        <div>
          <h1 className="text-[60px] lg:text-[82px] text-center md:text-start text-primary font-extrabold leading-[90px]">
            Securing <br className="hidden lg:block"></br> your Family for
            <br></br> Future
          </h1>
          <p className="text-paragraph text-center lg:text-start text-lg pt-[32px] py-[50px]">
            Fresh insights about national economic responses to the<br></br>{" "}
            pandemic and how the future of the world of work and social<br></br>{" "}
            protection have in many ways already arrived.
          </p>
          <div className="flex gap-5 items-center justify-center lg:items-start lg:justify-start">
            <button className=" capitalize bg-primary text-white  py-[10px] lg:py-[23px]  px-4 lg:px-[56PX] border border-secondary rounded-md">
              get started
            </button>
            <button className="text-secondary capitalize  py-[10px] lg:py-[23px]  px-4 lg:px-[56px] border border-secondary rounded-md">
              watch video
            </button>
          </div>
        </div>
        <div>
          <div className="relative">
            <img className="w-full" src={hero} alt="hero image" />
            <div className="absolute top-1/2 left-0 translate-y-1/2 -translate-x-1/9">
              <div className="relative flex flex-col items-center gap-y-2  justify-center w-[180px] h-[90px] bg-slate-700 rounded-[14px]">
                <span className="absolute right-0 top-0 -translate-y-2 translate-x-2">
                  <img src={heart} alt="heart" />
                </span>

                <p className="text-paragraph pt-2 text-[12px]">
                  20k+ Account Holders
                </p>
                <div className="flex ">
                  <span><img src={men1} alt="men" /></span>
                  <span><img src={men2} alt="men" /></span>
                  <span><img src={men3} alt="men" /></span>
                  <span><img src={men4} alt="men" /></span>
                  <span><img src={plus} alt="plus" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
