function Otros() 
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
            src="https://palomaynacho.com/wp-content/uploads/2025/10/Combo-lunes-cinepolis-promocion.jpg"
            alt="Promociones"
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "6px",}}/>

          <div style={{ padding:"12px", textAlign:"center", color: "#f583b6ff" }}>
            <h3>Promociones</h3>
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
            src="https://cazaofertas.com.mx/wp-content/uploads/2021/06/Cinepolis-membresia-230621-00.jpg"
            alt="Membresías"
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "6px",}}/>

          <div style={{ padding:"12px", textAlign:"center", color: "#f583b6ff" }}>
            <h3>Membresías</h3>
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
            src="https://gritaradio.com/wp-content/uploads/2025/11/Pelicula-Sorpresa-Cinepolis-VIP-en-noviembre.jpg"
            alt="Preventas"
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "6px",}}/>

          <div style={{ padding:"12px", textAlign:"center", color: "#f583b6ff" }}>
            <h3>Preventas</h3>
          </div>
        </div>

        <div
          style={{ border: "1px solid #ddd", borderRadius: "8px", overflow:"hidden", }}
        >
          <img
            src="https://i.blogs.es/9c4de1/g3vyjjdwaaaoqwf/650_1200.jpeg"
            alt="Formatos especiales"
            style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "6px",}}/>

          <div style={{ padding:"12px", textAlign:"center",color: "#f583b6ff" }}>
            <h3>Formatos Especiales</h3>
          </div>
        </div>
    </main>
  );
}

export default Otros;
