import React from 'react';
import '../css/page.css';
import Card from './Card';
import ProductCard from './ProductCard';
import { Paper } from '@material-ui/core';
import {menfashiondata,womendata} from '../data/productcard_data';

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


const Fashionpage=()=>{
    return(
        <>
        <div className="page">
            

            <Paper elevation={3} className="p-2 m-2">
            <div className="options">
            <h3 className="text-start  m-2">All New Winter Collections</h3>
                <div className="options-row">
                    <Card title="Sweatshirts & hoodies" image="https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/WRS-Dec/update/Hoodies_01._CB413828687_.jpg"/>
                    <Card title="Jackets" image="https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/WRS-Dec/SBC/Jackets._CB413517073_.jpg"/>
                    <Card title="Sweters" image="https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/WRS-Dec/SBC/MA-SBC1_03._CB413596291_.jpg"/>
                    <Card title="Gloves" image="https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/WRS-Dec/SBC/MA-SBC1_05._CB413596290_.jpg"/>
                </div>
            </div>
            </Paper>

            
            <div id="products">
            <h3 className="text-start  m-2 p-2">Mens Weistcoats</h3>
            <div className="options-row">
            {menfashiondata.map(Products)}
            </div>
            </div>

            <Paper elevation={3} className="p-2 m-2">
            <div className="options">
            <h3 className="text-start  m-2">Womens Corner</h3>
                <div className="options-row">
                    <Card title="Sarees" image="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/WRSDEC/SBC/WA-SBC2_01._CB413443939_.jpg"/>
                    <Card title="Kurtas" image="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/WRSDEC/SBC/WA-SBC2_02._CB413443939_.jpg"/>
                    <Card title="Salwar Suits" image="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/WRSDEC/SBC/updated/SalwarNEW._CB413756341_.jpg"/>
                    <Card title="Churidars" image="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/WRSDEC/SBC/WA-SBC2_05._CB413443939_.jpg"/>
                </div>
            </div>
            </Paper>
            <div id="products">
            <h3 className="text-start  m-2 p-2">Womens Collections</h3>
            <div className="options-row">

            {womendata.map(Products)}

            </div>
            </div>

            

            
            </div>
        </>
    )
}

export default Fashionpage
