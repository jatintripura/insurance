import message from "../../assets/img/message.png";
import network from "../../assets/img/network.png";
import contact from "../../assets/img/contact.png";
const Choose = () => {
  return (
    <div className="container mx-auto py-[70px]">
      <div className="flex flex-col items-center justify-center gap-y-4 ">
        <p className="text-secondaryDark text-[18px]">Why choose us</p>
        <h1 className="font-bold text-primary text-[30px] text-center lg:text-[42px] ">
          Why Insure Insurance is the Best
        </h1>
        <p className="text-center text-paragraph text-base pb-[70px] leading-7">
          We help to create a better environment and help our customers feel
          valued and<br></br> important in the time of crisis.
        </p>
      </div>
      <div className="flex flex-col gap-y-10 lg:gap-0 lg:flex-row  items-center justify-around pb ">
        <div className="flex flex-col items-center justify-center">
          <div className="inline-block p-[18px] bg-sectionBg rounded-full text-paragraph">
            <a href="#">
              <img src={message} alt="message" />
            </a>
          </div>
          <h1 className="text-[18px] text-primary font-bold pt-7 pb-3">
            24/7 Customer support
          </h1>
          <p className="text-sm text-paragraph text-center leading-7">
            24 hours we will be distracted by readable<br></br> content of a
            creative page
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="inline-block py-[18px] px-[20px] bg-sectionBg rounded-full text-paragraph">
            <a href="#">
              <img src={network} alt="message" />
            </a>
          </div>
          <h1 className="text-[18px] text-primary font-bold pt-7 pb-3">
            Financial Planing
          </h1>
          <p className="text-sm text-paragraph text-center leading-7">
            Financial planing will be distracted by the<br></br> readable
            content of a creative page
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="inline-block p-[18px] bg-sectionBg rounded-full text-paragraph">
            <a href="#">
              <img src={contact} alt="message" />
            </a>
          </div>
          <h1 className="text-[18px] text-primary font-bold pt-7 pb-3">
            Products Consulting
          </h1>
          <p className="text-sm text-paragraph text-center leading-7">
            Reader will be distracted by the readable<br></br> content of a
            creative page It is a long
          </p>
        </div>
      </div>
    </div>
  );
};
export default Choose;
