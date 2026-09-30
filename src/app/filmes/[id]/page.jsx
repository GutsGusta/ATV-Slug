"use client";

import { useState, useEffect } from "react";
import dados from "@/filmes.json";
import { useParams } from "next/navigation";
import "./desc.css";

export default function Filme(){
    const [filme, setFilme] = useState(null);
    const params = useParams();

    useEffect( () => {
        const filmeEncontrado = dados.find(f => f.id == params.id);
        setFilme(filmeEncontrado);
    }, []);

    return(
        <main>
            {filme !== null && <>
                <div className="container-filme">
                    <img src={filme.imagem}/>
                    <div className="texto">
                        <h1>{filme.titulo}</h1>
                        <ul>
                            <li>{filme.ano}</li>
                            <li>{filme.genero}</li>
                            <li>{filme.idiomaOriginal}</li>
                        </ul>
                        <h1>Descrição do Filme {filme.titulo}</h1>
                        <p>{filme.sinopse}</p>
                    </div>
                </div>  
            </>}
            
        </main>
    )
}