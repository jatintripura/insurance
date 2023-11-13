import { IoIosContact } from "react-icons/io";
import {AiOutlineCheck } from "react-icons/ai";
import {HiShieldCheck } from "react-icons/hi";
import {AiTwotoneGift } from "react-icons/ai";

const Price = () => {
  return (
    <>
      <div className="bg-sectionBg">
        <div className="container mx-auto py-[70px]">
          <div>
            <div>
              <h5 className="text-secondaryDark text-lg text-center">
                Honest Pricing
              </h5>
              <h1 className="text-primary text-3xl lg:text-5xl font-bold text-center">
                Simple & honest pricing
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 items-center justify-center gap-x-[30px] pt-[70px]">
                <div className="flex flex-col gap-y-12 bg-white p-7">
                    <div className="flex gap-x-[19px]">
                       <div className="p-3 bg-sectionBgDark inline-block rounded-full">
                       <span className="text-2xl text-secondary "> <a href="#"><IoIosContact/></a></span>
                       </div>
                        <div>
                            <h1 className="text-xl font-bold text-primary">Basic</h1>
                            <h5 className="text-sm font-medium text-primary">10 days of freeplan.</h5>
                        </div>
                    </div>
                  <div className="flex flex-col gap-y-5">
                  <div className="flex  gap-x-[18px]">
                        <span className="font-bold text-secondary text-xl"><AiOutlineCheck/></span>
                        <p className="text-base text-paragraph">Rapidiously strategize value</p>
                    </div>
                    <div className="flex  gap-x-[18px]">
                        <span className="font-bold text-secondary text-xl"><AiOutlineCheck/></span>
                        <p className="text-base text-paragraph">Progressively visualize leadership</p>
                    </div>
                    <div className="flex  gap-x-[18px]">
                        <span className="font-bold text-secondary text-xl"><AiOutlineCheck/></span>
                        <p className="text-base text-paragraph">Equity invested supply chains.</p>
                    </div >
                     <div className="pl-[18px]">
                     <button className=" py-[18px] px-[29px] bg-secondary text-base font-medium text-white capitalize first-letter rounded-2xl">Start 10 days of free plan</button>
                   
                     </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-12 bg-white p-7">
                    <div className="flex gap-x-[19px]">
                       <div className="p-3 bg-sectionBgDark inline-block rounded-full">
                       <span className="text-2xl text-secondary "> <a href="#"><AiTwotoneGift/></a></span>
                       </div>
                        <div>
                            <h1 className="text-xl font-bold text-primary">Professional</h1>
                            <h5 className="text-sm font-medium text-primary">200 USD/Year.</h5>
                        </div>
                    </div>
                  <div className="flex flex-col gap-y-5">
                  <div className="flex  gap-x-[18px]">
                        <span className="font-bold text-secondary text-xl"><AiOutlineCheck/></span>
                        <p className="text-base text-paragraph">Rapidiously strategize value</p>
                    </div>
                    <div className="flex  gap-x-[18px]">
                        <span className="font-bold text-secondary text-xl"><AiOutlineCheck/></span>
                        <p className="text-base text-paragraph">Progressively visualize leadership</p>
                    </div>
                    <div className="flex  gap-x-[18px]">
                        <span className="font-bold text-secondary text-xl"><AiOutlineCheck/></span>
                        <p className="text-base text-paragraph">Equity invested supply chains.</p>
                    </div >
                     <div className="pl-[18px]">
                     <button className=" py-[18px] px-[77px] bg-secondary text-base font-medium text-white capitalize first-letter rounded-2xl">Choose plan</button>
                   
                     </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-12 bg-white p-7">
                    <div className="flex gap-x-[19px]">
                       <div className="p-3 bg-sectionBgDark inline-block rounded-full">
                       <span className="text-2xl text-secondary "> <a href="#"><HiShieldCheck/></a></span>
                       </div>
                        <div>
                            <h1 className="text-xl font-bold text-primary">Premium</h1>
                            <h5 className="text-sm font-medium text-primary">400 USD/Year</h5>
                        </div>
                    </div>
                  <div className="flex flex-col gap-y-5">
                  <div className="flex  gap-x-[18px]">
                        <span className="font-bold text-secondary text-xl"><AiOutlineCheck/></span>
                        <p className="text-base text-paragraph">Rapidiously strategize value</p>
                    </div>
                    <div className="flex  gap-x-[18px]">
                        <span className="font-bold text-secondary text-xl"><AiOutlineCheck/></span>
                        <p className="text-base text-paragraph">Progressively visualize leadership</p>
                    </div>
                    <div className="flex  gap-x-[18px]">
                        <span className="font-bold text-secondary text-xl"><AiOutlineCheck/></span>
                        <p className="text-base text-paragraph">Equity invested supply chains.</p>
                    </div >
                     <div className="pl-[18px]">
                     <button className=" py-[18px] px-[77px] bg-secondary text-base font-medium text-white capitalize first-letter rounded-2xl"> Choose plan</button>
                   
                     </div>
                  </div>
                </div>
                
                <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Price;
