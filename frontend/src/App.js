import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './bootstrap.min.css'
import HomeScreen from './screens/HomeScreen'
import Carouselimages from './components/Carouselimages'
import Cart from './components/Cart'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
      <Header/>
      <Carouselimages/>
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/product/:id' component={ProductScreen}/>
        </Container>
        <Cart/>
        {/* <ProductScreen/> */}
        
      <Footer/>

    </Router>
  )
}

export default App
