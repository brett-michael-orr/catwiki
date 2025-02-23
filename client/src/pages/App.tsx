import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { BreedDropdown } from '../components/Dropdown';
import '../styles/styles.css';

function App() {
    const [breed, setBreed] = React.useState<string>();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!!breed) {
            navigate(`/breeds/${breed}`);
        }
    }, [breed]);

    return (
        <header className="bg-dark py-5" style={{ height: '100%' }}>
            <Container className="px-5">
                <Row className="gx-5 align-items-center justify-content-center">
                    <Col lg={8} xl={7} xxl={6}>
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="display-5 fw-bolder text-white mb-2">
                                Cat Wiki
                            </h1>
                            <p className="lead fw-normal text-white-50 mb-4">
                                Easily find more information about your
                                favourite cat breeds!
                            </p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                <BreedDropdown
                                    onChange={(breedId) => {
                                        setBreed(breedId);
                                    }}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default App;
