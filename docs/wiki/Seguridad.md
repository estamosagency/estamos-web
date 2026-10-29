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
