## Semana 7 - Implementación historias usando GitFlow e IC

### Objetivos

*   Implementar el tercer grupo de funcionalidades del proyecto, utilizando TDD, generación de datos automática y el flujo de trabajo GitFlow definido en la semana 6.
*   Utilizar el pipeline en GitHub Actions para ejecutar la integración continua cada vez que se integra una historia a la rama develop.
*   Usar el pipeline en GitHub Actions para generar la rama release y mezclar con la rama master.

### Pasos previos
---

*   Haber definido el acuerdo del flujo de trabajo GitFlow
*   Implementar los scripts en yaml para la integración continua.
*   El código debe estar integrado, sin errores, en la rama master/main del repositorio del equipo en GitHub. 

### Descripción actividad
---

#### ![](./../../assets/images/grupo.png) Actividad de equipo


*   Revisar en la [distribución de funcionalidades por semana](./../semana5/MT1PEA-PlanDesarrolloHistorias202111.md) las historias a desarrollar en la semana.
*   Actualizar el diseño, en genmymodel, para que incluya el tercer grupo de funcionalidades. 
*   Definir en cuáles historias van a hacer pair programming. Distribuir las demás historias entre los dos miembros del equipo.
*   Planear los tiempos para desarrollar cada una de las historias: el equipo debe acordar los espacios en la semana para hacer el desarrollo de las historias con pair programming y el tiempo individual para las otras historias.
*   Actualizar el tablero de actividades del proyecto con las tareas planeadas.
*   Desarrollar las historias que escogieron realizar en pair programming usando TDD.


#### ![](./../../assets/images/individuo.png) Actividad individual

Desarrollar las historias asignadas usando TDD:

*    Para dejar evidencia del uso de TDD, se debe realizar commit al repositorio al definir las pruebas, al implementar el código y al realizar recfactoring del código.
*    Seguir el flujo de trabajo acordado.
*    Integrar el código que pasa exitosamente las pruebas unitarias en el repositorio GitHub del grupo.


### Entregables
---

*    Las fuentes del código deben estar en la rama principal del GitHub del equipo.


### Criterios de evaluación
---
* Se han desarrollado las historias del tercer grupo de funcionalidades.
* El resultado de la integración continua es exitoso.
* Todas las pruebas unitarias funcionan correctamente. 
* El porcentaje de cubrimiento de las pruebas unitarias es mejor que la semana anterior.
* En el historial del código en el respositorio se evidencia el desarrollo usando TDD.
* En el repositorio de código se evidencia el uso del flujo de trabajo GitFlow acordado.
