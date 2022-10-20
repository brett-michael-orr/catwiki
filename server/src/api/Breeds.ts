import axios from 'axios';

export const GetBreeds = () => {
    return axios.get(`${process.env.API_ROOT}breeds`);
}
