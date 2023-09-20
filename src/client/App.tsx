import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Login from './views/Login';
import Register from './views/Register';

import Navbar from './components/Navbar';
import Books from './views/Books';


const App = () => {
	return (
		<BrowserRouter>
		<Navbar />
			<main className ="container my-5">
			<Routes>
				<Route path="/books" element={<Books />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='*' element={<h1>404 An error occured</h1>} />
			</Routes>
			</main> 
		</BrowserRouter>
	)
};

export default App;