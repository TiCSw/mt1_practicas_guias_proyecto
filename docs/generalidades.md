## Generalidades del proyecto

El objetivo global del proyecto del curso es facilitar la aplicación de las 4 prácticas de ingeniería de software vistas a lo largo del curso: 
* Historias de usuario, 
* Manejo de control de versiones y flujos de trabajo, 
* Desarrollo basado en pruebas,
* Integración continua. 

El proyecto es pequeño, su alcance ya está ha definido y documentado a través de un enunciado. Para desarrollar el proyecto se conformarán equipos de dos estudiantes. El proceso de desarrollo es incremental, en cada semana se avanza en el desarrollo y se incorporarán las prácticas que se van estudiando en el curso.

Las semanas 2 y 3, se dedican al entendimiento del problema y al alistamiento del sitio para la documentación del proyecto y del repositorio para el código.

**Semana 2**

      - Se construye un modelo conceptual usando un diagrama de clases en UML para ayudar en el entendimiento del problema y se construye un glosario de términos.
      - Se identifican los requerimientos y se contruye un listado de historias de usuario.
  
**Semana 3**

      - Se configura el espacio de documentación del proyecto en GitHub, el tablero de actividades para el seguimiento del proyecto  y el repositorio en sistema de control de versiones GIT donde se gestionará el código del proyecto.
      - Se realiza el detalle de las historias de usuario.
  
En las semanas 4, 5, 6 y 7 se desarrollan las historias en dos iteraciones. En cada semana se van integrando nuevas prácticas.

**Iteración 1** 
  
    Semana 4
      - Se realiza el diseño detallado de la aplicación (lógica e interfaz), se definen las firmas de los métodos. 
      - Se define el flujo de trabajo inicial.
  
    Semana 5:
      - Desarrollo de historias de usuario utilizando desarrollo dirigido por pruebas (Test Driven Development).

**Iteración 2**

    Semana 6:
      - Desarrollo de historias de usuario utilizando TDD y pruebas unitarias.
      - Generación automática de datos prueba.
      - Definición de un flujo de trabajo GitFlow
  
    Semana 7:  
      - Desarrollo de historias de usuario utilizando TDD y pruebas unitarias.
      - Generación automática de datos prueba.
      - Se define un flujo de trabajo en una herramienta de integración contínua que permite integrar el proyecto de forma tal que funcione en todo momento. Esta verificación se hace de manera automatizada y ejecuta las pruebas definidas, reportando el resultado.


**Semana 8**
      - Se realiza el cierre del proyecto
      - Se realiza una demostración de la solución
      - Se hace una retrospectiva del trabajo realizado. 


El proyecto se comienza a desarrollar a partir de la **semana 2** del curso. Las parejas se conforman durante la semana 2 y el trabajo en grupo inicia en la semana 3.


## Enunciado

La empresa SoftOne lo ha contratado para desarrollar una aplicación para gestionar información confidencial de una persona. Las personas requieren manejar información de ingreso (login)  en sitios web o en aplicaciones, de sus tarjetas bancarias, de sus documentos de identificación e incluso de secretos personales.  Esta aplicación va a llevar el nombre de Caja de Seguridad. Para iniciar el contrato, la empresa lo cita a una reunión para especificar sus necesidades, como se comenta a continuación. 

Al iniciar la aplicación el usuario verá una pantalla en la que se le solicita una clave maestra para ingresar, si la clave maestra es correcta se le permite acceder a la pantalla principal. En la pantalla principal podrá ver el logo, la descripción de la aplicación Caja de Seguridad y el listado elementos que tienen guardados en la caja. El usuario verá, por cada elemento, el nombre del elemento, su tipo (login, tarjeta, identificación o secreto), las opciones de editar la información del elemento, borrar el elemento y ver clave asociada al elemento. En la pantalla principal, además del listado, el usuario podrá tener acceso a crear un elemento nuevo, a un listado de sus claves favoritas y a un reporte de seguridad del contenido de la caja. 

Para crear un elemento nuevo el usuario podrá escoger primero el tipo de elemento que quiere crear y, de acuerdo al que escoja, podrá registrar la información requerida para el elemento. La información que se quiere guardar por tipo de elemento es la siguiente:
* Login: nombre del elemento, email asociado, el usuario, el password o clave, la url y una nota de texto 
* Secreto: el nombre del elemento, el secreto, la clave y una nota de texto 
* Identificación: el nombre del elemento, el número, el nombre completo, la fecha de nacimiento, la fecha de expedición, la fecha de vencimiento y una nota de texto 
* Tarjeta: nombre del elemento, el número, el titular, la fecha de vencimiento, el código de seguridad (CVV), la clave, la dirección, el teléfono y una nota de texto.

Las claves que se usan en la aplicación se gestionan en la lista de claves favoritas. El usuario puede acceder a esta lista desde la pantalla principal. Para cada una de las claves, se muestra el nombre y se da la posibilidad de editar o de borrar la clave. Igualmente, el usuario puede crear una nueva clave desde esta pantalla y registrar el nombre de la clave, la clave y su confirmación y una pista. Si el usuario desea, puede solicitar que la aplicación genere automáticamente una clave segura.  

Una clave se considera segura cuando cumple las siguientes características: 
* Incluye números. 
* Utiliza combinación de letras mayúsculas y minúsculas. 
* Incluye uno de los siguientes caracteres especiales:  
   ? - * ! @ # $ / () {} = . , ; : 
* Tiene longitud mayor o igual a 8 caracteres. 
* No tiene espacios en blanco. 

El reporte de seguridad del contenido de la caja muestra para cada tipo de elemento cuántos elementos hay en la caja y los siguientes indicadores de seguridad
* La cantidad de claves inseguras: cantidad de claves de la lista de claves favoritas que NO cumplen las características de una clave segura. 
* La cantidad de elementos próximos a vencer: elementos que tienen fecha de vencimiento a menos de 3 meses. 
* La cantidad de claves usadas más de una vez. 
* Nivel de seguridad: se calcula a través de la siguiente fórmula: 

    Nivel de seguridad = SC * 0,5 + V * 0,2 + R * 0,3 <br/>
    donde <br/>
    SC: es el porcentaje de claves que son seguras en la lista de claves favoritas. <br/>
    V: porcentaje de elementos que NO están por vencer (con respecto al total de elementos que tienen fecha de vencimiento). <br/>
    R: 0% si alguna clave se usa más de 3 veces, 50% si alguna clave se usa más de una vez, 100% si no hay claves que se usen más de una vez. <br/>


## Tecnologías para el desarrollo 

La aplicación que se va a desarrollar es una aplicación muy sencilla, mono usuario y con interfaz de escritorio. 

Las tecnologías que se utilizarán para desarrollar el proyecto son: Python como lenguaje de programación, GIT para el control de versiones, SQLite y SQLAlchemy para la base de datos. Para el desarrollo del proyecto se cuenta con la siguiente infraestructura:


| Elemento                  | Herramienta |
| ------------------------- | ----------- |
| Base de datos             | SQLite     |
| Framework ORM para Python | SQLAlchemy  |
| Lenguaje de programación  | Python      |
| Manejador de versiones    | Git         |
| Repositorio remoto        | Github      |
| Manejador de IC           | Github      |
| Kanban de planeación      | Github      |


