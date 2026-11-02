# Caso de estudio para tu sitio web: contratista de estructura

Carpeta lista para Cursor. Crea en tu sitio una página de caso de estudio que puedes mandar como link a los prospectos de tu hoja de prospección.

## Qué hay aquí

| Archivo | Para qué sirve |
|---|---|
| `CURSOR_PROMPT.md` | El prompt que pegas en Cursor. Empieza por aquí. |
| `contenido/caso-estudio.es.md` | Todo el texto de la página en español. |
| `contenido/caso-estudio.en.md` | Lo mismo en inglés. |
| `contenido/data.json` | Datos estructurados: pasos, estados, hallazgos, textos de la demo y tu link de contacto. |
| `diseno/direccion-visual.md` | Colores, tipografía, estructura y reglas de diseño. |
| `diseno/demo-error-silencioso.md` | Especificación de la demo interactiva (el gancho de la página). |
| `referencia/demo-error-silencioso.html` | Prototipo funcional de la demo. Ábrelo en el navegador para verlo. |
| `assets/mapa-sistemas.es.svg` / `systems-map.en.svg` | Diagrama de antes y hacia dónde va el sistema. |

## Cómo usarla con Cursor

1. Copia esta carpeta dentro del repositorio de tu sitio (por ejemplo en `/docs/caso-estudio-estructura`).
2. Abre Cursor en el repositorio, abre el chat del agente y pega el contenido de `CURSOR_PROMPT.md`.
3. Revisa la página en tu celular antes de mandar el link a nadie: la mayoría de los dueños lo van a abrir ahí.

## Antes de publicar

- [ ] Revisa tu contrato con tu cliente actual por cláusulas de confidencialidad.
- [ ] Confirma los estados (Hecho, En curso, Siguiente) en `contenido/data.json`. Los puse según los documentos del proyecto al 2 de noviembre de 2026.
- [ ] Pon tu link de agenda o de contacto en `cta.url` dentro de `contenido/data.json`.
- [ ] No agregues capturas de los archivos reales, nombres, montos, códigos de proyecto ni ubicación.
- [ ] Cuando esté publicada, pon el link en el email 1 y en el follow-up de la hoja de prospección.

## Lo que no está aquí, a propósito

No se copió ningún archivo del cliente. La página no menciona su nombre, ciudad, año de fundación, tamaño, montos de contratos, márgenes, códigos de proyecto, nombres de archivos, nombres de sistemas internos ni nombres de personas. Los números de la demo son inventados. Así la página sirve para venderte sin revelar a quién le trabajas.

La página va con `noindex` por defecto: se abre con el link, pero Google no la muestra en búsquedas. Puedes cambiarlo en `meta.indexable` cuando quieras.
