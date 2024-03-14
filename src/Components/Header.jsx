// import React from 'react'
// import { Badge, Form } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';






     
//  // position-fixed top-0 w-100

// function Header() {

//   const wishlistCount = useSelector(state=>state.wishlistReducer).length


//   return (
//     <Navbar  collapseOnSelect expand="lg" className='bg-info  '  >
//       <Container>
//         <Navbar.Brand > <Link  to={'/'} style={{fontSize:'24px',color:'white',textDecoration:'none'}}><i style={{color:'orange'}} class="fa-solid fa-caravan me-2"></i><span style={{textDecoration:'none'}} className='fw-bolder  '>E</span>Cart</Link></Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mx-auto">
//            <Form className='border rounded'>
//            <Form.Control style={{width:'500px',height:'50px'}} className='' type="text" placeholder="Search Products!!!" />
//            </Form>
       
            
//           </Nav>
//           <Nav >
//            <div style={{fontSize:'24px'}} className='d-flex align-items-center me-5' >
//               <Nav.Link  ><Link to={'/Wishlist'} style={{color:'white',textDecoration:'none'}}><i style={{color:'red'}} class="fa-solid fa-heart me-2"></i>Whishlist<Badge bg='secondary'>{wishlistCount}</Badge></Link></Nav.Link>
//               <button  className='border rounded' style={{width:'24px',fontSize:'16px'}} >0</button>
//            </div>
//             <div style={{fontSize:'24px'}} className='d-flex justify-content-between align-items-center me-5'>
//               <Nav.Link>  <Link to={'/cart'} style={{color:'white',textDecoration:'none'}}><i style={{color:'orange'}} class="fa-solid fa-cart-shopping me-2"></i>Cart</Link> </Nav.Link>
//               <button className='border rounded text-center' style={{width:'24px',fontSize:'16px'}}>0</button>
//             </div>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;
   
  
import React from 'react';
import { Badge, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../REDUX/Slices/productSlice';


function Header({insideHome}) {
  const dispatch =useDispatch()
  const cartCount = useSelector(state => state.cartReducer).length;
  const wishlistCount = useSelector(state => state.wishlistReducer).length;

  return (
    <Navbar collapseOnSelect expand="lg" className='bg-info'>
      <Container>
        <Navbar.Brand>
          <Link to={'/'} style={{ fontSize: '24px', color: 'white', textDecoration: 'none' }}>
            <i style={{ color: 'orange' }} className="fa-solid fa-caravan me-2"></i>
            <span style={{ textDecoration: 'none' }} className='fw-bolder'>E</span>Cart
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            {insideHome &&
            <Form className=' rounded'>
              <Form.Control onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{ width: '500px', height: '50px' }} className='' type="text" placeholder="Search Products!!!" />
            </Form>
}
          </Nav>
          <Nav>
            <div style={{ fontSize: '24px' }} className='d-flex align-items-center me-5'>
              <Link to={'/Wishlist'} style={{ color: 'white', textDecoration: 'none' }}>
                <i style={{ color: 'red' }} className="fa-solid fa-heart me-2"></i>
                Whishlist
                <Badge className='m-2' bg='primary'>{wishlistCount}</Badge>
              </Link>
             
            </div>
            <div style={{ fontSize: '24px' }} className='d-flex justify-content-between align-items-center me-5'>
              <Link to={'/cart'} style={{ color: 'white', textDecoration: 'none' }}>
                <i style={{ color: 'orange' }} className="fa-solid fa-cart-shopping me-2"></i>
                Cart
                <Badge className='m-2' bg='primary'>{cartCount}</Badge>
              </Link>
              
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
