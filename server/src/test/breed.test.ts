import { AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';
import { GetBreedById, GetBreeds } from '../api';
import { ERRORS } from '../api/errors';
import { IBreed } from '../models/breed.model';
dotenv.config();

const BREED_TEST = 'beng';
const BREED_FAIL = 'XXXX';

test('get the breeds list', async () => {
    const breeds = await GetBreeds();
    expect(breeds.data.length).toBeGreaterThan(0);
});

test('can get a specific breed', async () => {
    const breed = (await GetBreedById(BREED_TEST)) as AxiosResponse<IBreed>;
    expect(breed.data).not.toStrictEqual({});
});

test("can not get a breed that doesn't exist", async () => {
    const breed = (await GetBreedById(BREED_FAIL)) as Error;
    expect(breed.message).toBe(ERRORS.CannotFindBreed);
});
