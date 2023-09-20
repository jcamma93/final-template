import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiService } from '../services/api-service';

const Create = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [categories, setCategories] = useState("");
    const [selectedCatagory, setSelectedCategory] = useState("");
    const nav = useNavigate();

    useEffect(() => {
        apiService("/api/categories").then(setCategories);
        apiService(`/api/books/${id}`).then((book) => {
            setTitle(book.title);
            setPrice(book.price)
            setSelectedCategory(book.categoryid);
        })
    }, []);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const res = await fetch('/api/books', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, author, price, categories })
        });

        const data = await res.json();

        if (res.ok) {
            nav(`/books/${data.id}`);
        } else {
            alert(`Unable to add Book \n\n${data.message}`);
        }
    };

    return (
        <div className="row justify-content-center">
            <h1 className='text-center text-light'>Add a New Book!</h1>
            <div className="col-12 col-md-8">
                <form className="p-2 bg-light rounded-2 shadow-1g">
                    <label className='text-info'>Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
                    <label className='text-info'>Author</label>
                    <textarea value={author} onChange={e => setAuthor(e.target.value)} className="form-control" />
                    <label className='text-info'>Price</label>
                    <textarea value={price} onChange={e => setPrice(e.target.value)} className="form-control" />

                    <button disabled={!title || !author || !price} onClick={handleSubmit} className="btn btn-dark m-2">
                        Add Blog
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;