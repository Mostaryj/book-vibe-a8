import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail => detail.Id === idInt);

    console.log(detail);
    return (
        <div>
            

           <div className="grid grid-cols-1 lg:grid-cols-2  ">

            <div className="  p-8 bg-slate-300 rounded-lg flex items-center justify-center">
                <img className="lg:w-[270px] " src={detail.image} alt="" />
                </div>

            <div className="p-8">
                <h2 className="text-3xl font-bold">{detail.bookName}</h2>
                <h4 className="text-normal">By: {detail.author}</h4>
                <hr className="mt-4"/>
                <p>{detail.category}</p>
                <hr className="mt-4"/>
                <p><span className="font-bold">Review: </span>{detail.review}</p>
                <div className="flex">
                    <p><span className="font-bold">Tag </span> <span className="text-lime-500 font-bold ml-4"># {detail.tags[0]}</span></p>
                    <p> <span className="text-lime-500 font-bold ml-4"># {detail.tags[1]}</span></p>
                </div>
                <hr className="mt-8"/>
                <p>Name of Pages: <span className="font-bold">{detail.totalPages}</span></p>
                <p>Publisher: <span className="font-bold">{detail.publisher}</span></p>
                <p>Year of Publishing: <span className="font-bold">{detail.yearOfPublishing}</span></p>
                <p>Rating: <span className="font-bold">{detail.rating}</span></p>

                <button className="btn mt-4 font-bold border-2">Read</button>
                <button className="btn bg-sky-500 text-white ml-4 font-bold">WishList</button>
               
              
            </div>
           </div>

        </div>
    );
};

export default Details;