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

La empresa SoftOne4101 lo ha contratado para desarrollar una aplicación llamada “Recetario” que permitirá a un administrador de un restaurante gestionar todo lo relacionado con las recetas y platos que preparan en el restaurante. El administrador debe estar de las compras necesarias para la preparación de los platos que el chef decide ofrecer cada semana. Para iniciar el contrato, la empresa lo cita a una reunión para especificar sus necesidades, como se comenta a continuación.

Al iniciar la aplicación el administrador verá una pantalla principal, donde podrá ver el logo del restaurante, la descripción de la aplicación “Recetario”, una opción para agregar una receta, otra para ir al listado de ingredientes que se utilizan en el restaurante y el listado de recetas que se preparan.  En el listado de ingredientes se muestra el nombre del ingrediente, la unidad de medida, el valor por unidad, el nombre del sitio donde lo compran y botones para editar o borrar un ingrediente, siempre y cuando no se esté usando en alguna receta. En la pantalla de ingredientes, el administrador encuentra también una opción para agregar un ingrediente nuevo y otra para volver a la pantalla principal.

En la opción para agregar una nueva receta, el administrador podrá registrar el nombre de la receta, el tiempo de preparación, el número de personas para las que se prepara, las calorías por porción y la descripción de las instrucciones de preparación. Desde la pantalla para agregar la receta el administrador puede ingresar a una opción para registrar los ingredientes que se requieren para preparar la receta, por cada ingrediente detallan la cantidad que se requiere y la unidad de medida que se utiliza. A partir de esta lista podrá agregar un nuevo ingrediente si lo necesita, editar o borrar alguno, Los ingredientes que se pueden escoger para agregar a la receta son los del listado de ingredientes del restaurante. 

El listado de recetas de la página principal muestra para cada receta el nombre, una opción que permite editar toda la información de la receta, otra que permite eliminar la receta y una opción preparar. La opción de preparar permite planear una preparación para un número específico de personas. Al utilizar esta opción se solicita la cantidad de personas para las que se va a preparar la receta y luego calcula, a partir de la información que se tiene de la receta, el tiempo de preparación estimado, las calorías por porción, el costo de los ingredientes y para cada ingrediente la cantidad que se debe utilizar proporcional a la cantidad de personas. 

**Método para calcular el tiempo, la cantidad de ingredientes y el costo de una preparación**

- Para calcular el tiempo de preparación se hace un estimado basado en la cantidad de personas de la receta base (PB), la cantidad de personas para las que se va a realizar la preparación (PP) y el tiempo de la preparación de la receta(TR), de acuerdo con la siguiente tabla:

  ![image](https://github.com/TiCSw/mt1_practicas_guias_proyecto/assets/images/proyecto/recetario/tabla.png)
  
- Para calcular la cantidad y el costo de los ingredientes, para cada ingrediente se calcula proporcionalmente la cantidad de acuerdo a las cantidades de la receta base y se aproximan al entero mayor más cercano. El costo se calcula con este valor por el precio por unidad del ingrediente.
 

## Tecnologías para el desarrollo 

La aplicación que se va a desarrollar es una aplicación muy sencilla, mono usuario y con interfaz de escritorio. 

Las tecnologías que se utilizarán para desarrollar el proyecto son: Python como lenguaje de programación, GIT para el control de versiones, SQLite y SQLAlchemy para la base de datos. Para el desarrollo del proyecto se cuenta con la siguiente infraestructura:


| Elemento                  | Herramienta |
| ------------------------- | ----------- |
| Base de datos             | SQLite      |
| Framework ORM para Python | SQLAlchemy  |
| Lenguaje de programación  | Python      |
| Manejador de versiones    | Git         |
| Repositorio remoto        | Github      |
| Manejador de IC           | Github      |
| Kanban de planeación      | Github      |


