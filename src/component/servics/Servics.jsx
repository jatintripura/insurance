import { LuCheckSquare} from "react-icons/lu";
import all from "../../assets/img/all.png"
const Servics =()=>{
    return (
        <>
        <div className="container mx-auto">
            <div className=" flex flex-col lg:flex-row items-center justify-between gap-y-10">


            <div className="flex flex-col gap-y-5">
               <div>
               <h5 className="text-lg text-secondaryDark font-medium  text-center lg:text-start">INSURANCE SERVICES</h5>
                <h1 className=" text-primary font-bold text-3xl text-center lg:text-start lg:text-5xl py-3">Seamless data and resource maximizing systems.</h1>
               </div>
                <div className=" px-10 lg:px-0 flex items-start gap-x-5 ">
                    <div className="p-3 rounded-full bg-secondary inline-block">
                    <span className="text-xl font-bold text-white
                    "><LuCheckSquare/></span>
                    </div>
                    <div className="flex flex-col gap-y-[15px]">
                        <h1 className="text-xl text-primary font-medium">Comprehensive Insurance</h1>
                        <p className="text-paragraph text-base leading-7">A strong, up-to-date, employee benefits insurance<br></br> program is vital for attracting  good employees.</p>
                    </div>
                </div>
                <div className=" px-10 lg:px-0
                flex items-start gap-x-5 ">
                    <div className="p-3 rounded-full bg-secondary inline-block">
                    <span className="text-xl font-bold text-white
                    "><LuCheckSquare/></span>
                    </div>
                    <div className="flex flex-col gap-y-[15px]">
                        <h1 className="text-xl text-primary font-medium">Say goodbye to paperwork.</h1>
                        <p className="text-paragraph text-base leading-7"> It takes diligence, creativity and attention to detail to<br></br> ensure you are getting the best each and every year.</p>
                    </div>
                </div>
               <div className="text-center lg:text-start">
               <button className="py-[23px] px-[56px] bg-secondary text-lg font-medium text-white rounded-lg">Get started </button>
               </div>
            </div>
            <div>
                <img src={all} alt="all" />
            </div>






            </div>

        </div>
        </>
    )
}
export default Servics;