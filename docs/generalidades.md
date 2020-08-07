## Generalidades del proyecto

El objetivo global del proyecto del curso es facilitar la aplicación de las 4 prácticas de ingeniería de software vistas a lo largo del curso: 
* Historias de usuario, 
* Manejo de control de versiones y flujos de trabajo, 
* Desarrollo basado en pruebas,
* Integración continua. 

El proyecto es pequeño, su alcance ya está ha definido y documentado a través de un enunciado. Para desarrollar el proyecto se conformarán equipos de dos estudiantes. El proceso de desarrollo es incremental, en cada semana se avanza en el desarrollo y se incorporarán las prácticas que se van estudiando en el curso.

Las semanas 2 y 3, se dedican al entendimiento del problema y al alistamiento del sitio para la documentación del proyecto y del repositorio para el código.

  - Se construye un modelo conceptual en UML para ayudar en el entendimiento del problema y se construye un glosario de términos.
  - Se identifican los requerimientos y se contruye un listado de historias de usuario.
  - Se selecciona un conjunto de las historias para detallar y desarrollar.
  - Se configura el espacio de documentación del proyecto en GitHub y el repositorio en sistema de control de versiones GIT donde se gestionará el código del proyecto.
  
En la semana 4 se realiza el diseño detallado, se definen las firmas de los métodos. Se utiliza un flujo de trabajo GITFlow para realizar los cambios en el repositorio.

En las semanas 5, 6 y 7 se desarrollan las historias. En cada semana se van integrando nuevas prácticas:
  - Desarrollo dirigido por pruebas (Test Driven Development): se introduce en en la semana 5 y se usa en las semanas 6 y 7.
  - Generación automática de datos prueba en la semana 6.
  - Integración contínua: en la semanas 5, 6 y 7, se usa flujo de trabajo en una herramienta de integración contínua que permite integrar el proyecto de forma tal que funcione en todo momento. Esta verificación se hace de manera automatizada y ejecuta las pruebas definidas, reportando el resultado.
  
  Cada semana se hace una entrega del avance del proyecto.

En las semana 8, se realiza el cierre del proyecto y se hace una retrospectiva del trabajo realizado. 


El proyecto se comienza a desarrollar a partir de la **semana 2** del curso. 

## Enunciado

La empresa SoftOne lo ha contratado para desarrollar un software llamado “Ordéname”, que le permitirá a un viajero llevar la cuenta de los gastos que realiza con sus acompañantes en actividades como eventos, paseos, viajes, alimentación, y otros en general, con el propósito de distribuir los gastos de manera equitativa entre todos los que participaron en la actividad. Para iniciar el contrato, la empresa lo cita a una reunión para especificar sus necesidades, como se comenta a continuación.

Para utilizar este software, el viajero debe abrir una pantalla principal, donde encontrarán una descripción de “Ordéname”, acompañado de un listado de actividades que tiene registradas, con las opciones por cada actividad para verla, darla como terminada, borrarla, o incluso, borrar a un viajero de la actividad si no tiene ningún gasto asociado. Adicionalmente debe ver una opción para crear una nueva actividad, la cual permite adicionar una actividad nueva con un nombre asignado.

Cuando el viajero abre una actividad verá la lista de gastos asociados a esta, mostrando por cada gasto el concepto, su el valor, la persona que lo realizó y la fecha del gasto. La lista debe ofrecer opciones para para adicionar, editar o eliminar un gasto, agregar a una persona registrada en Ordéname para compartir los gastos de la actividad, una opción para regresar a la lista de actividades, y una opción para generar un reporte con la distribución de gastos por persona y cuánto se deben entre los participantes para hacer una repartición equitativa de los gastos.

Cuando el usuario ya no quiera seguir utilizando Ordéname, podrá utilizar en cualquier momento una opción para salir de la aplicación.


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


