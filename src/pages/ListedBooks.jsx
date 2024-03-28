import { useEffect, useState } from "react";
import { getStoredRead, getStoredWish } from "../utils/localStorage";
import BookList from "../components/BookList";
import { useLoaderData } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




const ListedBooks = () => {

  const books = useLoaderData();

  const [readBook, setReadBook] = useState([]);
   const [wishlist, setWishlist]= useState([]);

   //drop
  //  const [display, setDisplay] = useState([]);


// drop
// const handleFilter = filter =>{
//   if(filter === 'Rating'){
//     setDisplay(readBook);
//   }
//   else if(filter === 'Number of pages'){
//     const numberOfPages = readBook.filter(book=>book.rating === '')
//   }
// }



  useEffect(() => {

    const storedId = getStoredRead();
    if (books.length > 0) {
      const read = books.filter(book => storedId.includes(book.Id))


      setReadBook(read);
      //  console.log(books, storedId, read);

      // drop
      // setDisplay(read);
    }
  }, [])



   useEffect(()=>{

     const storedId = getStoredWish();
     if(books.length > 0){
      const read = books.filter(book => storedId.includes(book.Id))
      setWishlist(read);
        }
      }, [])




  return (
    <div>

      <div className="bg-base-300">
        <h1 className="font-bold text-4xl my-12 text-center p-4 font-play">Books</h1>
      </div>


      {/* dropdown */}

      <div className="text-center my-8  mb-[80px]">
        <details className="dropdown">
          <summary className="m-1 btn ">
            Filter
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><a>Rating</a></li>
            <li><a>Number of pages</a></li>
            <li><a>Published Year</a></li>
          </ul>
        </details>

{/* drop */}
{/* {
            display.map(book => <BookList book={book} key={readBook.id}></BookList>)
          } */}



      </div>



      {/* tab */}
      <Tabs>
        <TabList>
          <Tab>Read</Tab>
          <Tab>Wishlist</Tab>
        </TabList>


        <TabPanel>
         
          {
            readBook.map(book => <BookList book={book} key={readBook.id}></BookList>)
          }
        </TabPanel>

        <TabPanel>
         
       


             {
                wishlist.map(book => <BookList book={book} key={readBook.id}></BookList>)
            }
        </TabPanel>
      </Tabs>


    </div>
  );
};

export default ListedBooks;