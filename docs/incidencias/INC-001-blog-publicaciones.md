# INC-001 - Blog De Publicaciones Markdown

Prioridad: Alta
Estado: Pendiente

## Objetivo

Crear una vista de blog donde se listen publicaciones ordenadas desde la mas nueva hasta la mas antigua.

Cada publicacion debe mostrar titulo, fecha, imagen destacada, resumen y un boton para ver mas. Al hacer clic en el boton, debe abrirse una pagina individual con el contenido completo de la publicacion.

Las publicaciones deben escribirse como archivos `.md` y transformarse a HTML durante el proceso de compilacion de Astro.

## Problema

El sitio no tiene actualmente una seccion para publicar contenido editorial, educativo o tecnico. Esto limita la capacidad de posicionamiento SEO, autoridad tecnica y actualizacion de contenido.

## Impacto

- Mejora el posicionamiento organico con contenido indexable.
- Permite publicar casos, articulos tecnicos y novedades sin crear paginas manuales.
- Refuerza la credibilidad tecnica de AVAI.
- Crea una base escalable para contenido futuro.

## Alcance Tecnico

- Crear una ruta `/blog` para el listado de publicaciones.
- Crear una ruta dinamica `/blog/[slug]` para el detalle de cada publicacion.
- Crear publicaciones como archivos `.md`.
- Ordenar publicaciones por fecha descendente.
- Renderizar Markdown como HTML durante `npm run build`.
- Soportar imagen destacada, resumen, fecha, titulo, slug y estado `draft`.
- Agregar enlace a Blog en header y drawer si el usuario lo aprueba.

## Estructura Propuesta

```text
src/
|-- content/
|   `-- blog/
|       |-- primera-publicacion.md
|       `-- segunda-publicacion.md
|-- pages/
|   `-- blog/
|       |-- index.astro
|       `-- [slug].astro
```

## Frontmatter Requerido

```md
---
title: "Titulo de la publicacion"
date: "2026-08-20"
summary: "Resumen corto visible en el listado del blog."
image: "/assets/blog/imagen.jpg"
imageAlt: "Descripcion de la imagen destacada"
draft: false
---
```

## Recomendacion De Implementacion

Usar Content Collections de Astro para definir un esquema de publicaciones. Esto evita frontmatter inconsistente y permite validar campos como `title`, `date`, `summary`, `image`, `imageAlt` y `draft`.

Ruta recomendada para el esquema:

```text
src/content/config.ts
```

La vista `/blog` debe obtener todas las publicaciones no draft, ordenarlas por fecha descendente y renderizarlas en tarjetas.

La ruta `/blog/[slug]` debe generar paginas estaticas a partir de las publicaciones disponibles.

## Criterios De Aceptacion

- Existe la ruta `/blog`.
- Existe una pagina individual por cada publicacion no draft.
- Las publicaciones se crean con extension `.md`.
- El contenido Markdown se transforma a HTML durante la compilacion.
- El listado muestra publicaciones desde la mas nueva hasta la mas antigua.
- Cada tarjeta muestra titulo, fecha, resumen, imagen y boton "Ver mas".
- El boton "Ver mas" navega al detalle de la publicacion.
- Las publicaciones draft no aparecen en produccion.
- Las imagenes tienen texto alternativo.
- El blog funciona correctamente en desktop y mobile.
- `npm run build` finaliza sin errores.

## Dependencias O Relacionadas

- `INC-002`: SEO y metadata por pagina.
- `INC-008`: Optimizacion de imagenes.
- `INC-007`: Accesibilidad de enlaces y botones.
