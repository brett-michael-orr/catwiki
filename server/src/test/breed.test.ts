import * as dotenv from 'dotenv';
import { GetBreeds } from '../api';
dotenv.config();

 
test('string with a single number should result in the number itself', async () => {
    const breeds = await GetBreeds();
    expect(breeds).not.toBeNull();
});