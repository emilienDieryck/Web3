import axios from 'axios';

const baseUrl = 'http://localhost:3000/books';

const getAll = () => {
    return axios.get(baseUrl).then((response) => response.data);
};

const patchOne = (id, data) => {
    return axios.patch(`${baseUrl}/${id}`, data).then((response) => response.data);
};

export default { getAll, patchOne };