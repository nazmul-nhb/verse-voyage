import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/nazmul-nhb/Fake-API/main/book-review/books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);


    return (
        <div className="work-sans mt-8 md:mt-24">
            <h2 className="playfair-display text-4xl font-bold text-center mb-9">Books {books.length}</h2>
            <div className="grid min-[600px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {
                    books.map(book => <Book key={book.bookID} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;