import React from "react";

// Vista de confirmación de tickets
function tickets({ cambiarVista }) 
{
  return(
    <main
      style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }} >
      <h2>TICKET DE CINE</h2>
      <img src="link de la imagen" alt="Nombre de la película"
      style={{ width: "100%", borderRadius: "8px", marginBottom: "16px"}}/>
      <p>AQUÍ SE MUESTRA LA INFO DE LA PELÍCULA</p>
    </main>
  );
}

export default tickets;