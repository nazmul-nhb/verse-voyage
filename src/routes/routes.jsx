import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesToRead from "../pages/PagesToRead/PagesToRead";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/listed-books',
                title: 'Listed Books',
                element: <ListedBooks></ListedBooks>,
            },
            {
                path: '/pages-to-read',
                element: <PagesToRead></PagesToRead>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/book-details/:bookID',
                element: <BookDetails></BookDetails>,
                loader: () => fetch(`https://raw.githubusercontent.com/nazmul-nhb/Fake-API/main/book-review/books.json`)
            }
        ],
    },
]);