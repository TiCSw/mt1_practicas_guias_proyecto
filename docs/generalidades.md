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

La empresa SoftOne lo ha contratado para desarrollar una aplicación llamada “E-porra” que permita a un usuario  administrar apuestas alrededor de carreras de cualquier tipo (caballos, fórmula 1, atletismo, etc). En muchos bares y tiendas locales, las personas se reúnen a ver estas competencias  y en algunos casos apuestan sumas de dinero al ganador de una carrera. Estas apuestas son también llamadas pollas, porras o quinielas en diversos países hispanoparlantes.

A través de esta aplicación, el usuario podrá llevar el registro de las apuestas que hacen los apostadores en una carrera, con el propósito de poder pagar correctamente a quienes hayan acertado con el resultado de dicho evento. Para iniciar el contrato, la empresa lo cita a una reunión para especificar sus necesidades, como se comenta a continuación.

Para utilizar este software, el usuario  administrador debe abrir una pantalla principal, donde encontrará una descripción de “E-porra”, acompañada de un listado de las carreras que tiene registradas. El usuario tiene la opción de abrir, editar, terminar o borrar una carrera, esto último siempre que no tenga apuestas asociadas. Adicionalmente debe tener la opción de crear una nueva carrera con un nombre determinado. Crear una nueva carrera requiere indicar para cada competidor su nombre y la probabilidad que tiene de ganar la carrera (un valor entre 0 y 1) . La suma de las probabilidades de todos los competidores debe ser igual a 1 (esto es, el 100%). Cuando  se termina una carrera se registra el ganador y se debe poder generar un reporte que indique cuánto se debe pagar a cada usuario que apostó al competidor ganador y qué ganancias o pérdidas tuvo el usuario administrador , también denominado “la casa” . Para calcular las ganancias de los apostadores y de la casa se utiliza el método que se describe más adelante.

También en la pantalla principal, el usuario podrá acceder a una lista de apostadores existentes en el sistema, y desde esta lista, podrá adicionar un nuevo apostador, editar su información o borrarlo si no tiene relación con alguna apuesta o carrera.

Cuando el usuario abre una carrera verá una pantalla de información de las apuestas asociadas a esta, mostrando por cada apuesta el valor, el nombre del apostador que la realizó y el competidor al que le apostó.   Para una carrera, el usuario podrá incluir una o varias apuestas asociadas a un apostador de los existentes en el sistema. También debe tener opciones para editar o eliminar apuestas.

**Método para calcular las ganancias**

Los apostadores que no acertaron al ganador no obtienen ganancias alguna de su apuesta. Las ganancias de los apostadores que adivinaron el ganador se determinan a partir de la cuota. La cuota se calcula usando la siguiente fórmula:

![](assets/images/formula_cuota.PNG)

Donde la probabilidad es un valor entre 0 y 1 que representa la probabilidad de ganar del competidor. 
Para calcular la ganancia de un apostador se aplica la siguiente fórmula:

![](assets/images/formula_ganancia.PNG)

La ganancia de la casa corresponde a la suma de todas las apuestas menos el total pagado a los apostadores que acertaron el ganador por concepto de sus ganancias. Un valor negativo de ganancia de la casa indica que la casa debe colocar dinero adicional para cubrir el total a pagar en las apuestas ganadoras, es decir la casa pierde dinero. 

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


