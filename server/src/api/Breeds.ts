import axios, { AxiosResponse } from 'axios';
import { IBreed } from '../../../models/breed.model';
import { ERRORS } from './errors';

export const GetBreeds = (): Promise<AxiosResponse<IBreed[]>> => {
    return axios.get(`${process.env.API_ROOT}breeds`);
};

export const GetBreedById = async (
    breedId: string
): Promise<AxiosResponse<IBreed> | Error> => {
    try {
        const result = await axios.get(
            `${process.env.API_ROOT}breeds/${breedId}`
        );
        if (Object.keys(result.data).length > 0) {
            return result;
        } else {
            throw new Error(ERRORS.CannotFindBreed);
        }
    } catch (err) {
        return err;
    }
};
