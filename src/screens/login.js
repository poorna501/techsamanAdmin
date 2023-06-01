import { Col, Container, Form, Row, Button } from "react-bootstrap";
import LOGO from "../imges/logo.JPG";


const Login = () => {
    return (
        <div className="d-flex align-items-center justify-content-center custom_height">            
            <Container>
                <Row className="container">
                    <Col lg={5} md={6} sm={12} className="p-5 bgcolor shadow-lg rounded-lg brdr_redis">
                        {/* <Col>
                            <img src={LOGO} alt="Tech Saman Logo" style={{width: "-webkit-fill-available"}} />
                        </Col> */}
                        <Col className="txt_center">
                            <h1>Welcome!</h1>
                        </Col>
                        <Col className="mt-3 padding_lr_10 ">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button className="addbtn mt-3 shadow-lg rounded-lg" variant="warning" type="submit">
                                    <strong>Login</strong>
                                </Button>
                            </Form>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;