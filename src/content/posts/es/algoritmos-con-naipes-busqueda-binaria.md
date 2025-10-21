---
title: "Algoritmos con naipes: Busqueda binaria"
pubDate: "2024-07-11T00:00:00.000Z"
tags: Aprende a programar
description: El algoritmo de búsqueda binaria, o "Binary Search", es un método eficiente para encontrar un elemento en una lista ordenada. Divide repetidamente el rango de búsqueda a la mitad, reduciendo significativamente el número de comparaciones necesarias.
heroImage: "/covers/intertwined-tree-branches-with-green-leaves.jpg"
languageVersions:
  - language: "en"
    url: "/posts/algorithms-with-cards-binary-search"
---
> 🤿 Esto hace parte de la serie ilustrada "**Algoritmos con naipes**", puedes encontrar el primer articulo [aquí](/posts/algorithms-with-cards-bubble-sort/) en el que hablamos del _ordenamiento burbuja_.


El algoritmo de búsqueda binaria, conocido en inglés como “Binary Search”, es un método eficiente para encontrar un elemento en una lista ordenada. 

Este algoritmo funciona dividiendo repetidamente a la mitad el rango de números posibles y luego seleccionando el intervalo en el cual el elemento buscado debe estar, lo que disminuye significativamente el número de comparaciones necesarias. 

Es especialmente útil en listas grandes, ya que reduce drásticamente el tiempo de búsqueda en comparación con un enfoque lineal.

### El algoritmo de la búsqueda binaria

```javascript
Inicio
  Baraja de naipes = [Ordenada, As♥, 2♥, 3♥, 4♥, 5♥, ... Rey♥]
  Carta buscada = 6♥

  Paso 1:
    Establece dos límites, 'inicio' en la primera carta y 'fin' en la última carta:
      Inicio = posición de As♥
      Fin = posición de Rey♥

  Paso 2:
    Encuentra la posición de la carta en el medio de los límites 'inicio' y 'fin'.
    Si la carta en esta posición del medio es la 'Carta buscada':
      ¡Éxito! Has encontrado la carta. Indica la posición de esta carta y procede al Fin.

    Paso 3:
      Si la carta en la posición del medio tiene un valor menor que la 'Carta buscada':
        Ajusta el límite de 'inicio' para que empiece justo después de la carta del medio:
          Inicio = Después de la carta del medio
        Volver al Paso 2.

    Paso 4:
      Si la carta en la posición del medio tiene un valor mayor que la 'Carta buscada':
        Ajusta el límite de 'fin' para que termine justo antes de la carta del medio:
          Fin = Antes de la carta del medio
        Volver al Paso 2.

Fin
```

Al final, deberías tener la carta que estabas buscando en la baraja de naipes.

### Un ejemplo paso a paso de la búsqueda binaria
Para ilustrar cómo funciona el algoritmo de la búsqueda binaria, vamos a realizar un ejemplo paso a paso con una baraja de naipes.

Siguiendo el proceso descrito, veremos cómo encontraremos la carta buscada, **6 de corazones**. haciendo cada vez más pequeño el conjunto de búsqueda.

> 🃏  Recordemos que para que la búsqueda binaria funcione **el conjunto de elementos tiene que estar ordenado desde el principio**. Pero, esto no es un requisito para todos los algoritmos de búsqueda, como por ejemplo la búsqueda lineal.

![Figura 1: Mano apuntando al medio (Siete de corazones) de una baraja de naipes ordenada.](/images/posts/es/algoritmos-con-naipes-busqueda-binaria/paso-1.jpg)_**Figura 1**: Mano apuntando al medio (Siete de corazones) de una baraja de naipes ordenada._
Definimos los limites, la primera carta será el **Inicio**, la última el **Fin**, y finalmente la carta del medio será la que verificaremos como la carta que buscamos.

![Figura 2: Baraja de naipes divida en el medio, descartando la sección de la derecha.](/images/posts/es/algoritmos-con-naipes-busqueda-binaria/paso-2.jpg)_**Figura 2**: Baraja de naipes divida en el medio, descartando la sección de la derecha._
Cómo la carta del medio era el **siete de corazones**, teniendo un valor mayor, entonces descartaremos toda la mitad de la derecha.

![Figura 3: Mano apuntando al medio (Tres de corazones) de la sección izquierda previa.](/images/posts/es/algoritmos-con-naipes-busqueda-binaria/paso-3.jpg)_**Figura 3**: Mano apuntando al medio (Tres de corazones) de la sección izquierda previa._
Volveremos a establecer los limites, esta vez el final paso a ser **seis de corazones**, y de nuevo buscaremos la carta del medio.

> 🃏  Cuando teníamos 13 cartas en total, para buscar la carta del medio dividimos 13 por 2. El resultado nos da 6.5, pero como no existe la carta 6.5 ya que estamos trabajando con valores enteros, debemos decidir si queremos redondear hacia abajo o hacia arriba. Para esta ocasión hemos decidido siempre redondear hacia arriba y es por eso que tomamos el  **7 de corazones**.

![Figura 4: Baraja de naipes divida en el medio, descartando la sección derecha previa.](/images/posts/es/algoritmos-con-naipes-busqueda-binaria/paso-4.jpg)_**Figura 4**: Baraja de naipes divida en el medio, descartando la sección derecha previa._
La carta del medio el **3 de corazones**, cómo esta es menor que la carta buscada entonces vamos a descartar toda la mitad izquierda.

![Figura 5: Mano apuntando al medio (Cinco de corazones) de la sección derecha previa.](/images/posts/es/algoritmos-con-naipes-busqueda-binaria/paso-5.jpg)_**Figura 5**: Mano apuntando al medio (Cinco de corazones) de la sección derecha previa._
Volvemos a establecer los limites, el fin queda igual pero el inicio pasa a ser la nueva carta primera, en este caso el  **4 de corazones**.

![Figura 6: Mano mostrando la carta encontrada, Seis de corazones.](/images/posts/es/algoritmos-con-naipes-busqueda-binaria/paso-6.jpg)_**Figura 6**: Mano mostrando la carta encontrada, Seis de corazones._
Finalmente, la carta del medio resultará ser menor que la carta buscada, descartamos toda la mitad izquierda de nuevo.

Cómo esta vez solo queda una carta, solo nos queda preguntar si dicha carta es el **6 de corazones**, y ¡efectivamente lo es!.

## ¿Por qué necesitamos algoritmos?
Aunque los humanos pueden realizar estas tareas de manera intuitiva, los algoritmos descomponen el proceso en pasos precisos y repetibles, garantizando resultados exactos.

Desde la clasificación de datos en una hoja de cálculo hasta la gestión de grandes volúmenes de información en servidores, los algoritmos son fundamentales para la computación moderna y nos demuestran cómo la combinación de simplicidad y precisión puede resolver problemas que de otro modo serían abrumadores.

Al aplicar estos conceptos con algo tan cotidiano como una baraja de naipes, podemos visualizar cómo podrían funcionar en contextos más complejos.
