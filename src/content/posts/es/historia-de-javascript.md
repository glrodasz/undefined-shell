---
title: Historia de JavaScript
description: "La historia de JavaScript es la historia de la web misma: nació con prisa en 1995, creció en medio del caos y maduró a base de experimentos. Lo que comenzó como un lenguaje improvisado para dar vida a las páginas web terminó expandiéndose hacia servidores, dispositivos móviles y entornos distribuidos, desde Netscape y V8 hasta Node.js, TypeScript, Deno y Bun."
pubDate: "2025-11-09T00:00:00.000Z"
tags: Aprende a programar
heroImage: "/covers/cardboard-with-eggs-and-js-egg.jpg"
languageVersions:
  - language: "en"
    url: "/posts/javascript-history"  
---

La historia de JavaScript es la historia de la web misma: nació con prisa, creció en medio del caos y maduró a base de experimentos. Lo que comenzó como un lenguaje improvisado para dar vida a las páginas web terminó expandiéndose hacia servidores, dispositivos móviles y entornos distribuidos. Su camino no ha sido lineal ni predecible, pero justamente ahí radica su encanto: logró evolucionar sin perder su esencia. Por eso, es uno de los lenguajes más amados y odiados[^1] al mismo tiempo, pero sin duda **imposible de ignorar**.

## Breve historia de JavaScript
En 1995 nació JavaScript de la mano de **Brendan Eich**, quien desarrolló el primer prototipo funcional del lenguaje en tan solo **10 días**, aunque tuvo que continuar trabajando durante casi un año antes de su lanzamiento oficial al público en el navegador web **Netscape Navigator 2**[^2].

Fue concebido como el primer lenguaje de programación del **lado del cliente** en los navegadores web, extendiendo la web más allá de las capacidades estáticas de las páginas y añadiendo interactividad.

En 2003, Apple introdujo **JavaScriptCore** como motor JavaScript de Safari, dedicado a ejecutar JavaScript de forma eficiente en su navegador.

> ⚙️ **Motor de Javascript (JavaScript Engine)** es el software que interpreta o compila y ejecuta el código JavaScript dentro de un navegador o entorno de ejecución.

Más adelante, en 2008, Google lanzó su navegador Chrome junto con el nuevo motor **V8**, notablemente más rápido que las alternativas de la época: Firefox tenía **SpiderMonkey**, Internet Explorer **Chakra** y por supuesto Safari seguía usando **JavaScriptCore**.

El rendimiento revolucionario de **V8** permitió que en 2009 el desarrollador **Ryan Dahl** creara **Node.js**, un entorno de ejecución de JavaScript del lado del servidor basado en V8.

> 🌵 Un **entorno de ejecución** es el conjunto de herramientas y recursos, como el motor, las APIs y el sistema operativo, que permiten ejecutar y dar soporte al código JavaScript.

> 🕹️ Una **API** (Application Programming Interface) es un puente que permite que distintas aplicaciones hablen entre sí y compartan datos de forma organizada.

La creciente popularidad de JavaScript en el servidor impulsó también la creación de frameworks: en **2010** nació **Express.js**, un framework web minimalista para **Node.js** que pronto se convirtió en uno de los más populares en el ecosistema JavaScript.

En **2012** la corporación Microsoft lanzó **TypeScript**, un superconjunto tipado de JavaScript pensado para mejorar la escalabilidad y el mantenimiento en proyectos grandes. Aunque algunos puristas podrían decir que opaca parte de la gracia original del lenguaje, la realidad es que TypeScript ha demostrado ser muy útil en equipos y bases de código extensas.

Tres años después, JavaScript se volvió mucho más robusto y maduro con la especificación **ES2015**, que introdujo algunos de los cambios más importantes y lo modernizó hasta convertirlo en el lenguaje que conocemos hoy.

En 2018, **Ryan Dahl** decidió reivindicar sus errores con Node.js y creó un nuevo entorno de ejecución que funciona con TypeScript por defecto, al que llamó **Deno**, intencionalmente un anagrama de la palabra “Node”.

Para 2021, el ecosistema volvió a sorprendernos con una propuesta que no solo pretende ser un nuevo entorno de ejecución, sino que además utiliza un motor diferente a **V8**, el místico **JavaScriptCore**, dando lugar a **Bun**, que promete ser una solución todo en uno optimizada para JavaScript.

Desde entonces, JavaScript no ha dejado de expandirse, han surgido nuevos entornos de ejecución, estándares compartidos y herramientas cada vez más rápidas y compatibles, consolidando su lugar como uno de los lenguajes más versátiles del mundo.

![](/images/posts/es/historia-de-javascript/javascript-timeline.jpg)
**1995–2021, la evolución del ecosistema JavaScript:** JSCore, V8, Node.js, Express, TypeScript, Deno y Bun.

## ¿Por qué fue necesario crear JavaScript?
A mediados de los 90, los navegadores web eran entornos estáticos. El más popular, **Netscape Navigator**, mostraba documentos HTML con texto e imágenes, pero prácticamente **no había forma de programar interactividad directamente en el navegador**.

Cualquier lógica dinámica debía implementarse en el servidor (por ejemplo, mediante CGI, PHP, etc.), haciendo que **cada interacción del usuario requiriera recargar la página desde el servidor**. La web “plana” de aquel entonces necesitaba cambiar: HTML y CSS no bastaban para ofrecer experiencias ricas.

Debido a esto, **Netscape** decidió integrar un lenguaje de scripting en el navegador para **extender la funcionalidad más allá del HTML**.

En lugar de usar Java, el lenguaje de moda en ese momento, vieron la necesidad de crear un **lenguaje fácil de aprender y usar**, orientado a **diseñadores web o desarrolladores principiantes** que pudieran insertar pequeñas porciones de código en páginas HTML.

De hecho, dentro de Netscape se argumentó que se requerían *dos* lenguajes: uno “profesional” como Java o C++ para componentes complejos, y otro más sencillo para “maquetadores” que agregarían comportamiento directo en las páginas. Así nació la idea de un “**Java**, pero fácil”, inicialmente llamado **Mocha** y luego **LiveScript**, que terminó comercializándose como **JavaScript** en una jugada de marketing junto a Sun Microsystems, creadores originales de Java.

> 🟨 **JavaScript** como nombre es en realidad un término licenciado. De hecho, “**JavaScript**” es una marca registrada por Oracle (que adquirió a Sun), y por ello el estándar oficial del lenguaje se denomina **ECMAScript**.

> ⛱️  En 2024, la comunidad envió una carta abierta pidiendo a Oracle liberar la marca JavaScript[^3], firmada incluso por el propio Eich y otros líderes del ecosistema.

## ECMAScript y su evolución
Como mencionamos antes, **Brendan Eich** tuvo muy poco tiempo para crear el primer prototipo y lanzar la versión inicial de JavaScript al público. Esta presión de tiempo dio origen a un lenguaje bastante básico en sus comienzos. Eich tomó **influencias de Java en la sintaxis**, pero también incorporó ideas de **Scheme** (funciones de primera clase) y **Self** (herencia por prototipos).

Es por eso que JavaScript, si bien es orientado a objetos, implementa un modelo de **herencia prototipal** en lugar de clases tradicionales, algo que, según Eich, puede ser *más poderoso* que la herencia clásica basada en clases.

Con tan poco tiempo de gestación, las primeras versiones de JavaScript tenían varias **peculiaridades y fallos de diseño**. Por ejemplo, se incluyó la **comparación débil** con `==` (que realiza conversiones de tipo implícitas), lo cual pronto demostró ser propenso a errores; años después se introdujo la comparación estricta `===` para remediar esto.

Así mismo, quedó para la posteridad un famoso *bug*: `typeof null` devuelve `”object"` en lugar de `”null"`, un comportamiento erróneo reconocido desde los inicios, causado por detalles de implementación interna, pero imposible de corregir ahora sin **romper compatibilidad**. A pesar de estos defectos iniciales, JavaScript cumplió su objetivo de ser sencillo y estuvo “listo” en el momento justo para la explosión de la web.

En sus primeros años, la evolución del lenguaje fue **lenta**. Los navegadores de los 90 y principios de los 2000 operaban en máquinas de los usuarios con recursos limitados (CPU, memoria), comparados con los servidores, por lo que JavaScript solo se usaba para tareas pequeñas en el cliente. Sin embargo, conforme los **dispositivos cliente** (PC, móviles) fueron haciéndose más potentes, se abrió la puerta a hacer más cálculos y lógica en el navegador.

> 📠 **Cliente vs. Servidor:** En la web, el *cliente* (por lo general, el navegador) muestra la información al usuario, mientras que el *servidor* procesa los datos y responde a sus peticiones. En este modelo, los **clientes** se comunican con **servidores** centralizados para obtener recursos, no entre ellos.

Un punto de inflexión llegó con **ECMAScript 6 (ES2015)**, publicado en **2015**. Esta versión introdujo una enorme cantidad de mejoras al lenguaje, desde la sintaxis de módulos y clases hasta funciones lambda, `let`/`const` y promesas, formando la base del JavaScript moderno.

A partir de entonces se adoptó un **ciclo de actualización anual** del estándar (ES2016, ES2017, etc.) en lugar del sistema numérico anterior.

## TC39: El comité que decide el futuro de JavaScript
Desde 1996, el **TC39** (*Technical Committee 39*) de **Ecma International** ha sido el grupo encargado de definir y mantener la especificación del lenguaje **ECMAScript** (ECMA-262), el estándar en el que se basa **JavaScript**.

El comité está formado por representantes de las principales empresas e instituciones de la industria: los implementadores del lenguaje (como los navegadores **Chrome**, **Firefox**, **Safari**, **Edge**), los entornos de ejecución (**Node.js**, **Deno**), y grandes organizaciones que utilizan JavaScript de forma intensiva.

En esencia, el **TC39** es quien **discute, diseña y aprueba** qué nuevas características se incorporan oficialmente al lenguaje.

Aunque solo los delegados oficiales tienen derecho a voto, el proceso es relativamente **abierto**: cualquier persona puede proponer ideas y participar en las discusiones a través de **GitHub** o los foros públicos. Las propuestas suelen comenzar como simples conversaciones informales y, si llaman la atención de algún miembro del comité (quien actúa como su **“champion”** o patrocinador), pueden iniciar el camino formal hacia la estandarización.

Con la llegada de **ES2015**, el TC39 **modernizó su proceso de trabajo**, adoptando un sistema basado en **etapas de madurez** que permite evaluar con mayor claridad el progreso de cada propuesta. Este cambio marcó el inicio del **modelo de evolución continua** del lenguaje, que hoy se actualiza oficialmente cada año.

## Las etapas de madurez de JavaScript
Estas **etapas** representan el recorrido que sigue una propuesta desde su idea inicial hasta su inclusión definitiva cómo estándar. Tradicionalmente, existen **cinco etapas numeradas del 0 al 4** (siendo la etapa 0 una fase inicial no oficial). Sin embargo, en 2024 se introdujo una **etapa intermedia llamada “Stage 2.7”**, lo que elevó el total a **seis etapas**[^4] en el proceso actual.

### Etapa 0, conocida como “Strawman”
Es la fase informal de bosquejo; cualquier propuesta arranca aquí, como una idea que aún no se ha presentado oficialmente o ha pasado filtros iniciales. No tiene criterios de aceptación más que el interés de algún miembro en explorarla y cualquiera lo puede hacer.

### Etapa 1, conocida como “Propuesta”
En esta etapa se implica que el comité muestra interés en el problema a resolver. Se presenta un documento formal describiendo el problema y una solución aproximada. La propuesta está en exploración activa, y aquí se definirá si se desecha o se sigue adelante.

### Etapa 2, conocida como “Borrador”
La propuesta se considera encaminada y se empieza a redactar su especificación técnica detallada (en lenguaje estándar de ECMA-262). Todavía puede cambiar significativamente, pero el comité cree que **debería** incluirse eventualmente.

### Etapa 2.7, conocida como “Aprobada”
Indica que el diseño está esencialmente completo y revisado, **aprobado en principio** por el comité, sin requerir más cambios sustanciales salvo los que surjan de la implementación y pruebas. 

La intención es asegurarse que el texto de la propuesta está pulido y validado por expertos, quedando pendiente comprobar su viabilidad mediante implementaciones experimentales.

> 🛟 Esta etapa se añadió para reforzar la calidad de las propuestas antes de declararlas candidatas finales.

### Etapa 3, conocida como “Candidata”
La propuesta está lista para ser implementada y testeada. Se supone que no tendrá más cambios de diseño a menos que la experimentación revele problemas. Los autores llaman a que los motores de JavaScript comiencen a implementarla y que la comunidad la pruebe para detectar cualquier incompatibilidad o detalle faltante.

### Etapa 4, conocida como “Completada” 
La funcionalidad está finalizada y **lista para incluirse en el estándar ECMAScript** . Requiere al menos dos implementaciones independientes y pruebas (Test262) que verifiquen su comportamiento. 

En esta etapa la propuesta se fusiona al borrador final de la siguiente edición anual del estándar. En la práctica, esto significa que los desarrolladores pueden confiar en que la característica formará parte del lenguaje. aunque su soporte en navegadores o entornos pueda tardar un poco en llegar, se suele incluir con un transpilador cómo Babel o polyfill.

> 🗼**Babel** es un transpilador que convierte código JavaScript moderno en versiones compatibles con navegadores o entornos más antiguos, garantizando que las nuevas características del lenguaje puedan ejecutarse en todas partes.

## Un lenguaje en movimiento 
Cada año, hacia mediados de año, el **TC39** reúne todas las propuestas que han alcanzado la Etapa 4 y publica una nueva edición del estándar (ES2024, ES2025, etc.). Este proceso continuo, basado en consenso y colaboración, mantiene a JavaScript en una evolución constante, equilibrando innovación con estabilidad.

Lejos de ser aquel experimento improvisado de 1995, hoy el lenguaje refleja la madurez de toda una comunidad: miles de desarrolladores, empresas y proyectos que contribuyen a su crecimiento. Su fuerza no radica solo en su alcance técnico, sino en su capacidad para adaptarse, reinventarse y seguir siendo relevante en un ecosistema que nunca deja de cambiar.

[^1]:  What's Your Least Favourite Programming Language? - [https://youtu.be/03lRzf7iSiU](https://youtu.be/03lRzf7iSiU) 
[^2]: Netscape Navigator 2 - [https://en.wikipedia.org/wiki/Netscape_Navigator_2](https://en.wikipedia.org/wiki/Netscape_Navigator_2)
[^3]: Oracle, it's time to free JavaScript - https://javascript.tm/letter
[^4]: The TC39 Process - [https://tc39.es/process-document/](https://tc39.es/process-document/)
