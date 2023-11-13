import { BsArrowLeftShort } from "react-icons/bs";
import {BsArrowRightShort } from "react-icons/bs";
import help1 from "../../assets/img/help1.png"
import help2 from "../../assets/img/help2.png"
import help3 from "../../assets/img/help3.png"
const Help = () => {
  return (
  <>
  <div className="bg-sectionBgDark">
    <div className="container mx-auto py-[70px]">
        <div className="flex items-center justify-between">
            <h1 className="text-primary font-bold text-5xl text-center lg:text-start">We help to create a betters<br></br> important in the time</h1>
            <div className="hidden lg:flex gap-x-[22px] ">
                <div className="p-3 border-2 border-secondary  inline-block rounded-full text-3xl font-bold text-secondary">
               <a href="#"> <BsArrowLeftShort/></a>
                </div>
                <div className="p-3 border-2 bg-secondary  inline-block rounded-full text-3xl font-bold text-white">
               <a href="#"> <BsArrowRightShort/></a>
                </div>
               
              
            </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-y-0  gap-x-11 pt-20">
            <div className="bg-sectionBg py-[32px] px-[44px] flex flex-col gap-y-3">
                <img src={help1} alt="help1" />
                <h1 className="text-lg leading-8 font-bold text-primary">Baggage insurance procedures Scan<br></br> Contact helps </h1>
                <p className="text-base text-paragraph leading-8">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-sectionBg py-[32px] px-[44px] flex flex-col gap-y-3">
                <img src={help2} alt="help1" />
                <h1 className="text-lg leading-8 font-bold text-primary">Baggage insurance procedures Scan<br></br> Contact helps </h1>
                <p className="text-base text-paragraph leading-8">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-sectionBg py-[32px] px-[44px] flex flex-col gap-y-3">
                <img src={help3} alt="help1" />
                <h1 className="text-lg leading-8 font-bold text-primary">Baggage insurance procedures Scan<br></br> Contact helps </h1>
                <p className="text-base text-paragraph leading-8">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        

    </div>
  </div>
  </>);
};
export default Help;
