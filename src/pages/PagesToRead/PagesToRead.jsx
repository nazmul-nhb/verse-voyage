import { useEffect, useState } from "react";
import { getStoredItems } from "../../utilities/localStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

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
        <div className="flex justify-center items-center">
            <BarChart
                width={1200}
                height={500}
                data={chartedBooks}
                margin={{
                    top: 40,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                padding={{
                    top: 80,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis />
                <Bar dataKey="Pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {chartedBooks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
                <Tooltip cursor={false}></Tooltip>
            </BarChart>
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