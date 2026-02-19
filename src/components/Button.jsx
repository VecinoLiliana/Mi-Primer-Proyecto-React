export default function Button({ text, OnClick }) {
  return (
    <button
    // Evento de React: se ejecuta cuando el usuario hace click
      onClick={OnClick}
      style={{ 
        padding: "10px 16px", backgroundColor: "#ed0970ff", color: "white",
        border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: 600, marginTop: "8px",
      }}>

        {text}
    </button>
  );
}