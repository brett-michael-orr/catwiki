import axios from 'axios';
import { ERRORS } from './errors';

export const GetImagesByBreedId = async (breedId: string) => {
    try {
        const result = await axios.get(`${process.env.API_ROOT}images/search?breed_ids=${breedId}`);
        if(result.data.length > 0) {
            return result;
        } else {
            throw new Error(ERRORS.CannotFindImagesForBreed);
        }
    } catch (err) {
        return err;
    }
}
