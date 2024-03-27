import { useEffect, useState } from "react";
import { getStoredItems } from "../../utilities/localStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FB0100', '#AA3BBC', '#23BE0A', '#59C6D2', '#005467', '#FFBB28', '#FF8042', '#FB0100', '#AA3BBC', '#23BE0A', '#59C6D2'];

const getPath = (x, y, width, height) => {
    return `M${x}, ${y + height} C${x + width / 3}, ${y + height} ${x + width / 2}, ${y + height / 3} ${x + width / 2}, ${y} C${x + width / 2}, ${y + height / 3} ${x + (2 * width) / 3}, ${y + height} ${x + width}, ${y + height} Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedReadBooks = getStoredItems('read-list');
        setReadBooks(storedReadBooks);
    }, [])

    const chartedBooks = readBooks.map(book => {
        const data = {
            title: book.bookTitle,
            Pages: book.totalPages
        }
        return data;
    });

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center mb-16">
            <div className="mb-2 md:mb-12"></div>
            <ResponsiveContainer width="80%" height="80%">
                <BarChart data={chartedBooks} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="title" />
                    <YAxis dataKey="Pages" strokeDasharray="1 5" />
                    <Bar dataKey="Pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {chartedBooks.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                    <Tooltip cursor={false}></Tooltip>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default PagesToRead;