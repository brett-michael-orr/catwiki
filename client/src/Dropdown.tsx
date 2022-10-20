import * as React from 'react';
import Form from 'react-bootstrap/Form';

export const BreedDropdown = () => {
    const [data, setData] = React.useState<any>([]);

    React.useEffect(() => {
        fetch('/api/breeds')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <Form.Select aria-label="Selecting a cat">
            <option>Select a breed</option>
            {data.map((breed: any) => (
                <option key={breed.id} value={breed.id}>
                    {breed.name}
                </option>
            ))}
        </Form.Select>
    );
};
