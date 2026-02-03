import { useState, useEffect } from "react";
import Movie from "../component/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://nomad-movies.nomadcoders.workers.dev/movies`,
    );
    const json = await response.json();
    setMovies(json);
    setLoading(false);
  };
  console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.poster_path}
              movieTitle={movie.title}
              mvOverView={movie.overview}
              mvGeren={movie.genre_ids}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
