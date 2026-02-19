//Botón reutilizable importado
import MovieCard from "../components/MovieCard.jsx";

function Cartelera({ cambiarVista }) 
{
  return(
    <main style={{maxWidth:"1200px", margin: "0 auto", display:"grid", 
    gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap:"16px", padding:"16px"}}>

        <MovieCard
            title="La bella durmiente"
            image="https://images.justwatch.com/poster/309252944/s718/la-bella-durmiente.jpg"
            onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
            title="La sirenita"
            image="https://images.uncyclomedia.co/inciclopedia/es/thumb/d/d2/Imagen_2024-10-17_103850093.png/1200px-Imagen_2024-10-17_103850093.png"
            onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
            title="Cinderella"
            image="https://lumiere-a.akamaihd.net/v1/images/p_cinderella_20490_a7c83808.jpeg"
            onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
            title="La bella y la bestia"
            image="https://es.web.img2.acsta.net/medias/nmedia/18/78/63/96/19592613.jpg"
            onVerDetalle={() => cambiarVista("detalle")}
        />
    </main>
  );
}

export default Cartelera;