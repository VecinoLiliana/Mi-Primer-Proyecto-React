//Botón reutilizable importado
import MovieCard from "../components/MovieCard.jsx";

function Food({ cambiarVista }) 
{
  return(
    <main style={{maxWidth:"1200px", margin: "0 auto", display:"grid", 
    gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap:"16px", padding:"16px"}}>

        <MovieCard
            title="ICEE"
            image="https://i5.walmartimages.com.mx/samsmx/images/product-images/img_large/000286978l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            onVerDetalle={() => cambiarVista("detalle")}
        />
        
        <MovieCard
            title="Bebida"
            image="https://thumbs.dreamstime.com/b/coca-cola-en-taza-de-papel-disponible-con-los-cubos-hielo-ankara-turqu%C3%ADa-mayo-el-vidrio-aislado-fondo-blanco-151775163.jpg"
            onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
            title="Palomitas"
            image="https://m.media-amazon.com/images/I/61U8Z24fz9L._UF1000,1000_QL80_.jpg"
            onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
            title="Hot Dog"
            image="https://media.istockphoto.com/id/174680153/es/foto/perrito-caliente-smokie.jpg?s=612x612&w=0&k=20&c=5fxXuF5-ijfOkrQsOSkpKFl-SmmyMX3EWUpvDRtL03g="
            onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
            title="Dulces"
            image="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/80933e55304209.597f59ae7e5f8.jpg"
            onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
            title="Dulces"
            image="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/c784c055304209.597f59ae7ef0c.jpg"
            onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
            title="Dulces"
            image="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/b85c0c55304209.597f59ae7eadc.jpg"
            onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
            title="Dulces"
            image="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/01ba4055304209.5a920aa646405.png"
            onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
            title="Chocolate"
            image="https://static.vecteezy.com/system/resources/thumbnails/052/933/218/small/chocolate-bar-isolated-on-a-transparent-background-free-png.png"
            onVerDetalle={() => cambiarVista("detalle")}
        />
    </main>
  );
}

export default Food;
