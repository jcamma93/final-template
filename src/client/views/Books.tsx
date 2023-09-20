import * as React from 'react';
import { useState, useEffect } from 'react';
import { Book, BookWithCategory } from '../../types';
import BookCard from '../components/BookCard';

const Books = () => {
    const [books, setBooks] = useState<BookWithCategory[]>([]);

    useEffect(() => {
        async function getBooks() {
            try {
                const res = await fetch('/api/books');
                const data = await res.json();

                if (res.ok) {
                    setBooks(data);
                } else {
                    alert(data.message);
                }
            } catch (error) {
                alert("An error has occured, please check console");
                console.error(error);
            }
        }
        getBooks();
    }, []);


    return (
        <div className='row justify-content-center'>
            <h1 className='text-center text-primary'>Books</h1>
            {books.map(b => (
                <BookCard book={b} key={`book-card-${b.id}`} />
            ))}
        </div>
    );
};

export default Books;

