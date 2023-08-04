import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Movie({id, title, year, coverImg, summary, genres}) {
  return (
    <div key={id}>
        <h1>
          <Link to={`/movie/${id}`}>{title} ({year})</Link>
        </h1>
        <img src={coverImg} alt="img"/>
        <ul>
          {genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
        <hr />
    </div>
  )
}

Movie.propTypes = {
  id : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired,
  year : PropTypes.number.isRequired,
  coverImg : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;