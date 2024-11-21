---
title: "Algoritmos con naipes: Ordenamiento burbuja"
pubDate: "2024-05-23T00:00:00.000Z"
tags: Aprende a programar
description: El algoritmo de ordenamiento de burbuja, o “Bubble Sort”, es un método sencillo para ordenar listas. Compara e intercambia pares adyacentes si están desordenados, repitiendo el proceso hasta que no se necesitan más intercambios. Es ideal por su simplicidad y eficiencia en listas pequeñas.
heroImage: "/covers/A close-up view of numerous iridescent soap bubbles floating.jpg"
---

Veamos una serie de algoritmos escritos en pseudocódigo que podrás aplicar por ti mismo con objetos del mundo real:

1. Toma un palo completo de una baraja de naipes. (corazones, diamantes, picas o tréboles)
2. Sigue las instrucciones al pie de la letra para obtener los resultados de cada algoritmo.

> 🃏 Aunque un humano puede identificar rápidamente una carta específica en una baraja de naipes con solo mirarla, los algoritmos necesitan operar de manera diferente. 
> En el contexto de la computación, para hacer un ordenamiento o una búsqueda es necesario verificar cada carta individualmente para poder determinar una solución.

## Ordenamiento de burbuja
El algoritmo de ordenamiento de burbuja, conocido en inglés como “Bubble Sort”, es un método simple para ordenar una lista de elementos, en este caso, una baraja de naipes.

Funciona revisando repetidamente la lista de cartas, comparando pares adyacentes y, si están en el orden incorrecto, intercambiándolas.

Este proceso se repite hasta que no se necesitan más intercambios, lo que indica que las cartas están ordenadas. Es conocido por su simplicidad y eficiencia en listas pequeñas.

### El Algoritmo de ordenamiento burbuja

```javascript
Inicio
  Baraja de naipes = [Orden aleatorio: 3♥, Rey♥, 9♥, 5♥, 2♥, As♥, ...]
  Hubo cambios = Falso

  Paso 1:
    Tomar la primera carta de la Baraja de naipes.

  Paso 2:
    Comparar esta carta con la siguiente en la baraja.

  Paso 3:
    Si la carta actual tiene mayor valor que la siguiente, intercambiar sus posiciones.
    Marcar 'Hubo cambios' como Verdadero.

  Paso 4:
    Avanzar a la siguiente carta y repetir desde el Paso 2, hasta que no hayan más cartas.

  Paso 5:
    Si 'Hubo cambios' es Verdadero, volver al Paso 1.
    Si no, el proceso ha terminado.

Fin
```

Al final, las cartas de la Baraja de naipes estarán ordenadas de menor a mayor valor.

### Un ejemplo paso a paso del ordenamiento burbuja
Para ilustrar cómo funciona el algoritmo de ordenamiento de burbuja, vamos a realizar un ejemplo paso a paso con una baraja de naipes.

Siguiendo el proceso descrito, veremos cómo cada carta encuentra su lugar correcto mediante comparaciones e intercambios sucesivos.

![Figura 1: Mano mostrando dos cartas: Tres y Rey de corazones a la izquierda.](/images/ordenamiento-burbuja/paso-1.jpg) _Figura 1: Mano mostrando dos cartas: Tres y Rey de corazones a la izquierda._
Tomamos la primera carta de la baraja, el **3 de corazones** y la comparamos con la siguiente carta, el **Rey de corazones**.

Como la carta actual, el **3 de corazones**, no es mayor que la siguiente carta, no hacemos ningún intercambio y ahora el **Rey de corazones** pasará a ser comparado con la siguiente carta.

![Figura 2: Comparación del Rey de corazones con el Nueve de corazones.](/images/ordenamiento-burbuja/paso-2.jpg) _Figura 2: Comparación del Rey de corazones con el Nueve de corazones._
Comparamos el **Rey de corazones** con la siguiente carta, el **9 de corazones**.

![Figura 3: Intercambio del Rey de corazones con el Nueve de corazones.](/images/ordenamiento-burbuja/paso-3.jpg) _Figura 3: Intercambio del Rey de corazones con el Nueve de corazones._
Como en esta ocasión la carta actual, el **Rey de corazones**, es mayor que la siguiente carta, **9 de corazones**, hacemos el intercambio.

Como hubo un intercambio, el **Rey de corazones**, continuara siendo la carta actual que compararemos con la siguiente carta.

![Figura 4: Comparación del Rey de corazones con el Cinco de corazones.](/images/ordenamiento-burbuja/paso-4.jpg) _Figura 4: Comparación del Rey de corazones con el Cinco de corazones._
Volvemos a comparar el **Rey de corazones**, con la siguiente carta, el **5 de corazones**.

![Figura 4: Intercambio del Rey de corazones con el Cinco de corazones.](/images/ordenamiento-burbuja/paso-5.jpg) _Figura 4: Intercambio del Rey de corazones con el Cinco de corazones._
Como de nuevo la carta actual, el **Rey de corazones**, es mayor que la siguiente carta, **5 de corazones**, hacemos el intercambio.

El proceso será muy similar ya que el **Rey de corazones**, siempre será mayor, y este pasara entonces a ser la última carta. 

Se comparará el **Rey de corazones** con el **2 de corazones**, habrá intercambio y luego se comparará con el **Az de corazones**, generando un último intercambio.

![Figura 5: Comparación del Nueve de corazones con el Cinco de corazones.](/images/ordenamiento-burbuja/paso-6.jpg) _Figura 5: Comparación del Nueve de corazones con el Cinco de corazones._
Como hubo intercambios en este primer ciclo, debemos volver a empezar y seguir verificando que la carta mayor se mueva hacia la última posición en los siguientes ciclos.

Por ejemplo, en el segundo ciclo se va a comparar inicialmente el **3 de corazones** con el **9 de corazones**, no generando un intercambio, pero luego compararemos el **9 de corazones** con el **5 de corazones**, creando un intercambio.

El **9 de corazones** se seguirá comparando y generando intercambios hasta quedar justo antes del **Rey de corazones**.
![Figura 6: Intercambio del As de corazones con el Dos de corazones.](/images/ordenamiento-burbuja/paso-7.jpg) _Figura 6: Intercambio del As de corazones con el Dos de corazones._
Después de una serie de ciclos, en el último ciclo se hará un último intercambio entre el **2 de corazones** y el **As de corazones**.

![Figura 7: Cartas ordenadas: As, Dos, Tres, Cinco, Nueve y Rey de corazones.](/images/ordenamiento-burbuja/paso-8.jpg) _Figura 7: Cartas ordenadas: As, Dos, Tres, Cinco, Nueve y Rey de corazones._
Se hará un ciclo de más comparando la carta actual con la siguiente, sin que haya intercambios, dando por concluido que las cartas ya están ordenadas.

### Así es como las burbujas suben a la superficie

Al finalizar todos los ciclos de comparación e intercambio, la baraja de naipes queda completamente ordenada de menor a mayor valor.

Este ejercicio visualiza claramente cómo el ordenamiento de burbuja mueve sistemáticamente las cartas hacia sus posiciones correctas, subrayando la importancia de los algoritmos en la organización de datos. 

Aunque simple, este método demuestra la eficacia de seguir pasos detallados para lograr un objetivo complejo, similar a cómo las computadoras resuelven problemas en nuestro día a día.