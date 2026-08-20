# INC-003 - Event Listeners Duplicados Con Astro ClientRouter

Prioridad: Alta
Estado: Pendiente

## Problema

`public/js/main.js` ejecuta `initApp()` en la primera carga y tambien en `astro:page-load`. Algunos inicializadores, especialmente `tabs.js`, registran listeners internos cada vez que se inicializan.

## Impacto

- Posible acumulacion de listeners despues de navegar entre paginas.
- Comportamiento duplicado en resize o eventos de Astro.
- Dificultad para depurar interacciones.

## Solucion Sugerida

- Hacer todos los inicializadores idempotentes.
- Evitar registrar `astro:page-load` dentro de funciones que ya son llamadas desde `main.js`.
- Usar marcas `dataset.bound` o AbortController cuando corresponda.

## Criterios De Aceptacion

- Navegar entre paginas no duplica listeners.
- El indicador de tabs sigue actualizandose correctamente.
- El drawer y WhatsApp funcionan despues de transiciones.
- No hay handlers redundantes para `resize` o `astro:page-load`.
