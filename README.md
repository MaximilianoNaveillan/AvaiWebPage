# AVAI Astro

Landing site estatica para AVAI, una marca de consultoria tecnica enfocada en software a medida, automatizacion, arquitectura de datos y eficiencia operativa.

## Stack

- Astro 6
- Sass/SCSS
- JavaScript vanilla para interacciones globales
- Build estatico para GitHub Pages

## Comandos

Todos los comandos se ejecutan desde `avai-astro`.

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

```text
src/
|-- components/       # Header, footer, WhatsApp y UI compartida
|-- layouts/          # BaseLayout global
|-- pages/            # Rutas publicas
|-- scss/             # Base, componentes y layout global
`-- sections/         # Secciones agrupadas por pagina

public/
|-- assets/           # Imagenes e iconos
|-- fonts/            # Fuentes Inter
`-- js/               # Interacciones del cliente
```

## Rutas

- `/`: home
- `/servicios`: servicios tecnicos
- `/nosotros`: filosofia y equipo
- `/casosExitos`: casos de exito

## Convenciones

- Usar componentes Astro estaticos para contenido y estructura.
- Mantener estilos globales dentro de `src/scss/main.scss` y sus modulos.
- Usar `import.meta.env.BASE_URL` para assets publicos y enlaces internos cuando aplique.
- Evitar editar `dist` salvo que se necesite actualizar una salida generada.
- Mantener el tono de marca en espanol: tecnico, preciso, directo y orientado a resultados medibles.

## Interacciones

Las interacciones viven en `public/js`:

- `main.js`: inicializacion general.
- `tabs.js`: indicador de navegacion activa.
- `drawer.js`: menu movil.
- `whatsapp.js`: formulario flotante y CTAs de contacto.

Como el sitio usa `ClientRouter`, cualquier inicializador de JavaScript debe ser idempotente para evitar listeners duplicados despues de navegar entre rutas.

## opencode

Este proyecto incluye configuracion local en `.opencode/`:

- `.opencode/opencode.json`: configuracion local con schema.
- `.opencode/project.md`: contexto del proyecto para agentes.
- `.opencode/skills/astro-avai`: trabajo sobre Astro, SCSS y JS del sitio.
- `.opencode/skills/avai-copy-seo`: copy, SEO y tono de marca.
- `.opencode/skills/avai-quality-review`: checklist de revision tecnica.

Despues de modificar configuracion, agentes, comandos o skills de opencode, reinicia opencode para que los cambios se carguen.

## Calidad Recomendada

- Ejecutar `npm run build` despues de cambios funcionales.
- Revisar navegacion desktop y mobile.
- Validar CTAs de WhatsApp tras navegar entre paginas.
- Mantener metadata SEO unica por pagina.
- Agregar `width`, `height`, `loading` y `decoding` a imagenes cuando corresponda.
