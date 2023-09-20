// Book Interfaces

export interface Categories {
    id: number,
    name: string;
}

export interface Book {
    id?: number,
    categoryid: Categories["id"],
    title: string,
    author: string,
    price: number,
    created_at?: string | Date;
}

export interface BookWithCategory extends Book {
    name: Categories["name"]
}

// User Interface

export interface User {
    id: number,
    email: string,
    password: string, 
    role: string,
    created_at: string | Date;
    name: string;
}