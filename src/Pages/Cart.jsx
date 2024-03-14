import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'

import {useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../REDUX/Slices/cartSlice'



const Cart = () => {

  const cartItems = useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  
  const[cartTotal,setCartTotal] = useState(0)
  useEffect(()=>{
    if(cartItems?.length>0){
      setCartTotal(cartItems?.map(item=>item.totalPrice).reduce((t1,t2)=>t1+t2))
    }else{
      setCartTotal(0)
    }
  },[cartItems])

  const handleDecrementQuantity =(product)=>{
    if(product.quantity>1){
      dispatch(decQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }


  



  ////////////////////////////////////////

 


  return (
    <>
    <Header/>
    <div className='container ' style={{marginTop:'10px', maxWidth: '100%',padding:'50px'}}>
      {
      cartItems?.length>0?
   
    <div className='pt-5'>
      <h1>Cart Summary</h1>
      <div className="row ">
        <div className="col-lg-8">
          <table className='table'>
            <thead>
             <tr>
                <th>#</th>
                <th>Title</th>
                <th>Image</th>
                <th>QUantity</th>
                <th>Price</th>
                <th>...</th>
             </tr>
            </thead>
            <tbody>
              {
                cartItems?.map((product,index)=>(
              <tr>
                <td>{index+1}</td>
                <td>{product?.title.slice(0,16)}...</td>
                <td><img width={'60px'} height={'60px'} src={product.thumbnail}/></td>
                <td>
                  <div className='d-flex'>
                    <button onClick={()=>handleDecrementQuantity(product)} className='btn fw-bolder'>-</button>
                    <input value={product.quantity} type='text' style={{width:'50px'}} className='form-control' placeholder='0' readOnly />
                    <button onClick={()=>dispatch(incQuantity(product?.id))} className='btn fw-bolder'>+</button>


                  </div>
                </td>
                <td>${product.totalPrice}</td>
                <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='btn' ><i className='fa-solid fa-trash text-danger'></i></button></td>
              </tr>
              ))
      }
            </tbody>

          </table>
          <div className='float-end mt-3'>
            <button  onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-5'> EmptyCart</button>
            <button className='btn btn-info me-2'> Shop More</button>
            


          </div>

        </div>
        <div className="col-lg-4 shadow">
          <h3>Total items:<span className='text-danger  '>{cartItems?.length}</span></h3>
          <h2>Total Amount:<span className='text-danger '>$ {cartTotal}</span></h2>
          <button  className='btn btn-success w-100'>Check Out</button>


        </div>
      </div>

    </div>
:
<div style={{height:'70vh'}} className='w-100 d-flex  jusify-content-center align-items-center flex-column'>
<img style={{width:'700px'}} src='https://static.vecteezy.com/system/resources/previews/008/515/488/large_2x/empty-cart-flat-illustration-concept-vector.jpg' />
<h1>Your Cart is Empty....</h1>

</div>
}
    </div>
    </>
  )
}

export default Cart