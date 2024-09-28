
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json";

export default function MovieListPage(){
    const [search, setSearch] = useState('')
    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const filteredMovies = movies.filter(filme => filme.titulo.toLowerCase().
    includes(search.toLowerCase()))

    return (
        <>
        <h2>Veja o catálogo de filmes</h2>
        <input type="text" id="search" 
        value={search}
        className="bg-pink-200"
        onChange={handleSearch}/>

<section className="flex">

        {
            filteredMovies.length > 0 ?
            filteredMovies
            .map(filme => (
              <MovieCard key={filme.id} {...filme} />
          ))
            :
            <p>Filme não encontrado</p>
        
        }
  </section>
  </>
    )
}

