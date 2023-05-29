import './App.css'
//pages
import {Left, Middle, Right} from './pages';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"

function App() {

  return (
    <Container>
      <Row className='d-flex justify-content-center'>
        <Col xs={12} sm={3} md={2}>
          <Left/>
        </Col>
        <Col xs={12} sm={9} md={6}>
        <Middle/>
        </Col>
        <Col xs={12} md={4}>
        <Right/>
        </Col>
      </Row>
    </Container>
  )
}

export default App
