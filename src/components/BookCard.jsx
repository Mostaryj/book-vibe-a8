import PropTypes from 'prop-types';
const BookCard = ({ bookCard }) => {
    const { image, bookName, author, category, tags, rating } = bookCard;
    return (
        <div>

            <div className="card bg-base-100 border-2 p-4">
                <figure><img className="bg-base-100" src={image} alt="book" /></figure>
                <hr className="mt-4"/>
                <div className="card-body ">

                    <div className="card-actions text-lime-500 font-semibold">
                        <div className="badge badge-outline">{tags[0]}</div>
                        <div className="badge badge-outline">{tags[1]}</div>
                    </div>

                    <h2 className="card-title font-bold">
                        {bookName}    </h2>
                    <p className="">By: {author}</p>

                    <div className="flex justify-between">
                        <div>
                            <p>{category}</p>
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





            </div>
        </div>
    );
};

export default BookCard;
BookCard.propTypes ={
    bookCard:PropTypes.object,
}