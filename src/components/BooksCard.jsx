import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const BooksCard = () => {

    const [bookCards, setBookCards] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBookCards(data));
    }, [])

    


    return (
        <div>
            <h1 className="font-bold text-4xl my-12 text-center font-play">Books</h1>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">

                {
                    bookCards.map(bookCard => <BookCard key={bookCard.id}
                    bookCard={bookCard}>

                    </BookCard>)
                }

            </div>

        </div>
    );
};

export default BooksCard;