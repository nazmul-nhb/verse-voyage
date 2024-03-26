import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {

    const { bookID, bookTitle, authorName, coverImage, rating, category, tags } = book;

    return (
        <Link className='hover:scale-105 hover:opacity-85 transition duration-1000' to={`/book-details/${bookID}`}>
            <div className='flex flex-col justify-between gap-6 rounded-2xl border border-[#13131326] font-medium p-6 h-full'>
                <div className="flex flex-col gap-6">
                    <div className="flex justify-center items-center bg-[#F3F3F3] rounded-2xl p-4">
                        <img className='w-1/2' src={coverImage} alt={bookTitle} />
                    </div>
                    <div className="flex justify-start">
                        {
                            tags.map((tag, index) => <p className='ml-6 text-[#23BE0A]' key={index}>{tag}</p>)
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="playfair-display text-2xl font-bold">{bookTitle}</h3>
                    <h4 className="text-[#131313CC]">By : {authorName}</h4>
                    <hr className='border border-dashed border-[#13131326]' />
                    <div className="flex justify-between">
                        <h4 className="">{category}</h4>
                        <h4 className="flex gap-2 items-center">{rating} <FaRegStar></FaRegStar></h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};
Book.propTypes = {
    book: PropTypes.object.isRequired,
}
export default Book;