import React from 'react'
import { ItemCount } from "../ItemCount/ItemCount";
import "./Item.css"

export const Item = ({product}) => {
    return(
        <div className="productosList" >
            <img clasName="imgCatalogo" src={product.img} alt={product.name} height="200"/>
            <h1>{product.name} </h1>
            <p> {product.description} </p>
            <p> Precio : {product.price} $</p>
            <ItemCount stock={product.stock} initial={0} />
        </div>
    ) 
}