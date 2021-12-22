import React, {useState}from 'react'
import {Navbar,Container,Nav,Row,Col,Button} from 'react-bootstrap'

const Cart = () => {
  const [state,setState]=useState(0)
  const increment=()=>{
    setState(state+1)

  }
  const decrement=()=>{
    if(state>0){
      setState(state-1)
    }else{
      setState(0)
    }
    

  }
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Sri Sai Pooja Samagri</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link"><i className="fas fa-shopping-cart"></i>&nbsp;Cart</Nav.Link>
        <Nav.Link href="#link">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Container>
  <Row>
    <Col><img src="images/mangaldeepagarbathi.jpg" height="500px" width="500px"></img></Col>
    <Col>
    <h1>Mangaldeep Agarbathi</h1>
    <h2>$5.00</h2><br/><br/>
    <p>Mangaldeep Sadhvi Traditional fragrance with natural ingredients for your daily puja. Create traditional atmosphere of puja with fragrances made from auspicious ingredients which are part of puja samagri.</p>
    <p><i class="fas fa-minus-square " onClick={decrement}></i>&nbsp;{state}&nbsp;<i class="fas fa-plus-square" onClick={increment}></i></p>
    <Button variant="primary" size="lg">ADD TO CART</Button>&nbsp;&nbsp;
    <Button variant="success" size="lg">BUY NOW</Button>
    </Col>
  </Row>
  
</Container>

        </div>
    )
}

export default Cart
