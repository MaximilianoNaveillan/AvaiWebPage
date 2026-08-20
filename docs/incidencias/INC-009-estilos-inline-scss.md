# INC-009 - Estilos Inline Y Mantenibilidad SCSS

Prioridad: Baja
Estado: Pendiente

## Problema

Hay multiples `style="..."` dentro de componentes Astro para layout, tamanos, colores y espaciados.

## Impacto

- Dificulta mantener consistencia visual.
- Hace mas costoso ajustar responsive.
- Mezcla estructura con presentacion.

## Solucion Sugerida

- Mover estilos repetidos a clases SCSS.
- Mantener inline styles solo para casos puntuales y justificados.
- Consolidar utilidades cuando exista repeticion clara.

## Criterios De Aceptacion

- Se reducen estilos inline en secciones principales.
- Los estilos comunes viven en `src/scss`.
- No cambia visualmente el sitio salvo mejoras intencionales.
