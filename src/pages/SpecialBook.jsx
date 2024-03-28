// import banner from '../assets/images/banner.png'

import { Link } from "react-router-dom";

const SpecialBook = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-6 font-play"> Some Special Book Collections</h1>
           
           <div className="flex justify-center">
            <div className="flex  gap-4 mt-6 border-2 w-[400px] p-8 rounded-lg border-lime-500 bg-lime-100">
                    <h3 className="font-bold text-xl">Name:</h3>

                    <div className="font-semibold ">
                        <p> 1. The Dating PlayBook For Men</p>
                        <p> 2. Why Do You Hate Money</p>
                        <p> 3. The Hate U Give</p>
                        <p>4.The ScholarShip Monthly Planner</p>
                        <p>5. Spine Of The Dragon</p>
                    </div>

                </div>
                </div>

                <div className="flex justify-center">
                    <Link to='/'><button className="btn  mt-4 bg-sky-300  border-2 border-sky-500 ">Go back</button>
                    </Link>
                </div>
           
        </div>
    );
};

export default SpecialBook;