# Prompt para Cursor

Copia todo lo que está debajo de la línea y pégalo en el chat del agente de Cursor.

---

Quiero agregar a mi sitio web una página de caso de estudio. Todo lo que necesitas está en la carpeta `caso-estudio-estructura`. Lee todos sus archivos antes de escribir código.

**Contexto.** Soy desarrollador de software y trabajo con constructoras en sus sistemas: plantillas de estimación en Excel, control de costos, pagos a subcontratistas. Esta página cuenta, de forma anónima, el trabajo que hago para un contratista de estructura de concreto. La voy a mandar por link a dueños de constructoras parecidas. Su trabajo es que pidan una llamada.

**Qué construir**

1. Detecta el framework, el sistema de estilos y los componentes de mi sitio. Úsalos. Solo si el sitio no tiene un sistema de diseño claro, usa los tokens de `diseno/direccion-visual.md`. En ambos casos, respeta la estructura y las reglas de ese archivo.
2. Crea la ruta `/casos/contratista-estructura`. Si el sitio es bilingüe, crea también `/en/cases/structural-contractor`. Si no lo es, usa el idioma principal del sitio.
3. Usa exactamente los textos de `contenido/caso-estudio.es.md` y `contenido/caso-estudio.en.md`, y los datos de `contenido/data.json`. No inventes cifras, clientes, resultados, testimonios ni logos.
4. Implementa la demo interactiva como un componente, siguiendo `diseno/demo-error-silencioso.md`. `referencia/demo-error-silencioso.html` es un prototipo que ya funciona: pórtalo, no lo rediseñes. Toma sus textos de `data.json` (`demo.es` y `demo.en`).
5. Pon el diagrama de `assets/` (versión según el idioma) en la sección La situación. Insértalo en línea (inline SVG o componente), no como `<img>`, para que tome los colores del tema.
6. Los pasos del proceso leen su estado desde `data.json` (`done`, `in_progress`, `next`). Muéstralos como Hecho, En curso y Siguiente, según la sección de estados de `direccion-visual.md`.
7. Los botones de llamada a la acción usan `cta.url` de `data.json`. Si sigue el texto de ejemplo, usa `mailto:` con `cta.email`.
8. Si `meta.indexable` es `false`, agrega `<meta name="robots" content="noindex, nofollow">`, no incluyas la página en el sitemap y no la enlaces desde el menú.
9. Agrega título y descripción para compartir (Open Graph) desde `meta`.
10. Calidad mínima: diseñado primero para celular, buen contraste, foco visible con teclado, respeta `prefers-reduced-motion` y modo oscuro si el sitio lo soporta.

**No agregues** nombre del cliente, ciudad, montos reales, capturas de archivos reales, contadores animados de estadísticas, tarjetas de testimonios ni secciones que no estén en el contenido.

Cuando termines, dame la URL local de la página y una lista de lo que no pudiste hacer o tuviste que decidir por tu cuenta.
