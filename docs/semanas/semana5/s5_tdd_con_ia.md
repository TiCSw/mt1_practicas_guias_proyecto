# Semana 5 – Implementación usando TDD con Pair Programming y GitHub Copilot

## Objetivos
Implementar el primer grupo de historias de usuario aplicando **Desarrollo Dirigido por Pruebas (TDD)** y **pair programming** con el apoyo de **GitHub Copilot** como asistente.

---

## Pasos previos
* Haber realizado el [tutorial de pruebas unitarias en Python](https://misovirtual.virtual.uniandes.edu.co/codelabs/tutorial-unit-test/index.html?index=..%2F..index#0).  
* Haber configurado el repositorio y el entorno de desarrollo.  
* Haber instalado y configurado **GitHub Copilot** en el IDE:  
  * [Instructivo PyCharm](MT1PEA-GitHubCopilotPyCharm.pdf)  
  * [Instructivo VS Code](MT1PEA-ConfiguracionGitHubCopilotVSCode.pdf)  
* Haber visto el [video de la Kata TDD con Copilot](https://uniandes-my.sharepoint.com/:v:/g/personal/misovirtual-pea_uniandes_edu_co/EVz1QuBnFCVBv594y2wECkQB0uRF148asQRAX90vHtgZhg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=72q0SA)

---

### ![](./../../assets/images/grupo.png) Actividad de equipo
1. Revisar en la [distribución de funcionalidades por semana](MT1PEA-PlanDesarrolloHistorias202514.md) las historias a implementar.  
2. Ajustar las historias de usuario con base en las observaciones del tutor.  
3. Planear sesiones de trabajo en pareja y organizar las tareas en el tablero del proyecto.  
4. Desarrollar cada historia siguiendo el ciclo TDD con alternancia de roles:  

   - **Alternar roles con Copilot en cada ciclo:**  
     * En un ciclo, **Copilot propone la prueba**.  
       - Ejecutar la prueba y confirmar que falle (**Rojo**).  
       - Hacer commit con mensaje: *Caso X: descripción (Rojo)*.  
       - El equipo implementa la lógica mínima.  
       - Ejecutar de nuevo las pruebas y confirmar que pasen (**Verde**).  
       - Hacer commit con mensaje: *Caso X: descripción (Verde)*.  
       - Refactorizar si es necesario (**Azul**) y hacer commit con mensaje: *Caso X: descripción (Azul)*.  

     * En el siguiente ciclo, **cambiar de roles**: el equipo escribe la prueba y **Copilot propone la implementación mínima**.  
       - Repetir la misma secuencia Rojo → Verde → Azul con sus commits correspondientes.  

5. Repetir el ciclo hasta completar la funcionalidad.  
6. Integrar en el repositorio los cambios que pasen todas las pruebas unitarias.  

---

### Uso de IA para mensajes de commit (opcional)

Los estudiantes **pueden apoyarse en GitHub Copilot para la generación de mensajes de commit**, siempre que se cumplan las siguientes condiciones:

* La IA **solo puede usarse como apoyo para redactar el mensaje del commit**, no para decidir:
  * Qué se versiona,
  * Cuándo se hace commit,
  * Ni cómo se divide el trabajo.
* Cada commit debe corresponder a un paso lógico del ciclo de TDD (por ejemplo: prueba que falla, implementación mínima, refactorización).
* El mensaje de commit debe:
  * Reflejar claramente el cambio realizado,
  * Estar alineado con el código versionado,
  * Evidenciar el avance incremental del desarrollo.
* El equipo es responsable de **revisar y ajustar** cualquier mensaje sugerido por la IA antes de confirmar el commit.

> El uso de IA **no reemplaza el criterio del equipo** ni exime la responsabilidad sobre la claridad y coherencia del historial de versiones. Ver guía de uso en sección de recursos.


## Recursos
* [Guía para usar sugerencia de mensajes de commit con GitHub Copilot](MT1PEA-MensajesCommitConGitHubCopilot.md).

---

## Entregables
En el repositorio de GitHub:  
* Código en la rama principal.  
* Evidencia en el historial de commits de cada ciclo TDD (Rojo, Verde, Azul).  

En el tablero del proyecto:  
* Historias de usuario de la semana con sus tareas actualizadas.  

---

## Criterios de evaluación
* Todas las historias de usuario de la semana fueron implementadas.  
* Todas las pruebas unitarias pasan correctamente.  
* El historial de commits refleja con claridad la disciplina TDD (Rojo, Verde, Azul).  
* Se evidencia alternancia de roles con Copilot.  
* Copilot fue usado como asistente y no como sustituto del trabajo en equipo.  
* La integración continua es exitosa.  
