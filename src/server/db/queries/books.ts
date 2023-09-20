import { Query } from "..";
import { Books, BookWithCategory } from '../../../types'

const getAll = () => Query<BookWithCategory[]>(`
    SELECT b.*, c.name
        FROM Books b
        Join Categories c
        ON b.categoryid=c.id`);

const getOne = (id: Books['id']) => Query<BookWithCategory[]>(`
    SELECT b.*, c.name
        FROM Books b
        Join Categories c
        ON b.categoryid=c.id
        WHERE b.id=?`, [id]);

const create = (newBooks: Books) => Query('INSERT INTO Books SET ?', [newBooks]);
const update = (editedBooks: Books, id: Books['id']) => Query('UPDATE Books SET ? WHERE id=?', [editedBooks, id]);
const destroy = (id: Books['id']) => Query('DELETE FROM Books WHERE id=?', [id]);

export default {
    all: getAll,
    find: getOne,
    create,
    update,
    delete: destroy
};