import React from 'react';
import '../css/page.css';
import Card from './Card';
import ProductCard from './ProductCard';
import {smartphonedata} from '../data/productcard_data';


function Products(props,index){
    return(
        <>
        
        <ProductCard
            key={props.id}
            label={props.label}
            image={props.image}
            price={props.price}
            title={props.title}
            category={props.category}
        />
        </>
    )
}


const Smartphone=()=>{
    return(
        <>
        <div className="page">
            <div className="sliders" >
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Cnnjpp/OnePlus/Dec_FPF/OP_Family/D18887026_IN_WLD_BAU_OnePlus_Family_TallHero_1500x600._CB412339206_.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/FabPhonesFest_December/GoLive/PC/PC_Header_01.gif" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/A15s/Teaser/GW/D19597772_IN_OPPO-A15s_Mob_Hero_1242x450._CB412266956_SY250_.jpg" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    
                </a>
                </div>
            </div>

            <div className="options">
            <h3 className="text-center text-black-50 m-2">Shop by brands</h3>
                <div className="options-row">
                    <Card title="Oneplus" image="https://images-eu.ssl-images-amazon.com/images/I/41ppKgnVLdL._AC_SX184_.jpg"/>
                    <Card title="Redmi" image="https://m.media-amazon.com/images/I/51ny7ASFe4L.jpg"/>
                    <Card title="Iphone" image="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"/>
                    <Card title="Samsung" image="https://m.media-amazon.com/images/I/81onqHVeECL._AC_UY327_FMwebp_QL65_.jpg"/>
                </div>
            </div>
            <div id="products">
            <h3 className="text-center text-black-50 m-2">Recommended for You</h3>
            <div className="options-row">
                {
                    smartphonedata.map(Products)
                }
            </div>
            </div>
            </div>
        </>
    )
}

export default Smartphone
