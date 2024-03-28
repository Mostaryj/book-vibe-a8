import { useLoaderData, useParams } from "react-router-dom";
import { getStoredRead, saveList } from "../utils/localStorage";
import{getStoredWish, saveWishList} from "../utils/localStorage.js"

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";


const Details = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail => detail.Id === idInt);

    
    const [books, setBooks] = useState([]);

    const handleRead = (book)=>{
        const stored = getStoredRead();
        console.log(stored);
        const bookIsExit = stored.find((bk)=>bk === idInt);
        console.log(bookIsExit);

        if(!bookIsExit){
            saveList(idInt)
            setBooks([...books, book])
            toast.success(' added to read list successfully')
        }

       else{
        toast.error('already added')
       }
    }

   const handleWishList =(book) =>{
    const storedRead = getStoredRead();

    const bookIsExitRead = storedRead.find((bk)=> bk === idInt);

    const stored = getStoredWish();
    const bookIsExit = stored.find((bk)=> bk === idInt)
    if(!bookIsExit && !bookIsExitRead){
        saveWishList(idInt)
        setBooks([...books, book])
        toast.success('added to read list successfully')

    }
   
   else{
    toast.error('already added')
   }
}

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

           
                <button onClick={handleRead} className="btn mt-4 font-bold border-2">  Read</button>
               
                <button onClick={handleWishList} className="btn bg-sky-500 text-white ml-4 font-bold">WishList</button>
               
              
            </div>
           </div>
           <ToastContainer/>

        </div>
    );
};

export default Details;