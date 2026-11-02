# Demo: Encuentre el error

El gancho de la página. Un dueño o estimador ve una hoja que parece correcta, toca un botón y descubre un error que su propia plantilla podría tener. El prototipo `referencia/demo-error-silencioso.html` ya funciona; pórtalo como componente.

## Estructura

- Título (h3) e introducción desde `demo.<idioma>.heading` y `demo.<idioma>.intro`.
- Dos pestañas (`role="tablist"`, `role="tab"`, `aria-selected`, `role="tabpanel"`).
- Cada pestaña tiene una barra de fórmula (fx), una tabla con letras de columna (A, B, C, D) y números de fila como en Excel, un botón y un mensaje con `aria-live="polite"`.
- Todos los textos salen de `contenido/data.json` → `demo.es` o `demo.en`. Los números salen de `demo.labor` y `demo.phases`.

## Pestaña 1: Una celda con un espacio

Mano de obra (h) = largo × cantidad × 0.5. Costo = horas × $62.

| Fila | A Elemento | B Largo | C Cantidad | D Mano de obra |
|---|---|---|---|---|
| 2 | V-1 | 24 | 6 | 72 |
| 3 | V-2 | (un espacio) | 4 | 0 |
| 4 | V-3 | 18 | 8 | 72 |
| 5 | V-4 | 30 | 2 | 30 |
| 6 | Total horas | | | 174 |
| 7 | Costo de mano de obra a $62/h | | | $10,788 |

La barra de fórmula muestra `=HORAS_MO(B3;C3)` (inglés: `=LABOR_HRS(B3,C3)`).

## Pestaña 2: Una fase fuera del total

| Fila | A Fase | B Costo |
|---|---|---|
| 2 | Cimentación | $186,400 |
| 3 | Losas | $241,900 |
| 4 | Columnas y vigas | $158,300 |
| 5 | Terrazas | $37,600 |
| 6 | Costo total | $586,600 |

La barra de fórmula muestra `=SUMA(B2:B4)` (inglés: `=SUM(B2:B4)`).

## Estados (iguales en las dos pestañas)

| Estado | Botón | Qué cambia |
|---|---|---|
| Inicio | Mostrar el error | Todo se ve normal. Mensaje `msg_*_start`. |
| Error visible | Corregir | Pestaña 1: B3 y D3 con borde y fondo `--flag`. Pestaña 2: fila 5 y la barra de fórmula con `--flag`. Mensaje `msg_*_reveal`. |
| Corregido | Volver a empezar | Pestaña 1: B3 = 20, D3 = 40, total 214 h y $13,268. Pestaña 2: fórmula `=SUMA(B2:B5)`, total $624,200. Celdas cambiadas en `--ok`. Los totales cuentan del valor viejo al nuevo (450 ms, sin animación con movimiento reducido). Mensaje `msg_*_fix`. |

Cambiar de pestaña no reinicia la otra.

## Reglas

- Los números son inventados y la introducción lo dice. No los cambies por datos reales del cliente.
- La celda con error se marca con borde, fondo y texto en el mensaje, no solo con color.
- En celular la tabla se desplaza dentro de su contenedor.
