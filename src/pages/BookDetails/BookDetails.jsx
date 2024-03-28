import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import './BookDetails.css';
import { getStoredItems, moveFromWishToReadList, saveToLocal } from "../../utilities/localStorage";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const BookDetails = () => {

    const [singleBook, setSingleBook] = useState({});

    const [loading, setLoading] = useState(true);

    const { bookID } = useParams();
    const books = useLoaderData();

    useEffect(() => {
        setLoading(true);
        const arrayBooks = JSON.parse(books);

        const filteredBook = arrayBooks.find(book => book.bookID === bookID);

        if (filteredBook) {
            setSingleBook(filteredBook);
        }
        setLoading(false);
    }, [books, bookID])

    const { coverImage, bookTitle, authorName, category, reviewText, tags, totalPages, publisher, publishingYear, rating } = singleBook;

    const handleReadList = () => {
        const wishedBooks = getStoredItems('wish-list');
        const existsInWishlist = wishedBooks.find(book => book.bookID === singleBook.bookID);
        if (existsInWishlist) {
            moveFromWishToReadList(singleBook, 'wish-list', 'read-list')
        } else {
            saveToLocal(singleBook, 'read-list', 'Read List')
        }
    }

    // Check in the Read List Before Adding in the Wishlist
    const handleWishlist = () => {
        const readBooks = getStoredItems('read-list');
        const existsInReadList = readBooks.find(book => book.bookID === singleBook.bookID);
        if (!existsInReadList) {
            saveToLocal(singleBook, 'wish-list', 'Wishlist')
        } else {
            toast.error("You have already read the book!", { theme: "colored", autoClose: 3000 })
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            </div>
        )
    }

    return (
        <div className="mx-4 my-4 md:my-12 flex flex-col md:flex-row justify-between gap-4 md:gap-6 lg:gap-12 flex-1 text-[#131313]">
            <Helmet>
                <title>Review for {`${bookTitle}`} : : Verse Voyage</title>
            </Helmet>
            <div className="w-full md:w-[45%] bg-[#1313130D] rounded-2xl flex flex-col items-center justify-center">
                <img className="w-3/5 md:w-full hover:scale-105 transition duration-1000" src={coverImage} alt={bookTitle} title={bookTitle} />
            </div>
            <div className="w-full md:w-[55%] flex flex-col gap-5">
                <h2 className="playfair-display text-2xl md:text-4xl font-bold">{bookTitle}</h2>
                <h4 className="text-[#131313CC] text-lg md:text-xl font-medium">By : {authorName}</h4>
                <div>
                    <hr className="border border-[#13131326]" />
                    <h4 className="text-[#131313CC] text-lg md:text-xl font-medium my-2">{category}</h4>
                    <hr className="border border-[#13131326]" />
                </div>
                <p className="text-[#131313B3]"><span className="font-bold">Review : </span>{reviewText}</p>
                <div className="flex justify-start">
                    <span className="font-bold">Tag</span>
                    {
                        tags?.map((tag, index) => <p className='font-medium text-[#23BE0A] hover:text-[#50B1C9] hover:scale-105 transition duration-500 cursor-pointer ml-6' key={index}>#{tag}</p>)
                    }
                </div>
                <table className="flex-grow">
                    <thead>
                        <tr>
                            <th className="w-2/5"></th>
                            <th className="w-3/5"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Number of Pages:</td>
                            <td>{totalPages}</td>
                        </tr>
                        <tr>
                            <td>Publisher:</td>
                            <td>{publisher}</td>
                        </tr>
                        <tr>
                            <td>Year of Publishing:</td>
                            <td>{publishingYear}</td>
                        </tr>
                        <tr>
                            <td>Rating:</td>
                            <td>{rating}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex gap-4">
                    <button onClick={handleReadList} className="bg-transparent text-base md:text-lg font-semibold text-[#131313] border border-[#1313134D] rounded-xl w-[100px] h-14  hover:text-white hover:bg-[#1313134D] transition duration-500 flex justify-center items-center">Read</button>
                    <button onClick={handleWishlist} className="bg-[#50B1C9] text-base md:text-xl font-semibold text-white border border-[#50B1C9] rounded-xl w-32 h-14 hover:bg-transparent hover:text-[#50B1C9] transition duration-500 flex justify-center items-center">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;