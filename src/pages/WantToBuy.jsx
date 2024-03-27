
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
        </div>
    );
};

export default WantToBuy;