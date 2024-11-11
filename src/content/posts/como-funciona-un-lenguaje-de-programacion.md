---
title: ¿Cómo funciona un lenguaje de programación?
pubDate: "2024-11-11T00:00:00.000Z"
tags: Aprende a programar
description: Los lenguajes de programación funcionan mediante la construcción de expresiones y sentencias que permiten manipular datos y controlar el flujo de un programa. Las expresiones combinan elementos como valores, operadores y variables para producir resultados específicos, mientras que las sentencias organizan y ejecutan acciones sin necesariamente generar un valor. Con estos componentes, los lenguajes transforman instrucciones en soluciones prácticas para problemas complejos, desde cálculos básicos hasta sistemas avanzados.
heroImage: "/covers/A realistic image of vintage punched cards used in early computing.jpg"
---
Los algoritmos en lenguajes de programación se construyen siguiendo estructuras con terminología específica. Principalmente, están compuestos por **expresiones** y **sentencias**.

## Expresiones
Una expresión es una combinación de ciertos **elementos** que se **evalúan** para producir un resultado.

Veamos algunos ejemplos de expresiones:
1. La *expresión* `5 + 3` utiliza el *operador* de suma para operar los *valores* numéricos `5` y `3`. Esta operación devuelve como resultado el *valor* numérico `8`.
2. ￼La *expresión* `x * y` emplea el *operador* de multiplicación para operar las *variables* `x` e `y`, cuyos valores son desconocidos. Una vez que se asignen *valores* concretos a estas *variables*, podremos determinar el *valor* resultante de la operación.
3. La *expresión* `"Hola " + nombre` hace uso del *operador* de concatenación para unir el *valor* de cadena de texto `"Hola "` con la *variable* `nombre`. El resultado de esta operación es desconocido hasta que se asigne un *valor* específico a la *variable* `nombre`.
4. La *expresión* `f(x) = x^2` emplea el *operador* de potencia para elevar al cuadrado la *variable* `x`. Aunque el resultado de esta *expresión* es un *valor* numérico, permanece desconocido hasta que se proporcione un *valor* específico para `x`. Es importante mencionar que esta *expresión* es en realidad una *función* que puede *evaluar* diversos valores para `x`. Por ejemplo, si `x = 3`, entonces `f(3) = 9`.

> 💡 Una *función* es un proceso que toma ciertos valores y los transforma en salidas de otros valores según reglas específicas.

Miremos en detalle entonces cada uno de los posible elementos que puede contener una expresión: **valores**, **variables**, **operadores** y **funciones**.

### Valores y tipos
En programación, la información se representa mediante *valores*, y cada valor pertenece a un *tipo* específico. Estos *tipos* determinan cómo se manipulan y almacenan los valores en la memoria.

Veamos algunos ejemplos de los valores más comúnmente utilizados:

* Al realizar operaciones matemáticas, se emplean valores de tipo *número*, similares a los que usamos en el día a día: `6`, `32`, `0`, `-13`, `π` (el valor de Pi), `9.99` e incluso `∞` (infinito).
* Para imprimir un valor en pantalla, se utilizan valores de tipo *cadena de texto*, los cuales se escriben entre comillas. Por ejemplo `“A”`, `”Hola"`, `”10"` (que es diferente al número `10`), `”🥸”` (emojis) y caracteres especiales como la letra `"ñ"` o símbolos `"©"` (copyright).
* Al tomar decisiones dentro de un programa, se hace uso de un valores de tipo *booleano*. Estos solo pueden tener dos estados: *verdadero* o *falso*.

> ￼💡 Los valores *booleanos* se les suele llamar "flags" (banderas) o indicadores: un flag "set" (activado) indica *verdadero*, mientras que un flag "cleared" (desactivado) indica *falso*.

>￼ℹ️ Cada lenguaje de programación maneja una variedad de valores y tipos. Más adelante profundizaremos en los tipos específicos que soporta JavaScript.

### Variables
Las variables en programación nos ayudan a gestionar y organizar información. Imagina que son como carpetas en un escritorio. Cada carpeta lleva una etiqueta con un nombre único para identificar qué contiene. Estas carpetas, a su vez, pueden albergar uno o varios documentos, que representarían nuestros *valores*.

> 💡Piensa en una variable como una carpeta etiquetada con un nombre único, lista para guardar un valor.

Las variables tienen múltiples funciones, pero por ahora, nos enfocaremos en dos aspectos principales:

1. **Almacenamiento de datos**: Como mencionamos anteriormente, las variables son como carpetas donde puedes guardar y acceder a datos esenciales, como el total de ventas o resumen de inventario. Así, siempre tendrás a mano esa información cuando la necesites.
2. **Manejo de datos dinámicos**: Imagina que tienes un documento que se actualiza constantemente, podría ser un informe de eventos los últimos siete días. Las variables te permiten "capturar" ese dato cambiante y adaptarse a distintas circunstancias.

Veamos algunos ejemplos:
1. La *variable* `edad` almacena *valores* numéricos que representan la `edad` de una persona. Por ejemplo, si asignamos `edad = 25`, la *variable* edad contiene el *valor* `25`.
2. La *variable* `nombre` podría guardar *valores* de tipo cadena de texto. Al establecer `nombre = "Lucía"`, estamos asignando a `nombre` el *valor* de texto `"Lucía"`.
3. La *variable* `esEstudiante` es de tipo booleano, lo que significa que solo puede tener dos *valores* posibles: `verdadero` o `falso`. Así, si determinamos que una persona es estudiante, le asignaríamos el valor `esEstudiante = verdadero`; de no ser así, sería `esEstudiante = falso`.

Lo valioso de las *variables* es que, una vez asignados, conservan los *valores* para su uso posterior. Simplemente haciendo referencia al nombre de la *variable*, podemos acceder a su contenido. Por ejemplo, al referirnos a las *variables* `edad`, `nombre` y `esEstudiante`, sabemos que estamos hablando de Lucía, quien tiene 25 años y es estudiante.

### Operadores
Para que los *valores* y las *variables* tengan utilidad es necesario poder gestionar *operaciones* que nos permitan obtener un resultado.

> Los *operadores* se suelen representar mediante **símbolos** o **palabras reservadas**.
> Dependiendo los tipos de *valores*, podemos efectuar cierto tipo de *operaciones*.

￼En este punto es importante aclarar que una *variable* siempre va a contener un *valor*. Por lo cual, las *operaciones* se efectúan independientemente de si dichos valores están representados en variables o no.

Por ejemplo el *operador* suma (+) efectúa la suma de dos valores numéricos, como lo sería `2 + 3`, cuyo resultado sería el valor numérico `5`. Pero este mismo *operador*, usado en valores de cadena de texto, crea una concatenación. Por ejemplo, `”Hola” + “ mundo”`, daría como resultado la cadena de texto: `”Hola mundo"`.

Veamos a continuación algunos operadores, teniendo en cuenta que cada lenguaje de programación tiene colecciones extensas de *operadores*: 

#### Operadores aritméticos
1. El operador `+` de adición: Se emplea para sumar dos valores, como en `2 + 3`, resultando en `5`.
2. El operador `*` de multiplicación: Se usa para multiplicar dos valores, como en `4 * 6`, obteniendo `24` como resultado.

￼En esta categoría están los operadores matemáticos más comunes como resta, división, potencia, módulo, entre otros.

#### Operadores de asignación
1. El operador `=` de asignación simple: Establece un valor a una variable. Por ejemplo, `x = 5` significa que el valor de `x` ahora es `5`.
2. El operador `+=` de asignación compuesta: Suma el valor proporcionado al valor anterior de la variable. En el caso de `x += 3`, es equivalente a `x = x + 3`, incrementando el valor de `x` en `3`.

> ⚠️ El operador de asignación no debe confundirse con la igualdad o equivalencia en las matemáticas. La expresión `x = x + 1`  matemáticamente no tiene sentido, mientras que en programación estamos incrementando en valor de `x` en 1.

#### Operadores de comparación
1. El operador `==` de igualdad: comprueba si dos valores son iguales. Por ejemplo, `x == 2`, lo cual sería cierto siempre y cuando el valor de `x` sea `2`.
2. El operador `>=` comprueba si el valor de la izquierda es mayor o igual al valor de la derecha. Por ejemplo `x >= 5`, seria cierto para el número `5` y cualquier número mayor que `5`.

￼Aquí estarían el resto de operadores de comparación tales como “mayor que” , “menor que”, “ menor o igual que”, etc.

￼Estos operadores tienen sentido cuando se usan con variables, ya que, es de esta forma que los algoritmos podrían comportarse de una forma u otra dependiendo el valor que tomen estas.

#### Operadores lógicos
1. El operador `&&` de conjunción: retorna verdadero si ambas expresiones son verdaderas. Se suele usar en conjunto con los operadores de comparación, por ejemplo: `x > 5 && y < 10` esta expresión sería cierta siempre y cuando `x` sea mayor a `5` y ` y` sea menor que `10`.
2. El operador `!` de negación: retorna el valor opuesto de una expresión booleana. Si por ejemplo `x > 5` fuese verdadero, es decir `x` es mayor que 5, entonces `!(x > 5)` sería falso. Esto es muy útil cuando queremos tomar una decisión basado en un resultado contrario, en el ejemplo anterior ` !(x > 5)` solo sería verdadero si `x` es `5` o menor que `5`.

Aquí tendríamos otros operadores, como lo sería la conjunción y una seria de operadores lógicos binarios o de exclusión que revisaremos más adelante.

### Funciones
Aunque las funciones son un término matemático que toma variables y las transforma en salidas también suelen usarse en la programación para encapsular una pieza de código y reusarlo con mayor facilidad.

El primer uso esta mas relacionado a las expresiones mientras que el segundo uso representa una sentencia, es decir, las funciones pueden representarse tanto como expresiones y sentencias.

Miremos algunos ejemplos de **expresiones de funciones**.

1. La *expresión* de función `f(x) = x + 2` emplea el *operador* de suma para incrementar en 2 la *variable* `x`. Esta función retornara un valor numérico, siempre y cuando el valor de `x`. también sea numérico.
2. La *expresión* de función `f(a, b) = (a - b) * 5`  emplea multiples operadores y ademas define dos parámetros `a` y `b`. Efectuará una resta de `a` y `b` y a dicho resultado se le multiplica por 5. Siempre y cuando `a` y ` b` sean valores numéricos esta función retornara un valor numérico.

> ￼💡 A diferencia de otras expresiones, las variables que son listadas en la definición de una función como por ejemplo,  `x` , `a` y `b` se le llaman **parámetros**.

>￼💡Cuando evaluamos una función y remplazamos sus **parámetros** por valores, les llamamos **argumentos** de una función a dichos valores.
 
En general el propósito de una función es poder reutilizarlas para ser llamadas con diferentes **argumentos**, es decir, que sus **parámetros** tengan diferentes valores. 

En nuestro primer ejemplo si le damos como argumento el numero `3`, entonces  el parámetro `x` pasaría a ser remplazado por dicho valor, y así la función se evaluaría como `f(3) = 5`, dando como resultado el numero `5`. 

Ademas, podríamos llamar la misma función esta vez con el argumento del numero `10` , haciendo que la evaluación sea esta vez de  `f(10) = 12`, retornando el numero `12`.

>⚠️ Las funciones puede llegar a ser mucho mas complejas que los ejemplos mostrados hasta ahora, estas pueden contener desde simples expresiones, como incluso otras funciones con multiples argumentos o ningún argumento y retornar valores que no coinciden con los valores de los parámetros o incluso no retorna un valor.

### Analicemos una expresión
Ahora que entendemos todo lo que puede componer una expresión: **valores**, **variables**, **operadores** y **funciones**, hagamos un análisis de las siguientes expresiones:

1. `life = 42` 
   - **Valores**: El número `42` es un valor numérico.
   - **Variables**: `life` es una variable que almacenará el valor.
   - **Operadores**: `=` es un operador de asignación.
2. `f(x) = 2x + b`
   - **Valores**: El número `2` es un valor numérico
   - **Variables**: `x` es una variable que actúa como parámetro, `b` es una variable externa.
   - **Operadores**: `=` es un operador de asignación, `*` (implícito en 2x) es un operador de multiplicación, `+` es un operador de suma.
   - **Funciones**: `f(x)` es una función que toma un parámetro `x`.
3. `”👩” + "\u200d" + “🚀”`
   - **Valores**: `"👩"`, `"\u200d"` y `"🚀"` son valores de tipo cadena de texto.
   - **Operadores**: `+` es un operador de concatenación (aparece dos veces).​

## Sentencias
Recordemos de nuevo la definición de expresión:

> ￼💡 Una expresión es una combinación de ciertos **elementos** que se **evalúan** para producir un resultado.

Pero hemos visto que hay operadores que no necesariamente producen un resultado como el **operador de asignación**.

Ademas, en el ejemplo de nuestra función `f(a, b) = (a - b) * 5` su cuerpo `(a - b) * 5`  realmente contiene 2 expresiones:

1. La expresión aritmética `a - b` que produce un resultado numérico.
2. La expresión aritmética que emplea el operador de producto para multiplicar el resultado de la expresión anterior `(a - b)` con el numero `5`, generando así un nuevo resultado numérico.

>￼💡Las sentencias son nada mas y nada menos que un conjunto de una o multiples expresiones, que pueden producir o no un valor.

Analicemos la siguiente sentencia y sus expresiones que la componen: ` a = b * 2`

1. `2` es una **expresión de valor literal**.
2. `b` es una **expresión de variable**.
3. `b * 2` es una **expresión aritmética**.
4. `a = b * 2`  es una **expresión de asignación**.

### Expresiones en una sentencia
Cada lenguaje de programación tiene cierto tipo de expresiones que pueden existir en una sentencia, revisemos las mas comunes:

1. **Expresión de valor literal**: Representa valores fijos como números o cadenas de texto.
   - Ejemplo: `42`, `"Hola"`.
2. **Expresión de variable**: Involucra variables que almacenan datos.
   - Ejemplo: `edad = 33;` siendo así la expresión `edad`.
3. **Expresión aritmética**: Realiza operaciones usando los operadores aritméticos.
   - Ejemplo: `3 + 7`.
4. ￼**Expresión lógica**: Realiza operaciones usando operadores lógicos.
   - Ejemplo: `true && false`.
5. **Expresión de cadena**: Operaciones con cadenas de texto.
   - Ejemplo: `"Hola" + " mundo"`.
6. **Expresión relacional**: Compara valores.
   - Ejemplo: `5 < 10`.
7. **Expresión condicional**: Devuelve valores basados en condiciones.
   - Ejemplo: `edad > 18 ? 'Adulto' : 'Menor'`.
8. **Expresión de llamada de función**: Ejecuta una función. 
   - Ejemplo: `console.log("Mensaje")`.
9. **Expresión de asignación**: Asigna un valor a una variable. 
   - Ejemplo: `x = 5`.￼

### Sentencias que no retornan un valor

En programación, existen sentencias que ejecutan una serie de instrucciones sin producir directamente un valor de salida.

Aun así, son esenciales para controlar el flujo de ejecución del programa, algunos ejemplos son:

1. **Sentencia if:** Evalúa una condición y ejecuta un bloque de código si la condición es verdadera.
   - Ejemplo: `if (edad > 18) { console.log("👵"); }`
2. **Sentencia return**: Se usa dentro de una función para finalizar su ejecución y, opcionalmente, devolver un valor. 
   - Ejemplo: `f = function() { return; }` 

### Sentencias de funciones
En algunos lenguajes de programación, las funciones pueden existir tanto como sentencias como expresiones.

#### Funciones como sentencias:
Una declaración de función se define normalmente como una sentencia. Ejemplo:

```javascript
function f(x) {
  return x + 2;
}
```

#### Funciones como expresiones:
Las funciones también pueden ser expresiones y se pueden asignar a variables. Ejemplo:

```javascript
g = function(x) {
  return x * 2;
}
```
Aquí, `g` es una función anónima asignada a una variable.

## Los lenguajes de programación son más que sintaxis
Aunque inicialmente los *valores*, *variables*, *operadores* y *funciones* pueden parecer solo símbolos y reglas de sintaxis, en la práctica estos elementos fundamentales nos permiten construir soluciones a problemas complejos.

Son las piezas básicas con las que podemos crear desde simples calculadoras hasta sofisticados sistemas de inteligencia artificial.

Comprender cómo funcionan estos elementos es el primer paso para desatar el verdadero potencial de cualquier lenguaje de programación.