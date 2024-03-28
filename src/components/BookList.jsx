import { Link } from 'react-router-dom';
import Frame from '../assets/images/Frame.png'
import photo from '../assets/images/photo.png'
import PropTypes from 'prop-types';

const BookList = ({ book }) => {

    const { Id, bookName, image, author, tags, publisher, category, rating,
        totalPages,
        yearOfPublishing } = book;
    return (
        <div>




            <div className="card md:card-side bg-base-100 shadow-xl gap-4 lg:flex  flex-1 border-2  p-2">

                 

                
                <figure><img className='md:mt-20 lg:ml-20' src={image} alt="book" /></figure>
               

                <div className="card-body lg:ml-30">
                    <h2 className="card-title font-bold text-2xl font-play">{bookName}</h2>
                    <p>By: {author}</p>

                    <div className="md:flex  space-x-2 ">


                        <div className='flex gap-2 items-center'>
                            <p className='font-bold'>Tag:</p>
                            <button className='bg-base-200 text-lime-500 rounded-3xl p-1'>#{tags[0]}</button>
                            <button className='bg-base-200 text-lime-500 rounded-3xl p-1'>#{tags[1]}</button>
                        </div>

                        <p className="flex"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                            <span> Year of Publishing: {yearOfPublishing}</span></p>

                    </div>

                    <div className='md:flex items-center lg:gap-10 mt-2 space-y-2'>
                        <div className='flex gap-1'>
                            <img className='w-[20px] h-[20px]' src={photo} alt="" />
                            <p>Publisher:{publisher}</p>
                        </div>
                        <div className='flex'>
                            <img className='w-[20px] h-[20]' src={Frame} alt="" />
                            <p>Pages: {totalPages}</p>
                        </div>
                    </div>
                    <hr className='mt-2' />


                    <div className="card-actions md:flex">
                        <button className=" btn bg-sky-200 text-sky-500 rounded-full">Category:{category}</button>
                        <button className="btn bg-orange-200 text-orange-500 rounded-full">Rating:{rating}</button>

                     
                       <Link to={`/details/${Id}`} className="btn bg-lime-500 text-white rounded-xl">View Details</Link>
                     
                    </div>
                </div>
            </div>
        </div>
    );
};



export default BookList;


BookList.propTypes = {
    book: PropTypes.object,
}