# INC-006 - Enlaces Placeholder En Footer

Prioridad: Media
Estado: Pendiente

## Problema

`src/components/Footer.astro` contiene enlaces con `href="#"` para mapa del sitio, aviso legal, politica de privacidad y contacto.

## Impacto

- Mala experiencia de usuario.
- Riesgo de enlaces sin destino en produccion.
- Senal negativa para calidad y SEO.

## Solucion Sugerida

- Crear rutas reales o eliminar enlaces que aun no existan.
- Si se mantiene Contacto, conectarlo con WhatsApp o una seccion valida.
- Agregar paginas legales cuando sean necesarias.

## Criterios De Aceptacion

- No quedan enlaces `href="#"` en el footer.
- Todos los enlaces navegan a destinos reales o ejecutan acciones validas.
- El footer mantiene buen comportamiento responsive.
