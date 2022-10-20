import { AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';
import { IImage } from '../../../models/image.model';
import { GetImagesByBreedId } from '../api';
import { ERRORS } from '../api/errors';
dotenv.config();

const BREED_TEST = 'beng';
const FAIL_BREED = 'XXXX';

test('get images for the specified breed', async () => {
    const breeds = (await GetImagesByBreedId(BREED_TEST)) as AxiosResponse<
        IImage[]
    >;
    expect(breeds.data.length).toBe(4);
});

test('cannot get images for a breed that does not exist', async () => {
    const breeds = (await GetImagesByBreedId(FAIL_BREED)) as Error;
    expect(breeds.message).toEqual(ERRORS.CannotFindImagesForBreed);
});
