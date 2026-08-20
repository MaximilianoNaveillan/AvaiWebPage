# INC-007 - Accesibilidad De Header, Drawer Y Botones

Prioridad: Media
Estado: Pendiente

## Problema

El header y drawer tienen botones sin etiquetas accesibles completas. El drawer no gestiona foco, cierre con Escape ni atributos ARIA suficientes.

## Impacto

- Usuarios de teclado o lector de pantalla tienen una experiencia limitada.
- El menu movil puede ser dificil de usar sin mouse o touch.
- Reduce calidad tecnica percibida.

## Solucion Sugerida

- Agregar `aria-label` a botones de menu, cierre y WhatsApp.
- Usar `aria-expanded`, `aria-controls` y `aria-hidden` donde corresponda.
- Cerrar drawer con Escape.
- Gestionar foco al abrir y cerrar drawer.
- Revisar orden semantico de headings.

## Criterios De Aceptacion

- El menu puede abrirse y cerrarse con teclado.
- Escape cierra el drawer.
- El foco vuelve al boton que abrio el drawer.
- Los botones iconicos tienen nombre accesible.
- No hay perdida visible de foco.
