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

* Ejecutar el validador:
  * Acceder a la pestaña **Actions** del repositorio en GitHub.
  * Ejecutar el flujo de trabajo llamado **Validación automática de historias en la Wiki**. El validador revisará las historias detalladas y dejará un registro con observaciones en cada archivo `.md` correspondiente.

* Revisar los resultados de la IA:
  * Abrir cada historia y leer con atención las sugerencias generadas por la IA.
  * Analizar los comentarios para comprender por qué se hacen las observaciones y cómo mejorar la historia.

* Ajustar las historias de usuario:
  * Realizar las correcciones necesarias en las historias de usuario, basándose en las sugerencias recibidas.
  * Volver a ejecutar el validador hasta que la revisión evidencie que la historia está correctamente detallada.

### Recursos

---
* Instrucciones para obtener y configurar la API Key necesaria en el archivo `README.md` del repositorio.
* Flujo de trabajo ya configurado en GitHub Actions para realizar la validación.

### Entregables

---

En la wiki del proyecto:
* Las historias de usuario corregidas, con la evidencia de revisión generada por la IA.

### Criterios de evaluación

---

* Todas las historias de usuario fueron revisadas mediante el validador y dicha revisión está evidenciada en los archivos.
* Las observaciones emitidas por la IA fueron comprendidas y corregidas.
* Las historias cumplen con los lineamientos del curso y están completas, claras y correctamente detalladas.
