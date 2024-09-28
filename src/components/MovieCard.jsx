import { Link } from "react-router-dom";

export default function MovieCard({ id, titulo, imagem_destaque }) {
    return (
        <div>
            <h2>{titulo}</h2>
            <img src={imagem_destaque} />
            <Link to={`/movies/${id}`} className="bg-pink-800 p-3 text-white m-8
            hover:bg-pink-900">Saber mais</Link>
        </div>
    )

}