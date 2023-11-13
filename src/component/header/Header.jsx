import {TfiMenu } from 'react-icons/tfi';

const Header=()=>{
    return (
      <div className="container mx-auto">
       <div className="px-3 flex items-center justify-between py-5">
        <div className='font-bold text-secondary text-[28px] capitalize'>insure</div>
        <div className='flex items-center justify-between gap-20'>
            <div className='hidden lg:block'>
                <ul className='flex  uppercase gap-10 text-primaryDark'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">claims</a></li>
                    <li><a href="#">insurance</a></li>
                  
                </ul>
            </div>
            <div className='flex gap-10 items-center justify-center'>
                <button className='text-secondary capitalize  py-[10px] lg:py-[13px]  px-4 lg:px-5 border border-secondary rounded-md'>get started</button>
                <div className='lg:hidden text-2xl font-medium'><TfiMenu/></div>
            </div>
           
        </div>
       </div>
      </div>
    )
}
export default Header;