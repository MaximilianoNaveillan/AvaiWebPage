# INC-004 - CTAs De WhatsApp Dependientes De Funcion Global

Prioridad: Media
Estado: Pendiente

## Problema

Varios botones usan `onclick="openWhatsApp(...)"`. Esta funcion global se asigna desde `public/js/whatsapp.js`, por lo que los CTAs dependen de que el script haya cargado y ejecutado correctamente.

## Impacto

- Si el script falla, los botones no funcionan.
- El patron mezcla comportamiento con markup.
- Aumenta el riesgo de errores durante navegacion con `ClientRouter`.

## Solucion Sugerida

- Reemplazar `onclick` por atributos `data-whatsapp-message`.
- Registrar los eventos desde `whatsapp.js` de forma idempotente.
- Mantener una experiencia funcional incluso si se navega entre rutas.

## Criterios De Aceptacion

- No quedan CTAs con `onclick="openWhatsApp(...)"`.
- Cada CTA puede definir su mensaje por atributo de datos.
- WhatsApp abre correctamente desde header, hero, CTAs y boton flotante.
- No se duplican eventos al navegar.
