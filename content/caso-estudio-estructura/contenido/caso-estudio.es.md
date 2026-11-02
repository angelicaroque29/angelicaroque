# Caso de estudio: contratista de estructura de concreto

Ruta: `/casos/contratista-estructura`
Título para compartir: Su estimado se ve perfecto. Ese es el problema.
Descripción para compartir: Cómo encontramos nueve errores silenciosos en la plantilla de estimación de un contratista de estructura, y qué estamos construyendo para que no vuelvan.

---

## Hero

**Título:** Su estimado se ve perfecto. Ese es el problema.

**Bajada:** Auditamos la plantilla de estimación de un contratista de estructura de concreto, encontramos nueve errores que no daban ninguna señal y empezamos a conectar estimado, control de costos y pagos en un solo sistema.

**Botón principal:** Revisar mi plantilla
**Botón secundario:** Ver qué encontramos (lleva a la sección Lo que encontramos)

---

## El cliente

Un contratista de estructura de concreto con proyectos residenciales y comerciales. Por confidencialidad no publicamos su nombre. Con su empresa haríamos lo mismo.

---

## La situación

Como casi todas las constructoras, la empresa trabaja sobre Excel: una plantilla de estimación con decenas de hojas, miles de fórmulas y macros; un archivo para controlar costos; otro para pagar a subcontratistas.

Cada archivo funcionaba por separado, pero no se hablaban. Los datos pasaban de uno a otro copiando y pegando, y circulaban varias copias de la plantilla sin que nadie pudiera decir cuál era la oficial.

[Diagrama: assets/mapa-sistemas.es.svg]

---

## Lo que encontramos

[Demo interactiva: Encuentre el error]

Auditamos la plantilla contra un estimado real, ya con precio, y encontramos nueve defectos. Algunos ejemplos:

- **Una fase completa fuera del total.** Sus costos llegaban al detalle, pero nunca al costo total. Cualquier proyecto con esa fase saldría más barato de lo que realmente cuesta.
- **Una sección del edificio sin mano de obra.** El total de mano de obra se saltaba una sección completa.
- **Materiales leídos de la fase equivocada.** Dos fases tomaban sus cantidades de otra fase.
- **Un espacio que vale cero.** Un espacio en blanco en una celda dejaba en cero la mano de obra de un elemento. Ningún error en rojo: el resumen se veía limpio.
- **Códigos duplicados.** Dos partidas compartían el mismo código.

En el estimado que revisamos, ninguno estaba costando dinero todavía, porque ese proyecto no usaba esas fases. En el próximo que sí las use, los números saldrían mal sin avisar.

---

## Cómo lo estamos resolviendo

Es un proceso por etapas. Cada etapa deja algo que el equipo ya puede usar.

1. **Diagnóstico.** Revisar cada sistema y auditar la plantilla contra un estimado real.
2. **Arreglos inmediatos.** Corregir las fórmulas, validar los datos de entrada y marcar en rojo cualquier margen negativo.
3. **Un ID para cada proyecto.** El mismo código de cliente y proyecto viaja del estimado a la propuesta, al control de costos y a los pagos.
4. **Control de costos desde el estimado.** El presupuesto de cada proyecto sale directo del estimado ganado, sin volver a teclearlo.
5. **Nuevo motor de cálculo.** Separar el cálculo de cantidades del precio, con tablas de factores que el equipo puede editar.
6. **Una sola versión oficial.** Un archivo central con historial de versiones.

(El estado de cada paso viene de `data.json`.)

---

## Además

Organizamos la documentación de la empresa en una biblioteca ordenada por sistema y montamos un asistente de IA que responde preguntas sobre cómo funciona la empresa a partir de esos documentos. El conocimiento deja de depender de quién esté en la oficina ese día.

---

## ¿Le suena?

- Estiman en Excel, con macros que solo entiende una persona.
- Hay más de una versión de la plantilla circulando.
- El control de costos se arma a mano después de ganar el trabajo.
- Los pagos a subcontratistas viven en otro archivo.
- Nadie revisa la plantilla hasta que un trabajo pierde dinero.

---

## Cierre

**Título:** Envíeme su plantilla. Le digo qué encuentro.

**Texto:** Reviso su plantilla de estimación o un estimado reciente y le entrego una lista de lo que hoy cambia sus números sin avisar. Su información se queda conmigo, igual que la de este cliente.

**Botón:** Agendar 20 minutos
