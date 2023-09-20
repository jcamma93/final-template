import { Query } from "..";
import { Category } from "../../../types";

const getAll = () => Query<Category[]>('SELECT * FROM Categories');
const getOne = (id: Category['id']) => Query<Category[]>('SELECT * FROM Categories WHERE id=?', [id]);

export default {
    all: getAll,
    find: getOne
};