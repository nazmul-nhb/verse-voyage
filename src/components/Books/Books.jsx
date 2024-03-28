import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    const [bookLength, setBookLength] = useState(6);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://raw.githubusercontent.com/nazmul-nhb/Fake-API/main/book-review/books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-teal-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-teal-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-teal-600"></div>
            </div>
        )
    }

    return (
        <div className="work-sans my-8 md:my-24">
            <h2 className="playfair-display text-4xl font-bold text-center mb-9">Books</h2>
            <div className="grid min-[600px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {
                    books?.slice(0, bookLength).map(book => <Book key={book.bookID} book={book}></Book>)
                }
            </div>
            <div className={bookLength === books.length ? 'hidden' : 'flex justify-center items-center mt-8 md:mt-20'}>
                <button
                    onClick={() => setBookLength(books.length)}
                    className="flex items-center justify-center tracking-wide p-3 font-bold rounded-lg bg-teal-600 text-white border border-teal-600 hover:text-teal-600 hover:bg-transparent transition duration-500">Show All Books</button>
            </div>
        </div>
    );
};

export default Books;