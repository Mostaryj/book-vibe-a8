import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const BookCard = ({ bookCard }) => {
    const {Id, image, bookName, author, category, tags, rating } = bookCard;
    return (
        <div>

            <Link to={`/details/${Id}`} className="card bg-base-200 border-2 p-4 hover:no-underline focus:no-underline hover:scale-105">
                <figure><img src={image} alt="book" /></figure>
               
                <div className="card-body ">

                    <div className="card-actions text-lime-500 font-semibold">
                        <div className="badge badge-outline">{tags[0]}</div>
                        <div className="badge badge-outline">{tags[1]}</div>
                    </div>

                    <h2 className="card-title font-bold">
                        {bookName}    </h2>
                    <p className="">By: {author}</p>

                    <hr className="mt-4"/>

                    <div className="flex justify-between">
                        <div>
                            <p className='font-medium'>{category}</p>
                        </div>
                        <div className="flex">
                            {rating}
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>

                        </div>
                    </div>

                </div>





            </Link>
        </div>
    );
};

export default BookCard;
BookCard.propTypes ={
    bookCard:PropTypes.object,
}