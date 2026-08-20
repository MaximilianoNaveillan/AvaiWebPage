# INC-008 - Optimizacion De Imagenes

Prioridad: Media
Estado: Pendiente

## Problema

Varias imagenes no declaran `width`, `height`, `loading` o `decoding`. Algunas imagenes informativas tienen `alt` generico o incompleto.

## Impacto

- Posible layout shift.
- Carga menos eficiente.
- Menor accesibilidad para imagenes informativas.

## Solucion Sugerida

- Agregar dimensiones a imagenes principales.
- Usar `loading="lazy"` en imagenes no criticas.
- Usar `decoding="async"` cuando aplique.
- Revisar `alt`: decorativo vacio, informativo descriptivo.

## Criterios De Aceptacion

- Imagenes principales tienen dimensiones definidas.
- Imagenes bajo el fold usan lazy loading.
- Los textos alternativos describen informacion relevante.
- No se degrada el layout mobile.
