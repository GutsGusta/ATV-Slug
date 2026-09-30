import "./cardProduto.css";

export default function CardProduto({ produto }){
    return(
        <div>
            <img src={produto.thumbnail}/>
            <h1>{produto.title}</h1>
            <a href={`/produtos/${produto.id}`}>Saiba mais</a>
        </div>
    )
}