import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookID, bookTitle, authorName, coverImage, rating, category, tags } = book;

    return (
        <Link className='hover:scale-105 transition' to={`/book-details/${bookID}`}>
            <div className='flex flex-col rounded-2xl border border-[#13131326] p-6'>
                <div className="">
                    <div className="flex justify-center items-center bg-[#F3F3F3] rounded-2xl p-4">
                        <img className='w-1/2' src={coverImage} alt={bookTitle} />
                    </div>
                    <div className="flex justify-start">
                        {
                            tags.map((tag, index) => <p className='ml-6 text-[#23BE0A]' key={index}>{tag}</p>)
                        }
                    </div>
                </div>

                <div className="">
                    <h3 className="">{bookTitle}</h3>
                    <h4 className="">By : {authorName}</h4>
                    <hr />
                    <div className="flex justify-between">
                        <h4 className="">{category}</h4>
                        <h4 className="">{rating}</h4>
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