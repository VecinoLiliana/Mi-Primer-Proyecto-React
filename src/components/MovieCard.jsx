import { Link } from "react-router-dom";
import Button from "./Button";

function MovieCard({ 
  title, 
  image, 
  pelicula
}) 
{
  return(
    <div
      style={{ 
        border: "1px solid #ddd", 
        borderRadius: "8px", 
        overflow:"hidden",
      }}
    >
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "6px",}}/>

          <div style={{ padding:"12px", textAlign:"center" }}>
            <h3>{title}</h3>
            
            <Link to={`/pelicula/${pelicula.id}`}>
              <Button text="Ver detalle" />
            </Link>
          </div>
    </div>
  );
}

export default MovieCard;
