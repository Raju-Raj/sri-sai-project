import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import Rating from '../components/Header'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Loader from './../components/Loader';
import Message from './../components/Message'
// import products from '../../src/productsDummy.js'


const ProductScreen = ({match}) => {
  const dispatch=useDispatch()
  const productDetails=useSelector(state=>state.productDetails)
  const {loading,error,product}=productDetails
  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
    
  }, [match])

  // const product =products.find((p)=> p._id ===match.params.id)
  // console.log(product)
  
    return (
        <>
         <Link to='/'>Go Back</Link>
         {loading ?(<Loader/>)
         :error?(<Message variant='danger'></Message>)
        :( <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name } fluid />
          </Col>
          <Col md={3}>
             <ListGroup variant='flush'>
               <ListGroup.Item>
                 <h2>{product.name}</h2>
               </ListGroup.Item>
               <ListGroup.Item>
                 <Rating value={product.rating} text={`${product.numReviews}`}/>
               </ListGroup.Item>
               <ListGroup.Item>
                 price: ${product.price}
               </ListGroup.Item>
               <ListGroup.Item>
                 {product.description}
               </ListGroup.Item>
               <ListGroup.Item>
                 <Row>
                   <Col>
                   Status:
                   </Col>
                   <Col>
                   {product.countInStock>0?'In Stock':'Out of Stock'}
                   </Col>
                 </Row>
               </ListGroup.Item>
               <ListGroup.Item>
                 <Button className="btn-block" type="button" disabled={product.countInStock===0}>Add to Cart</Button>
               </ListGroup.Item>
             </ListGroup>
          </Col>

        </Row>)}
        
        </>
    )
}

export default ProductScreen