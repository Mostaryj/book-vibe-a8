import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredRead } from "../utils/localStorage";
import BookList from "../components/BookList";


const ListedBooks = () => {
    
    const books = useLoaderData();

    const [readBook, setReadBook] = useState([]);

    useEffect(()=>{

      const storedId = getStoredRead();
      if(books.length > 0){
       const read = books.filter(book => storedId.includes(book.Id))


    setReadBook(read);
    //    console.log(books, storedId, read);
      }
    }, [])

   

    return (
        <div>
           
            <div className="bg-base-300">
            <h1 className="font-bold text-4xl my-12 text-center p-4">Books</h1>
            </div>
            {
                readBook.map(book => <BookList book={book} key={readBook.id}></BookList>)
            }

           
        </div>
    );
};

export default ListedBooks;