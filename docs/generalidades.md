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
La empresa SoftOne lo ha contratado para desarrollar una aplicación llamada “En Forma” que permitirá a un entrenador gestionar todo lo relacionado con los ejercicios que realizan las personas que entrena. Los entrenadores tienen que estar pendientes de muchas personas en su trabajo, y les es difícil recordar qué ejercicios y el progreso de sus clientes. Para iniciar el contrato, la empresa lo cita a una reunión para especificar sus necesidades, como se comenta a continuación. 

Al iniciar la aplicación el entrenador verá una pantalla principal, donde podrá ver el logo, la descripción de “En Forma” y el listado de personas que está entrenando. El entrenador verá, por cada persona, la opción de editar su información, ver los entrenamientos que ha realizado, dejar de entrenar a la persona, o de borrar la información de la persona, siempre que no tenga entrenamientos registrados. En esta pantalla también verá una opción para agregar una nueva persona, donde podrá registrar el nombre y apellidos, fecha de inicio del entrenamiento, talla, peso, edad, y medidas en centímetros de brazos, pecho, abdomen, cintura y piernas. Cuando se deja de entrenar a la persona, se debe registrar la fecha y la razón por la cual no continuará con dicho entrenamiento. 

El usuario también tendrá en la pantalla principal un acceso a una lista de ejercicios disponibles en “En Forma”, los que utilizará para entrenar a cada persona, y desde esta lista podrá crear un ejercicio con su nombre, descripción, aproximado de calorías quemadas por repetición y enlace a un video en YouTube, editar los ejercicios existentes, o borrarlos si el ejercicio nunca se usado en el entrenamiento de alguna persona. 

Cuando el usuario abre la información de una persona, verá una pantalla con el entrenamiento que una persona ha realizado, mostrando una lista con nombre correspondiente de cada ejercicio, la fecha, la cantidad de repeticiones que realizó y el tiempo que le tardó en hacerlo definido en horas, minutos y segundos. Adicionalmente, en esta pantalla tendrá las opciones para crear, editar y borrar los ejercicios entrenados, así como un botón que le mostrará un reporte con su talla, peso, el cálculo de su IMC (Índice de masa corporal) y en cuál categoría del IMC se encuentra, y un aproximado del consumo calórico por cada fecha en la que se ha entrenado. 

**Tabla de categorías del IMC**

IMC = Peso en KG / (Talla en m)2 

|IMC               | Nivel de peso |
| ---------------- | ------------- |
|Por debajo de 18. |Bajo peso      |
|18.5 - 24.9       |Peso saludable |
|25.0 - 29.9       |Sobrepeso      |
|30.0 o m´s        |Obesidad       |

**Método para calcular el consumo calórico de una fecha**

Para calcular el consumo calórico de un día se suman los consumos calóricos por cada ejercicio realizado en el día. El cálculo de consumo de un ejercicio corresponde al número de calorías por repetición, multiplicado por el número de repeticiones realizadas.


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


