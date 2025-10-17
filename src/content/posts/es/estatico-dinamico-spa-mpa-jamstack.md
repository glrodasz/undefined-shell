---
title: Estático, dinámico, single-page, multiple-page y JAMstack
pubDate: "2020-05-02T00:00:00.000Z"
tags: Aprende a programar
description: Hoy en día, escuchamos términos como páginas estáticas, dinámicas, SPA, Multi-páginas y JAMStack. ¿Qué significan y por qué es importante entender sus diferencias? No existe una “navaja suiza” para la web; cada herramienta resuelve problemas específicos. Es crucial conocer sus ventajas y desventajas para tomar buenas decisiones al crear proyectos.
heroImage: "/covers/blue-bicycle-gear-and-chain-close-up.jpg"
redirect: true
---

Hoy en día escuchamos términos como páginas estáticas, dinámicas, SPA, Muti-páginas y, recientemente, el término JAMStack. ¿Qué significa todo esto? ¿Por qué es importante entender las diferencias? A medida que se va adquiriendo experiencia, nos damos cuenta de que no existe una "navaja suiza" para la web. Por el contrario, cada herramienta suele estar enfocada en solucionar un problema muy particular. Es nuestra responsabilidad conocer las ventajas y desventajas para no tomar una mala decisión a la hora de crear un proyecto.

Es un error muy común querer desarrollar todo como una SPA (Single Page App), usando librerías como React, Angular o Vue. Aunque las SPA aumentan la velocidad de nuestro flujo de desarrollo, la realidad es que son pésimas en cuestiones de rendimiento. Para entender por qué es así, vamos a explicar cómo funciona la Web y cada una de estas tecnologías.

## Sitios webs y aplicaciones web

¿Sabes cuál es la diferencia entre un sitio web, una página web y una aplicación web? Un sitio web es una aplicación web cuyo propósito general es **comunicar.** Entre los sitios web, existen varias categorías como:

- Sitios corporativos.
- Blogs y foros.
- Páginas de aterrizaje (Landing Pages).
- Sitios de noticias y revistas digitales.
- Portafolios y páginas de contacto.

Ahora bien, una página web es simplemente **una página dentro de un sitio web**. Es decir, _un sitio web es simplemente un conjunto de páginas web._ 🤯

Cuando nos referimos a **aplicaciones web**, estamos hablando de una pieza de software que se ejecuta en la Web, como:

- Sitios web.
- Clientes de correo electrónico.
- Gestores de contenido (CMS).
- Redes sociales.
- Comercios electrónicos (e-commerce).
- Gestores de relación de clientes (CRM).
- Planificadores de recursos empresariales (ERP).

Debemos tener en mente que las categorías no son excluyentes. Por ejemplo, en un comercio electrónico nos referimos a toda la interfaz donde el usuario nos visita, selecciona un producto y compra como el **sitio web**. Por otra parte, el sistema que se encarga de recibir las órdenes y gestionarlas sería la **aplicación web**.

## Desktop apps, Native apps e Hybrid apps

Las aplicaciones no solo existen en la web. Cuando hablamos de aplicaciones, podemos referirnos a:

- **Aplicaciones de escritorio:** son las que se ejecutan en un sistema operativo de escritorio como lo es Windows, Linux y Mac OS.
- **Aplicaciones móviles:** son las que se ejecutan en un sistema operativo móvil como Android y iOS.
- **Aplicaciones híbridas:** son aplicaciones web que se ejecutan como si fueran una aplicación móvil o de escritorio.
- **Aplicaciones nativas:** son aplicaciones móviles o de escritorio que no son híbridas, es decir, funcionan con código nativo del sistema operativo.

Teniendo estos conceptos claros, vamos a asumir que **cuando hablamos de aplicaciones web también estamos considerando las páginas web**.

## Landing pages, Storytelling y Single Page Websites

Una página de aterrizaje (Landing Page) es una página en la que se presenta un producto o un servicio. Se le llama así porque es la página en la que el usuario aterriza después de hacer clic en un anuncio. Su propósito es **convertir** un visitante en un usuario o cliente. Es muy común que las páginas de aterrizaje usen la técnica de **storytelling** donde se usa la técnica de contar una historia para presentar un producto o servicio. Generalmente, se trata de una sola página en la que se navega haciendo scroll. Se les suele llamar también sitios de una sola página (One Page Websites) por su estructura y diagramación. No tienen nada que ver con las aplicaciones de una sola página (Single Page Apps), que son llamadas así por la técnica de implementación con la que se construyen.

Las páginas internas de los productos de [Apple](https://www.apple.com/) son un excelente ejemplo de estos tres conceptos aplicados: son páginas de aterrizaje cuyo propósito es comprar su producto, aplicando storytelling a medida que vas haciendo scroll.

### Más información

- [https://es.wikipedia.org/wiki/Página_de_aterrizaje](https://es.wikipedia.org/wiki/Pagina_de_aterrizaje)
- [https://www.awwwards.com/websites/storytelling/](https://www.awwwards.com/websites/storytelling/)
- [https://onepagelove.com/](https://onepagelove.com/)

## Diferencia entre Server Side y Client Side

El servidor es la máquina (computador) donde está alojada nuestra aplicación web, mientras que el cliente es a nuestro computador o el de cualquier persona que visita nuestra aplicación web.

La realidad es que toda aplicación web **debe vivir en un servidor**. Así que, cuando hablamos de aplicaciones server-side o aplicaciones client-side nos referimos al lugar donde sucede la mayoría del procesamiento o ejecución. Este procesamiento o ejecución podría ser, por ejemplo, la generación de su contenido o la interacción y navegación de la aplicación.

## Server-side

Las aplicaciones del lado del servidor podrían funcionar completamente sin JavaScript. Sin embargo, por temas de usabilidad y experiencia de usuario es casi imposible que una página no contenga JavaScript en estos días. Su característica principal es que la generación del contenido se hace desde el servidor, independientemente de que el contenido se cree de manera dinámica o exista en forma de archivos que no han sido generados dinámicamente.

### Páginas estáticas

Se le considera estático a un sitio web cuando sus archivos no son generados mediante ninguna tecnología del lado del servidor. Para crear una página web basta tan solo con crear un archivo llamado `index.html` y agregar una estructura básica de HTML como, por ejemplo, la de [HTML5 Boilerplate](https://html5boilerplate.com/).

La mayoría de las veces esto es más que suficiente. Además, es una de las mejores formas de crear sitios web optimizados puesto que, para los navegadores, leer archivos HTML es tan fácil como imprimir la página de un libro.

Las páginas estáticas también pueden tener otro tipo de archivos, como las hojas de estilo que se encargan de darle diseño o los archivos de JavaScript que se encargan de manipular los datos y lógica de nuestro sitio web. Estos últimos son los más pesados, pues, además de leer sus instrucciones, también consumen recursos a la hora de ejecutar dichas instrucciones.

Finalmente, tenemos los archivos de multimedia como imágenes, videos, fuentes de texto, música que, de igual manera, en uso excesivo pueden afectar el rendimiento de nuestro sitio web.
![Figura 1: flujo de un sitio web estático](/images/posts/es/estatico-dinamico-spa-mpa-jamstack/diagrama-paginas-estaticas.png)_Figura 1: flujo de un sitio web estático_

El flujo de un sitio web estático funciona de la siguiente manera (Figura 1):

1. Accedemos al sitio web desde nuestro navegador mediante su URL.
2. El servidor mediante un **servidor web** (Web Server) como Apache o NGINX dispone los archivos del sitio web mediante el puerto 80 para llamadas HTTP o el puerto 443 para llamadas HTTPS.
3. El cliente, en este caso nuestro navegador web, recibe estos archivos y los interpreta, es decir, los muestra en el navegador.

### Páginas dinámicas ó Multi-page

Como vimos, es posible crear sitios mediante archivos ya generados de HTML. Para algunos sitios web esto es imposible de mantener. Suele ocurrir especialmente en los sitios web que tienen mucho contenido como lo sería un sitio de noticias o un blog. Es por ello que se deben emplear tecnologías del lado del servidor que puedan consumir el contenido desde una fuente de datos y mediante el uso de plantillas generar los archivos HTML que el navegador necesita.

Hay que aclarar que mediante un sitio web estático no hay manera de acceder a los recursos del servidor. Aquí es donde entran en función los lenguajes de programación y frameworks que se ejecutan del lado del servidor como PHP, JAVA, C#, Python, Ruby y Node.js. ¿Pero porque queremos acceder a los datos del servidor? ¿no queremos simplemente mostrar nuestro sitio web? Bueno, pues como te decía, los sitios que manejan gran cantidad de datos tienen que consumir y almacenar estos datos. Para ello, se emplean bases de datos que no deben estar al alcance del cliente. Así, un servidor de aplicación (App Server) funciona como un centro de mando que controla cómo consumir estos datos, además de tomar decisiones de cómo manipularlos según los permisos del usuario, ambiente y otras reglas de negocio.

El **servidor de aplicación** generalmente es invocado por un **framework web** mediante un lenguaje de programación que corre del lado del servidor. Por ejemplo, cuando ejecutamos el comando `node server.js` lo que estamos haciendo es invocar un servidor de aplicación. Para que funcione correctamente, es necesario que se le indique al **servidor web** (Apache, NGINX) dónde se van a generar los archivos, pues se espera que sea el **servidor de aplicación** quien los genere dinámicamente a medida que se vayan necesitando.

Los archivos de multimedia por lo general se sirven de manera estática como lo vimos en el flujo anterior y esto también se configura mediante reglas en el **servidor web**.
![Figura 2: flujo de un sitio web dinámico](/images/posts/es/estatico-dinamico-spa-mpa-jamstack/diagrama-paginas-dinamicas-multipage.png)_Figura 2: flujo de un sitio web dinámico_

El flujo de un sitio web dinámico funciona de la siguiente manera (Figura 2):

1. Accedemos al sitio web desde nuestro navegador mediante su URL.
2. El servidor mediante un **servidor web** (Web Server) como Apache o NGINX dispone de un **servidor de aplicación** mediante el puerto 80 para llamadas HTTP o el puerto 443 para llamadas HTTPS.
3. El **servidor de aplicación** recibe la petición y este se encarga de ejecutar las instrucciones que buscarán los datos y plantillas para generar los archivos HTML necesarios.
4. Las peticiones que están asociadas a archivos estáticos como los archivos de multimedia, en la mayoría de los casos serán servidos directamente por el **servidor web**.
5. El cliente, en este caso nuestro navegador web, recibe estos archivos y los interpreta, es decir, los muestra en el navegador.

### No siempre se necesita un servidor de aplicación

> Algunos lenguajes de programación como PHP pueden no necesitar explícitamente un **servidor de aplicación** ya que es posible que el **servidor web** pueda interpretar su código. Es por eso que muchas aplicaciones web escritas en PHP solo necesitan de Apache para ejecutarse.

## Client-side

Como lo hemos dicho con anterioridad, todo sitio web necesita de un servidor. Sin embargo, la manera en la que construimos su contenido no debe ser necesariamente hecha por este servidor. Podríamos hacerlo en tiempo de ejecución, es decir, al momento de visitar el sitio web como sucede con las aplicaciones de una sola página o, previamente, desde el cliente local como sucede con el JAMStack.

### Single Page App

Se les llama aplicaciones de una sola página porque, literalmente, solo existe una página HTML. Esta página suele tener una hoja de estilos y un archivo de JavaScript que se encarga de construir todo el contenido de la aplicación. Esto se puede hacer solo con [JavaScript Vanilla](http://vanilla-js.com/) (es decir, sin frameworks), pero claramente los frameworks como React, Vue y Angular facilitan mucho todo el proceso.

Se vuelve conveniente por la eficacia en nuestro flujo de desarrollo. Pues gracias a todo el poder de JavaScript podemos hacer uso de características propias del lenguaje como: variables, funciones, ciclos, condicionales y utilidades. Muchas de las características que un lenguaje de marcado como HTML no posee. Así pues, podemos usar patrones de diseño para reutilizar nuestro código, usar una arquitectura orientada a componentes, manejar el estado, crear pruebas unitarias, crear flujos, entre otros.

Sin embargo, debido a que todo nuestro código existe en un solo archivo de JavaScript, este tipo de aplicaciones web son pésimas en redes lentas como 2G o 3G. Además, afecta a los dispositivos móviles de gama baja debido a que estos tienen bajo procesamiento. También, en términos de optimización de posicionamiento en los buscadores ([SEO](https://es.wikipedia.org/wiki/Posicionamiento_en_buscadores)), suele ser un problema, ya que, como el contenido no viene desde el servidor, suele tomar más tiempo su interpretación o, en el peor de los casos, ni siquiera el navegador sabe cómo interpretarlo. Si nuestra aplicación no es pública esto último no suele ser un problema real.

Es por eso que, si queremos mejorar nuestra carga inicial o velocidad de indexación en los buscadores, es importante implementar una serie de metodologías de optimización. Entre ellas, una de las más efectivas es lo que se conoce como **[server-side rendering](https://youtu.be/GQzn7XRdzxY)**. Esto es, la misma técnica de construir dinámicamente el contenido del lado del servidor. Así, esta primera carga se vuelve efectiva y a partir de allí las cargas posteriores se harán del lado del cliente.

Aunque pareciera que hay solución para las desventajas de las SPA, claramente lo que nos facilita nuestro flujo de desarrollo complica todo el flujo de despliegue y optimización en producción.
![Figura 3: flujo de una single page app](/images/posts/es/estatico-dinamico-spa-mpa-jamstack/diagrama-single-page-app.png)_Figura 3: flujo de una single page app_

El flujo de una SPA funciona de la siguiente manera (Figura 3):

1. Accedemos al sitio web desde nuestro navegador mediante su URL.
2. El servidor mediante un **servidor web** (Web Server) como Apache o NGINX dispone los archivos del sitio web mediante el puerto 80 para llamadas HTTP o el puerto 443 para llamadas HTTPS.
3. La navegación de las páginas sucederá en el lado del cliente, así que NGINX o Apache deben siempre devolver el mismo archivo HTML.
4. El cliente, en este caso nuestro navegador web, recibe estos archivos y los interpreta, es decir, los muestra en el navegador.
5. El archivo HTML que regresa no tendrá contenido. En cambio, el archivo JavaScript contendrá toda la información necesaria para mostrar la página o aplicación.

### Más información

- [https://en.wikipedia.org/wiki/Single-page_application](https://en.wikipedia.org/wiki/Single-page_application)

### JAMStack

El JAMStack es un concepto que se ha popularizado últimamente porque hace uso de lo mejor de ambos mundos: client-side y server-side. No es algo nuevo, pues si alguna vez habías oído hablar de un [generador de sitios estáticos](https://www.staticgen.com/), estos usan el mismo principio del JAMStack.

El JAM es nada más y nada menos que: **J**avaScript, **A**PIs y **M**arkup. Se hace uso de JavaScript para la creación de interfaz y contenido a partir del uso de plantillas e información mediante una APIs. Lo interesante es que en vez de hacer uso de un sitio dinámico del lado del servidor, la propuesta de JAMStack es que todo sea estático.
![Figura 4: flujo de un sitio web dinámico mediante JAM Stack](/images/posts/es/estatico-dinamico-spa-mpa-jamstack/diagrama-jam-stack.png)_Figura 4: flujo de un sitio web dinámico mediante JAM Stack_

El flujo de un sitio web dinámico mediante JAM Stack sería el siguiente (Figura 4):

1. Hacemos uso de alguna librería que nos permita usar JavaScript y un sistema de plantillas para construir nuestra interfaz.
2. Definimos mediante el uso de una API cuáles son nuestras fuentes de datos. Estas pueden ser una base de datos, archivos JSON, archivos de markdown o incluso otra API.
3. Antes de desplegar nuestro sitio creamos una versión estática del mismo, es decir, usamos nuestro cliente local para la generación de toda la información.
4. Esta versión que construimos se sube a nuestro servidor web y a partir de allí funciona igual que cualquier otro sitio estático.

La ventaja que tiene esta metodología es que podemos hacer uso de todo el poder de JavaScript sin tener que lidiar con los problemas de optimización posteriores. Sin embargo, una desventaja es que la generación de los archivos estáticos se vuelve poco a poco más pesada y lenta a medida que crece la cantidad de información. Hay soluciones para esto, pero depende mucho de la tecnología o framework que usemos.

### Más información

- [https://jamstack.org/](https://jamstack.org/)

## Conclusiones

Como les decía al principio, no hay una "navaja suiza" de la programación que lo solucione todo, pero podemos hacer uso de cada tecnología a nuestra conveniencia, en la medida que sepamos sus ventajas y desventajas. Es importante explorar cada una de estas opciones y analizar cómo puede afectar nuestro flujo de desarrollo, pruebas, despliegue, escalamiento y optimización para tomar la mejor decisión.

### Más información

- [https://developer.mozilla.org/es/docs/Learn/Server-side/Primeros_pasos/Introducción](https://developer.mozilla.org/es/docs/Learn/Server-side/Primeros_pasos/Introducci%C3%B3n)
