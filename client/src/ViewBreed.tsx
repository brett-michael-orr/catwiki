import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import { IBreed } from '../../models/breed.model';
import './styles.css';

export const ViewBreed = () => {
    const { breedId } = useParams();
    const [breed, setBreed] = React.useState<IBreed>();

    React.useEffect(() => {
        if (!!breedId) {
            fetch(`/api/breeds/${breedId}`)
                .then((res) => res.json())
                .then((data) => setBreed(data));
        }
    }, [breed]);

    // type DisplayAttribute = keyof IBreed;
    const displayAttributes = [
        'temperament',
        'origin',
        'life_span',
        'adaptability',
        'affection_level',
        'child_friendly',
        'grooming',
        'intelligence',
        'health_issues',
        'social_needs',
        'stranger_friendly',
    ];

    function toTitleCase(str: string) {
        return str
            .toLowerCase()
            .split(' ')
            .map(function (word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(' ');
    }

    const formatAttribute = (attribute: string) =>
        toTitleCase(attribute.replace('_', ' '));

    return (
        <header className="bg-dark py-5" style={{ height: '100%' }}>
            {!breed ? (
                <Container className="px-5">
                    <Row className="justify-content-center">
                        <Spinner animation="grow" variant="secondary" />
                    </Row>
                </Container>
            ) : (
                <Container className="px-5">
                    <Row className="gx-5 align-items-center justify-content-center">
                        <Col lg={8} xl={7} xxl={6}>
                            <div className="my-5 text-center text-xl-start">
                                <a className="search-again-link" href="/">
                                    Search again
                                </a>
                                <h1 className="display-5 fw-bolder text-white mb-2">
                                    {breed.name}
                                </h1>
                                <p className="lead fw-normal text-white-50 mb-4">
                                    {breed.description}
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="gx-5 align-items-center justify-content-center">
                        <Col lg={8} xl={7} xxl={6}>
                            <h2 className="text-white">Breed Details</h2>
                            {displayAttributes.map((attr) => (
                                <p className="text-white">
                                    <strong>
                                        {formatAttribute(attr)}:&nbsp;
                                    </strong>
                                    <span>{breed[attr]}</span>
                                </p>
                            ))}
                        </Col>
                    </Row>
                </Container>
            )}
        </header>
    );
};
