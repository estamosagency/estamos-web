# Mantenimiento y validación

## Dónde editar

| Cambio | Ubicación |
| --- | --- |
| Texto, enlaces, orden de secciones | dist/index.html |
| Tipografía, colores y tamaños | dist/style.css; prevalecen reglas finales |
| Partículas, torre y puntero | dist/app.js, funciones de dibujo |
| Carrusel | HTML team-track, CSS person/julia, slides, showPerson/highlightPerson/fitTeamHeight |
| Fases EPA | Array phases en app.js |
| Retratos | dist/assets/*.webp |
| Logos | PNG y coordenadas CSS/HTML de partner-logo |
| Movimiento reducido | CSS motion-enabled/paused y syncMotion en JS |

## Comprobaciones realizadas

Sintaxis JavaScript mediante node --check. Durante el trabajo se verificaron tabs, desplegables, carrusel y quinto paso en navegador. Se probó pausa/reactivación en UI y, con dobles de entorno, la preferencia de movimiento reducido y los listeners modernos/legacy. En un viewport interno de 390 px se midieron altura móvil y ancho uniforme de las fotos.

Las publicaciones Sites informaron éxito. En la entrega se comparan por SHA-256 los ocho archivos de producción con el checkout actual y se genera inventario. Las comprobaciones específicas no equivalen a una suite integral, prueba en iPhone real, auditoría WCAG ni auditoría de seguridad. No se probaron envíos de correo: la aplicación no envía desde un backend y el formulario fue eliminado.

## Riesgos de mantenimiento conocidos

- CSS acumulado con ajustes sucesivos: no reordenar ni deduplicar sin comparar escritorio/móvil.
- Carrusel acoplado al quinto elemento anidado en Julia. Modificar estructura, contador y cola de scroll conjuntamente.
- Escala y recortes de logos dependen de una imagen raster generada. Sustituir por originales oficiales exige recalibrar coordenadas.
- Fuentes remotas: para independencia de Google, autoalojar con su licencia y cambiar HTML/CSS.
- SEO básico: título y descripción; sin sitemap, Open Graph ni datos estructurados específicos.
- Compatible con navegadores modernos con Canvas, IntersectionObserver y ResizeObserver; no se añadió polyfill para navegadores que carezcan de estas APIs.
- Preferencia de movimiento no persiste entre visitas. La interacción táctil de fondo no debe impedir el scroll de página.
- Revisar las erratas literales de Servicios con Martín antes de corregir contenido.

## Validar una modificación

1. Ejecutar node --check dist/app.js.
2. Revisar menú, anclas, mailto, desplegables y tabs.
3. Probar equipo en escritorio y 390 px: cinco pasos, cuatro fotos iguales, texto completo, flechas próximas.
4. Confirmar los tres bloques finales y sus sentidos, sin salto visible en las duplicaciones.
5. Probar pausa, reactivación con preferencia reducida y torre completa/derrumbe.
6. Revisar consola, carga de assets, rendimiento y legibilidad en un teléfono real.
7. Actualizar informe, copia de wiki e inventario antes de otra entrega.

No se ejecutó despliegue desde GitHub ni se cambió dominio/DNS. El workflow de Pages se conserva solo como ejemplo inactivo. NOTICE.md es la referencia sobre procedencia; no se agregó licencia libre general.
