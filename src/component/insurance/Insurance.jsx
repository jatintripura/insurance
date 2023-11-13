import home1 from "../../assets/img/home1.png";
import home2 from "../../assets/img/home2.png";
import home3 from "../../assets/img/home3.png";
const Insurance = () => {
  return (
    <>
      <div className="bg-sectionBg">
        <div className="container mx-auto py-[70px]">
          <div className="flex flex-col items-center justify-center pb-5 lg:pb-[70px]">
            <p className="text-base lg:text-[18px] text-secondaryDark lg:leading-5 pb-3">
              INSURANCE SERVICES
            </p>
            <h1 className="text-primary text-[30px] leading-7 lg:text-[42px] font-bold lg:leading-[50px]">
              Choose your Insurance
            </h1>
          </div>
          <div className="flex flex-col p-10  lg:p-0 lg:flex lg:flex-row items-center justify-center gap-4 ">
            <div className="bg-white flex flex-col items-start justify-start">
              <div className="p-10">
                <a href="#">
                  <img src={home1} alt="home" />
                </a>
              </div>
            <div className="px-10">
            <h1 className="text-primary font-bold  text-lg">
                Home Insurance
              </h1>
              <p className=" text-paragraph text-base py-6">
                Insurance can have various effects on society through the way
                that it changes who bears the cost of losses & damage.
              </p>
              <button className="font-bold text-primary text-lg pb-5">
                Learn More
              </button>
            </div>
            </div>
            <div className="bg-white flex flex-col items-start justify-start">
              <div className="p-10">
                <a href="#">
                  <img src={home2} alt="home" />
                </a>
              </div>
            <div className="px-10">
            <h1 className="text-primary font-bold  text-lg">
            Business Insurance
              </h1>
              <p className=" text-paragraph text-base py-6">
                Insurance can have various effects on society through the way
                that it changes who bears the cost of losses & damage.
              </p>
              <button className="font-bold text-primary text-lg pb-5">
                Learn More
              </button>
            </div>
            </div>
            <div className="bg-white flex flex-col items-start justify-start">
              <div className="p-10">
                <a href="#">
                  <img src={home3} alt="home" />
                </a>
              </div>
            <div className="px-10">
            <h1 className="text-primary font-bold  text-lg">
            Health Insurance
              </h1>
              <p className=" text-paragraph text-base py-6">
                Insurance can have various effects on society through the way
                that it changes who bears the cost of losses & damage.
              </p>
              <button className="font-bold text-primary text-lg pb-5">
                Learn More
              </button>
            </div>
            </div>
          </div>
          <div className="hidden  lg:flex items-center justify-center gap-2 pt-10 ">
            <span className="w-[40px] border-b-[3px] border-secondaryDark"></span>
            <span className="w-[40px] border-b-[3px] border-secondaryDark"></span>
            <span className="w-[40px] border-b-[3px] border-primary"></span>
            <span className="w-[40px] border-b-[3px] border-secondaryDark"></span>
          
          </div>
        </div>
      </div>
    </>
  );
};
export default Insurance;
