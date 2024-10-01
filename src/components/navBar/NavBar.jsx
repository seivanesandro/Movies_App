import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample({
    value,
    setsearchvalue,
    placeholdertext
}) {
    return (
        <>
            {['xl'].map(expand => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className="py-3 mb-4"
                    data-bs-theme="dark"
                    style={{
                        background: '#000000'
                    }}
                >
                    <Container fluid>
                        <Navbar.Brand href="#">
                            Movies List
                        </Navbar.Brand>
                        <Navbar.Toggle
                            style={{
                                outline: 'none',
                                border: 'none',
                                boxShadow: 'none',
                                color: '#fff'
                            }}
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                            data-bs-theme="dark"
                            style={{
                                background:
                                    '#000000'
                            }}
                        >
                            <Offcanvas.Header
                                closeButton
                            >
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    Movies List
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">
                                        Movies
                                    </Nav.Link>
                                    <Nav.Link href="#action2">
                                        Series
                                    </Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder={
                                            placeholdertext
                                        }
                                        className="me-2"
                                        aria-label="Search"
                                        value={
                                            value
                                        }
                                        onChange={e =>
                                            setsearchvalue(
                                                e
                                                    .target
                                                    .value
                                            )
                                        }
                                    />
                                    <Button variant="outline-success">
                                        Search
                                    </Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;
