import { Link } from 'react-router-dom';
import banner from '../../assets/grapes-of-wrath-banner.png';
const Banner = () => {
    return (
        <div className="playfair-display my-12 flex justify-between items-center px-28 py-20 bg-[#1313130D] rounded-3xl">
            <div className="flex flex-col gap-12">
                <h2 className="text-[#131313] text-6xl font-bold leading-normal">Books to freshen up <br /> your bookshelf</h2>
                <Link className='work-sans bg-[#23BE0A] text-xl font-semibold text-white border border-[#23BE0A] rounded-xl md:w-48 md:h-16 hover:bg-white hover:text-[#23BE0A] transition-all flex justify-center items-center' to={'/listed-books'}>View The List</Link>
            </div>
            <div className="w-80">
                <img src={banner} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;