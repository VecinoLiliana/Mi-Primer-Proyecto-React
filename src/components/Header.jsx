import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = {
    color: "#ffffff",
    fontWeight: "bold",
    borderBottom: "2px solid #ffffff",
  };

  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    padding: "8px 12px",
  };

  return (
    <header
      style={{
        backgroundColor: "#f583b6ff",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white", margin: 0 }}>CinePrueba</h1>

      <nav style={{ display: "flex", gap: "12px" }}>
        <NavLink to="/" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>
          Home
        </NavLink>

        <NavLink to="/cartelera" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>
          Cartelera
        </NavLink>

        <NavLink to="/alimentos" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>
          Comida
        </NavLink>

        <NavLink to="/otros"  style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>
          Otros
        </NavLink>

        <NavLink to="/tickets"  style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>
          Tickets
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
