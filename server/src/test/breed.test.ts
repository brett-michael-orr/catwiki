import * as dotenv from 'dotenv';
import { GetBreeds } from '../api';
dotenv.config();

test('get the breeds list', async () => {
    const breeds = await GetBreeds();
    expect(breeds.data.length).toBeGreaterThan(0);
});