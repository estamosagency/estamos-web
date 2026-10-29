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
