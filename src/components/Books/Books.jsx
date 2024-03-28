import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    const [bookLength, setBookLength] = useState(6);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/nazmul-nhb/Fake-API/main/book-review/books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);


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
                    className="btn btn-primary">Show All Books</button>
            </div>
        </div>
    );
};

export default Books;