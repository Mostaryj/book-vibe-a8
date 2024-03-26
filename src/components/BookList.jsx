import Frame from '../assets/images/Frame.png'
import photo from '../assets/images/photo.png'
const BookList = ({ book }) => {

    const { bookName, image, author, tags, publisher, category, rating,
        totalPages,
        yearOfPublishing } = book;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl gap-4 lg:flex flex flex-1 border-2">


                <figure><img src={image} alt="Movie" /></figure>


                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>

                    <div className="flex  space-x-2">


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

                    <div className='flex lg:gap-10 mt-2'>
                        <div className='flex gap-1'>
                            <img src={photo} alt="" />
                            <p>Publisher:{publisher}</p>
                        </div>
                        <div className='flex'>
                            <img src={Frame} alt="" />
                            <p>Pages: {totalPages}</p>
                        </div>
                    </div>
                    <hr className='mt-2' />


                    <div className="card-actions ">
                        <button className="btn bg-sky-200 text-sky-500 rounded-full">Category:{category}</button>
                        <button className="btn bg-orange-200 text-orange-500 rounded-full">Rating:{rating}</button>

                        <button className="btn bg-lime-500 text-white rounded-full">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookList;