import MovieCard from "../components/MovieCard";
import peliculasData from "../data/peliculas.json"; 

function Home({ verDetalle }) {
  // Obtener películas del JSON
  const peliculas = peliculasData.peliculas.filter(p => p.destacada).slice(0, 3)
  
  return (
    <main
      style={{
        maxWidth: "1200px", // Controla el ancho en pantallas grandes
        margin: "0 auto", // Centra el contenido
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        padding: "16px"
      }}
    >
      {peliculas.map((pelicula) => (
        <MovieCard
          key={pelicula.id}
          title={pelicula.titulo}
          image={pelicula.poster}
          pelicula={pelicula}
          onVerDetalle={() => verDetalle(pelicula)}
        />
      ))}
    </main>
  );
}

export default Home;
