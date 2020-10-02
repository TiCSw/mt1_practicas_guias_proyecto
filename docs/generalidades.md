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

La empresa SoftOne lo ha contratado para desarrollar un software llamado “Cuentas Claras”, que le permitirá a un usuario llevar la cuenta de los gastos compartidos que realizan grupos de viajeros en actividades como eventos, paseos, paquetes turísticos, alimentación, y otros en general, con el propósito de distribuir los gastos de manera equitativa entre todos los que participaron en la actividad. Para iniciar el contrato, la empresa lo cita a una reunión para especificar sus necesidades, como se comenta a continuación. 

Para utilizar este software, el usuario debe abrir una pantalla principal, donde encontrará una descripción de “Cuentas Claras”, acompañada de un listado de actividades que tiene registradas. Para cada actividad tiene las opciones de abrirla, darla como terminada, editarla, o incluso, borrarla si no tiene gastos asociados. Adicionalmente debe ver una opción para crear una nueva actividad, la cual permite adicionar una actividad con un nombre asignado. 

También en la pantalla principal, el usuario podrá acceder a una lista de viajeros existentes en el sistema, y desde esta lista, podrá adicionar nuevo viajero, editar su información o borrarlo si no tiene relación con algún gasto o actividad. Desde la lista de actividades, el usuario podrá incluir a otros viajeros en las actividades para registrar y compartir gastos.  

Cuando el usuario abre una actividad verá una pantalla de información de gastos asociados a esta, mostrando por cada gasto el concepto, su valor, el viajero que lo realizó y la fecha del gasto. La pantalla debe ofrecer opciones para para adicionar, editar o eliminar un gasto y para regresar a la pantalla principal. Igualmente, se ofrecen dos opciones de reportes. El primero es reporte de cuánto ha gastado cada viajero en la actividad. El segundo divide equitativamente los gastos entre los viajeros y genera un reporte de compensaciones entre los viajeros. El proceso de compensación consiste en que todos los viajeros deben aportar la misma cantidad de dinero en la actividad, y que aquellos que aportaron menos deben compensar a quienes aportaron más para distribuir los gastos por partes iguales. 

Cuando el usuario ya no quiera seguir utilizando Cuentas Claras, podrá utilizar en cualquier momento una opción para salir de la aplicación.


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


