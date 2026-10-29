# Informe técnico vigente · Estamos

Fecha: 29/10/2026 (Buenos Aires). Fuente Sites: `01f6961cd42432949dc956ea9319302c2055196e`.

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


---

# Arquitectura e instalación

## Aplicación real

| Archivo | Responsabilidad |
| --- | --- |
| `dist/index.html` | Textos, secciones, retratos, franjas, enlaces y estructura accesible |
| `dist/style.css` | Diseño, adaptación, recortes de logos, figuras CSS y animaciones |
| `dist/app.js` | Canvas, entrada de secciones, menú, fases EPA, carrusel y control de movimiento |
| `dist/assets/*.webp` | Retratos de Martín, Emilia, Elia y Julia |
| `dist/assets/partner-logos.png` | Franja raster con transparencia, recortada mediante CSS |

No requiere framework, bundler, instalación npm, API keys ni servidor de aplicación. No hay Supabase, almacenamiento de consultas ni cuentas propias.

## Ejecutar localmente

```bash
python3 -m http.server 8080 --directory dist
```

Abrir http://localhost:8080. En Windows: `py -3 -m http.server 8080 --directory dist`. Servir por HTTP permite reproducir la carga de recursos del hosting.

## Publicación

Sites sirve `dist/`. Identidad conservada: `appgprj_6ae10e84641c8191a26cd5805cd08f54`. El manifiesto se entrega como referencia en `reference/sites/hosting.json`; no copiar esa identidad al crear otro Site. Fuente exacta de esta entrega: `01f6961cd42432949dc956ea9319302c2055196e`.

Puede alojarse en cualquier servidor estático. La tipografía remota requiere acceso a Google Fonts. El ejemplo inactivo `reference/pages-workflow-example.yml` explica una publicación manual de GitHub Pages; no se habilitó ni ejecutó ese despliegue. El acceso privado de Sites no se traslada automáticamente a otro hosting.

## Organización documental

`docs/CODIGO-COMPLETO.md` transcribe los tres archivos. `docs/INVENTARIO.json` identifica tamaño y SHA-256 de cada archivo de la entrega (salvo el propio inventario). `docs/HISTORIAL-COMMITS.txt` exporta fechas y commits de la fuente Sites. No reemplaza un repositorio completo de todas las revisiones; se entrega una instantánea funcional actual y trazabilidad textual.

Los originales y fuentes están en `reference/`. Se conserva el informe previo como archivo histórico explícito. La wiki está también versionada en `docs/wiki/`.


---

# Contenido, diseño y recursos

## Orden vigente

1. Cabecera: estamos_, MIRADA, SERVICIOS, MÉTODO, EQUIPO y CONVERSEMOS.
2. Portada: «Agencia Tecno creativa», «Humanos. Potenciado. Ideas.», presentación, puntos y torre.
3. Lo que hacemos: «Proyectos que toman formar. Procesos que evoluacionan.», dos servicios, pentágonos de fondo.
4. Nuestra mirada: «Tu idea es el punto de partida.», cuadrados de fondo y Personas / Equipos / Proyectos.
5. Equipo: «Humanos y agénticos.», «Mirada humana con trabajo agéntico.», triángulos y carrusel.
6. Método EPA: «Antes de hacer, entender.», rectángulos de fondo y fases seleccionables.
7. Franja de nombres de proyectos.
8. Franja solo de figuras.
9. Franja de logos.
10. Pie con estamos_, lema y redes.

La portada y el título de Equipo son textos diferentes. Se conservan las redacciones literales indicadas, incluidas las erratas del título de Servicios. Los rótulos de las secciones no tienen números.

## Servicios

**estamos.creando — CREATIVIDAD CON IA**. «Despertar ideas. Expandir lo posible.» y «Experiencias con IA potentes y movilizadoras. Hacemos lo que necesitas que hagamos.» El desplegable «Creatividad que toma forma» describe conceptos, contenidos y experiencias con dirección creativa e IA.

**estamos.automatizando — AUTOMATIZACIÓN CON IA**. «De una buena pregunta a una solución.» y «Tecnología, conocimiento y sensibilidad se encuentran para diseñar soluciones.» El desplegable «Partimos de desafíos reales» explica automatización adaptada a procesos y equipos. Los signos + están en círculos violetas de 52 px en escritorio y 48 px en móvil.

## Franjas

Nombres exactos: Scuchá; EditorIA; Agenda 360; Beneficios Hammurabi; Aula 2030; Conciliador inteligente; Estudio Pódcast; Observá algo; Auto historia; Mezcal 5.0. No son enlaces a productos. Separadores: pentágonos, rombos y círculos de colores.

Logos en el orden aportado: Florería Cabrelli; Hammurabi Digital; monograma JC; Seminarios Hammurabi; Editorial Hammurabi. Separados por cuadrados, triángulos y rectángulos. No se atribuye una empresa al monograma sin confirmación. El orden del final es nombres → figuras → logos. Tipografía de nombres: 26 px en escritorio, 25 px en móvil; logos reducidos al 88% del recorte anterior.

## Identidad visual implementada

| Elemento | Valor |
| --- | --- |
| Fondo | `#000000` |
| Texto | Blanco y grises |
| Acento y botones | `#8052ff` |
| Texto de franjas | `#727079` |
| Geometrías y partículas | `#8052ff`, `#b98aff`, `#ffb829`, `#a5ffef`, `#15846e`, `#ff6498`, `#4667ff` |
| Fuente | Inter: 200, 400, 500 y 600; fallback Arial/sans-serif |

Google Fonts se carga desde HTML; las TTF y su licencia OFL están en `reference/fonts/`, como referencia, sin cambiar el sitio a autoalojamiento. Major Mono, Lexend, Satoshi y PPNeueMontreal no están cargadas. estamos_ es texto HTML/CSS. Títulos fluidos con clamp y tracking negativo; párrafo principal de 20/19/18 px según pantalla. Agencia Tecno creativa: 16/13 px; navegación: 15 px/600.

## Recursos y procedencia

La base editorial viene de estamosagency.com; el diseño se orientó por DESIGN.md aportado (referencia visual oscura, minimalista y abstracta). Los retratos y referencias de logos fueron aportados durante el trabajo. Se incluyen los materiales disponibles, no archivos inexistentes ni promesas de licencias de terceros.

`partner-logos.png` fue preparado mediante edición generativa a partir de cinco referencias, con fondo transparente y gris. CSS recorta cinco ventanas para insertar figuras. Puede haber diferencias frente a marcas oficiales: revisar o reemplazar por originales autorizados antes de un uso corporativo definitivo. Las coordenadas y escala están acopladas al PNG de 2172 × 724 px. El prompt resumido fue componer los cinco logos en orden, quitar fondos de captura y conservar lettering y proporciones con transparencia. No se usó una API key de esta aplicación.

## Contacto y método

Se retiró la sección Estamos escuchando y su formulario mailto. CONVERSEMOS enlaza `mailto:hola@estamosagency.com`. Redes: instagram.com/estamos.agency y linkedin.com/company/estamos-agency.

Las seis fases implementadas de EPA son Reconexión, Detección, Optimización, Innovación, Orientación e Implementación, numeradas 00–05 en tabs. No se sustituyeron automáticamente por otras versiones ampliadas del método. Empatizar, Potenciar y Acompañar se destacan en negrita.


---

# Animaciones e interacciones

## Fondos Canvas 2D

Un único requestAnimationFrame coordina los campos visibles. Se procesa un frame cuando transcurren al menos 30 ms. El reloj usa delta real, limitado a 0,1 s para evitar saltos grandes. Al cambiar la visibilidad del documento se reinicia la referencia temporal. ResizeObserver adapta el lienzo y limita la densidad a 2; IntersectionObserver evita dibujar campos fuera de vista.

| Sección | Canvas | Figuras |
| --- | --- | --- |
| Portada | brain | 210 puntos |
| Nuestra mirada | mirada-squares | 100 cuadrados |
| Equipo | team-triangles | 160 triángulos |
| Método | method-rectangles | 110 rectángulos |
| Servicios | services-pentagons | 120 pentágonos |

El ID brain es histórico: ya no dibuja un cerebro. Contact-diamonds y su campo fueron retirados junto con Contacto. No se usan GSAP, Three.js, Lottie ni videos. Los fondos ocupan todo el ancho; el contenido conserva márgenes.

Distribución pseudoaleatoria con semilla 42. Movimiento modular horizontal y vertical, oscilación senoidal, opacidad variable. pointerField registra la posición en cada sección; reactToPointer aplica repulsión en radio de 170 px, fuerza máxima 46 px y suavizado de 0,12. Ahora acepta también pointermove táctil; pointerup táctil, pointercancel y pointerleave desactivan el repulsor. El navegador puede priorizar el scroll táctil: no se bloquea el desplazamiento de la página.

## Torre de portada

hero-tower se alinea desde Agencia Tecno creativa hasta Inteligencia colectiva. Base de 52 px en escritorio y 38 px en móvil; mínimo ocho piezas y cantidad según alto. Secuencia repetida: rectángulo amarillo, triángulo menta, cuadrado violeta, círculo verde, rombo azul, pentágono rosa.

Las alturas se normalizan para que se toquen. Una pieza entra cada 1,15 s y tarda 0,95 s en caer a su lugar. Una vez construida queda apilada. Pasar el puntero o tocar una pieza derrumba esa y las superiores; las inferiores siguen en pie. Se simulan velocidad lateral, giro y aceleración 330 × segundos²; no hay física de colisiones reales. A los 4,5 s reinicia la construcción. En pausa se muestra la torre completa y no se activa el derrumbe.

## Franjas, latidos y entradas

Las franjas usan marquee lineal de 35 s, contenido duplicado y translateX(-50%). Los nombres usan animation-direction:reverse; logos y figuras usan el sentido normal. La franja central no lleva palabras. Las geometrías usan CSS clip-path, tamaños y border-radius.

Heartbeat anima el guion bajo del logo superior e inferior (2 s), .creando y el segmento estamos de estamos.automatizando (2,6 s), mediante escala y opacidad. Las secciones reveal aparecen una vez por carga: opacidad y translateY(35 px), 18 px en móvil, durante 0,8 s; umbral del observer 0,08.

## Movimiento reducido y móvil

prefers-reduced-motion inicia el sitio pausado. El control flotante muestra «Activar movimiento» o «Pausar movimiento»; respeta la preferencia inicial y permite al visitante reactivar expresamente Canvas y CSS. La clase motion-enabled evita que la regla de sistema vuelva imposible esa reactivación. No se guarda la elección entre visitas.

Se utiliza addEventListener en MediaQueryList y addListener como compatibilidad para Safari antiguo. El botón tiene una zona táctil mínima de 44 px. Pausar detiene el reloj y animaciones CSS; algunas interpolaciones pendientes pueden terminar de acomodarse.


---

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


---

# Seguridad y acceso

Revisión del código y de la configuración de Sites al 29/10/2026. No es una auditoría integral ni una prueba de penetración.

| Pregunta | Resultado comprobado |
| --- | --- |
| ¿Token en localStorage? | La aplicación no usa localStorage ni sessionStorage y no gestiona tokens de sesión. |
| ¿Admin en frontend o backend? | No hay panel ni rol administrador propios de la aplicación. El acceso a Sites se gestiona en la plataforma. |
| ¿Login o recuperación propios? | No existen rutas, formularios ni endpoints propios de login, admin o recuperación. |
| ¿Rate limiting? | No hay esos endpoints propios; los límites de autenticación de Sites no pueden verificarse desde este código. |
| ¿Consultas almacenadas? | No hay backend ni base de datos. El formulario anterior fue retirado. |

La configuración consultada de Sites mantiene acceso personalizado únicamente para la cuenta propietaria y cero visitantes externos. No se incluyen identidades privadas ni credenciales en esta entrega. No se asegura cómo almacena internamente su sesión la plataforma: es independiente del código estático.

## Fuerza bruta

No hay un formulario propio de contraseñas atacable por fuerza bruta en esta aplicación. Proteger la cuenta de acceso a Sites con 2FA. Si se incorporan usuarios más adelante: autenticación y autorización en servidor, verificación de permisos en cada operación, límites por cuenta e IP, demoras progresivas, 2FA para administradores y recuperación con respuestas uniformes que no revelen si un correo existe. Son requisitos futuros, no controles ya implementados.

## Alcance y dependencias

Google Fonts genera solicitudes externas a Google. Las fuentes incluidas pueden servir para una migración a autoalojamiento, que todavía no se hizo. No hay analítica, píxeles, secretos ni cookies de aplicación incorporados por estos archivos. El hosting puede añadir controles o cookies independientes.

No se han verificado rate limits internos de Sites, cookies HttpOnly/SameSite de la plataforma, cabeceras HTTP, CSP, protecciones de Vercel ni políticas de otro hosting. No atribuir al frontend garantías del proveedor.

El repositorio GitHub ya es público; el código y recursos que se suben son visibles allí. Esto no cambia automáticamente la audiencia del enlace de Sites. NOTICE.md distingue código y recursos de terceros: la publicación no otorga por sí sola una licencia libre a fotos, logos o tipografías.


---

# Historial de decisiones y cambios

Este registro agrupa las instrucciones y resultados del trabajo del 27 al 29/10/2026. No inventa fechas individuales ni hashes para cambios que no tienen una referencia comprobada. El historial técnico disponible está en docs/HISTORIAL-COMMITS.txt.

## Dirección inicial

Nueva versión de estamosagency.com con diseño negro, minimalista y abstracto, siguiendo la referencia aportada. Se exploró un cerebro hecho de flechas; luego se reemplazó por puntos de colores. Se pidió conservar paleta y movimiento, extender los fondos hasta los bordes y acercar las secciones.

Navegación en mayúsculas: MIRADA, SERVICIOS, MÉTODO, EQUIPO, CONVERSEMOS. Se ampliaron tipografías, CTA superior y Agencia Tecno creativa; se quitaron números de rótulos y varias flechas y CTA accesorios.

## Textos y servicios

Portada pasó de humanos/ideas/posibilidades a potenciadas y luego a «Humanos. Potenciado. Ideas.», conservado actualmente. El título de Equipo evolucionó de «Distintas miradas. Un propósito compartido.» a trabajo agéntico y de acompañados/trabajando/potenciados con agentes a «Humanos y agénticos.».

«Lo humano es el punto de partida» pasó a «Tu idea es el punto de partida». «El potencial, colectivo» pasó a «El potencial, infinito». La bajada final de automatización quedó «Tecnología, conocimiento y sensibilidad se encuentran para diseñar soluciones».

estamos.academy y estamos.hub dieron lugar a estamos.creando y estamos.automatizando, con un paso intermedio estamos.creativos. Se sustituyó formación por creatividad y experiencias con IA. Dos columnas; sin las ilustraciones de servicio ni «Tengo una idea» y flechas. Labels: CREATIVIDAD CON IA / AUTOMATIZACIÓN CON IA. Desplegables y + ampliados, luego + en círculos y círculos algo más pequeños.

Servicios pasó de «Dos espacios. Una misma inquietud» a «Ideas que toman forma. Procesos que evolucionan». La última instrucción lo reemplazó literalmente por «Proyectos que toman formar. Procesos que evoluacionan». Pendiente editorial: confirmar si debe corregirse a «forma» y «evolucionan».

## Equipo

Se creó carrusel en el orden Martín, Emilia, Elia, Julia. Se añadieron flechas circulares, atenuación de inactivos, cargos y redes de Martín. Hubo ajustes sucesivos para igualar fotos y mantener el texto a la derecha de Julia, completo y más grande. Finalmente se añadió un quinto paso para leerlo en primer plano sin alterar el tamaño de la foto.

En móvil se corrigió el hueco provocado por la tarjeta más alta y se dispuso el quinto texto horizontalmente. La altura sigue al paso activo.

## Animaciones

Se añadieron cuadrados en Mirada, triángulos en Equipo, rectángulos en Método, pentágonos en Servicios y rombos en Contacto. Se extendieron a pantalla completa y se incorporó repulsión por puntero, posteriormente táctil. Se agregaron entradas de secciones y latidos en logos y palabras de servicios.

Se crearon franjas con verbos y figuras; luego logos transparentes en el orden aportado, más pequeños y separados por formas. Otra franja recibió nombres de proyectos y después Mezcal 5.0. Se redujo el tamaño de nombres al de los logos y posteriormente un poco más.

La portada recibió una torre de figuras tipo Tetris: más piezas hasta Agencia Tecno creativa, todas tocándose, derrumbe desde la pieza tocada una vez completa y reconstrucción.

Se añadió una franja final sin palabras. Nombres y logos fueron movidos al final en sentidos opuestos. Último orden aprobado: nombres → figuras → logos. La franja central conserva su geometría; se redujeron figuras y tamaños de nombres/logos.

## Móvil, cierre y documentación

Se corrigió el bloqueo de reactivación cuando el teléfono solicita reducir movimiento: botón explícito, CSS motion-enabled, listener compatible con Safari antiguo y delta temporal real. La preferencia inicial se respeta.

Se retiró Estamos escuchando, su formulario y sus rombos. El contacto superior pasa directamente al mailto de la agencia. Se mantuvieron Instagram y LinkedIn en el pie.

Se preparó un paquete con código, recursos, fuentes, licencias e informe; se actualizó el título de Equipo y Mezcal 5.0. Esta entrega GitHub actualiza también las correcciones posteriores de móvil y cierre, y añade esta wiki y la revisión de seguridad.

## Trazabilidad

Fuente Sites vigente: 01f6961cd42432949dc956ea9319302c2055196e. Hay trazabilidad textual de commits y copia funcional actual; no se promete que el repositorio contenga todos los binarios y versiones intermedias completos.


---

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
