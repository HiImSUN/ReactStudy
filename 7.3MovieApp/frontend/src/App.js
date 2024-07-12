import { useState, useEffect } from "react";

const REF_URL =
  "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(REF_URL);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div
              key={movie.id}
              style={{
                display: "flex",
                marginBottom: "20px",
                alignItems: "top",
              }}
            >
              <img
                src={movie.medium_cover_image}
                alt={movie.title}
                style={{ marginRight: "20px" }}
              />
              <div>
                <h2>{movie.title}</h2>
                <p>{movie.summary}</p>
                <ul>
                  {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
