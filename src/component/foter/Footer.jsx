import elip1 from "../../assets/img/elip1.png";
import elip2 from "../../assets/img/elip2.png";
import elip3 from "../../assets/img/elip3.png";
import elip4 from "../../assets/img/elip4.png";

import elip5 from "../../assets/img/elip5.png";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="bg-sectionBg">
        <div className="container mx-auto">
        <div className="py-12">
        <div className="flex flex-col items-center justify-center px-[172px] ">
            <div>
              <h5 className="text-lg text-secondaryDark text-center">
                Testimonial
              </h5>
              <h1 className="py-3 text-3xl lg:text-5xl text-primary font-bold text-center">
                What people say about Besnik Insurance{" "}
              </h1>
              <p className="text-center text-paragraph leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                hendrerit elit turpis, a porttitor tellus sollicitudin at. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.{" "}
              </p>
            </div>
          </div>
          <div className="py-[100px]">
            <div className="flex  items-center justify-between px-[172px] pb-3">
              <span>
                <img src={elip1} alt="elip list" />
              </span>
              <span>
                <img src={elip2} alt="elip list" />
              </span>
              <span>
                <img src={elip3} alt="elip list" />
              </span>
              <span>
                <img src={elip4} alt="elip list" />
              </span>
              <span>
                <img src={elip5} alt="elip list" />
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-4">
              <h1 className="font-bold text-primary text-lg">Matthew Young</h1>

              <p className="text-base text-paragraph">
                Legal Consultant, United States
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-y-5 px-0 lg:flex  lg:flex-row lg:items-start  lg:justify-between lg:gap-y-0 lg:px-[100px]">
            <div>
              <h1 className="text-secondary font-bold text-2xl text-center lg:text-start">Insurance</h1>
              <p className="text-base text-paragraph leading-7 pt-9 text-center lg:text-start">
                Long established fact that a<br></br> reader will be distracted.
              </p>
            </div>
            <div>
              <h1 className=" font-bold text-primary capitalize text-2xl text-center lg:text-start">
                important links
              </h1>
              <ul className="flex flex-col text-paragraph text-base gap-y-[15px] pt-9 text-center lg:text-start">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Agent Contact</a>
                </li>
                <li>
                  <a href="#">Insurance Services</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-primary capitalize text-2xl text-center lg:text-start">Contacts</h1>
             <div className="pt-9 flex flex-col gap-y-[15px]">

             <div className="flex items-center gap-x-5 ">
                <span className="text-3xl text-paragraph font-bold ">
                  <CiLocationOn />
                </span>
                <p className="text-paragraph text-base leading-7">
                  34/5 evergreen road, lorde city<br></br>
                  New work, United States
                </p>
              </div>
              <div className="flex items-center gap-x-5">
                <span className="text-3xl text-paragraph font-bold"><HiOutlineMail/></span>
                <p className="text-paragraph text-base leading-7">besnik11@gmail.com</p>
              </div>
              <div className="flex items-center gap-x-5">
                <span className="text-3xl text-paragraph font-bold"><FiPhoneCall/></span>
                <p className="text-paragraph text-base leading-7">+1 2354 5645 241</p>
              </div>
             </div>
            </div>
            <div>
                <h1 className="font-bold text-primary capitalize text-2xl text-center lg:text-start">Get in Touch</h1>
                <p className="text-base text-paragraph leading-7 pt-9 text-center lg:text-start">Question or feedback?<br></br> We’d love to hear from you.</p>
            </div>
          </div>
        </div>
          <div className="p-5">
            <p className="text-paragraph text-base  text-center">© 2022 UIDesign.to - All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
