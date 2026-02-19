export default function Header({cambiarVista}) {
  return (
    <header
      style={{ boxSizing: "Border-box", backgroundColor: "#f583b6ff", width:"100%", //ocupa todo el ancho de la pantalla (100%)

      }}>
        {/* Contenedor interno para ordenar contenido */}
        <div style={{display: "flex", justifyContent:"space-between", alignItems:"center", padding: "16px 24px", 
          maxWidth:"1400px", margin:"0 auto"
        }}
       >
        <h1 style={{ margin: 0 }}>CinePrueba</h1>

        <nav style={{display: "flex", gap:"24px"}}>
          <span style={{cursor:"pointer"}} onClick={() => cambiarVista("home")}>
            Inicio
          </span>

          <span style={{cursor:"pointer"}} onClick={() => cambiarVista("cartelera")}> 
            Cartelera
          </span>

          <span style={{cursor:"pointer"}} onClick={() => cambiarVista("food")}>
            Comida
          </span>
          
          <span style={{cursor:"pointer"}} onClick={() => cambiarVista("otros")}>
            Otros
          </span>
        </nav>
        </div>
    </header>
  );
}
