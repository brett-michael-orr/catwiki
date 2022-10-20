import axios, { AxiosResponse } from 'axios';
import { IImage } from '../../../models/image.model';
import { ERRORS } from './errors';

export const GetImagesByBreedId = async (
    breedId: string
): Promise<AxiosResponse<IImage[]> | Error> => {
    const result = await axios.get(
        `${process.env.API_ROOT}images/search?breed_ids=${breedId}&limit=4`
    );
    if (result.data.length > 0) {
        return result;
    } else {
        throw new Error(ERRORS.CannotFindImagesForBreed);
    }
};
