# Estamos · Documentación del sitio Constelación

Actualización: 29 de octubre de 2026, Buenos Aires. Responsable del proyecto: Martín Pablo Villar.

Esta wiki reúne la implementación, las decisiones y los cambios de la nueva web Estamos. El código autoritativo está en la rama [sites-constelacion](https://github.com/estamosagency/estamos-web/tree/sites-constelacion), carpeta `dist/`. La web publicada continúa en [Sites](https://estamos-constelacion.mpvillar.chatgpt.site).

## Índice

- [Arquitectura e instalación](Arquitectura.md)
- [Contenido, diseño y recursos](Contenido-y-diseno.md)
- [Animaciones e interacciones](Animaciones.md)
- [Equipo y adaptación móvil](Equipo-y-movil.md)
- [Seguridad y acceso](Seguridad.md)
- [Historial de cambios](Historial.md)
- [Mantenimiento y validación](Mantenimiento.md)

## Estado de la entrega

Sitio estático HTML/CSS/JavaScript, sin backend ni base de datos. Se entrega el código completo, las imágenes de producción, los originales disponibles, fuentes Inter con su licencia, informe técnico, código transcrito y un inventario SHA-256. No hay credenciales en el proyecto.

La rama principal contiene una web anterior vinculada a Vercel. Esta entrega conserva esa versión y añade la implementación Constelación en una rama propia; no representa una migración del dominio ni un reemplazo del despliegue de Vercel.

## Últimos cambios incluidos

1. Equipo tiene cinco pasos y altura adaptada a la tarjeta activa en móvil; cuatro fotos de igual ancho.
2. Las franjas finales aparecen en este orden: nombres de proyectos, figuras geométricas, logos. Nombres y logos viajan en sentidos opuestos. Sus figuras y tamaños se redujeron.
3. Se eliminó «Estamos escuchando», su formulario y su fondo de rombos; CONVERSEMOS abre el correo de la agencia.
4. El título de Servicios se conserva literalmente como se pidió: «Proyectos que toman formar. Procesos que evoluacionan.». Las dos erratas están registradas para revisión editorial, no corregidas sin instrucción.
5. El botón móvil permite reactivar movimiento aunque el sistema prefiera reducirlo; se añadió compatibilidad de listener con Safari antiguo y reloj basado en tiempo transcurrido.

El [informe técnico completo](https://github.com/estamosagency/estamos-web/blob/sites-constelacion/docs/INFORME-TECNICO.md) reúne estas páginas. El informe del 28/10 se conserva marcado como archivo histórico y no describe el estado vigente.
