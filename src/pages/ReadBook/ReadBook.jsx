import PropTypes from 'prop-types';
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const ReadBook = ({ readBook }) => {

    const { bookID, bookTitle, authorName, coverImage, publishingYear, publisher, totalPages, rating, category, tags } = readBook;

    return (
        <div className='border border-[#13131326] rounded-2xl p-6'>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/4 bg-[#1313130D] rounded-2xl flex justify-center items-center">
                    <img src={coverImage} alt={bookTitle} title={bookTitle} className="w-2/3 hover:scale-105 transition duration-1000" />
                </div>
                <div className="w-full md:w-3/4 flex flex-col gap-4">
                    <h3 className="playfair-display text-2xl font-bold">{bookTitle}</h3>
                    <h4 className="font-medium text-[#131313CC]">By : {authorName}</h4>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-9">
                        <div className="flex gap-4 md:gap-9">
                            <span className="font-bold">Tag</span>
                            {
                                tags?.map((tag, index) => <p className='font-medium text-[#23BE0A] hover:text-[#50B1C9] hover:scale-105 transition duration-500 cursor-pointer' key={index}>#{tag}</p>)
                            }
                        </div>
                        <h3 className='flex items-center gap-3 text-[#131313CC]'><FaRegCalendarAlt /> Year of Publishing: {publishingYear}</h3>
                    </div>
                    <div className=" flex-grow flex flex-col md:flex-row gap-6 text-[#13131399]">
                        <h4 className="flex items-center gap-3"><BsPeople /> Publisher: {publisher}</h4>
                        <h4 className="flex items-center gap-3"><HiOutlineDocumentChartBar /> Page {totalPages} </h4>
                    </div>
                    <hr className='w-full flex-grow' />
                    <div className='flex gap-3 text-center'>
                        <div className="text-xs md:text-base bg-[#328EFF26] border border-[#328EFF26] text-[#328EFF] rounded-[30px] px-4 py-2">Category: {category}</div>
                        <div className="text-xs md:text-base bg-[#FFAC3326] border border-[#FFAC3326] text-[#FFAC33] rounded-[30px] px-4 py-2">Rating: {rating}</div>
                        <Link className='text-xs md:text-lg font-medium bg-[#23BE0A] border border-[#23BE0A] text-white rounded-[30px] px-4 py-2 hover:text-[#23BE0A] hover:bg-transparent transition duration-500' to={`/book-details/${bookID}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReadBook.propTypes = {
    readBook: PropTypes.object.isRequired
}

export default ReadBook;