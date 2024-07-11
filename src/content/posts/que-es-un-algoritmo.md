---
title: ¿Qué es un Algoritmo?
pubDate: "2024-04-02T10:04:17.000Z"
tags: Aprende a programar
description: Un algoritmo es un conjunto de instrucciones o pasos que se siguen para resolver un problema o llevar a cabo una tarea en particular. Así que, un manual para armar un mueble prefabricado o una receta de cocina, podrían ser considerados algoritmos.
heroImage: "/covers/A close-up view of an open cookbook showing a recipe for sourdough starter.jpg"
---
> 🍔 Un algoritmo es un conjunto de instrucciones o pasos que se siguen para resolver un problema o llevar a cabo una tarea en particular. Así que un manual para armar un mueble prefabricado o una receta de cocina, podrían ser considerados algoritmos.

Veamos como podríamos transformar una receta legitima para preparar hamburguesas en lo que seria una version mas apropiada para un lenguaje de programación.

## Receta de hamburguesas de manzana
### Ingredientes
* 500 g de carne molida y 100 g de tocineta
* 1 manzana, 1 cebolla, 1 tomate y un ajo
* 1 bloque de Halloumi (2 porciones)
* Queso Port Slut en lonjas (Se puede usar Cheedar)
* 2 panes de hamburguesa
* Salsa especial de hamburguesa
* Sal, pimienta y 1 cucharada de azúcar

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

```
Inicio
  Ingredientes: 
  carnes = [500g de carne molida, 100g de tocineta]
  vegetales = [1 manzana, 1 cebolla, 1 tomate, 1 ajo]
  quesos = [1 bloque de Halloumi, lonchas de queso Port Slut (o Cheddar)]
  otros = [2 panes de hamburguesa, salsa especial de hamburguesa, sal, pimienta, 1 cucharada de azúcar]

  Paso 1: 
    Picar(vegetales)
    Tostar(otros[0], 5)
    Freír(carnes[1], hasta dorar, 1)
  
  Paso 2: 
    PrepararMezclaCarne([carnes[0], vegetales[0], vegetales[1], vegetales[3]], otros[2:])

  Paso 3: 
    Caramelizar(vegetales[1], 2 cucharadas de agua, otros[4], 3)
    Asar(quesos[0], 5, ambos lados)

  Paso 4: 
    DerretirQuesoSobreCarne(carnes[0], quesos[1])
    Picar(vegetales[2])

  Paso 5: 
    ingredientesHamburguesa[] = [otros[0] (base del pan), carnes[0] con quesos[1], carnes[1], otros[1] (salsa), vegetales[1] caramelizada, quesos[0] asado, vegetales[2], otros[0] (parte superior del pan)]
    MontarHamburguesa(ingredientesHamburguesa[])

  Paso 6: 
    CompactarHamburguesa(ingredientesHamburguesa[])
    Ahora está lista para disfrutar.
  
Fin
```

Cómo podemos observar la receta escrita en pseudocódigo tiene una estructura fácil de replicar en otros recetas:
1. Definimos un principio y un fin de la receta.
2. Declaramos una lista de ingredientes agrupados por su categoría.
3. Especificamos una lista de pasos y el uso de cada ingrediente.
4. Nos aseguramos de ocultar los detalles de cada paso, y usamos algo más pragmático como “Picar”, “Tostar”, “Freír”, etc.

## La versatilidad de los algoritmos
Lo interesante de tener la receta estructurada en pseudocódigo, es que ahora podemos cambiar los ingredientes para que la receta sea vegetariana:

```
  Ingredientes: 
  carnes = [500g de "carne" vegetal, 100g de "tocineta" vegetal]
```

Lo interesante es que el resto del pseudocódigo permanece exactamente igual, y eso es uno de los pilares de la programación: ¿cómo podemos escribir código que sea fácil de cambiar y mantener en el tiempo?

Piensa lo sencillo que sería cambiar la receta para que sea vegana, es decir sin carnes, quesos o cualquier ingrediente de origen animal.

## No son solo recetas y manuales
Aunque como principio tanto las recetas como manuales pueden ser considerados algoritmos, en la practica los algoritmos se usan para solucionar problemas complejos que le tomaría mucho tiempo a un humano en resolver, algunas de esas aplicaciones son las siguientes:

* En matemáticas, se utilizan algoritmos para realizar cálculos y resolver problemas.
* En física, se utilizan algoritmos para modelar y simular sistemas físicos.
* En química, se utilizan algoritmos para predecir y modelar la estructura y el comportamiento de moléculas.
* En biología, se utilizan algoritmos para analizar y procesar grandes cantidades de datos genómicos y proteómicos.

En el próximo post veremos un par de algoritmos aplicados a la ciencia de la computación que nos pueden ayudar a comprender más cómo nos ayudan las computadoras en el día a día con tareas que requieren fuerza de computo.