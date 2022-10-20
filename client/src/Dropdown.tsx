import * as React from 'react';
import Form from 'react-bootstrap/Form';
import { IBreed } from '../../models/breed.model';

export interface BreedDropdownProps {
    onChange(breedId: string): void;
}

export const BreedDropdown = (props: BreedDropdownProps) => {
    const [data, setData] = React.useState<IBreed[]>([]);

    React.useEffect(() => {
        fetch('/api/breeds')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <Form.Select
            aria-label="Selecting a cat"
            onChange={(e) => props.onChange(e.target.value)}
        >
            <option>Select a breed</option>
            {data.map((breed: any) => (
                <option key={breed.id} value={breed.id}>
                    {breed.name}
                </option>
            ))}
        </Form.Select>
    );
};
