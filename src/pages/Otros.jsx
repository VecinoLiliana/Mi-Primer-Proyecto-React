//Botón reutilizable importado
import MovieCard from "../components/MovieCard.jsx";

function Otros({ cambiarVista }) 
{
  return(
    <main style={{maxWidth:"1200px", margin: "0 auto", display:"grid", 
    gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap:"16px", padding:"16px"}}>

        <MovieCard
            title="Promociones"
            image="https://palomaynacho.com/wp-content/uploads/2025/10/Combo-lunes-cinepolis-promocion.jpg"
            onVerDetalle={() => cambiarVista("detalle")}
        />
        
        <MovieCard
            title="Membrecias"
            image="https://cazaofertas.com.mx/wp-content/uploads/2021/06/Cinepolis-membresia-230621-00.jpg"
            onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
            title="Preventas"
            image="https://gritaradio.com/wp-content/uploads/2025/11/Pelicula-Sorpresa-Cinepolis-VIP-en-noviembre.jpg"
            onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
            title="Formatos especiales"
            image="https://i.blogs.es/9c4de1/g3vyjjdwaaaoqwf/650_1200.jpeg"
            onVerDetalle={() => cambiarVista("detalle")}
        />
    </main>
  );
}

export default Otros;
