import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const {id} = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log(json);
    setLoading(false);
    setMovie(json.data.movie);
  }
  useEffect(() => {getMovie();}, []);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
        <div>
          <h2>{movie.title}</h2>
          <a href={movie.url} target="_blank">
            <p>go to Download</p>
            <img src={movie.medium_cover_image}/>
          </a>
          <hr />
          <h3>Rating : {movie.rating}</h3>
          <h3>Runtime : {movie.runtime} min</h3>
          <hr />
          <div>
            <strong>[brief discription]</strong>
            <h4>{movie.description_intro}</h4>
          </div>
        </div>}          
    </div>
  )
}

export default Detail;