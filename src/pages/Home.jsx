// Importamos la tarjeta reutilizable
import MovieCard from "../components/MovieCard"

function Home({cambiarVista }) 
{
  return (
    <main
      style={{
        maxWidth: "1200px", // Controla el ancho en pantallas grandes
        margin: "0 auto", // Centra el contenido
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px", padding: "16px"
      }}>

      <MovieCard
        title="Legally blonde"
        image="https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Legally_Blonde_film_poster.png/250px-Legally_Blonde_film_poster.png"
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="Uptown girls"
        image="https://m.media-amazon.com/images/M/MV5BODk0ODI2MTk1N15BMl5BanBnXkFtZTcwODg3Mjg3NA@@._V1_.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="27 Dresses"
        image="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p170961_p_v10_ag.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="27 Dresses"
        image="https://es.web.img2.acsta.net/pictures/23/07/20/11/29/5479684.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />
    </main>
  )
}

// Exportamos la vista
export default Home
