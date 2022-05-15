import { IRecipeMeta } from "./recipe";

export interface IUpdateUser {
    id: string;
    name?: string;
    username?: string;
    birthday?: number;
    picture?: string;
    bio?: string;
}

export interface ICreateUser {
    email: string;
    name: string;
    username: string;
    birthday?: number;
    picture?: string;
    bio?: string;
}

export interface IUserMeta {
    user: string;
    date: Date;
  }

export interface IUser {
    id: string;
    email: string;
    name: string;
    username: string;
    birthday: number;
    picture: string;
    bio: string;
    created_at: Date;
    privateProfile: boolean;
    PrivateLikes: boolean;
    meta: {
      rec_liked: IRecipeMeta[];
      rec_starred: IRecipeMeta[];
      followers: IUserMeta[];
      following: IUserMeta[];
    };
}