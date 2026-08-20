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
- Configurar `@astrojs/sitemap` para incluir automaticamente las paginas del blog.

## Generacion De Slugs SEO-Friendly

**Estrategia**: Derivar el slug directamente del nombre del archivo `.md`. Astro genera automaticamente slugs limpios desde los nombres de archivo en Content Collections.

**Convencion de nomenclatura de archivos**:
- Todo en minusculas
- Palabras separadas por guiones (`-`)
- Sin acentos, sin caracteres especiales, sin espacios
- Incluir palabra clave principal del articulo

**Ejemplo**:
```
src/content/blog/automatizacion-procesos-industriales-mes.md
  → URL: /blog/automatizacion-procesos-industriales-mes/
```

### Consideraciones SEO

| Aspecto | Recomendacion |
|---------|---------------|
| Longitud | Mantener URLs bajo 75 caracteres cuando sea posible |
| Palabras clave | Incluir termino principal del articulo en el slug |
| Estabilidad | No cambiar el nombre del archivo despues de publicado |
| Jerarquia | `/blog/` como prefijo mantiene estructura clara |
| Canonical | Cada pagina debe tener `<link rel="canonical">` con URL absoluta |
| Sitemap | Incluir `@astrojs/sitemap` para indexacion automatica |

### Ejemplo Completo

```md
---
title: "Automatizacion de procesos industriales con MES"
date: "2026-08-20"
summary: "Como implementar un sistema MES para optimizar la produccion."
image: "/assets/blog/mes-automatizacion.jpg"
imageAlt: "Panel de control de sistema MES en planta industrial"
draft: false
---
```

**Archivo**: `automatizacion-procesos-industriales-mes.md`
**URL resultante**: `https://avai.cl/blog/automatizacion-procesos-industriales-mes/`

## Estructura Propuesta

```text
src/
|-- content/
|   |-- config.ts          # Esquema de coleccion blog
|   `-- blog/
|       |-- primera-publicacion.md
|       `-- segunda-publicacion.md
|-- pages/
|   `-- blog/
|       |-- index.astro    # Listado publico
|       `-- [slug].astro   # Detalle individual
|-- sections/
|   `-- Blog/
|       |-- Hero.astro     # Hero del listado
|       `-- PostCard.astro # Tarjeta reutilizable
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

La ruta `/blog/[slug]` debe generar paginas estaticas a partir de las publicaciones disponibles usando `getStaticPaths()`.

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
- Los slugs se generan automaticamente desde el nombre del archivo.
- Los nombres de archivo siguen la convencion: minusculas, guiones, sin acentos.
- Cada pagina de detalle tiene metadata SEO unica (title, description, canonical).
- El sitemap incluye todas las paginas del blog.
- `npm run build` finaliza sin errores.

## Decisiones Tecnicas

| Decision | Resolucion |
|----------|------------|
| Generacion de slug | Automatica desde nombre de archivo |
| Campo `slug` en frontmatter | No requerido |
| Sitemap | Si, con `@astrojs/sitemap` |
| Navegacion | Agregar enlace "Blog" en Header y Drawer |

## Dependencias O Relacionadas

- `INC-002`: SEO y metadata por pagina.
- `INC-008`: Optimizacion de imagenes.
- `INC-007`: Accesibilidad de enlaces y botones.
