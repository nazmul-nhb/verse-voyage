import { useEffect, useState } from "react";
import { getStoredItems } from "../../utilities/localStorage";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBook from "../ReadBook/ReadBook";
import WishedBook from "../WishedBook/WishedBook";
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishedBooks, setWishedBooks] = useState([]);
    const [arrowDown, setArrowDown] = useState(true);

    const [sortedReadBooks, setSortedReadBooks] = useState([]);
    const [sortedWishedBooks, setSortedWishedBooks] = useState([]);

    const [tabIndex, setTabIndex] = useState(0);

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
            <Helmet>
                <title>Your Listed Books : : Verse Voyage</title>
            </Helmet>
            <div className="bg-[#1313130D] py-9 rounded-2xl flex justify-center items-center mb-8">
                <h3 className="text-3xl font-bold">Books</h3>
            </div>
            {/* Dropdown Menu (For Sort By Buttons) */}
            <div className="flex justify-center items-center">
                <details className="dropdown">
                    <summary onClick={() => setArrowDown(!arrowDown)} className="bg-[#23BE0A] text-base md:text-lg font-semibold text-white border border-[#23BE0A] w-40 h-14 hover:bg-transparent hover:text-[#23BE0A] transition duration-500 flex justify-center items-center gap-3 cursor-pointer rounded-lg">Sort By {arrowDown ? < FaChevronDown /> : <FaChevronUp />}</summary>
                    <div className="rounded-lg bg-base-100 dropdown-content z-[1]">
                        <ul className="flex gap-2 flex-col items-center justify-center p-1 shadow bg-[#1313130D] rounded-lg w-40 text-base">
                            <li className="w-full"><button className="hover:bg-[#23BE0A] hover:text-white transition duration-500 rounded-lg w-full" onClick={() => handleSortBooks('rating')}>Rating</button></li>
                            <li className="w-full"><button className="hover:bg-[#23BE0A] hover:text-white transition duration-500 rounded-lg w-full" onClick={() => handleSortBooks('pages')}>Number of Pages</button></li>
                            <li className="w-full"><button className="hover:bg-[#23BE0A] hover:text-white transition duration-500 rounded-lg w-full" onClick={() => handleSortBooks('year')}>Published Year</button></li>
                        </ul>
                    </div>
                </details>
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={'mt-14'}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                {/* Read Books Tab */}
                <TabPanel>
                    <div className="mt-8 flex flex-col gap-6">
                        {
                            sortedReadBooks.map(readBook => <ReadBook key={readBook.bookID} readBook={readBook}></ReadBook>)
                        }
                    </div>
                </TabPanel>
                {/* Wishlist Books Tab */}
                <TabPanel>
                    <div className="mt-8 flex flex-col gap-6">
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