# Estamos · Constelación

Código completo de la versión publicada en Sites, actualizado al 29 de octubre de 2026.

- [Sitio en Sites](https://estamos-constelacion.mpvillar.chatgpt.site)
- [Wiki de GitHub](https://github.com/estamosagency/estamos-web/wiki)
- [Wiki versionada en este repositorio](docs/wiki/Home.md)
- [Informe técnico actual](docs/INFORME-TECNICO.md)
- [Historial de decisiones y cambios](docs/wiki/Historial.md)
- [Código transcrito](docs/CODIGO-COMPLETO.md)

Esta versión se guarda en la rama `sites-constelacion`. La rama `main` conserva la web anterior vinculada a Vercel; esta entrega no migra el dominio ni reemplaza esa instalación.

## Ejecutar

```bash
python3 -m http.server 8080 --directory dist
```

Abrir http://localhost:8080. En Windows puede usarse `py -3` o `python`. No requiere compilación, npm, API keys ni base de datos.

## Contenido

`dist/` contiene los 3 archivos de aplicación, 4 retratos WebP y la imagen de logos. `docs/` contiene la wiki, informe, código, inventario con SHA-256 y trazabilidad. `reference/` conserva el diseño aportado, recursos originales disponibles, fuentes Inter y licencia OFL. `NOTICE.md` documenta procedencia y derechos.

La tipografía activa sigue cargándose desde Google Fonts; las TTF incluidas son referencia. El formulario y la sección «Estamos escuchando» fueron eliminados. CONVERSEMOS abre `mailto:hola@estamosagency.com`.

## Publicación

Servir `dist/` en un hosting estático. `reference/pages-workflow-example.yml` es un ejemplo inactivo para un despliegue manual en GitHub Pages. No contiene secretos y no se ejecuta desde esta ubicación. No se incluye `.git` ni credenciales de Sites.

La fuente publicada de Sites está identificada en [SNAPSHOT.json](docs/SNAPSHOT.json). El historial textual no permite reconstruir por sí solo todos los binarios históricos. Los títulos literales y las limitaciones conocidas se documentan en la wiki.
