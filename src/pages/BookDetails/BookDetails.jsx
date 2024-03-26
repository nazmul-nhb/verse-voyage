import { useParams } from "react-router-dom";

const BookDetails = () => {

    let { bookID } = useParams();
    console.log(bookID);

    return (
        <div className="mx-4 md:mx-6 xl:mx-4 ">
<p>hello</p>
        </div>
    );
};

export default BookDetails;