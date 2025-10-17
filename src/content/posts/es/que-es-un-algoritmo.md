---
title: ¿Qué es un Algoritmo?
pubDate: "2024-04-02T00:00:00.000Z"
updatedDate: "2025-07-24T00:00:00.000Z"
tags: Aprende a programar
description: Un algoritmo es un conjunto de instrucciones o pasos que se siguen para resolver un problema o llevar a cabo una tarea en particular. Así que, un manual para armar un mueble prefabricado o una receta de cocina, podrían ser considerados algoritmos.
heroImage: "/covers/open-cookbook-with-sourdough-recipe.jpg"
---
¿Has intentado armar un mueble de IKEA siguiendo los pasos del manual? *Y si… suele sobrar algún tornillo y te quedas con la duda de si algo quedó mal. 🙃* ¿Y el cubo de Rubik? Quizá has visto a gente girarlo una y otra vez, como si los movimientos no tuvieran sentido, hasta que de pronto todas las caras quedan perfectas.

En ambos casos se siguen **instrucciones precisas** para resolver un problema: armar un mueble o completar el cubo. De hecho, existe un algoritmo[^1] que, si lo sigues paso a paso, resuelve el cubo sin importar cómo esté mezclado.

> 🔍 También escuchamos que “el algoritmo” decide qué vemos en las redes sociales, aunque esa frase se queda corta para describir cómo funcionan los **sistemas de recomendación**.

La verdad es que el concepto de **algoritmo** está presente en muchas situaciones cotidianas, incluso cuando no lo llamamos por su nombre.

> 🍔 Un algoritmo es un conjunto de instrucciones o pasos que se siguen para resolver un problema o llevar a cabo una tarea en particular. Así que un manual para armar un mueble prefabricado o una receta de cocina, podrían ser considerados algoritmos.

Veamos como podríamos transformar una receta legitima para preparar hamburguesas en lo que seria una version mas apropiada para un lenguaje de programación.

## Receta de hamburguesas de manzana

### Ingredientes

- 500 g de carne molida y 100 g de tocineta
- 1 manzana, 1 cebolla, 1 tomate y un ajo
- 1 bloque de Halloumi (2 porciones)
- Queso Port Slut en lonjas (Se puede usar Cheedar)
- 2 panes de hamburguesa
- Salsa especial de hamburguesa
- Sal, pimienta y 1 cucharada de azúcar

### Preparación

1. Ralla una manzana y pica una cebolla en 2 mitades: en rodajas y en cuadritos. Pica finamente el ajo. En una sartén mediana, tuesta los panes de hamburguesa, retíralos y fríe la tocineta hasta dorarla. Retire la tocineta en un plato con toallas de cocina, pero conserve el aceite en la sartén.
2. Mezcla la manzana, la carne molida, la cebolla en cuadritos y el ajo. Condimenta con sal y pimienta, y forma dos hamburguesas. Fríelas en el aceite de tocineta reservado durante 3-5 minutos por lado a fuego alto.
3. En otra sartén, carameliza las rodajas de cebolla con 2 cucharadas de agua y una cucharada de azúcar durante 5 minutos a fuego medio. Retira la cebolla caramelizada y utiliza la misma sartén para asar los Halloumis durante 5-10 minutos por cada lado.
4. Al finalizar la cocción de las hamburguesas, coloca una loncha de queso sobre cada una y deja que se derrita con el calor residual. Mientras tanto, corta 4 rodajas de medio centímetro cada una de tomate.
5. Monta las hamburguesas: sobre la base del pan, coloca la hamburguesa con queso, añade la tocineta, la salsa de hamburguesa especial, la cebolla caramelizada, el Halloumi asado y dos rodajas de tomate. Cubre con el otro pan.
6. Compacta delicadamente la hamburguesa con las manos. ¡lista para disfrutar!

Es posible que te estés preguntando, a lo mejor con algo de hambre: ¿cómo puede ser esto un algoritmo?

¡Y con toda razón! para que la computadora lo entienda, necesitamos escribirlo de una manera diferente a como hablaríamos con una persona.

> 🤖 Este no siempre es el caso, si se usan técnicas de Procesamiento del Lenguaje Natural (NPL) es posible tomar instrucciones tal y como esta receta para que la computadora lo entienda a través de un modelo Inteligencia artificial. Sin embargo el programa de dicho modelo será escrito en forma de algoritmos.

## El código que no alcanzó a ser código: pseudocódigo

Vamos a explorar a continuación la misma receta, pero esta vez escrita en pseudocódigo, es decir algo aproximado a un lenguaje de programación pero sin tener una sintaxis especifica, un código que quien no sepa programar podría entender fácilmente.

> 🧠 El pseudocódigo se usa para planificar y visualizar la lógica de un algoritmo antes de codificarlo en un lenguaje de programación específico, como lo sería Python o JavaScript.

## La receta expresada en Pseudocódigo

Veamos cómo podríamos entonces traducir una receta escrita en lenguaje natural a pseudocódigo para que tenga una estructura más cercana a lo que usaríamos en un lenguaje de programación:

```javascript
Inicio

  carnes = ["carne molida", "tocineta"]
  vegetales = ["manzana", "cebolla", "tomate", "ajo"]
  quesos = ["Halloumi", "queso Cheddar"]
  otros = ["pan de hamburguesa", "salsa especial", "sal", "pimienta", "azúcar"]

  Preparar(vegetales)
  Tostar(otros)
  Cocinar(carnes)

  Mezclar(carnes, vegetales, otros)
  hamburguesas = FormarHamburguesas(2)

  Cocinar(hamburguesas)
  Caramelizar(vegetales, otros)
  Cocinar(quesos)

  Derretir(quesos)
  Cortar(vegetales)

  Montar(otros, hamburguesas, vegetales, quesos)

  Compactar()
  Disfrutar()

Fin
```

Cómo podemos observar la receta escrita en pseudocódigo tiene una estructura fácil de replicar en otros recetas:

1. Definimos un principio y un fin de la receta.
2. Declaramos una lista de ingredientes agrupados por su categoría.
3. Especificamos una lista de pasos y el uso de cada ingrediente.
4. Nos aseguramos de ocultar los detalles de cada paso, y usamos algo más pragmático como `"Preparar"`, `"Tostar"`, `"Caramelizar"`, etc.

## La versatilidad de los algoritmos

Lo interesante de tener la receta estructurada en pseudocódigo, es que ahora podemos cambiar los ingredientes para que la receta sea vegetariana:

```javascript
carnes = ["carne vegetal", "tocineta vegetal"]
```

Lo interesante es que el resto del pseudocódigo permanece exactamente igual, y eso es uno de los pilares de la programación: ¿cómo podemos escribir código que sea fácil de cambiar y mantener en el tiempo?

Piensa lo sencillo que sería cambiar la receta para que sea vegana, es decir sin carnes, quesos o cualquier ingrediente de origen animal.

## No son solo recetas y manuales

Aunque como principio tanto las recetas como manuales pueden ser considerados algoritmos, en la practica los algoritmos se usan para solucionar problemas complejos que le tomaría mucho tiempo a un humano en resolver, algunas de esas aplicaciones son las siguientes:

- En matemáticas, se utilizan algoritmos para realizar cálculos y resolver problemas.
- En física, se utilizan algoritmos para modelar y simular sistemas físicos.
- En química, se utilizan algoritmos para predecir y modelar la estructura y el comportamiento de moléculas. Gracias a la inteligencia artificial, en 2020 se descubrieron más de 200 millones de proteínas[^2].
- En biología, se utilizan algoritmos para analizar y procesar grandes cantidades de datos genómicos y proteómicos.

En el próximo post veremos un par de algoritmos aplicados a la ciencia de la computación que nos pueden ayudar a comprender más cómo nos ayudan las computadoras en el día a día con tareas que requieren fuerza de computo.

[^1]: The Official Rubik’s Cube Solution Guides - https://www.rubiks.com/solution-guides
[^2]: AlphaFold - The Most Useful Thing AI Has Ever Done - https://www.youtube.com/watch?v=P_fHJIYENdI