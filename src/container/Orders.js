import { Container, Divider, Paper } from '@material-ui/core';
import React from 'react';
import '../css/order.css';
import Stepper from './stepper';
const Order=()=>{
    return(
        <>
        <Container maxWidth="md" className="order-container">
        <p>My Orders</p>
        <Paper elevation={4} className="order">
            <div className="order-upper">
            <img src="https://m.media-amazon.com/images/I/41yPll98BqL.__AC_SY200_.jpg" className="order-item-img" />
            <Divider orientation="vertical" className="mx-2" />
            <div className="order-title mx-2">
            <h4 >Samsung smartphone</h4>
            <p className="mx-2">price:2000rs</p>
            <p className="mx-2">color:2000rs</p>
            </div>
            </div>

            <Divider/>

            <div className="order-lower">
            <Stepper/>
            </div>
           
        </Paper>

        <Paper elevation={4} className="order">
            <div className="order-upper">
            <img src="https://m.media-amazon.com/images/I/41yPll98BqL.__AC_SY200_.jpg" className="order-item-img" />
            <Divider orientation="vertical" className="mx-2" />
            <div className="order-title mx-2">
            <h4 >Samsung smartphone</h4>
            <p className="mx-2">price:2000rs</p>
            <p className="mx-2">color:2000rs</p>
            </div>
            </div>

            <Divider/>
            
            <div className="order-lower">
            <Stepper/>
            </div>
           
        </Paper>

        <Paper elevation={4} className="order">
            <div className="order-upper">
            <img src="https://m.media-amazon.com/images/I/41yPll98BqL.__AC_SY200_.jpg" className="order-item-img" />
            <Divider orientation="vertical" className="mx-2" />
            <div className="order-title mx-2">
            <h4 >Samsung smartphone</h4>
            <p className="mx-2">price:2000rs</p>
            <p className="mx-2">color:2000rs</p>
            </div>
            </div>

            <Divider/>
            
            <div className="order-lower">
            <Stepper/>
            </div>
           
        </Paper>

        <Paper elevation={4} className="order">
            <div className="order-upper">
            <img src="https://m.media-amazon.com/images/I/41yPll98BqL.__AC_SY200_.jpg" className="order-item-img" />
            <Divider orientation="vertical" className="mx-2" />
            <div className="order-title mx-2">
            <h4 >Samsung smartphone</h4>
            <p className="mx-2">price:2000rs</p>
            <p className="mx-2">color:2000rs</p>
            </div>
            </div>

            <Divider/>
            
            <div className="order-lower">
            <Stepper/>
            </div>
           
        </Paper>
        </Container>

        </>
    )
}

export default Order;