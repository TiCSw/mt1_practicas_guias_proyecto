
## Generalidades del proyecto

El objetivo global del proyecto del curso es facilitar la aplicación integrada de las 4 prácticas de ingeniería de software vistas a lo largo del curso: 
* Historias de usuario, 
* Manejo de control de versiones y flujos de trabajo, 
* Desarrollo basado en pruebas,
* Integración continua. 

Es un proyecto pequeño, que será desarrollado en equipos de dos estudiantes, donde su alcance está definido y para el cual, los estudiantes analizarán el enunciado 
construyen un modelo conceptual en UML y definen unas historias de usuario.

Cada estudiante debe desarrollar un conjunto de HU cuya implementación se hará utilizando la 
práctica de desarrollo basado en pruebas.  
El proceso de desarrollo es incremental. Para coordinar el trabajo, deben usar un sistema de control de versiones, 
un sitio para documentación del proyecto y definir un flujo de trabajo que les permita ir integrando de forma 
tal que el proyecto funcione en todo momento.
Esta verificación se hace de manera automatizada utilizando una herramienta de integración continua que construye 
el proyecto y ejecuta las pruebas definidas, reportando el resultado.

El proyecto se comienza a desarrollar a partir de la **semana 2** del curso. 

## Enunciado

La empresa SoftOne lo ha contratado para desarrollar un software llamado “Ordéname”, que le permitirá a un viajero llevar la cuenta de los gastos que realiza con sus acompañantes en actividades como eventos, paseos, viajes, alimentación, y otros en general, con el propósito de distribuir los gastos de manera equitativa entre todos los que participaron en la actividad. Para iniciar el contrato, la empresa lo cita a una reunión para especificar sus necesidades, como se comenta a continuación.

Para utilizar este software, el viajero debe abrir una pantalla principal, donde encontrarán una descripción de “Ordéname”, acompañado de un listado de actividades que tiene registradas, con las opciones por cada actividad para verla, darla como terminada, borrarla, o incluso, borrar a un viajero de la actividad si no tiene ningún gasto asociado. Adicionalmente debe ver una opción para crear una nueva actividad, la cual permite adicionar una actividad nueva con un nombre asignado.

Cuando el viajero abre una actividad verá la lista de gastos asociados a esta, mostrando por cada gasto el concepto, su el valor, la persona que lo realizó y la fecha del gasto. La lista debe ofrecer opciones para para adicionar, editar o eliminar un gasto, agregar a una persona registrada en Ordéname para compartir los gastos de la actividad, una opción para regresar a la lista de actividades, y una opción para generar un reporte con la distribución de gastos por persona y cuánto se deben entre los participantes para hacer una repartición equitativa de los gastos.

Cuando el usuario ya no quiera seguir utilizando Ordéname, podrá utilizar en cualquier momento una opción para salirse del sistema.


## Tecnologías para el desarrollo 

La aplicación que se va a desarrollar es una aplicaicón muy sencilla, mono usuario y con interface de escritorio. 

Lass tecnologías que se utilizarán para desarrollar el proyecto son:

Python como lenguaje de programación, git como hera el desarrollo del proyecto se cuenta con la siguiente infraestructura:


| Elemento                  | Herramienta |
| ------------------------- | ----------- |
| Base de datos             | Postgres    |
| Framework ORM para Python | SQLAlchemy  |
| Lenguaje de programación  | Python      |
| Manejador de versiones    | Git         |
| Repositorio remoto        | Github      |
| Manejador de IC           | Github      |
| Kanban de planeación      | Github      |

## Semana 2 - Construcción del modelo conceptual

### Objetivos
A partir del enunciado del proyecto deben construir un modelo conceptual que les permitirá:

* Entender el contexto del proyecto. 

* Identificar dudas respecto a las funcionalidades que se deben desarrollar. 

* Plantear preguntas al cliente que permitan clarificar las dudas y supuestos identificados, a través de un foro de preguntas del enunciado del proyecto. 

### Tareas

Cada uno de los integrantes del grupo: 

* Lee el enunciado con atención. 

* Hace un modelo conceptual en la herramienta de modelado que incluya: . El modelo debe incluir las clases, atributos y relaciones. Por ahora no se incluyen los métodos. En caso de tener dudas plantee sus preguntas en el foro de Preguntas del enunciado. 

* Una vez finalizado el modelo lo sube a la wiki del proyecto. 

* El grupo se reúne para consolidar, en un solo modelo conceptual, los dos modelos propuestos.  

* El modelo conceptual consolidado se sube a la wiki del proyecto. 

* Elaborar el glosario de términos del modelo consolidado. 

### Tiempo estimado 

* 30 minutos lectura y elaboración del modelo individual 

* 30 minutos en consolidación 

### Recursos 

* Herramienta de modelado: Genmymodel 
* (Link al Mooc uml del caso de estudio con el cliente) 
* Plantilla glosario de términos 

 

### Entregables

* DigramaDiagrama conceptual en UML 

* Glosario de términos del modelo  

* Subir ambos entregables a la Wiki del proyecto de acuerdo con la estructura propuesta para la wiki.  