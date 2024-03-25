import { Link } from 'react-router-dom';
import banner from '../../assets/grapes-of-wrath-banner.png';
const Banner = () => {
    return (
        <div className="playfair-display my-12 flex justify-between items-center px-6 md:px-16 xl:px-28 py-6 md:py-12 xl:py-20 bg-[#1313130D] rounded-3xl mx-4 md:mx-6 xl:mx-0">
            <div className="flex flex-col gap-4 md:gap-8 xl:gap-12">
                <h2 className="text-[#131313] text-lg md:text-3xl xl:text-6xl font-bold md:flex md:flex-col gap-8"> <span>Books to freshen up</span> <span>your bookshelf</span></h2>
                <Link className='work-sans bg-[#23BE0A] text-base md:text-xl font-semibold text-white border border-[#23BE0A] rounded-xl w-32 md:w-48 h-10 md:h-16 hover:bg-transparent hover:text-[#23BE0A] transition-all flex justify-center items-center' to={'/listed-books'}>View The List</Link>
            </div>
            <div className="w-40 md:w-80">
                <img src={banner} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;