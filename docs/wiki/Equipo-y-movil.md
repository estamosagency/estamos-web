# Equipo y adaptación móvil

## Cinco pasos

| Paso | Contenido |
| --- | --- |
| 1 | Martín Pablo Villar — CEO y especialista en Automatización Responsable |
| 2 | Emilia Ricci — Especialista en GenAI |
| 3 | Elia Yarur — Ingeniero de datos |
| 4 | Julia Tanaka — Directora de arte |
| 5 | Texto de la mirada del equipo |

El texto completo del quinto paso es:

> El criterio es humano. El potencial, infinito.
>
> Conectamos estrategia, inteligencia artificial, datos y diseño para transformar desafíos en soluciones con sentido.
>
> Integramos trabajo agéntico para ampliar lo que podemos hacer, con personas que orientan, revisan y asumen la responsabilidad de cada decisión.

La persona seleccionada tiene opacidad 1; las otras, 0,14 y escala 0,93. En el quinto paso se destaca el texto y se atenúan la foto y los datos de Julia. Flechas circulares, contador 01–05, clic, teclado Enter/espacio/izquierda/derecha y desplazamiento horizontal. Después del quinto paso vuelve al primero.

Martín tiene enlaces a instagram.com/martinpablovillar y linkedin.com/in/martinpablovillar. No se inventaron redes de los otros perfiles.

## Corrección del hueco móvil

El track tomaba la altura de su contenido más largo: el texto anidado junto a Julia extendía el espacio bajo Martín y alejaba las flechas. Ahora fitTeamHeight adapta la ventana al contenido activo; team-track alinea tarjetas arriba y overflow-y oculta el excedente de las tarjetas no activas.

En móvil, Julia ocupa dos columnas horizontales dentro de un bloque de ancho calc(174% + 28px): retrato y datos a la izquierda, texto independiente a la derecha. El quinto objetivo de scroll es ese texto. Los cuatro retratos conservan el mismo ancho. La cola del track deja espacio para alinear el último objetivo. ResizeObserver, cambios de selección, resize y carga de fuentes ajustan la altura.

En escritorio se mantienen las columnas independientes de retrato, datos y descripción. No mover team-statement dentro de person-info: volvería a colocar el texto bajo Julia. El array slides mezcla cuatro articles y el statement anidado; cambiar el número de personas requiere revisar arrays, contador y estilos.

## Verificación realizada

En navegador con un viewport interno de 390 px se midió la primera tarjeta en 528 px y su ventana en 532 px, sin el espacio excesivo de la captura. Se verificaron cuatro anchos de retrato de 281 px. El quinto texto midió 361 px y su ventana se ajustó a 365 px. Se ajustó además la cola horizontal del último paso. Son comprobaciones de ese viewport, no una certificación de todos los modelos de teléfono.

Breakpoints principales: 900 y 650 px. Los menús móviles usan aria-expanded; los enlaces cierran el desplegable. Existen foco visible, enlace al contenido, alternativas de imagen y estado del carrusel. No se realizó auditoría WCAG completa.
