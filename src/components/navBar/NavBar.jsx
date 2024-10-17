//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample({
    searchValue,
    setSearchValue,
    placeholdertext
}) {
    const HandleClickSearch = e => {
        setSearchValue(e.target.value);
    };
    return (
        <>
            {['sm'].map(expand => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className="py-3 mb-4"
                    data-bs-theme="dark"
                    title="reset bar search"
                    style={{
                        background: '#000000',
                        borderBottom:
                            '1px solid #ccc'
                    }}
                >
                    <Container
                        fluid
                        className="container-fuild-witdh"
                    >
                        <Navbar.Brand
                            className="link-to-reset"
                            to="/"
                        >
                            Favourite Movies
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
                                    Favourite
                                    Movies
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="justify-content-center">
                                <Form className="d-flex justify-content-center">
                                    <Form.Control
                                        id="input-search-style"
                                        className="input-search-style"
                                        data-bs-theme="light"
                                        type="search"
                                        required
                                        placeholder={
                                            placeholdertext
                                        }
                                        aria-label="Search"
                                        value={
                                            searchValue
                                        }
                                        onChange={
                                            HandleClickSearch
                                        }
                                    />
                                </Form>
                                {/* <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">
                                        Movies
                                    </Nav.Link>
                                    <Nav.Link href="#action2">
                                        Series
                                    </Nav.Link>
                                </Nav> */}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;
