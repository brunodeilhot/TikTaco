interface User {
    name: string;
    username: string;
    birthday?: number;
    picture?: string;
    bio?: string;
}

export interface IUpdateUser extends User {
    id: string;
}

export interface ICreateUser extends User {
    email: string;
}