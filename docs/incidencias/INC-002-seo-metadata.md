# INC-002 - SEO Y Metadata Por Pagina

Prioridad: Alta
Estado: Pendiente

## Problema

`src/layouts/BaseLayout.astro` define un titulo generico `AVAI` para todo el sitio y no incluye metadata esencial como descripcion, canonical u Open Graph.

## Impacto

- Menor claridad para buscadores.
- Peor presentacion al compartir enlaces en redes o mensajeria.
- Dificultad para posicionar paginas con intenciones diferentes.

## Solucion Sugerida

- Permitir que `BaseLayout` reciba `title`, `description` e imagen social.
- Agregar metadata canonical y Open Graph basica.
- Definir metadata unica para home, servicios, nosotros, casos de exito y blog.

## Criterios De Aceptacion

- Cada pagina tiene un titulo unico.
- Cada pagina tiene una descripcion unica.
- Existe canonical absoluto usando `site` de Astro.
- Existen tags Open Graph basicos.
- El blog y cada publicacion pueden definir metadata propia.
