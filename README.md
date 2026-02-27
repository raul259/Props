# Práctica de Props con React + TypeScript

Aplicación desarrollada con React, TypeScript y Vite para mostrar información de alumnos mediante componentes reutilizables y props tipadas.

## Requisitos de la práctica

- Tipado de props con `interface` o `type`
- Uso de destructuring en componentes
- Uso de props opcionales
- No usar `any`
- Compilación sin errores

## Componentes implementados

- `TituloSeccion`
  - Props: `texto: string`
  - Renderiza un `<h1>`

- `AlumnoCard`
  - Props: `nombre: string`, `curso: string`, `notaMedia?: number`
  - Si `notaMedia` existe, se muestra su valor
  - Si no existe, se muestra `"Sin evaluar"`

- `EstadoAlumno`
  - Props: `activo: boolean`
  - Muestra `"Activo"` o `"Inactivo"`

## Ejecución en local

```bash
npm install
npm run dev
```

## Compilación de producción

```bash
npm run build
```

## Despliegue en Vercel

```bash
vercel
vercel --prod
```
