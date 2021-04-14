import React from 'react';
import '../css/home.css';
import Card from './Card';
import {Divider} from '@material-ui/core';
import ProductCard from './ProductCard';
import { CardData } from '../data/Carddata';
import {smartphonedata} from '../data/productcard_data';
import {menfashiondata,womendata} from '../data/productcard_data';

function Card_Data_item(props,index){
    return(
        
            <div className="">
            <Card 
                key={props.id}
                    title={props.title}
                        image={props.image}
                            link={props.link}

                />

            </div>
       
        

    )
}

function Products(props,index){
    
    return(
        <>
        
        <ProductCard
            label={props.label}
            image={props.image}
            price={props.price}
            title={props.title}
            category={props.category}
        />
        
        </>
    )
}

const Home=()=>{
    return(
        <>
        
        

        <div className="home container-fluid mt-2">
        
        <section id="slider">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner home_img">
            <div className="carousel-item active">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/Dec_BAU/wintertheme/P38983965_IN_WLME_SamsungGalaxy_M51_Design_Change_1500x600_3._CB413479156_.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Cnnjpp/OnePlus/Dec_FPF/OP_Family/D18887026_IN_WLD_BAU_OnePlus_Family_TallHero_1500x600._CB412339206_.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Coolie/launch/1500x600_Hero-Tall_ft._CB412487492_.jpg" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            
        </a>
        </div>
                
        </section>

        <Divider className="m-2"/>
        <h3 className="text text-start p-2">Shop by Category</h3>
            <div className="home_row">
            
                    {
                        CardData.map(Card_Data_item)
                    }
                    
 
            </div>
                
            <Divider className="m-2"/>
            
            <h3 className="text text-start p-2">Smartphones</h3>
            <div className="home_row">
               { smartphonedata.map(Products)}
               </div> 

           
               <Divider className="m-2"/>
               <h3 className="text text-start p-2">Fashion Deals</h3>
            <div className="home_row">
              
              { womendata.map(Products)}

            </div>
            <div className="home_row">
              
              { menfashiondata.map(Products)}

            </div>

        </div>

            
        </>
    )
}

export default Home;