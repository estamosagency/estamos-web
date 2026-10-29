> ARCHIVO HISTÓRICO. Describe la entrega del 28/10 y quedó reemplazado por INFORME-TECNICO.md.

# Informe técnico y de entrega · Estamos

**Fecha de corte:** 28 de octubre de 2026 (Buenos Aires).  
**Proyecto:** Estamos — Humanos potenciando humanos.  
**Sitio:** https://estamos-constelacion.mpvillar.chatgpt.site  
**Project ID:** `appgprj_6ae10e84641c8191a26cd5805cd08f54`.  
**Commit de fuente:** `1404087d5488da7fa828839b3c12bdc0c4073f65`.

Este informe describe la implementación real incluida en el paquete, no una propuesta de desarrollo. Los archivos de `dist/` se copiaron sin refactorizar para conservar el comportamiento publicado. No se han agregado funcionalidades comerciales ni conexiones que no existieran.

## 1. Alcance y arquitectura

Landing de presentación con navegación por anclas, seis secciones principales, animaciones procedurales, franjas horizontales continuas, carrusel de equipo y formulario que prepara un correo.

| Capa | Implementación |
| --- | --- |
| Estructura y contenido | HTML5, idioma español, `dist/index.html` |
| Diseño y adaptación | CSS nativo, `dist/style.css` |
| Interacciones y gráficos | JavaScript nativo y Canvas 2D, `dist/app.js` |
| Recursos | Cuatro retratos WebP y una franja PNG de logos con transparencia |
| Tipografía activa | Inter, Google Fonts, pesos 200, 400, 500 y 600 |
| Backend / base de datos | No implementados |
| Framework / bundler | Ninguno |
| Compilación | No requerida |
| Publicación actual | Sites, assets estáticos desde `dist/` |

El manifiesto original de Sites está en `reference/sites/hosting.json`. Se conserva como referencia; no es necesario para servir el sitio fuera de Sites. No copiar la identidad de este Site al registrar otro proyecto nuevo.

## 2. Fuentes de contenido y de diseño

- Sitio original: https://estamosagency.com/, consultado durante el desarrollo inicial. Aportó textos, enfoque, servicios, método y contactos.
- Archivo aportado `DESIGN.md`, conservado como `reference/DESIGN-original.md` incluido en esta entrega: referencia visual de Dala, fondo negro, tipografía de gran escala, espacios abiertos, acento violeta y partículas. Es una referencia, no código licenciado de Dala.
- Instrucciones sucesivas de Martín Pablo Villar: nombres, cargos, redacción, disposición, tamaños, colores y comportamiento de las animaciones.
- Imágenes y capturas aportadas: cuatro retratos y cinco referencias de logos. Sus copias disponibles están en `reference/original-assets/`.
- Franja de logos preparada con edición generativa a partir de los cinco aportes. El resultado raster está en `dist/assets/partner-logos.png`; debe revisarse la fidelidad frente a los originales antes de usarlo como material oficial de marca. La generación puede introducir diferencias de dibujo o letras.
- No se incorporaron testimonios, métricas de resultados ni perfiles personales no provistos.

### Prompt utilizado para la franja de logos

Componer una única franja horizontal con fondo transparente a partir de los cinco logos, en orden: FLORERIA CABRELLI, hammurabidigital, monograma caligráfico JC, seminarioshammurabi y editorialhammurabi. Quitar fondos y líneas de captura, preservar lettering y proporciones, recolorear uniformemente a gris `#727079`, alinear verticalmente y dejar separaciones transparentes. Sin textos, marcos ni sombras adicionales.

Se utilizó la herramienta integrada de generación/edición de imágenes; no se usó una API key del proyecto. Actualmente CSS recorta visualmente ese PNG en cinco ventanas para insertar figuras entre los logos; no existen cinco SVG originales en producción.

## 3. Diseño, colores y tipografías

| Uso | Valor |
| --- | --- |
| Fondo | Negro `#000000` |
| Texto principal | Blanco `#ffffff` |
| Botones y acentos | Violeta `#8052ff` |
| Texto de franjas | Gris `#727079` |
| Secundarios | Grises `#9a9a9a`, `#bdbdbd` y otros declarados en CSS |
| Partículas | `#8052ff`, `#b98aff`, `#ffb829`, `#a5ffef`, `#15846e`, `#ff6498`, `#4667ff` |

La identidad activa de esta versión sigue el diseño oscuro solicitado; no usa por defecto todo el sistema cromático histórico de Estamos.

**Tipografía implementada:** Inter desde `fonts.googleapis.com` y `fonts.gstatic.com`, con fallback Arial/sans-serif. La fuente se pide en pesos 200, 400, 500 y 600. El cuerpo conserva ligereza; títulos grandes, peso 400 y tracking negativo. Algunos destacados y navegación usan 600.

**No implementadas:** PPNeueMontreal, Major Mono Display, Satoshi y Lexend no están cargadas en esta web. PPNeueMontreal era una referencia del documento de estilo; no se dispone de una licencia ni de sus archivos. El logotipo `estamos_` es texto HTML con CSS, no una tipografía exclusiva ni una imagen corporativa suministrada.

### Tamaños y jerarquías relevantes

- Portada: `Humanos. Potenciado. Ideas.`; “Potenciado.” violeta. La redacción singular se conserva como fue solicitada.
- Títulos principales: escalas fluidas con `clamp()`, aproximadamente 48–79 px en secciones y hasta 111 px en portada según pantalla.
- Párrafo de portada: 20 px en escritorio, 19 px en tablet, 18 px en móvil.
- Rótulo “Agencia Tecno creativa”: 16 px en escritorio, 13 px en móvil.
- Navegación y CONVERSEMOS: 15 px, blanco, peso 600.
- Rótulos de sección sin numeración, violetas: 14 px; 12 px en móvil.
- Nombres de la franja de proyectos: 30 px, gris y tracking -0.9 px.
- “Empatizar. Potenciar. Acompañar.”: 34 px / 600; 31 px en móvil.
- “Personas, Equipos, Proyectos”: 20 px / 600; 18 px en móvil.
- Los signos + están dentro de círculos violetas: 52 px en escritorio, 48 px en móvil.
- Las reglas finales de CSS prevalecen sobre las anteriores. Para medidas exactas por selector, consultar el archivo y estilos computados del navegador.

## 4. Orden real de la página

1. Header: `estamos_`, MIRADA, SERVICIOS, MÉTODO, EQUIPO y CONVERSEMOS.
2. Portada `#inicio`: rótulo, título, presentación, puntos interactivos y torre de figuras.
3. Lo que hacemos `#servicios`: “Ideas que toman forma. Procesos que evolucionan.”, dos columnas, pentágonos de fondo.
4. Franja de nombres de proyectos y figuras.
5. Nuestra mirada `#mirada`: “Tu idea es el punto de partida.”, cuadrados de fondo, bajada y Personas / Equipos / Proyectos.
6. Equipo `#equipo`: “Humanos y agénticos.”, triángulos de fondo y carrusel de cinco pasos.
7. Franja de logos y figuras de colores.
8. Método EPA `#metodo`: rectángulos de fondo y fases seleccionables.
9. Estamos escuchando `#contacto`: rombos de fondo, contacto y formulario.
10. Franja solo de figuras geométricas.
11. Footer: `estamos_`, lema, Instagram y LinkedIn.

Los rótulos se quitaron de la numeración; por pedidos sucesivos el orden actual de secciones no es el de una numeración original. Las anclas siguen siendo válidas.

## 5. Contenido y funcionamiento

### Servicios

**estamos.creando** — CREATIVIDAD CON IA. “Despertar ideas. Expandir lo posible.” Texto: “Experiencias con IA potentes y movilizadoras. Hacemos lo que necesitas que hagamos.” Desplegable: “Creatividad que toma forma”. Explica conceptos, contenidos, experiencias y dirección creativa con IA.

**estamos.automatizando** — AUTOMATIZACIÓN CON IA. “De una buena pregunta a una solución.” Texto: “Tecnología, conocimiento y sensibilidad se encuentran para diseñar soluciones.” Desplegable: “Partimos de desafíos reales”. Explica automatizaciones adaptadas a procesos, ritmos y necesidades del equipo.

Los desplegables usan `<details>` y `<summary>` nativos. Se quitaron las dos ilustraciones animadas de servicios y los CTA “Tengo una idea / Tengo un desafío”. El CTA de portada “Descubrí lo que podemos hacer” también se retiró.

### Franja de proyectos

Secuencia exacta, conservando mayúsculas, espacios y acentos:

1. Scuchá
2. EditorIA
3. Agenda 360
4. Beneficios Hammurabi
5. Aula 2030
6. Conciliador inteligente
7. Estudio Pódcast
8. Observá algo
9. Auto historia
10. Mezcal 5.0

Los nombres son contenido visual, no enlaces a aplicaciones. Las figuras son pentágonos, rombos y círculos de colores. El bloque se duplica para la continuidad visual.

### Equipo: cinco pasos

| Paso | Persona / contenido | Cargo |
| --- | --- | --- |
| 01 / 05 | Martín Pablo Villar | CEO y especialista en Automatización Responsable |
| 02 / 05 | Emilia Ricci | Especialista en GenAI |
| 03 / 05 | Elia Yarur | Ingeniero de datos |
| 04 / 05 | Julia Tanaka | Directora de arte |
| 05 / 05 | El criterio es humano | Descripción de la mirada del equipo |

La persona activa se muestra opaca y las otras atenuadas. La descripción es un quinto objetivo de navegación, alojado junto a Julia en el DOM: en el paso 4 se ve en segundo plano; en el 5 se vuelve legible y se desplaza al inicio de la ventana, mientras la foto y datos de Julia quedan atenuados.

La descripción dice:

> El criterio es humano. El potencial, infinito.
>
> Conectamos estrategia, inteligencia artificial, datos y diseño para transformar desafíos en soluciones con sentido.
>
> Integramos trabajo agéntico para ampliar lo que podemos hacer, con personas que orientan, revisan y asumen la responsabilidad de cada decisión.

Flechas izquierda/derecha violetas, selección por clic, teclado (Enter, espacio, izquierda y derecha), desplazamiento horizontal y contador. El recorrido vuelve al inicio después del paso 5. Hay reglas específicas de tres columnas para Julia en escritorio para sostener el retrato, su nombre/cargo y el texto independiente. En móvil la composición se apila.

Redes personales provistas solo para Martín:

- https://www.instagram.com/martinpablovillar/
- https://www.linkedin.com/in/martinpablovillar/

### Logos

Orden: Florería Cabrelli → Hammurabi Digital → monograma JC → Seminarios Hammurabi → Editorial Hammurabi. Separados por cuadrados, triángulos y rectángulos de colores. El gris procede de la imagen y un filtro CSS de brillo, por lo que no es una tinta vectorial única garantizada por píxel.

Las ventanas usan coordenadas del PNG generado; cambiar esa imagen por otra con tamaño o disposición diferentes exige recalcular `--logo-width`, `--logo-left`, escala y recorte vertical. No hay enlaces ni afirmaciones de resultados asociadas a estos logos.

### Método EPA

Tres verbos: Empatizar, Potenciar, Acompañar. Fases efectivamente implementadas: Reconexión, Detección, Optimización, Innovación, Orientación e Implementación (00–05). Este contenido refleja el sitio original y lo que se implementó aquí: no equivale automáticamente a otras versiones ampliadas de EPA de ocho etapas.

Se selecciona cada fase con botones tipo tab. Flechas del teclado, Home y End; `aria-selected`, `tabIndex` y panel asociado. El texto está en el array `phases` de `app.js`.

### Contacto

Email: `hola@estamosagency.com`. El formulario pide nombre, email, interés y mensaje. Validación HTML de campos obligatorios y email; al enviar construye un enlace `mailto:` con asunto y cuerpo codificados.

**No envía correos por un servidor, no registra consultas, no tiene bandeja ni base de datos.** La persona debe enviar el mensaje desde su aplicación de correo. El estado visible indica que el mensaje quedó preparado; no confirma recepción. Si no hay cliente de correo configurado puede no abrirse.

Redes de la agencia:

- https://www.instagram.com/estamos.agency/
- https://www.linkedin.com/company/estamos-agency

## 6. Animaciones: implementación y parámetros

### Motor compartido de fondos

Canvas 2D, un bucle `requestAnimationFrame`, dibujado si pasaron más de 30 ms desde el frame previo. `t` aumenta 0.032 por frame procesado. No usa delta real: la velocidad puede variar si baja el rendimiento.

`ResizeObserver` adapta cada canvas; densidad de píxeles limitada a 2. `IntersectionObserver` evita dibujar campos fuera de vista. No se usan GSAP, Three.js, WebGL, Lottie ni videos para estos fondos.

| Fondo | Canvas / función | Cantidad |
| --- | --- | --- |
| Portada, puntos | `brain` / `draw()` | 210 |
| Nuestra mirada, cuadrados | `mirada-squares` / `drawSquares()` | 100 |
| Equipo, triángulos | `team-triangles` / `drawTriangles()` | 160 |
| Método, rectángulos | `method-rectangles` / `drawRectangles()` | 110 |
| Servicios, pentágonos | `services-pentagons` / `polygonField()` | 120 |
| Contacto, rombos | `contact-diamonds` / `polygonField()` | 120 |

El ID histórico `brain` ahora representa puntos, no un cerebro. Los fondos ocupan el ancho completo de la pantalla; el contenido conserva márgenes.

Movimiento: desplazamiento horizontal/vertical modular y oscilación senoidal. Opacidad variable. Semilla pseudoaleatoria inicial 42 para distribuir puntos.

### Interacción con el puntero

`pointerField()` escucha `pointermove` en la sección y guarda posición local respecto del canvas. `reactToPointer()` aplica repulsión en radio de 170 px, fuerza máxima 46 px y suavizado 0.12. Al salir de la sección, las figuras regresan suavemente a su trayectoria. Se ignora el repulsor de fondo para punteros táctiles; se respeta el estado pausado.

### Torre de figuras de portada

`hero-tower`, `sizeTower()`, `towerGeometry()`, `paintTowerPiece()`, `drawTower()` y `toppleTower()`.

- Alineación desde el rótulo Agencia Tecno creativa hasta la altura de Inteligencia colectiva.
- Tamaño base 52 px en escritorio y 38 px en móvil; al menos 8 piezas, cantidad calculada según altura.
- Rectángulo amarillo, triángulo menta, cuadrado violeta, círculo verde, rombo azul y pentágono rosa; se repiten.
- Alturas ajustadas a la columna y sin separación entre piezas. Las figuras no son cuerpos rígidos con colisiones reales: es una animación geométrica controlada.
- Una pieza entra cada 1.15 unidades de tiempo; caída de entrada de 0.95.
- La torre completa queda quieta hasta la interacción. No se destruye mientras todavía está construyéndose.
- Al pasar el puntero o tocar sobre una pieza, esa y las superiores caen; las inferiores quedan.
- Velocidad lateral y giro aleatorios, aceleración vertical 330 × segundos², pequeño impulso inicial ascendente y desfase de 0.045 entre piezas.
- A los 4.5 segundos del derrumbe, comienza una construcción nueva.
- Con reducción de movimiento se muestra la torre construida y se omite el derrumbe.

### Franjas horizontales

CSS `@keyframes marquee`, animación lineal de 35 segundos y traslación hasta -50%; contenido duplicado para continuidad. El bloque de nombres, el de logos y el de figuras finales tienen clases específicas. Las formas se dibujan con CSS: `clip-path`, dimensiones y `border-radius`.

### Aparición de secciones

Clase `reveal`, opacidad desde 0 y `translateY(35px)` (18 px en móvil), transición de 0.8 s. Observer con umbral 0.08. Una vez visible se deja de observar: la entrada ocurre una vez por carga, no cada vez que se vuelve a la sección.

### Latidos

`@keyframes heartbeat`, aplicado al guion bajo de ambos `estamos_`, a `.creando` y al segmento `estamos` de `.automatizando`. Pulsos de escala y opacidad. Logos: ciclo 2 s; palabras: 2.6 s. Es una animación visual; no cambia el texto ni genera sonidos.

### Pausa y accesibilidad

Botón flotante Movimiento cambia `paused`, `aria-pressed`, icono y etiqueta. CSS `.paused` pausa animaciones; el reloj de canvas se detiene. `prefers-reduced-motion` desactiva animaciones CSS y activa pausa inicial. Algunas interpolaciones pendientes de repulsión pueden terminar de acomodarse al pausar; no es un congelado de todos los píxeles.

## 7. Adaptación, accesibilidad y seguridad

- Breakpoints principales: 900 px y 650 px; también existen reglas heredadas en la base.
- Navegación móvil desplegable con `aria-expanded`; enlaces cierran el menú.
- Enlace “Ir al contenido”, foco visible, labels de campos, alt de imágenes y estado de carrusel accesibles.
- Gráficos decorativos con `aria-hidden`; el canvas principal tiene descripción.
- Enlaces externos con `target=_blank` y `rel=noopener`.
- No hay login, sesión, cookies de aplicación, `localStorage`, API keys ni secretos de aplicación.
- Google Fonts es una dependencia externa y genera solicitudes del navegador a Google. Para autonomía completa, autoalojar las fuentes.
- No hay analítica ni píxeles incorporados por el código entregado. La plataforma de hosting puede añadir sus propios elementos o controles, fuera de esta instantánea.
- El sitio no incluye CSP, encabezados HTTP personalizados ni auditoría de accesibilidad exhaustiva. Esas políticas corresponden al hosting y deben verificarse por separado.

## 8. Publicación, respaldo y migración a GitHub

Esta entrega es una copia de la fuente estática actual. No es una migración realizada a GitHub, ni cambia la audiencia del Site existente.

1. Revisar derechos de fotos y logos antes de hacer público un repositorio.
2. Crear repositorio en la cuenta elegida y subir la carpeta completa; seguir README.
3. Servir `dist/` en el hosting estático elegido.
4. Si se utiliza GitHub Pages, el workflow incluido se ejecuta manualmente y publica `dist/` mediante los actions oficiales.
5. Mantener los originales y esta instantánea como referencia. No subir tokens ni credenciales de Sites.
6. Configurar dominio y DNS en un trabajo separado si se decide migrar el dominio.

No se incluyó una carpeta `.git` ni se exportaron credenciales temporales. `docs/HISTORIAL-1404087d5488da7fa828839b3c12bdc0c4073f65S.txt` es solo trazabilidad textual; no permite reconstruir cada versión histórica. Se conserva una única versión funcional completa.

## 9. Mantenimiento y puntos pendientes

- **CSS acumulado:** contiene ajustes sucesivos y selectores duplicados; los últimos mandan. No reordenar ni deduplicar sin una comparación visual en escritorio y móvil.
- **Carrusel acoplado al DOM:** la quinta diapositiva es un bloque dentro de Julia, con objetivos de scroll específicos. Agregar personas requiere actualizar arrays, estilos y contador.
- **Logos raster generados:** revisar fidelidad, sustituir por SVG/PNG oficiales si se dispone de ellos; el monograma se documenta como JC según referencia, sin atribuir una empresa no confirmada.
- **Formulario:** implementar proveedor de correo/backend solo si se quiere envío real y confirmación verificable.
- **Fuentes:** archivos de referencia y licencia incluidos; el HTML publicado todavía llama a Google Fonts.
- **Rendimiento:** ajustar cantidades de partículas y usar delta temporal real si se requiere uniformidad en equipos lentos.
- **Responsive:** las tres columnas de Julia pasan a una columna en móvil; comprobar textos largos y quinto paso tras cada cambio.
- **SEO:** título y metadescripción básicos; no hay sitemap, robots, Open Graph ni datos estructurados específicos.
- **Contenido:** revisar “Humanos. Potenciado. Ideas.” si se desea cambiar gramática; se conserva la instrucción literal aprobada.
- **Licencia:** no se asigna automáticamente una licencia libre al código ni a recursos de terceros.

## 10. Actualización posterior a la entrega inicial

Esta revisión reemplaza también el código y las huellas de integridad del paquete inicial; no es solamente un agregado al informe.

- Se agregó **Mezcal 5.0** al final de la franja de proyectos, antes de repetir la secuencia. Ahora hay diez nombres: Scuchá, EditorIA, Agenda 360, Beneficios Hammurabi, Aula 2030, Conciliador inteligente, Estudio Pódcast, Observá algo, Auto historia y Mezcal 5.0.
- El título de Nuestra mirada pasó a **Tu idea es el punto de partida.**
- El título de Equipo pasó sucesivamente por “Humanos trabajando con agentes” y “Humanos potenciados con agentes”. La redacción vigente es **Humanos y agénticos.**
- El título de Servicios dejó de ser “Dos espacios. Una misma inquietud.” y ahora dice **Ideas que toman forma. Procesos que evolucionan.**
- La portada, la torre interactiva, las geometrías, el carrusel de cinco pasos, los logos y el formulario se conservan en la versión actual. El código completo adjunto es la fuente autoritativa del comportamiento.
- El ZIP original se actualiza conservando su identidad, con nueva versión de contenido.

## 11. Verificación y límites de la entrega

Se verificó sintaxis de JavaScript durante el desarrollo, se probaron el carrusel (incluido el paso 05/05), tabs y desplegables en navegador, y las publicaciones informaron éxito. Esta entrega verifica que las copias de HTML, CSS, JS y assets coincidan por SHA-256 con el checkout actual.

No se declara una auditoría integral de seguridad, compatibilidad de todos los navegadores, accesibilidad WCAG, envío real de formularios ni prueba visual exhaustiva de cada tamaño de pantalla. No hay una suite automatizada completa. El informe distingue pruebas realizadas de recomendaciones pendientes.

## 12. Dónde editar cada cosa

| Cambio | Ubicación |
| --- | --- |
| Textos, enlaces y orden de secciones | `dist/index.html` |
| Colores, tamaños, responsivo y figuras de franjas | `dist/style.css` |
| Movimiento de fondos, puntero y torre | `dist/app.js`, funciones de dibujo |
| Equipo y quinto paso | HTML de `.team-track`, CSS de `.person/.julia`, funciones `showPerson/highlightPerson` |
| Fases del método | Array `phases` de `dist/app.js` |
| Envío por correo | Listener `form.onsubmit` de `dist/app.js` |
| Retratos | `dist/assets/*.webp` |
| Logos | `partner-logos.png` y coordenadas CSS/HTML de `.partner-logo` |
| Despliegue manual GitHub Pages | `.github/workflows/pages.yml` |

El código completo está transcrito sin recortes en `docs/CODIGO-COMPLETO.md` y también entregado en sus archivos originales ejecutables.
