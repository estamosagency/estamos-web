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
