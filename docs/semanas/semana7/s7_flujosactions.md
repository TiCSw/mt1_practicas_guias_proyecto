## Semana 7 - Flujo de trabajo e integración continua

### Objetivos
---
Los objetivos de esta actividad son:

*   Definir un flujo de trabajo usando GitHub Flow.
*   Utilizar GitHub Actions para definir un pipeline con el fin de realizar integración continua de la aplicación. Este pipeline automatiza la verificación de las pruebas cuando se solicite un pull-request a la rama master y además exige la revisión del código por parte del otro miembro de equipo antes de integrar el pull-request a la rama master. 

### Pasos previos

---
*   Haber implementado los dos primeros grupos de funcionalidades.
*   El código debe estar integrado, sin errores, en la rama master del repositorio del equipo en GitHub. 
*   Tener un buen cubrimiento de pruebas unitarias para las funcionalidades ya implementadas. 
  

### Descripción actividad
---
#### ![](./../../assets/images/grupo.png) Actividad de equipo

*  Crear una nueva versión del acuerdo de flujo de trabajo para definir un flujo GitHub Flow para la implementación de las historias de usuario. Consignar el nuevo acuerdo en el formato [Flujo de trabajo](./../semana4/MT1PEA-FM-FlujoDeTrabajo.md) 
*  Definir un pipeline usando GitHub actions que cuando se solicite un pull-request a la rama master:
   - Verifique de forma automática que las pruebas unitarias se ejecutan correctamente, en el caso que fallen se debe rechazar el pull-request
   - Asigne la revisión del pull-request al otro miembro del equipo 


### Recursos

---
* [Formato Flujo de trabajo](./../semana4/MT1PEA-FM-FlujoDeTrabajo.md) 

### Entregables
---
En la wiki del proyecto debe quedar:

* El nuevo acuerdo sobre el flujo de trabajo.

En el repositorio de código debe quedar el archivos yaml que define el pipeline para la integración continua.


### Criterios de evaluación

---

* El acuerdo de flujo de trabajo define los repositorios, ramas y procesos para realizar un flujo GitHub Flow.
* El pipeline definido en actions funciona de acuerdo a las condiciones solicitadas. 
  
