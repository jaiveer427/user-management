import axios from "axios";
const baseURL = "http://localhost:5000/users";

const instance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
});


export const fetchUsersAPI = ()=>instance.get();

export const addUserAPI = (data) => instance.post(data);
export const deleteUserAPI = (id) => instance.delete(`/${id}`);
export const updateUserAPI = (id, data) => instance.put(`/${id}`, data);