import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-info p-2'>
            <Link className='btn btn-outline-secondary m-2' to={"/create"}>New Book</Link>
            <Link className='btn btn-outline-success m-2' to={"/books"}>All Books</Link>
            <Link className='btn btn-outline-light m-2' to={"/pizza"}>Pizza Party?</Link>
            <Link className='btn btn-outline-info m-2' to={"/login"}>Login</Link>
        </div>
    )
};

export default Navbar;