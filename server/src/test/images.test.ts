import * as dotenv from 'dotenv';
import { GetImagesByBreedId } from '../api';
dotenv.config();

const BREED_TEST = "beng";
const FAIL_BREED = "XXXX";

test('get images for the specified breed', async () => {
    const breeds = await GetImagesByBreedId(BREED_TEST);
    expect(breeds.data.length).toBeGreaterThan(0);
});

test('cannot get images for a breed that does not exist', async () => {
    const breeds = await GetImagesByBreedId(FAIL_BREED);
    expect(breeds.data.length).toEqual(0);
});