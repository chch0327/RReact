import { Link } from "react-router-dom";

function Movie({ id, coverImg, movieTitle, mvOverView, mvGeren }) {
  return (
    <div>
      <img src={coverImg} />
      <h2>
        <Link to={`/movie/${id}`}>{movieTitle}</Link>
      </h2>
      <p>{mvOverView}</p>
      <ul>
        {mvGeren.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
