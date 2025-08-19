## Semana 3 - Revisar las Historias de Usuario con apoyo de inteligencia artificial (IA)

### Objetivo

Asegurar la calidad de las historias de usuario con el apoyo de un script de validación basado en inteligencia artificial (IA) que garantice claridad, completitud y coherencia.

### Pasos previos

---
* Detallar las historias de usuario en la wiki del proyecto.
* Crear la página de **Enunciado** del proyecto:
  * Crear una página llamada **Enunciado** en la raíz de la wiki.
  * Copiar el enunciado completo del proyecto en esta página, ya que será tenida en cuenta por el validador para evaluar las historias de usuario.
* Configurar la API Key de OpenAI en la configuración del repositorio en GitHub. Las instrucciones detalladas para obtener y configurar esta clave se encuentran en el archivo `README.md` del repositorio.


### Descripción actividad

---

#### ![](./../../assets/images/individuo.png) Actividad individual

* Marcar historias listas para revisión:
  Antes de ejecutar el validador, cada historia de usuario que deba revisarse debe contener el siguiente marcador en cualquier parte del archivo `.md`:
  
  `HU lista para revisión`
  
  **Condiciones importantes**  
  * Solo las historias que incluyan este marcador serán procesadas por la IA.  
  * El validador eliminará automáticamente el marcador después de realizar la revisión.  
  * Si se requiere una nueva revisión tras hacer correcciones, será necesario volver a agregar manualmente el marcador.  

  <br>
* Ejecutar el validador ([ver instructivo](./MT1PEA-GuiaInspeccionHU.pdf))
  * Acceder a la pestaña **Actions** del repositorio en GitHub.
  * Actualizar la URL del repositorio en el flujo de trabajo llamado **Validación automática de historias en la Wiki**.
  * Ejecutar el flujo de trabajo. El validador revisará las historias detalladas y dejará un registro con observaciones en cada archivo `.md` correspondiente.  

  <br>
* Revisar los resultados de la IA:
  * Abrir cada historia y leer con atención las sugerencias generadas por la IA.
  * Analizar los comentarios para comprender por qué se hacen las observaciones y cómo mejorar la historia.  

  <br>
* Ajustar las historias de usuario:
  * Realizar las correcciones necesarias en las historias de usuario, basándose en las sugerencias recibidas.
  * Volver a ejecutar el validador hasta que la revisión evidencie que la historia está correctamente detallada.  

  <br>
* Solicitar la revisión par del compañero:
  * Coordinar con el compañero de equipo la revisión par de las HU detalladas.
  * El revisor debe confirmar que las observaciones del validador fueron atendidas y que no existen inconsistencias o errores no detectados por la IA.
  * Documentar al final de cada archivo los resultados de la revisión:  

  <br>  
  
   ````
   ## Revisión par
   Revisor: [Nombre completo]
   Fecha: [DD/MM/AAAA]
        
   Observaciones:
    - [Comentario 1]
    - [Comentario 2]
   ````

### Recursos

---
* Instrucciones para obtener y configurar la API Key necesaria en el archivo `README.md` del repositorio.
* Flujo de trabajo ya configurado en GitHub Actions para realizar la validación.

### Entregables

---

En la wiki del proyecto:
* Las historias de usuario corregidas, con la evidencia de revisión generada por la IA y por el compañero.

### Criterios de evaluación

---

* Todas las historias de usuario fueron revisadas mediante el validador y dicha revisión está evidenciada en los archivos.
* Todas las historias incluyen la sección revisión par con observaciones o indicación de que no hubo comentarios adicionales.
* Las observaciones emitidas por la IA fueron comprendidas y corregidas.
* Las historias cumplen con los lineamientos del curso y están completas, claras y correctamente detalladas.
