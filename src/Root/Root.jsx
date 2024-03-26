import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Root;