---
title: ¿Cómo funciona un lenguaje de programación?
pubDate: "2024-11-11T00:00:00.000Z"
tags: Aprende a programar
description: Los lenguajes de programación procesan datos y gestionan el flujo mediante expresiones y sentencias. Las expresiones combinan valores, operadores y variables para producir resultados, mientras que las sentencias realizan acciones. Estos componentes transforman instrucciones en soluciones prácticas, abarcando desde cálculos simples hasta sistemas complejos.
heroImage: "/covers/A close-up photograph of a vintage punched card, showcasing its intricate design.jpg"
---

Los algoritmos en lenguajes de programación se construyen siguiendo estructuras con terminología específica. Principalmente, están compuestos por **expresiones** y **sentencias**.

## Expresiones

Una expresión es una combinación de ciertos **elementos** que se **evalúan** para producir un resultado.

Veamos algunos ejemplos de expresiones:

1. La _expresión_ `5 + 3` utiliza el _operador_ de suma para operar los _valores_ numéricos `5` y `3`. Esta operación devuelve como resultado el _valor_ numérico `8`.
2. ￼La _expresión_ `x * y` emplea el _operador_ de multiplicación para operar las _variables_ `x` e `y`, cuyos valores son desconocidos. Una vez que se asignen _valores_ concretos a estas _variables_, podremos determinar el _valor_ resultante de la operación.
3. La _expresión_ `"Hola " + nombre` hace uso del _operador_ de concatenación para unir el _valor_ de cadena de texto `"Hola "` con la _variable_ `nombre`. El resultado de esta operación es desconocido hasta que se asigne un _valor_ específico a la _variable_ `nombre`.
4. La _expresión_ `f(x) = x^2` emplea el _operador_ de potencia para elevar al cuadrado la _variable_ `x`. Aunque el resultado de esta _expresión_ es un _valor_ numérico, permanece desconocido hasta que se proporcione un _valor_ específico para `x`. Es importante mencionar que esta _expresión_ es en realidad una _función_ que puede _evaluar_ diversos valores para `x`. Por ejemplo, si `x = 3`, entonces `f(3) = 9`.

> 💡 Una _función_ es un proceso que toma ciertos valores y los transforma en salidas de otros valores según reglas específicas.

Miremos en detalle entonces cada uno de los posible elementos que puede contener una expresión: **valores**, **variables**, **operadores** y **funciones**.

### Valores y tipos

En programación, la información se representa mediante _valores_, y cada valor pertenece a un _tipo_ específico. Estos _tipos_ determinan cómo se manipulan y almacenan los valores en la memoria.

Veamos algunos ejemplos de los valores más comúnmente utilizados:

- Al realizar operaciones matemáticas, se emplean valores de tipo _número_, similares a los que usamos en el día a día: `6`, `32`, `0`, `-13`, `π` (el valor de Pi), `9.99` e incluso `∞` (infinito).
- Para imprimir un valor en pantalla, se utilizan valores de tipo _cadena de texto_, los cuales se escriben entre comillas. Por ejemplo `“A”`, `”Hola"`, `”10"` (que es diferente al número `10`), `”🥸”` (emojis) y caracteres especiales como la letra `"ñ"` o símbolos `"©"` (copyright).
- Al tomar decisiones dentro de un programa, se hace uso de un valores de tipo _booleano_. Estos solo pueden tener dos estados: `verdadero` o `falso`.

> ￼💡 Los valores _booleanos_ se les suele llamar **flags** (banderas) dónde una bandera arriba indica `verdadero`, (activado) mientras que una bandera abajo  indica `falso` (desactivado).

> ￼ℹ️ Cada lenguaje de programación maneja una variedad de valores y tipos. Más adelante profundizaremos en los tipos específicos que soporta JavaScript.

### Variables

Las _variables_ en programación nos ayudan a gestionar y organizar información. Imagina que son como carpetas en un escritorio. Cada carpeta lleva una etiqueta con un nombre único para identificar qué contiene. Estas carpetas, a su vez, pueden albergar uno o varios documentos, que representarían nuestros _valores_.

> 💡Piensa en una variable como una carpeta etiquetada con un nombre único, lista para guardar un valor.

Las _variables_ tienen múltiples funciones, pero por ahora, nos enfocaremos en dos aspectos principales:

1. **Almacenamiento de datos**: Como mencionamos anteriormente, las _variables_ son como carpetas donde puedes guardar y acceder a datos esenciales, como el total de ventas o resumen de inventario. Así, siempre tendrás a mano esa información cuando la necesites.
2. **Manejo de datos dinámicos**: Imagina que tienes un documento que se actualiza constantemente, podría ser un informe de eventos los últimos siete días. Las _variables_ te permiten "capturar" ese dato cambiante y adaptarse a distintas circunstancias.

Veamos algunos ejemplos:

1. La _variable_ `edad` almacena _valores_ numéricos que representan la `edad` de una persona. Por ejemplo, si asignamos `edad = 25`, la _variable_ edad contiene el _valor_ `25`.
2. La _variable_ `nombre` podría guardar _valores_ de tipo cadena de texto. Al establecer `nombre = "Lucía"`, estamos asignando a `nombre` el _valor_ de texto `"Lucía"`.
3. La _variable_ `esEstudiante` es de tipo booleano, lo que significa que solo puede tener dos _valores_ posibles: `verdadero` o `falso`. Así, si determinamos que una persona es estudiante, le asignaríamos el valor `esEstudiante = verdadero`; de no ser así, sería `esEstudiante = falso`.

Lo valioso de las _variables_ es que, una vez asignados, conservan los _valores_ para su uso posterior. Simplemente haciendo referencia al nombre de la _variable_, podemos acceder a su contenido. Por ejemplo, al referirnos a las _variables_ `edad`, `nombre` y `esEstudiante`, sabemos que estamos hablando de Lucía, quien tiene 25 años y es estudiante.

### Operadores

Para que los _valores_ y las _variables_ tengan utilidad es necesario poder gestionar _operaciones_ que nos permitan obtener un resultado.

> Los _operadores_ se suelen representar mediante **símbolos** o **palabras reservadas**.
> Dependiendo los tipos de _valores_, podemos efectuar cierto tipo de _operaciones_.

￼En este punto es importante aclarar que una _variable_ siempre va a contener un _valor_. Por lo cual, las _operaciones_ se efectúan independientemente de si dichos valores están representados en _variables_ o no.

Por ejemplo el _operador_ suma (+) efectúa la suma de dos valores numéricos, como lo sería `2 + 3`, cuyo resultado sería el valor numérico `5`. Pero este mismo _operador_, usado en valores de cadena de texto, crea una concatenación. Por ejemplo, `”Hola” + “ mundo”`, daría como resultado la cadena de texto: `”Hola mundo"`.

Veamos a continuación algunos operadores, teniendo en cuenta que cada lenguaje de programación tiene colecciones extensas de _operadores_:

#### Operadores aritméticos

1. El operador `+` de adición: Se emplea para sumar dos valores, como en `2 + 3`, resultando en `5`.
2. El operador `*` de multiplicación: Se usa para multiplicar dos valores, como en `4 * 6`, obteniendo `24` como resultado.

￼En esta categoría están los operadores matemáticos más comunes como resta, división, potencia, módulo, entre otros.

#### Operadores de asignación

1. El operador `=` de asignación simple: Establece un valor a una variable. Por ejemplo, `x = 5` significa que el valor de `x` ahora es `5`.
2. El operador `+=` de asignación compuesta: Suma el valor proporcionado al valor anterior de la variable. En el caso de `x += 3`, es equivalente a `x = x + 3`, incrementando el valor de `x` en `3`.

> ⚠️ El operador de asignación no debe confundirse con la igualdad o equivalencia en las matemáticas. La expresión `x = x + 1` matemáticamente no tiene sentido, mientras que en programación estamos incrementando en valor de `x` en 1.

#### Operadores de comparación

1. El operador `==` de igualdad: comprueba si dos valores son iguales. Por ejemplo, `x == 2`, lo cual sería cierto siempre y cuando el valor de `x` sea `2`.
2. El operador `>=` comprueba si el valor de la izquierda es mayor o igual al valor de la derecha. Por ejemplo `x >= 5`, seria cierto para el número `5` y cualquier número mayor que `5`.

￼Aquí estarían el resto de operadores de comparación tales como “mayor que” , “menor que”, “ menor o igual que”, etc.

￼Estos operadores tienen sentido cuando se usan con _variables_, ya que, es de esta forma que los algoritmos podrían comportarse de una forma u otra dependiendo el valor que tomen estas.

#### Operadores lógicos

1. El operador `&&` de conjunción: retorna `verdadero` si ambas expresiones son verdaderas. Se suele usar en conjunto con los operadores de comparación, por ejemplo: `x > 5 && y < 10` esta expresión sería cierta siempre y cuando `x` sea mayor a `5` y ` y` sea menor que `10`.
2. El operador `!` de negación: retorna el valor opuesto de una expresión booleana. Si por ejemplo `x > 5` fuese `verdadero`, es decir `x` es mayor que 5, entonces `!(x > 5)` sería falso. Esto es muy útil cuando queremos tomar una decisión basado en un resultado contrario, en el ejemplo anterior ` !(x > 5)` solo sería `verdadero` si `x` es `5` o menor que `5`.

Aquí tendríamos otros operadores, como lo sería la conjunción y una seria de operadores lógicos binarios o de exclusión que revisaremos más adelante.

### Funciones

Aunque las funciones son un término matemático que toma _variables_ y las transforma en salidas también suelen usarse en la programación para encapsular una pieza de código y reusarlo con mayor facilidad.

El primer uso esta mas relacionado a las expresiones mientras que el segundo uso representa una sentencia, es decir, las funciones pueden representarse tanto como expresiones y sentencias.

Miremos algunos ejemplos de **expresiones de funciones**.

1. La _expresión_ de función `f(x) = x + 2` emplea el _operador_ de suma para incrementar en 2 la _variable_ `x`. Esta función retornara un valor numérico, siempre y cuando el valor de `x`. también sea numérico.
2. La _expresión_ de función `f(a, b) = (a - b) * 5` emplea multiples operadores y ademas define dos parámetros `a` y `b`. Efectuará una resta de `a` y `b` y a dicho resultado se le multiplica por 5. Siempre y cuando `a` y ` b` sean valores numéricos esta función retornara un valor numérico.

> ￼💡 A diferencia de otras expresiones, las _variables_ que son listadas en la definición de una función como por ejemplo, `x` , `a` y `b` se le llaman **parámetros**.

> ￼💡Cuando evaluamos una función y remplazamos sus **parámetros** por valores, les llamamos **argumentos** de una función a dichos valores.

En general el propósito de una función es poder reutilizarlas para ser llamadas con diferentes **argumentos**, es decir, que sus **parámetros** tengan diferentes valores.

En nuestro primer ejemplo si le damos como argumento el numero `3`, entonces el parámetro `x` pasaría a ser remplazado por dicho valor, y así la función se evaluaría como `f(3) = 5`, dando como resultado el numero `5`.

Ademas, podríamos llamar la misma función esta vez con el argumento del numero `10` , haciendo que la evaluación sea esta vez de `f(10) = 12`, retornando el numero `12`.

> ⚠️ Las funciones puede llegar a ser mucho mas complejas que los ejemplos mostrados hasta ahora, estas pueden contener desde simples expresiones, como incluso otras funciones con multiples argumentos o ningún argumento y retornar valores que no coinciden con los valores de los parámetros o incluso no retorna un valor.

### Analicemos una expresión

Ahora que entendemos todo lo que puede componer una expresión: **valores**, **variables**, **operadores** y **funciones**, hagamos un análisis de las siguientes expresiones:

1. `life = 42`
   - **Valores**: El número `42` es un valor numérico.
   - **Variables**: `life` es una variable que almacenará el valor.
   - **Operadores**: `=` es un operador de asignación.
2. `f(x) = 2x + b`
   - **Valores**: El número `2` es un valor numérico
   - **Variables**: `x` es una variable que actúa como parámetro, `b` es una variable externa.
   - **Operadores**: `=` es un operador de asignación, `*` (implícito en `2x`) es un operador de multiplicación, `+` es un operador de suma.
   - **Funciones**: `f(x)` es una función que toma un parámetro `x`.
3. `”👩” + "\u200d" + “🚀”`
   - **Valores**: `"👩"`, `"\u200d"` y `"🚀"` son valores de tipo cadena de texto.
   - **Operadores**: `+` es un operador de concatenación de texto.

## Sentencias

Recordemos de nuevo la definición de expresión:

> ￼💡 Una expresión es una combinación de ciertos **elementos** que se **evalúan** para producir un resultado.

Pero hemos visto que hay operadores que no necesariamente producen un resultado como el **operador de asignación**.

Ademas, en el ejemplo de nuestra función `f(a, b) = (a - b) * 5` su cuerpo `(a - b) * 5` realmente contiene 2 expresiones:

1. La expresión aritmética `a - b` que produce un resultado numérico.
2. La expresión aritmética que emplea el operador de producto para multiplicar el resultado de la expresión anterior `(a - b)` con el numero `5`, generando así un nuevo resultado numérico.

> ￼💡Las sentencias son nada mas y nada menos que un conjunto de una o multiples expresiones, que pueden producir o no un valor.

Analicemos la siguiente sentencia y sus expresiones que la componen: ` a = b * 2`

1. `2` es una **expresión de valor literal**.
2. `b` es una **expresión de variable**.
3. `b * 2` es una **expresión aritmética**.
4. `a = b * 2` es una **expresión de asignación**.

### Expresiones en una sentencia

Ya que sabemos que una sentencia es un conjunto de expresiones, analicemos algunos ejemplos de sentencias que las contienen. Es importante recordar que cada lenguaje de programación permite ciertos tipos de expresiones dentro de una sentencia.

A continuación, revisemos las más comunes:

1. **Expresión de valor literal**:
   Representa valores constantes y fijos, como números, cadenas de texto o valores booleanos. Estas expresiones no dependen de _variables_ ni de cálculos adicionales.

```javascript
42;
("Hola mundo");
```

2. **Expresión de variable**:
   Involucra una variable que almacena datos y puede usarse para acceder a esos valores.

```javascript
edad = 33;
edad;
```

3. **Expresión aritmética**:
   Realiza operaciones matemáticas utilizando operadores aritméticos como `+`, `-`, `\*`, `/`, y `%`.

```javascript
3 + 7;
15 / 3;
```

4. **Expresión lógica**:
   Evalúa condiciones usando operadores lógicos como `&&`, `||` y `!`. El resultado siempre es un valor booleano (`verdadero` o `falso`).

```javascript
verdadero && falso;
!verdadero;
```

5. **Expresión de cadena**:
   Permite concatenar, manipular o evaluar operaciones con cadenas de texto.

```javascript
"Hola" + " mundo";
```

6. **Expresión relacional**:
   Compara dos valores usando operadores como `<`, `>`, `<=`, `>=`, `==`, y `!=`. Devuelve un resultado booleano.

```javascript
5 < 10;
4 != 7;
```

7. **Expresión condicional**:
   Utiliza el operador ternario (`? :`) para evaluar una condición y devolver un valor dependiendo de si la condición es verdadera o falsa.

```javascript
edad = 20;
resultado = edad > 18 ? "Adulto" : "Menor";
```

8. **Expresión de llamada de función**:
   Ejecuta una función y devuelve el resultado que genera, si lo hay.

```javascript
console.log("Hola mundo");
```

9. **Expresión de asignación**:
   Asigna un valor a una variable utilizando el operador de asignación (=).

```javascript
x = 5;
y = x + 3;
```

### Sentencias que no retornan un valor

En programación, existen sentencias que ejecutan una serie de instrucciones sin producir directamente un valor de salida.

Aun así, son esenciales para controlar el flujo de ejecución del programa, algunos ejemplos son:

1. **Sentencia** `if`: Evalúa una condición y ejecuta un bloque de código si la condición es verdadera.

```javascript
if (edad > 18) {
  console.log("👵");
}
```

2. **Sentencia** `return`: Se usa dentro de una función para finalizar su ejecución y, opcionalmente, devolver un valor.

```javascript
function f(x) {
  return;
};
```

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
g = (x) => x * 2;
```

Aquí, `g` es una función anónima asignada a una variable.

## Los lenguajes de programación son más que sintaxis

Aunque inicialmente los _valores_, _variables_, _operadores_ y _funciones_ pueden parecer solo símbolos y reglas de sintaxis, en la práctica estos elementos fundamentales nos permiten construir soluciones a problemas complejos.

Son las piezas básicas con las que podemos crear desde simples calculadoras hasta sofisticados sistemas de inteligencia artificial.

Comprender cómo funcionan estos elementos es el primer paso para desatar el verdadero potencial de cualquier lenguaje de programación.
