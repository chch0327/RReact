import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`)
    ).json();
    setMovies(json);
    setLoading(false);
  };

  console.log(movies);

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movies.poster_path} />
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <h1>{movies.title}</h1>
            <h1>{movies.vote_average}</h1>
          </div>
          <p>{movies.overview}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
