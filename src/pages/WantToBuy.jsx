import { Link } from "react-router-dom";

const WantToBuy = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl text-center mt-8">Want to Buy Books</h1>
            <p className="text-center">Here is some lists of the category and my favorite writers name. These are the book I want to buy.</p>

            <div className="lg:flex justify-center gap-8">
                <div className="flex gap-4 mt-6 border-2 w-[400px] p-8 rounded-lg border-lime-500 bg-lime-100 shadow-lg">
                    <h3 className="font-bold text-xl">Category:</h3>

                    <div className="font-semibold ">
                        <p> 1. Historical</p>
                        <p> 2. Science Fiction</p>
                        <p> 3. Educational</p>
                        <p>4. Novel</p>
                        <p>5. Social</p>
                    </div>

                </div>

                <div className="flex gap-4 mt-6 border-2 w-[400px] p-8 shadow-lg rounded-lg border-sky-400 bg-sky-100">
                    <h3 className="font-bold text-xl">Favorite Writer:</h3>

                    <div className="font-semibold ">
                        <p> 1. William Shakespeare</p>
                        <p> 2. Jane Austen</p>
                        <p> 3. Charles Dickens</p>
                        <p>4. Charles Dickens</p>
                        <p> 5. George Orwell</p>
                    </div>

                </div>
            </div>


            
                <div className="
                ml-16 lg:ml-0 flex justify-center mt-8">
                    <button className="btn bg-orange-200 border-2 border-orange-600"> See Details</button>
                </div>
                   <h5 className="ml-16 lg:ml-0 text-center mt-4">Or,</h5>
                <div className="flex justify-center">
                    <Link to='/'><button className="btn lg:ml-0 ml-16 mt-4 bg-lime-500  border-2 border-lime-800 ">Go back</button>
                    </Link>
                </div>
           
        </div>
    );
};

export default WantToBuy;