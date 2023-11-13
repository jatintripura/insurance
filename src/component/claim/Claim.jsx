import video from "../../assets/img/video.png";
import { IoIosPlay } from "react-icons/io";
const Claim = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center">
        <div className="pb-[70px]">
          <p className="text-[18px] text-secondaryDark text-center">
            How it works
          </p>
          <h1 className="text-[30px] lg:text-[42px] leading-12 capitalize text-primary font-bold text-center pt-[12px] pb-[20px]">
            Besnik Insurance Simplified Claims
          </h1>
          <p className="text-paragraph text-base leading-7 text-center">
            We help to create a better environment and help our customers feel
            valued and <br></br>important in the time of crisis.
          </p>
        </div>
        <div className=" flex flex-col gap-y-[125px] lg:flex lg:flex-row  lg:gap-x-[125px]">
          <div className="relative">
            <img
              className="w-full h-full object-cover "
              src={video}
              alt="video"
            />
            <div className="absolute top-1/2 right-1/2 -translate-x-1\2 -translate-y-1/2  lg:pt-[25px] pl-[21px] lg:pl-[26px] pb-[18px] lg:pb-[23px] pr-[17px] lg:pr-[22px] text-3xl text-white pt-5  bg-secondary rounded-full">
              <span className=" ">
                <IoIosPlay />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-[45px]">
            <div className="flex flex-col gap-y-[30px]">
              <div className="flex items-center  gap-x-[30px]">
                <div className="py-[13px] px-[20px] rounded-full inline-block bg-[#F8FCFF]">
                  <h1 className=" m-0 p-0 text-[20px] font-bold  text-secondary">
                    1
                  </h1>
                </div>
                <div className="flex flex-col gap-y-[15px]">
                  <h1 className="text-primary font-bold text-[20px]">
                    Report Claim
                  </h1>
                  <p className="text-paragraph text-base">
                    Lorem ipsum dolor sit amet, consectetu.
                  </p>
                </div>
              </div>
              <div className="flex items-center  gap-x-[30px]">
                <div className="py-[13px] px-[20px] rounded-full inline-block bg-[#F8FCFF]">
                  <h1 className=" m-0 p-0 text-[20px] font-bold  text-secondary">
                    2
                  </h1>
                </div>
                <div className="flex flex-col gap-y-[15px]">
                  <h1 className="text-primary font-bold text-[20px]">
                    Claim Processing
                  </h1>
                  <p className="text-paragraph text-base">
                    Lorem ipsum dolor sit amet, consectetu.
                  </p>
                </div>
              </div>
              <div className="flex items-center  gap-x-[30px]">
                <div className="py-[13px] px-[20px] rounded-full inline-block bg-[#F8FCFF]">
                  <h1 className=" m-0 p-0 text-[20px] font-bold  text-secondary">
                    3
                  </h1>
                </div>
                <div className="flex flex-col gap-y-[15px]">
                  <h1 className="text-primary font-bold text-[20px]">
                    Final Settlement
                  </h1>
                  <p className="text-paragraph text-base">
                    Lorem ipsum dolor sit amet, consectetu.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button className="py-[23px] px-[56px] text-[#FBFDFE] capitalize font-bold bg-secondary  rounded-lg text-[19px]">
                get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Claim;
