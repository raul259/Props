import AlumnoCard from "./components/AlumnoCard";
import EstadoAlumno from "./components/EstadoAlumno";
import TituloSeccion from "./components/TituloSeccion";
import "./App.css";

function App() {
  return (
    <main className="app">
      <TituloSeccion texto="Listado de alumnos" />

      <section className="bloque-alumno">
        <AlumnoCard nombre="Maria Julia" curso="DAW" notaMedia={8.5} />
        <EstadoAlumno activo={true} />
      </section>

      <section className="bloque-alumno">
        <AlumnoCard nombre="Jose Carlos" curso="DAM" />
        <EstadoAlumno activo={false} />
      </section>
    </main>
  );
}

export default App;
