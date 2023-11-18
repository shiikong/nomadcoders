import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await //awaitsms async 내부에 있어야 사용 가능
    (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json.data);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={`${movie.title} 포스터`} />
          <h1>{movie.title}</h1>
        </div>
      )}
    </>
  );
}
export default Detail;
