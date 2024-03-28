import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayOut = () => {
    return (
        <div className="container mx-auto ">
            <div>
                <Navbar></Navbar>
            </div>
          

            {/* packets */}
           <Outlet></Outlet>

        </div>
    );
};

export default MainLayOut;