import { Divider, Paper,Button,Container,Card } from '@material-ui/core';
import React from 'react';
import '../css/cart.css';
import {useHistory} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import {useStateValue} from '../store/Stateprovider';
import {get_cart_total} from '../store/Reducer';

const Cartitem=()=>{
  const [{cart},dispatch]=useStateValue();
  const remove_from_basket=()=>{
    dispatch({
      type:'remove-from-basket',
      title:cart.title,
    })
  }
  
  return(
    <>
    <hr/>
    <Paper elevation={3}>
                    <div className="row main-cart ">
                    <div className="col-md-5 col-11 mx-auto  d-flex justify-content-center align-items-center cart-item-image">
                      <img src="https://m.media-amazon.com/images/I/81onqHVeECL._AC_UY327_FMwebp_QL65_.jpg" className="img-fluid" alt="cart-item-img"/>
                    </div>

                    {/*details div*/}
                    <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                      <div className="row">
                        <div className="col-12">
                          <h3 className="mb-4 cart-title">{cart.title}</h3>
                          <p className="mb-2">color:unknown</p>
                          <p className="mb-2">color:unknown</p>
                          <p className="mb-2">color:unknown</p>
                        </div>
                        
                        <div className="row">
                          <div className="col-8 d-flex justify-content-between cart-item-remove">
                            <Button startIcon={<DeleteIcon/>} fullWidth 
                            onClick={remove_from_basket}
                            ><p>Remove from cart</p></Button>
                          </div>
                          <div className="col-4 d-flex justify-content-end cart-item-price">
                            <h3><span id="item-price">{cart.price}</span>rs</h3>
                          </div>
                        </div>


                      </div>
                    </div>
                    </div>
                    </Paper>

    </>
  )
}
const Cart=()=> {
    const history=useHistory();
    const [{cart},dispatch]=useStateValue();
    return (
      <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-11 mx-auto cart-left">

              <div className="row mt-5 gx-3">
                {/*left side*/}
                <div className="col-md-12 col-lg-8 col-11 mx-auto mb-5 mb-lg-0 ">
                  <div className="card p-4">
                    <h2 className="py-4 font-weight-bold"> Cart({cart.length} items)</h2>
                    <Cartitem/>
                    <Cartitem/>
                    <Cartitem/>
                    
                    
                  </div>
                </div>
                {/*right side*/}
                <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5 cart-right">
                  <Paper className="p-3 shadow bg-white">
                    <h2 className="product-name">The Total Ammount</h2>
                    <div className="price-individual d-flex justify-content-between">
                      <p>product ammount</p>
                      <p><span>{get_cart_total(cart)}</span>rs</p>
                    </div>
                    <div className="price-individual d-flex justify-content-between">
                      <p>shipping charge</p>
                      <p><span>0</span>rs</p>
                    </div>
                    <hr/>
                    <div className="cart-total d-flex justify-content-between font-wight-bold">
                    <b>Total Ammount</b>
                      <p><span>{get_cart_total(cart)}</span>rs</p>
                    </div>
                    <hr/>
                    <Button fullWidth variant="contained" color="primary" onClick={()=>history.push('/checkout')}>Checkout</Button>
                  </Paper>
                </div>

              </div>
          </div>
          
        </div>

      </div>

        
    </>)
}



export default Cart;
