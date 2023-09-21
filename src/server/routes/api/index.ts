import * as express from 'express';
import categoriesRouter from './categories'
import booksRouter from './books';
import pizzaRouter from './pizza';

const router = express.Router();

router.use('/categories', categoriesRouter);
router.use('/books', booksRouter);
router.use('/pizza', pizzaRouter)



export default router;