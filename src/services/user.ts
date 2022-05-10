import { ICreateUser, IUpdateUser } from "./../models/user";
import { api, baseURL } from "./index";

export function createUser({
  name,
  email,
  username,
  birthday,
  picture,
  bio,
}: ICreateUser) {
  api
    .post(`${baseURL}/user/create`, {
      name: name,
      email: email,
      username: username,
      birthday: birthday,
      picture: picture,
      bio: bio,
    })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

export function updateUser({
  id,
  username,
  name,
  birthday,
  picture,
  bio,
}: IUpdateUser) {
  api
    .put(`${baseURL}/user/update/${id}`, {
      username: username,
      name: name,
      birthday: birthday,
      picture: picture,
      bio: bio,
    })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

export function findUserByEmail(email: string) {
  api
    .get(`${baseURL}/user/find/email/${email}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

export function findUserById(id: string) {
  api
    .get(`${baseURL}/user/find/${id}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

export function addFollower(id: string, userId: string) {
  api
    .post(`${baseURL}/user/followers/${id}/add/${userId}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

export function removeFollower(id: string, userId: string) {
  api
    .delete(`${baseURL}/user/followers/${id}/remove/${userId}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

export function totalLikes(id: string) {
  api
    .get(`${baseURL}/user/meta/likes/total/${id}`)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

