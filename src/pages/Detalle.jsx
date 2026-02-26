import { useState } from "react"

// Vista de detalle de una película
function Detalle({ pelicula, peliculasFavoritas, toggleFavorito }) {

  // Estados para el formulario
  const [nombre, setNombre] = useState("")
  const [cantidadBoletos, setCantidadBoletos] = useState(1)
  const [mensaje, setMensaje] = useState("")

  // Estado para favoritos
  const esFavorita = peliculasFavoritas?.some(p => p.id === pelicula?.id)

  // En el caso que no se seleccione ninguna película
  if (!pelicula) {
    return (
      <main style={{ padding: "24px", textAlign: "center" }}>
        <h2>No hay película seleccionada</h2>
      </main>
    )
  }

  // Evento submit/enviar
  function manejarCompra(e) {
    e.preventDefault()

    setMensaje(
      `Gracias ${nombre}, compraste ${cantidadBoletos} boleto(s) para ${pelicula.titulo}` 
    )

    // Opcional: limpiar formulario
    setNombre("")
    setCantidadBoletos(1)
  }

  return (
    <main
      style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }} >
      <h2>{pelicula.titulo}</h2>

      {/* Botón de favoritos */}
      <button
        onClick={() => toggleFavorito(pelicula)}
        style={{
          backgroundColor: esFavorita ? "#f583b6ff" : "transparent",
          color: esFavorita ? "white" : "#f583b6ff",
          border: "2px solid #f583b6ff",
          borderRadius: "20%",
          width: "35px",
          height: "35px",
          margin: "16px 0",
          fontSize: "16px"
        }}
      >
        {esFavorita ? "✓" : "♥"}
      </button>

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

      {/* Información adicional de la película */}
      <div style={{marginBottom: "16px"}}>
        <p><strong>Género:</strong> {pelicula.genero.join(", ")}</p>
        <p><strong>Idioma:</strong> {pelicula.idioma}</p>
        <p><strong>Formato:</strong> {pelicula.formato.join(", ")}</p>
        <p><strong>Horarios:</strong> {pelicula.horarios.join(", ")}</p>
      </div>

      <hr style={{ margin: "24px 0" }} />

      <h3>Comprar boletos</h3>

      <form onSubmit={manejarCompra}>
        <div style={{ marginBottom: "12px" }}>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "4px"
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>Cantidad de boletos:</label>
          <input
            type="number"
            min="1"
            value={cantidadBoletos}
            onChange={(e) => setCantidadBoletos(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "4px"
            }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 16px",
            backgroundColor: "#ed0970ff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            
          }}
        >
          Comprar
        </button>
      </form>

      {mensaje && (
        <p style={{ marginTop: "16px", color: "pink" }}>
          {mensaje}
        </p>
      )}
    </main>
  )
}

export default Detalle
