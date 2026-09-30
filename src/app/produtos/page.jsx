"use client";

import { useState, useEffect } from "react";
import CardProduto from "@/components/CardProduto";

export default function Produtos({ products }) {
    const [listaProdutos, setListaProdutos] = useState([]);

    useEffect( () => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setListaProdutos(data.products);
        })
        }, [] );

    return (
        <>
            {listaProdutos.length > 0 &&
                <div>
                    {listaProdutos.map(p =>{
                        return <CardProduto key={p.id} produto={p}/>
                    })}
                </div>
            }
        </>
    )
}