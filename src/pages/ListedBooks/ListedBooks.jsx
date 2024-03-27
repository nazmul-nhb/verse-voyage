import { useEffect, useState } from "react";
import { getStoredItems } from "../../utilities/localStorage";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBook from "../ReadBook/ReadBook";
import WishedBook from "../WishedBook/WishedBook";

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishedBooks, setWishedBooks] = useState([]);
    const [arrowDown, setArrowDown] = useState(true);

    const [sortedReadBooks, setSortedReadBooks] = useState([]);
    const [sortedWishedBooks, setSortedWishedBooks] = useState([]);

    useEffect(() => {
        const storedReadBooks = getStoredItems('read-list');
        setReadBooks(storedReadBooks);
        setSortedReadBooks(storedReadBooks);
    }, [])

    useEffect(() => {
        const storedWishedBooks = getStoredItems('wish-list');
        setWishedBooks(storedWishedBooks);
        setSortedWishedBooks(storedWishedBooks);
    }, [])

    const handleSortBooks = (sortBy) => {
        if (sortBy === 'rating') {
            setSortedReadBooks([...readBooks].sort((a, b) => b?.rating - a?.rating));
            setSortedWishedBooks([...wishedBooks].sort((a, b) => b?.rating - a?.rating));
        } else if (sortBy === 'pages') {
            setSortedReadBooks([...readBooks].sort((a, b) => b?.totalPages - a?.totalPages));
            setSortedWishedBooks([...wishedBooks].sort((a, b) => b?.totalPages - a?.totalPages));
        } else if (sortBy === 'year') {
            setSortedReadBooks(readBooks.sort((a, b) => b?.publishingYear - a?.publishingYear))
            setSortedWishedBooks([...wishedBooks].sort((a, b) => b?.publishingYear - a?.publishingYear))
        }
    }

    return (
        <div className="mx-4 my-4 md:my-12 text-[#131313]">
            <div className="bg-[#1313130D] py-9 rounded-2xl flex justify-center items-center mb-8">
                <h3 className="text-3xl font-bold">Books</h3>
            </div>
            <div className="flex justify-center items-center">
{/* 
                <select onChange={(e) => handleSortBooks(e.target.value)} defaultValue='sort-by' className="select select-bordered select-lg bg-[#23BE0A] text-base md:text-xl font-semibold text-white border border-[#23BE0A] rounded-xl w-36 h-14 hover:bg-transparent hover:text-[#23BE0A] transition duration-500 flex justify-center items-center gap-3 cursor-pointer">
                    <option value='sort-by' disabled>Sort By</option>
                    <option value='rating'>Rating</option>
                    <option value='pages'>Number of Pages</option>
                    <option value='year'>Published Year</option>
                </select>
 */}

                <details className="dropdown">
                    <summary onClick={() => setArrowDown(!arrowDown)} className="m-1 bg-[#23BE0A] text-base md:text-xl font-semibold text-white border border-[#23BE0A] rounded-xl w-36 h-14 hover:bg-transparent hover:text-[#23BE0A] transition duration-500 flex justify-center items-center gap-3 cursor-pointer">Sort By {arrowDown ? < FaChevronDown /> : <FaChevronUp />}</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-44">
                        <li><button onClick={() => handleSortBooks('rating')}>Rating</button></li>
                        <li><button onClick={() => handleSortBooks('pages')}>Number of Pages</button></li>
                        <li><button onClick={() => handleSortBooks('year')}>Published Year</button></li>
                    </ul>
                </details>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                {/* Read Books Tab */}
                <TabPanel>
                    <div className="flex flex-col gap-6">
                        {
                            sortedReadBooks.map(readBook => <ReadBook key={readBook.bookID} readBook={readBook}></ReadBook>)
                        }
                    </div>
                </TabPanel>
                {/* Wishlist Books Tab */}
                <TabPanel>
                    <div className="flex flex-col gap-6">
                        {
                            sortedWishedBooks.map(wishedBook => <WishedBook key={wishedBook.bookID} wishedBook={wishedBook}></WishedBook>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;