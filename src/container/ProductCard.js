import React,{useEffect} from "react";
import '../css/productcard.css';
import {Link} from 'react-router-dom';
import {Paper }from '@material-ui/core';
import {useHistory} from 'react-router-dom'
import {useStateValue} from '../store/Stateprovider';



const ProductCard=(props)=>{
    const history=useHistory();
    const [{productdetails},dispatch]=useStateValue();
     useEffect(() => {
        
        return () => {
            dispatch({
                case:'product-details',
                product:{
                    title:props.title,
                    price:props.price,
                    image:props.image,
                }
            })  
        }
    }, [])

    function showProductDetalis(){
        
        history.push('/products/'+props.title+'/'+props.price)

    }
    console.log(productdetails.title);
    return(
        
        
        <Paper className="product" key={props.id} onClick={showProductDetalis} elevation={2}>
        
            <div className="product-inside">
                <div className="product-image">
                    <img src={props.image} alt="img"/>
                </div>
                <span class="badge rounded-pill bg-success">{props.label}</span>
                <Link to={'/products/'+props.title}>
                <div className="product-title">
                    {props.title}  
                </div>
                </Link>
                <div className="product-price">
                   <p> {props.price} rs</p>
                    
                </div>
                {/*<CardActions>
                    <Button variant="outlined" fullWidth className="button">Add to Cart</Button>
                </CardActions>*/}
            </div>
        </Paper>
        

    )  

}

export default ProductCard;