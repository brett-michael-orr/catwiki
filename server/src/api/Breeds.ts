import axios from 'axios';
import { ERRORS } from './errors';

export const GetBreeds = () => {
    return axios.get(`${process.env.API_ROOT}breeds`);
}

export const GetBreedById = async (breedId: string) => {
    try {
        const result = await axios.get(`${process.env.API_ROOT}breeds/${breedId}`);
        if(result.data.length > 0) {
            return result;
        } else {
            throw new Error(ERRORS.CannotFindBreed);
        }
    } catch (err) {
        return err;
    }

}
