//Botón reutilizable importado
import Button from "./Button";

function MovieCard({ 
  title, 
  image, 
  onVerDetalle, 
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
            
            <Button 
              text="Ver detalle" 
              OnClick={() => onVerDetalle()}
            />
          </div>
    </div>
  );
}

export default MovieCard;
