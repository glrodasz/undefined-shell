---
title: Diseñando un Algoritmo
pubDate: "2025-06-20T00:00:00.000Z"
tags: Aprende a programar
description: Antes mencionamos que un algoritmo es un conjunto de instrucciones para realizar una tarea. Sin embargo, no siempre se ejecutan de forma lineal. Algunos requieren tomar distintos caminos o ejecutarse en distintos momentos. Exploremos una forma más adecuada de diseñar estos algoritmos.
heroImage: "/covers/old-treasure-map-with-red-x-mark.jpg"
languageVersions:
  - language: "en"
    url: "/posts/designing-an-algorithm"
---

Antes mencionamos que *un algoritmo no es más que un conjunto de instrucciones que se siguen para realizar una tarea en particular.* Sin embargo, una lista de instrucciones no siempre es la mejor forma de representarlo, ya que no todas las tareas pueden ejecutarse de manera lineal, es decir, paso a paso. Algunos algoritmos requieren que las instrucciones sigan diferentes caminos o incluso se ejecuten en distintos momentos.

Así que, vamos a explorar una forma más adecuada de diseñar estos algoritmos que no se ejecutan necesariamente de forma lineal.

## Toma de decisiones
Una lista de tareas no es la forma más adecuada para representar situaciones hipotéticas en las que elegimos entre distintos caminos, como en los [algoritmos de naipes](/posts/algorithms-with-cards-bubble-sort/). A veces necesitábamos verificar si hubo cambios en el ordenamiento o si la carta del medio era mayor o menor que la carta buscada.

Para estos casos, un **diagrama de flujo** resulta más útil para visualizar las decisiones que pueden tomarse, así que veamos cómo se utiliza este tipo de diagrama para representar dichos algoritmos.

## Componentes de un diagrama de flujo
Lo interesante del diagrama de flujo (En inglés flowchart) es que tiene una definición estandarizada, es decir, hay unas reglas muy claras de cómo definirse y usarse en la industria, específicamente **ISO 5807** publicado en 1985, pero revisado por última vez en el 2019.

### Formas básicas populares 
Aunque no vamos a cubrir todas las formas básicas o extras, si describiremos las más populares. Con estas vamos a poder representar la mayoría de algoritmos que involucran toma de decisiones.

#### Línea de flujo
Se representa con una línea (o flecha de ser necesario) y está indica el flujo del algoritmo, es decir el camino por el cual vamos a seguir. Las líneas conectan una forma con otra, saliendo de una y terminando en otra.
![](/images/posts/es/disenando-un-algoritmo/linea-de-flujo.png)

#### Terminal
Se representan con un rectángulo de esquinas redondeadas (forma de estadio deportivo) y se usa para indicar el principio y fin de un algoritmo. De esta forma tendremos claro por dónde empezar y en qué lugar termina.
![](/images/posts/es/disenando-un-algoritmo/terminal.png)

#### Decisión
Se representan con un rombo (diamante) y indica una condición que suele tener al dos opciones, generalmente Si / No. Esto quiere decir que del rombo siempre salen dos líneas de flujo donde cada línea representa la decisión tomada por donde continua el algoritmo. Es igual a cuando nos encontramos un camino que se bifurca y luego debemos decidir por dónde continuar.
![](/images/posts/es/disenando-un-algoritmo/decision.png)

#### Proceso
Se representa con un rectángulo y representa una operación que genera un cambio en el algoritmo. Aquí es donde representamos la lógica u operaciones que iremos haciendo en nuestro algoritmo, similar a como lo hemos venido haciendo en la lista de tareas.
![](/images/posts/es/disenando-un-algoritmo/proceso.png)

### Algoritmo en un diagrama de flujo
Para entender mejor cómo crear diagramas de flujo resolvamos un problema clásico llamado “FizzBuzz”.

#### Problema FizzBuzz
Escribe un programa que imprima los números del 1 al **n**, teniendo en cuenta la siguiente forma:

* Para los múltiplos de 3, imprime **“Fizz”** en lugar del número.
* Para los múltiplos de 5, imprime **“Buzz”** en lugar del número.
* Para los múltiplos de ambos 3 y 5, imprime **“FizzBuzz”**.

Por ejemplo, los primeros 15 números serían:
**1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz**.

> 📝 **n** sería un número entero, por ejemplo el número 100, en ese caso se procesarían los números del 1 al 100.

 *Te recomiendo que intentes escribir la solución en forma de lista pseudocodigo como lo hemos hecho en los [algoritmos de naipes](/posts/algorithms-with-cards-bubble-sort/).*

#### Solución FizzBuzz
A continuación veamos paso a paso lo que sería una solución de dicho problema usando un diagrama de flujo.

> ℹ️ Las anotaciones númericas en el diagrama de flujo solo están con un fin educativo. Un diagrama de flujo no suele venir acompañado de notas extras o una descripción paso a paso, pues se considera que el diagrama en sí es más que suficiente.

![](/images/posts/es/disenando-un-algoritmo/fizz-buzz.png)
1. Ubicamos la Terminal **“Inicio”**, que por conveniencia está en la parte superior. Aquí es donde comienza el algoritmo. Seguimos la flecha hacia abajo.
2. Nos encontramos con nuestro primer **Proceso**: **Leer n, iniciar i**. Esto significa que el usuario debe ingresar hasta qué número vamos a contar (por ejemplo, `n = 100`) y que inicializamos `i = 1`. Avanzamos siguiendo la flecha.
3. Llegamos a la primera **Decisión**, donde nos preguntamos: **¿i es menor o igual que n?**
   * **Sí**: Continuamos con el flujo del algoritmo. Como en este caso `i = 1` y `n = 100`, la condición se cumple.
   * **No**: Se terminaría el algoritmo y nos iríamos directamente a la terminal de **“Fin”**. (Este no es el caso).
4. Continuando por el camino del “Sí”, llegamos a otra **Decisión**, donde preguntamos: **¿i es divisible por 3 y por 5?** Es decir, `i % 3 == 0` y `i % 5 == 0`.
   * **Sí**: Imprimiríamos **“FizzBuzz”**, y luego iríamos al proceso de incremento.
   * **No**: Seguimos a la siguiente decisión. En este caso, como 1 no es divisible ni por 3 ni por 5, continuamos.
5. En la siguiente **Decisión**, preguntamos: **¿i es divisible por 3?** Es decir, `i % 3 == 0`.
   * **Sí**: Imprimimos **“Fizz”**, luego incrementamos i y volvemos a la primera decisión.
   * **No**: Continuamos a la siguiente decisión. Como 1 no es divisible por 3, seguimos.
6. Avanzamos a la tercera **Decisión** de este bloque: **¿i es divisible por 5?** Es decir, `i % 5 == 0`.
   * **Sí**: Imprimimos **“Buzz”**, luego incrementamos i y regresamos al ciclo.
   * **No**: Como 1 tampoco es divisible por 5, tomamos esta ruta.
7. Como i no cumplió ninguna de las condiciones anteriores, llegamos al **Proceso final del bloque de decisiones**, donde simplemente **se imprime el número i**. En este caso, se imprime el número **1**.
8. Después de imprimir, llegamos al **Proceso de incremento**: Aquí `i` se actualiza a `i + 1`, es decir, ahora `i = 2`.
9. Finalmente, regresamos al punto de control principal (la decisión `i <= n`) y el ciclo se repite con este nuevo valor.

### No todo puede o debe ser un diagrama de flujo
Casi todos los algoritmos escritos en pseudocodigo como una lista pueden ser representados en una diagrama de flujo. Pero si dicho algoritmos no tiene una decision que tomar, quizás la mejor forma de representarlo seguiría siendo la lista tal y como estaba, siguiendo un poco el principio KISS.

> 😘 El principio **KISS** (Keep It Simple, Stupid) es un principio en contra de la sobre ingeniería.  La mayoría de veces la solución más simple es la mejor solución.

Por otro lado, hay algoritmos que además de tener decisiones, también ejecutan procesos en diferentes momentos y en ese caso un diagrama de flujo puede usarse para representar una parte del mismo, pero requiere otros métodos de visualización para representar mejor su funcionalidad de marco general.

## Instrucciones en paralelo
Tomando como analogía el proceso de seguir una receta de cocina, *quienes hemos cocinado un par de veces* sabemos que es mejor leer toda la receta primero para entender qué se puede hacer en paralelo (a la vez).

> 🤖 Para lo que los humanos puede parecer natural aprovechar el tiempo y hacer ciertas tareas mientras otras se procesan, para las maquinas esto puede ser un poco más complejo y no es como suele funcionar por defecto. **El paralelismo y asincronismo en la computación es todo un campo de estudio.**

Tal vez, mientras se asan las hamburguesas, podríamos picar la cebolla o dorar los panes: esto nos permite **ahorrar tiempo** ya que no tenemos que esperar a que algo ser finalice por completo para empezar a trabajar en la siguiente tarea.

Aunque no nos vamos a enfocar en explicar el paralelismo en este capítulo, lo que quiero destacar  es que **una lista de instrucciones puede ser insuficiente para describir un algoritmo**, ya que algunas veces es necesario ejecutar múltiples tareas a la vez.

### Cocinando de manera sincrona
Vamos a cocinar de manera síncrona un arroz con zanahoria picada y asada. Ya sé que no es el plato más exquisito, pero a veces hay que comer saludable. 🌱

> ⚠️ No nos vamos a enfocar en los detalles de la receta, simplemente queremos contrastar dos formas de preparar lo mismo: una más lenta, otra más eficiente.

#### Un paso a la vez
Imagina que solo tienes **un solo fogón disponible**, y no puedes hacer más de una cosa a la vez. Así que cocinamos paso por paso.
![](/images/posts/es/disenando-un-algoritmo/sincrono.png)
1. Ponemos el arroz a cocinar en una olla. Esto tarda unos 15 minutos.
2. Cuando termina, lo dejamos reposar durante unos 5 minutos.
3. **Una vez que el arroz está listo**, cortamos la zanahoria en rodajas.
4. Las asamos en un sartén con un poco de aceite de oliva durante unos 5 minutos.
5. Servimos el arroz con las zanahorias asadas.

⏱️ **Tiempo total de preparación** 25 a 30 minutos.

### Cocinando de manera asincrona
Ahora vamos a hacer exactamente la misma receta, pero usando un enfoque **asíncrono**. Es decir, vamos a **hacer varias cosas al mismo tiempo**. Imagina que tenemos más fogónes, o que simplemente nos organizamos mejor para no perder tiempo.

> 🍚 Si nunca has hecho arroz, es bueno saber que toma unos 20–25 minutos en total, pero solo requiere tu atención durante los primeros 5 minutos. El resto del tiempo es de cocción y reposo, **así que puedes hacer otras cosas mientras tanto**.

#### Aprovechando el tiempo
Este vez vamos a disponer de **multiples fogónes**, lo que nos permite hacer más de una cosa a la vez. Así que cocinaremos de una manera más eficiente.
![](/images/posts/es/disenando-un-algoritmo/asincrono.png)

1. Ponemos el arroz a cocinar en una olla. Esto tarda unos 15 minutos.
2. **Mientras el arroz se cocina**, tomamos una zanahoria y la cortamos en rodajas.
3. Luego, calentamos un sartén con un poco de aceite de oliva y asamos las rodajas de zanahoria durante unos 5 minutos.
4. Cuando el arroz termina su cocción, lo dejamos reposar durante unos 5 minutos.
5. Para ese momento, la zanahoria ya estará lista, así que solo queda servir el arroz con las zanahorias asadas.

⏱️ **Tiempo total de preparación** 20 a 25 minutos.

### Diagrama de secuencias
Hasta ahora hemos representado algoritmos con listas y diagramas de flujo, y eso funciona bien hasta que entran en juego tareas que no se ejecutan en orden estricto, como vimos con la receta de forma asíncrona.

En esos casos, donde algunas instrucciones se ejecutan al mismo tiempo o dependen de otras que aún no han terminado, un **diagrama de secuencias** puede ayudarnos a entender mejor qué sucede, cuándo y quién lo hace.

Este tipo de diagrama se usa más comúnmente para mostrar la comunicación entre distintos sistemas o componentes, por ejemplo, entre un navegador y un servidor. Pero también puede ser útil para visualizar la secuencia de eventos en un algoritmo asíncrono.

> 🔁 Se lee de izquierda a derecha (quién participa) y de arriba a abajo (en qué orden suceden las cosas). Las flechas indican mensajes entre participantes, como cuando un cocinero pone algo a calentar, espera, y mientras tanto hace otra cosa.

![](/images/posts/es/disenando-un-algoritmo/diagrama-de-secuencias.png)
[🔗 Mira el diagrama en swimlanes.io](https://glrz.me/diagrama-secuencias)

Más adelante veremos ejemplos concretos del mundo de la programación, como el flujo **cliente-servidor**. Pero, por ahora, usamos este recurso para representar mejor lo que ocurre en nuestra receta, y así visualizar de forma clara lo que significa ejecutar tareas en paralelo.

## Diversidad en la visualización de algoritmos
En programación, existen diversas formas visuales de representar algoritmos. Destaco algunas que siempre resultan útiles: **Diagramas de flujo**, para mostrar decisiones y ramificaciones; **Diagramas de secuencia**, para entender el orden y la interacción entre componentes; y **Diagramas Entidad-Relación**, cuando trabajamos con bases de datos.

Elegir la visualización apropiada no solo ayuda a entender mejor el algoritmo, sino que también facilita explicarlo a otras personas. Y aunque no todos los problemas requieren una visualización, saber que tienes estas herramientas a mano puede marcar la diferencia entre ver el código como una receta paso a paso o como un mapa del tesoro con instrucciones claras para llegar al resultado que buscas. ¡Arrggg! 🏴‍☠️
