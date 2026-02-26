import "./App.css";
// Hook de React para manejar estado y efectos
import { useState, useEffect } from "react"

// Componentes
import Header from "./components/Header"

// Vistas
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Food from "./pages/Food"
import Otros from "./pages/Otros"
import Tickets from "./pages/tickets"

// Datos
import peliculasData from "./data/peliculas.json"

function App() {
  // Se declara un estado que controla qué vista se muestra
  const [vistaActual, setVistaActual] = useState("home")

  // Aquí nos permite guardar alguna película seleccionada
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)

  // Estados dinámicos agregados
  const [peliculas, setPeliculas] = useState([])
  const [peliculasFavoritas, setPeliculasFavoritas] = useState([])
  const [elementoActivo, setElementoActivo] = useState(null)
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    pelicula: "",
    boletos: 1,
    horario: ""
  })
  const [formularioEnviado, setFormularioEnviado] = useState(null)

  // useEffect para carga dinámica de datos
  useEffect(() => {
    setTimeout(() => {
      setPeliculas(peliculasData.peliculas)
    }, 1000)
  }, [])

  // Función para ir a detalle enviando datos
  function verDetalle(pelicula) {
    setPeliculaSeleccionada(pelicula)
    setVistaActual("detalle")
  }

  // Función para toggle de favoritos
  function toggleFavorito(pelicula) {
    setPeliculasFavoritas(prev => {
      const existe = prev.find(p => p.id === pelicula.id)
      if (existe) {
        return prev.filter(p => p.id !== pelicula.id)
      } else {
        return [...prev, pelicula]
      }
    })
  }

  // Función para selección activa
  function seleccionarElemento(elemento) {
    setElementoActivo(elemento)
  }

  // Función para controlar inputs del formulario
  function handleInputChange(e) {
    const { name, value } = e.target
    setDatosFormulario(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Función para enviar formulario
  function handleSubmit(e) {
    e.preventDefault()
    setFormularioEnviado(datosFormulario)
    setVistaActual("tickets")
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header controla navegación principal */}
      <Header cambiarVista={setVistaActual} />

      {/* Renderizado condicional, el triple "=" es para asegurar que solo se cumpla la condición si es exactamente igual */}
      {vistaActual === "home" && (
        <Home verDetalle={verDetalle} />
      )}

      {vistaActual === "cartelera" && (
        <Cartelera verDetalle={verDetalle} />
      )}

      {vistaActual === "detalle" && (
        <Detalle 
          pelicula={peliculaSeleccionada}
          peliculasFavoritas={peliculasFavoritas}
          toggleFavorito={toggleFavorito}
        />
      )}

      {vistaActual === "food" && (
        <Food 
          elementoActivo={elementoActivo}
          seleccionarElemento={seleccionarElemento}
        />
      )}

      {vistaActual === "otros" && (
        <Otros 
          elementoActivo={elementoActivo}
          seleccionarElemento={seleccionarElemento}
        />
      )}

      {vistaActual === "tickets" && (
        <Tickets datos={formularioEnviado} cambiarVista={setVistaActual} />
      )}

    </div>
  )
}

// Exportamos App
export default App
