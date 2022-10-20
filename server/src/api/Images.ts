import axios from 'axios';

export const GetImagesByBreedId = (breedId: string) => {
    return axios.get(`${process.env.API_ROOT}images/search?breed_ids=${breedId}`);
}
