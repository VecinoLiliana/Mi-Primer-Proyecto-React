//Botón reutilizable importado
//import MovieCard from "../components/MovieCard.jsx";

function Food() 
{
  return(
    <main style={{maxWidth:"1200px", margin: "0 auto", display:"grid", 
    gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap:"16px", padding:"16px"}}>

        <div
          style={{ 
            border: "1px solid #ddd", 
            borderRadius: "8px", 
            overflow:"hidden",
          }}
        >
          <img
            src="https://i5.walmartimages.com.mx/samsmx/images/product-images/img_large/000286978l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            alt="ICEE"
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "6px",}}/>

          <div style={{ padding:"12px", textAlign:"center", color: "#f583b6ff" }}>
            <h3>ICEE</h3>
          </div>
        </div>
        
        <div
          style={{ 
            border: "1px solid #ddd", 
            borderRadius: "8px", 
            overflow:"hidden",
          }}
        >
          <img
            src="https://thumbs.dreamstime.com/b/coca-cola-en-taza-de-papel-disponible-con-los-cubos-hielo-ankara-turqu%C3%ADa-mayo-el-vidrio-aislado-fondo-blanco-151775163.jpg"
            alt="Bebida"
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "6px",}}/>

          <div style={{ padding:"12px", textAlign:"center", color: "#f583b6ff" }}>
            <h3>Bebida</h3>
          </div>
        </div>

        <div
          style={{ 
            border: "1px solid #ddd", 
            borderRadius: "8px", 
            overflow:"hidden",
          }}
        >
          <img
            src="https://m.media-amazon.com/images/I/61U8Z24fz9L._UF1000,1000_QL80_.jpg"
            alt="Palomitas"
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "6px",}}/>

          <div style={{ padding:"12px", textAlign:"center", color: "#f583b6ff" }}>
            <h3>Palomitas</h3>
          </div>
        </div>

        <div
          style={{ 
            border: "1px solid #ddd", 
            borderRadius: "8px", 
            overflow:"hidden",
          }}
        >
          <img
            src="https://media.istockphoto.com/id/174680153/es/foto/perrito-caliente-smokie.jpg?s=612x612&w=0&k=20&c=5fxXuF5-ijfOkrQsOSkpKFl-SmmyMX3EWUpvDRtL03g="
            alt="Hot Dog"
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "6px",}}/>

          <div style={{ padding:"12px", textAlign:"center", color: "#f583b6ff" }}>
            <h3>Hot Dog</h3>
          </div>
        </div>

        <div
          style={{ 
            border: "1px solid #ddd", 
            borderRadius: "8px", 
            overflow:"hidden",
          }}
        >
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/80933e55304209.597f59ae7e5f8.jpg"
            alt="Dulces"
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "6px",}}/>

          <div style={{ padding:"12px", textAlign:"center", color: "#f583b6ff" }}>
            <h3>Dulces</h3>
          </div>
        </div>

        <div
          style={{ 
            border: "1px solid #ddd", 
            borderRadius: "8px", 
            overflow:"hidden",
          }}
        >
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/c784c055304209.597f59ae7ef0c.jpg"
            alt="Gomitas"
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "6px",}}/>

          <div style={{ padding:"12px", textAlign:"center", color: "#f583b6ff" }}>
            <h3>Gomitas</h3>
          </div>
        </div>

        <div
          style={{ 
            border: "1px solid #ddd", 
            borderRadius: "8px", 
            overflow:"hidden",
          }}
        >
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/b85c0c55304209.597f59ae7eadc.jpg"
            alt="Chocolates"
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "6px",}}/>

          <div style={{ padding:"12px", textAlign:"center", color: "#f583b6ff" }}>
            <h3>Chocolates</h3>
          </div>
        </div>

        <div
          style={{ 
            border: "1px solid #ddd", 
            borderRadius: "8px", 
            overflow:"hidden",
          }}
        >
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/01ba4055304209.5a920aa646405.png"
            alt="Caramelos"
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "6px",}}/>

          <div style={{ padding:"12px", textAlign:"center", color: "#f583b6ff" }}>
            <h3>Caramelos</h3>
          </div>
        </div>

        <div
          style={{ 
            border: "1px solid #ddd", 
            borderRadius: "8px", 
            overflow:"hidden",
          }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/052/933/218/small/chocolate-bar-isolated-on-a-transparent-background-free-png.png"
            alt="Chocolate"
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "6px",}}/>

          <div style={{ padding:"12px", textAlign:"center", color: "#f583b6ff" }}>
            <h3>Chocolate</h3>
          </div>
        </div>
    </main>
  );
}

export default Food;
