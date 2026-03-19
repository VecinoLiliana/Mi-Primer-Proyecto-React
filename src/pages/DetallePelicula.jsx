import { useParams } from "react-router-dom";
import peliculasData from "../data/peliculas.json";

function DetallePelicula() {
  const { id } = useParams();
  
  // Buscar la película por ID
  const pelicula = peliculasData.peliculas.find(p => p.id === parseInt(id));

  if (!pelicula) {
    return (
      <main style={{ padding: "24px", textAlign: "center" }}>
        <h2>Película no encontrada</h2>
        <p>No existe una película con el ID: {id}</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>{pelicula.titulo}</h2>
      
      <img
        src={pelicula.poster}
        alt={pelicula.titulo}
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "16px"
        }}
      />

      <p>{pelicula.sinopsis}</p>

      <div style={{ marginTop: "16px" }}>
        <p><strong>Género:</strong> {pelicula.genero.join(", ")}</p>
        <p><strong>Idioma:</strong> {pelicula.idioma}</p>
        <p><strong>Formato:</strong> {pelicula.formato.join(", ")}</p>
        <p><strong>Horarios:</strong> {pelicula.horarios.join(", ")}</p>
        <p><strong>Clasificación:</strong> {pelicula.clasificacion}</p>
        <p><strong>Duración:</strong> {pelicula.duracionMin} minutos</p>
      </div>
    </main>
  );
}

export default DetallePelicula;
