# Dirección visual

Si el sitio ya tiene un sistema de diseño, úsalo y aplica de este archivo solo la estructura, las reglas y la demo. Los tokens son para el caso en que no haya sistema.

## Idea

El público son dueños y estimadores de constructoras de estructura. Viven entre planos, concreto y hojas de Excel. La página se ve como su mundo: superficies de concreto, tinta de plano, y una hoja de cálculo que es la protagonista. Todo lo demás es callado y ordenado para que la demo sea lo único memorable.

## Colores

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--ink` | `#1C2630` | `#E4E7E3` | Texto principal |
| `--muted` | `#4A5560` | `#A9B1B8` | Texto secundario |
| `--concrete` | `#ECEDEA` | `#161B20` | Fondo de página |
| `--slab` | `#D5D8D4` | `#2A3138` | Líneas de la cuadrícula, bordes, paneles |
| `--cell` | `#FFFFFF` | `#1F252B` | Celdas de la demo |
| `--rebar` | `#7A4A2E` | `#D08A5E` | Acento: botones, enlaces, el ID de proyecto en el diagrama |
| `--on-rebar` | `#FFFFFF` | `#161B20` | Texto sobre `--rebar` |
| `--flag` | `#B42318` | `#F07167` | Solo errores en la demo |
| `--flag-bg` | `#FBE9E7` | `#3A1E1E` | Fondo de la celda con error |
| `--ok` | `#2F6B4F` | `#6FBF95` | Valor corregido, estado Hecho |
| `--ok-bg` | `#E5F2EA` | `#1B3127` | Fondo de la celda corregida |

`--flag` y `--ok` no se usan fuera de la demo y los estados. Si aparecen en todas partes, pierden su significado.

## Tipografía

Una sola familia: **Archivo** (Google Fonts, variable, ejes `wdth` 62–125 y `wght` 100–900). Pila de respaldo: `"Archivo", "Helvetica Neue", Arial, sans-serif`.

| Rol | Ajustes |
|---|---|
| Título hero | `wdth` 112, peso 800, `clamp(2.4rem, 6vw, 4.5rem)`, interlineado 1.02, `letter-spacing: -0.01em` |
| Títulos de sección (h2) | `wdth` 100, peso 700, 1.75rem, interlineado 1.15 |
| Texto | `wdth` 100, peso 400, 1.0625rem, interlineado 1.6 |
| Números de la demo | `font-variant-numeric: tabular-nums`, alineados a la derecha |

El título del hero es el único lugar con ancho expandido. Sin mayúsculas sostenidas en etiquetas, sin una palabra resaltada en otro color dentro del título, sin etiquetas pequeñas encima de cada título.

## Estructura

Todo alineado a la izquierda. Texto a un ancho máximo de 66 caracteres. La demo puede ocupar hasta 960 px.

```
┌────────────────────────────────────────────┐
│ Su estimado se ve perfecto.                │  Hero: solo título, bajada
│ Ese es el problema.                        │  y dos botones. Sin imagen.
│ Bajada (2 líneas)                          │
│ [Revisar mi plantilla]  Ver qué encontramos│
├────────────────────────────────────────────┤
│ El cliente (2 líneas)                      │
├────────────────────────────────────────────┤
│ La situación (2 párrafos)                  │
│ [diagrama antes / hacia dónde vamos]       │
├────────────────────────────────────────────┤
│ Lo que encontramos                         │
│ ┌──────────────── DEMO ─────────────────┐  │  El momento memorable.
│ │ [pestaña 1] [pestaña 2]               │  │
│ │ fx =HORAS_MO(B3;C3)                   │  │
│ │    A        B      C      D           │  │
│ │ 1  …                                  │  │
│ │ [Mostrar el error]   mensaje          │  │
│ └───────────────────────────────────────┘  │
│ Lista de hallazgos (texto, sin tarjetas)   │
├────────────────────────────────────────────┤
│ Cómo lo estamos resolviendo                │
│ 1 Diagnóstico ................. Hecho      │  Lista numerada: aquí sí es
│ 2 Arreglos inmediatos ........ En curso    │  una secuencia real.
│ …                                          │
├────────────────────────────────────────────┤
│ Además (1 párrafo)                         │
├────────────────────────────────────────────┤
│ ¿Le suena? (lista corta)                   │
├────────────────────────────────────────────┤
│ Envíeme su plantilla. Le digo qué encuentro│  Cierre sobre --slab.
│ Texto  [Agendar 20 minutos]                │
└────────────────────────────────────────────┘
```

Separa secciones con espacio (de 4 a 6 rem), no con tarjetas ni sombras. Los hallazgos son una lista de texto con la primera frase en negrita, no una cuadrícula de tarjetas.

## Estados del proceso

| Estado | Marca | Texto |
|---|---|---|
| `done` | Cuadrado lleno en `--ok` | Hecho / Done, en `--ok` |
| `in_progress` | Cuadrado mitad lleno en `--rebar` | En curso / In progress, en `--rebar` |
| `next` | Cuadrado solo con borde en `--muted` | Siguiente / Next, en `--muted` |

El estado siempre lleva texto, no solo color.

## Movimiento

Un solo momento: cuando se presiona Corregir en la demo, el total cuenta del valor viejo al nuevo en unos 450 ms. Nada más se anima al cargar ni al hacer scroll. Con `prefers-reduced-motion: reduce`, el número cambia sin animación.

## Calidad mínima

Diseño primero para celular (los dueños abren el link en el teléfono). La tabla de la demo se desplaza horizontalmente dentro de su contenedor, nunca la página. Foco visible con teclado en pestañas y botones. Contraste AA en todos los textos.
