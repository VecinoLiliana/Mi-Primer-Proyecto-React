import MovieCard from "../components/MovieCard"

function Cartelera({ verDetalle }) {

  // Arreglo de películas en cartelera
  const peliculasCartelera = [
    {
      "id": 7,
      "titulo": "La sirenita",
      "genero": ["Fantasía", "Familiar", "Aventura"],
      "idioma": "Español",
      "subtitulada": false,
      "formato": ["2D"],
      "sinopsis": "Una joven sirena sueña con conocer el mundo humano y vivir nuevas aventuras fuera del mar.",
      "poster": "https://images.uncyclomedia.co/inciclopedia/es/thumb/d/d2/Imagen_2024-10-17_103850093.png/1200px-Imagen_2024-10-17_103850093.png",      "rating": 4.3,
      "horarios": ["12:20", "15:10", "17:50"],
      "disponible": true,
      "destacada": false
    },
    {
      "id": 8,
      "titulo": "Cinderella",
      "genero": ["Fantasía", "Romance", "Familiar"],
      "idioma": "Español",
      "subtitulada": true,
      "formato": ["2D"],
      "sinopsis": "Cenicienta vive una historia mágica de esperanza, valentía y transformación.",
      "poster": "https://lumiere-a.akamaihd.net/v1/images/p_cinderella_20490_a7c83808.jpeg",
      "horarios": ["13:00", "16:20", "19:40"],
      "disponible": true,
      "destacada": true
    },
    {
      "id": 9,
      "titulo": "La bella y la bestia",
      "genero": ["Fantasía", "Romance", "Familiar"],
      "idioma": "Español",
      "subtitulada": true,
      "formato": ["2D"],
      "sinopsis": "Bella descubre que detrás de una temible apariencia puede existir un gran corazón.",
      "poster": "https://es.web.img2.acsta.net/medias/nmedia/18/78/63/96/19592613.jpg",
      "horarios": ["14:10", "18:10", "21:10"],
      "disponible": true,
      "destacada": true
    }
  ]

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        padding: "16px"
      }}
    >
      {peliculasCartelera.map((pelicula) => (
        <MovieCard
          key={pelicula.id}
          title={pelicula.titulo}
          image={pelicula.poster}
          pelicula={pelicula}
          onVerDetalle={() => verDetalle(pelicula)}
        />
      ))}
    </main>
  )
}

export default Cartelera