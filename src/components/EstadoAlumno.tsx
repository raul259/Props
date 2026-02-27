interface EstadoAlumnoProps {
  activo: boolean;
}

function EstadoAlumno({ activo }: EstadoAlumnoProps) {
  return (
    <p className="estado-alumno">
      <strong>Estado:</strong> {activo ? "Activo" : "Inactivo"}
    </p>
  );
}

export default EstadoAlumno;
