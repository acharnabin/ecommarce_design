import React from 'react';
import '../css/page.css';
import Card from './Card';
import ProductCard from './ProductCard';
import {watchdata} from '../data/productcard_data';

function Products(props,index){
    return(
        <>
        
        <ProductCard
            key={props.id}
            label={props.label}
            image={props.image}
            price={props.price}
            category={props.category}
            title={props.title}
        />
        </>
    )
}


const Watchpage=()=>{
    return(
        <>
        <div className="page">
            
            <div className="page-img">
                <img src="https://m.media-amazon.com/images/G/31/img20/Watches/WRS2020/Singlebanners/Single-banner2._CB413661870_.jpg"/>
            </div>
            
            <div className="options p-2 m-2">
            <h3 className="text-start  m-2">Must Have brands</h3>
                <div className="options-row">
                    <Card  image="https://m.media-amazon.com/images/G/31/img20/Watches/WRS2020/Brandqc/Fossil._SS680_QL85_.jpg"/>
                    <Card  image="https://m.media-amazon.com/images/G/31/img20/Watches/WRS2020/Brandqc/Titan._SS680_QL85_.jpg"/>
                    <Card  image="https://m.media-amazon.com/images/G/31/img20/Watches/WRS2020/Brandqc/Casio._SS680_QL85_.jpg"/>
                    <Card  image="https://m.media-amazon.com/images/G/31/img20/Watches/WRS2020/Brandqc/fastrack._SS680_QL85_.jpg"/>
                </div>

                <h3 className="text-start  m-2">More Top Brands</h3>
                <div className="options-row">
                    <Card  image="https://m.media-amazon.com/images/G/31/img20/Watches/WRS2020/Brandhex/Citizen._SY530_QL85_.jpg"/>
                    <Card  image="https://m.media-amazon.com/images/G/31/img20/Watches/WRS2020/Brandhex/Sonata._SY530_QL85_.jpg"/>
                    <Card  image="https://m.media-amazon.com/images/G/31/img20/Watches/WRS2020/Brandhex/seiko._SY530_QL85_.jpg"/>
                    <Card  image="https://m.media-amazon.com/images/G/31/img20/Watches/WRS2020/Brandhex/AE._SY530_QL85_.jpg"/>
                    <Card  image="https://m.media-amazon.com/images/G/31/img20/Watches/WRS2020/Brandhex/diesel._SY530_QL85_.jpg"/>
                    <Card  image="https://m.media-amazon.com/images/G/31/img20/Watches/WRS2020/Brandhex/Mathey_Tissot._SY530_QL85_.jpg"/>

                </div>
            </div>
            

            
            <div id="products">
            <h3 className="text-start  m-2 p-2">Stylish Watches</h3>
            <div className="options-row">
                {watchdata.map(Products)}

            </div>

            <div className="options-row reverse-row">
            {watchdata.map(Products)}


            </div>
            </div>

            
            
            </div>
        </>
    )
}

export default Watchpage
