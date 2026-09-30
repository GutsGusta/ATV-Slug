"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import "./desc.css";

export default function Produto(){
    const [produto, setProduto] = useState(null);
    const params = useParams();

    useEffect( () => {
       fetch(`https://dummyjson.com/products/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setProduto(data); 
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
        }, [params.id]);

    return(
        <main>
            {produto !== null && <>
                <div className="container-produto">
                    <img src={produto.thumbnail}/>
                    <div className="texto">
                        <h1>{produto.title}</h1>
                        <p>{produto.category}</p>
                            <p>★{produto.rating}</p>
                            <p>R${produto.price}</p>
                        <p>No pix por: {produto.discountPercentage}</p>
                        <p>Estoque: {produto.stock}</p>
                        <h2>Descrição do Produto: {produto.title}</h2>
                        <p>{produto.description}</p>
                    </div>
                </div>  
            </>}
            
        </main>
    )
}