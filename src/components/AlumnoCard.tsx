interface AlumnoCardProps {
  nombre: string;
  curso: string;
  notaMedia?: number;
}

function AlumnoCard({ nombre, curso, notaMedia }: AlumnoCardProps) {
  return (
    <article className="alumno-card">
      <h2>{nombre}</h2>
      <p>
        <strong>Curso:</strong> {curso}
      </p>
      <p>
        <strong>Nota media:</strong> {notaMedia ?? "Sin evaluar"}
      </p>
    </article>
  );
}

export default AlumnoCard;
